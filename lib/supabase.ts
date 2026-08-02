export type ContactCompany = "kieswerke" | "bauschutt" | "infrabau" | "strassen-und-tiefbau" | "allgemein"

export async function submitContactForm(
  company: ContactCompany,
  name: string,
  email: string,
  message: string,
  files: File[] = []
) {
  const formData = new FormData()
  formData.set("company", company)
  formData.set("name", name)
  formData.set("email", email)
  formData.set("message", message)
  files.forEach((file) => formData.append("files", file))

  const res = await fetch("/api/contact", { method: "POST", body: formData })
  if (!res.ok) {
    const { error } = await res.json().catch(() => ({ error: "Unbekannter Fehler" }))
    throw new Error(error)
  }
}
