import Image from "next/image"
import Link from "next/link"

export default function BauschuttComingSoon() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-white px-6 py-24 text-center">
      <Image src="/logo.png" alt="PS Verbund" height={34} width={180} className="object-contain mb-10" />

      <p className="text-xs font-semibold uppercase tracking-widest text-[#a0c6e3] mb-3">▲&nbsp;&nbsp;PS Bauschutt GmbH</p>
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6 max-w-xl">
        Die PS Bauschutt Website befindet sich im Aufbau.
      </h1>
      <p className="text-gray-500 leading-relaxed max-w-md mb-2">
        Sie können diese ab dem 10.08. einsehen.
      </p>
      <p className="text-gray-500 leading-relaxed max-w-md mb-10">
        Mit freundlichen Grüßen<br />Ihr PS Team
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-gray-700 transition-colors"
      >
        Hier geht&apos;s zurück zur PS Homepage
      </Link>
    </div>
  )
}
