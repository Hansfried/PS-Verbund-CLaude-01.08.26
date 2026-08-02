import { createClient } from "@supabase/supabase-js"
import { NextResponse } from "next/server"

const VALID_COMPANIES = ["kieswerke", "bauschutt", "infrabau", "strassen-und-tiefbau", "allgemein"]
const ATTACHMENTS_BUCKET = "kontakt-anhaenge"

export async function POST(request: Request) {
  const formData = await request.formData()
  const company = formData.get("company")
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")
  const files = formData.getAll("files").filter((f): f is File => f instanceof File && f.size > 0)

  if (
    typeof company !== "string" ||
    !VALID_COMPANIES.includes(company) ||
    typeof name !== "string" ||
    !name ||
    typeof email !== "string" ||
    !email ||
    typeof message !== "string" ||
    !message
  ) {
    return NextResponse.json({ error: "Ungültige Eingabe" }, { status: 400 })
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !serviceRoleKey) {
    return NextResponse.json({ error: "Supabase ist noch nicht konfiguriert" }, { status: 500 })
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey)

  const attachments: string[] = []
  for (const file of files) {
    const path = `${company}/${crypto.randomUUID()}-${file.name}`
    const { error: uploadError } = await supabase.storage
      .from(ATTACHMENTS_BUCKET)
      .upload(path, file, { contentType: file.type })
    if (uploadError) {
      return NextResponse.json({ error: uploadError.message }, { status: 500 })
    }
    attachments.push(path)
  }

  const { error } = await supabase.from("contact_submissions").insert({ company, name, email, message, attachments })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
