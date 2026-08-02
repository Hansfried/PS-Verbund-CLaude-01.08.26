"use client"

import { useState } from "react"
import { Upload } from "lucide-react"
import { submitContactForm } from "@/lib/supabase"

export default function KontaktFormular() {
  const [form, setForm] = useState({ name: "", email: "", nachricht: "" })
  const [files, setFiles] = useState<File[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.nachricht) return
    setSending(true)
    setError(false)
    try {
      await submitContactForm("allgemein", form.name, form.email, form.nachricht, files)
      setSubmitted(true)
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-[#1a1a1a] border border-[#a8c200] p-10">
        <p className="text-[#a8c200] text-xs font-bold uppercase tracking-[0.2em] mb-4">
          ▲&nbsp;&nbsp;Nachricht erhalten
        </p>
        <p className="text-white text-lg font-black uppercase leading-snug mb-3">
          Vielen Dank,<br />{form.name}.
        </p>
        <p className="text-gray-400 text-sm leading-relaxed">
          Wir melden uns in Kürze unter <span className="text-white">{form.email}</span> bei Ihnen.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#1a1a1a] p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500 block mb-2">Name</label>
          <input
            type="text"
            required
            placeholder="Ihr Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-[#111] border border-[#333] text-white placeholder:text-gray-600 focus:border-[#a8c200] outline-none px-4 py-3 text-sm transition-colors duration-200"
          />
        </div>
        <div>
          <label className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500 block mb-2">E-Mail</label>
          <input
            type="email"
            required
            placeholder="ihre@email.de"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-[#111] border border-[#333] text-white placeholder:text-gray-600 focus:border-[#a8c200] outline-none px-4 py-3 text-sm transition-colors duration-200"
          />
        </div>

        <div className="md:col-span-2">
          <label className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500 block mb-2">Nachricht</label>
          <textarea
            required
            rows={6}
            placeholder="Ihre Anfrage…"
            value={form.nachricht}
            onChange={(e) => setForm({ ...form, nachricht: e.target.value })}
            className="w-full bg-[#111] border border-[#333] text-white placeholder:text-gray-600 focus:border-[#a8c200] outline-none px-4 py-3 text-sm transition-colors duration-200 resize-none"
          />
        </div>

        <div className="md:col-span-2">
          <label className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500 block mb-2">
            Bilder & Dokumente
          </label>
          <label
            htmlFor="kontakt-dateien"
            className="flex flex-col items-center justify-center gap-2 border border-dashed border-[#333] bg-[#111] px-4 py-10 text-center cursor-pointer hover:border-[#a8c200] transition-colors duration-200"
          >
            <Upload size={20} className="text-gray-500" />
            <span className="text-sm text-gray-400">
              {files.length > 0
                ? `${files.length} Datei${files.length > 1 ? "en" : ""} ausgewählt`
                : "Dateien auswählen oder hierher ziehen"}
            </span>
            <span className="text-xs text-gray-600">Bilder, PDF, Word, Excel</span>
            <input
              id="kontakt-dateien"
              type="file"
              multiple
              accept="image/*,.pdf,.doc,.docx,.xls,.xlsx"
              onChange={(e) => setFiles(Array.from(e.target.files ?? []))}
              className="hidden"
            />
          </label>
          {files.length > 0 && (
            <ul className="mt-3 space-y-1">
              {files.map((file) => (
                <li key={file.name} className="text-xs text-gray-500">
                  {file.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="md:col-span-2 space-y-3">
          {error && (
            <p className="text-red-400 text-xs">
              Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.
            </p>
          )}
          <button
            type="submit"
            disabled={sending}
            className="w-full bg-[#a8c200] text-black text-xs font-black uppercase tracking-[0.2em] py-4 hover:bg-[#96af00] transition-colors duration-200 disabled:opacity-50"
          >
            {sending ? "Wird gesendet…" : "Absenden ▲"}
          </button>
        </div>
      </div>
    </form>
  )
}
