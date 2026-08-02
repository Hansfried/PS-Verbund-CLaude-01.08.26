import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Zertifikate",
  description: "Zertifikate und Güteüberwachung der PS Verbund-Gruppe.",
}

const zertifikate = [
  {
    src: "/zertifikat-guteueberwachung.png",
    name: "Güteüberwachung Kies · Sand · Splitt",
    text: "Regelmäßige Fremdüberwachung unserer Gesteinskörnungen.",
  },
  {
    src: "/zertifikat-bauzert.png",
    name: "Bau-Zert e.V.",
    text: "Werkseigene Produktionskontrolle nach DIN EN 12620, seit dem 27.10.2014.",
  },
]

export default function ZertifikatePage() {
  return (
    <main className="bg-white py-24">
      <div className="w-full px-6 max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#a8c200] mb-3">▲&nbsp;&nbsp;Unsere Gruppe</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
          Zertifikate.
        </h1>
        <p className="text-gray-500 leading-relaxed max-w-2xl mb-16">
          Weitere Zertifikate folgen fortlaufend.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {zertifikate.map(({ src, name, text }) => (
            <div key={name} className="border border-gray-200 rounded-br-[2rem] p-8 flex flex-col items-start gap-6">
              <div className="relative h-24 w-40">
                <Image src={src} alt={name} fill className="object-contain object-left" />
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">{name}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
