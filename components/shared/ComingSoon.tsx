const defaultEmail = "info-kieswerke@psverbund.de"

export default function ComingSoon({
  eyebrow,
  title,
  email = defaultEmail,
}: {
  eyebrow: string
  title: string
  email?: string
}) {
  return (
    <main className="bg-white py-24">
      <div className="w-full px-6 max-w-3xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#a8c200] mb-3">▲&nbsp;&nbsp;{eyebrow}</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-8">{title}</h1>
        <p className="text-gray-500 leading-relaxed mb-4">
          Alle Informationen werden derzeit aufbereitet und nachgereicht.
        </p>
        <p className="text-gray-500 leading-relaxed">
          Bei Fragen schreiben Sie uns einfach eine E-Mail unter{" "}
          <a href={`mailto:${email}`} className="font-semibold text-gray-900 hover:text-[#a8c200] transition-colors">
            {email}
          </a>
          .
        </p>
      </div>
    </main>
  )
}
