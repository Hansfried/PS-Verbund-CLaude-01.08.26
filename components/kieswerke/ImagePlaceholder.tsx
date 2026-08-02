import { ImageIcon } from "lucide-react"

interface ImagePlaceholderProps {
  label: string
  dark?: boolean
  className?: string
}

export default function ImagePlaceholder({ label, dark = false, className = "" }: ImagePlaceholderProps) {
  return (
    <div
      className={[
        "relative flex flex-col items-center justify-center gap-3 border border-dashed",
        dark ? "border-[#333] bg-[#111]" : "border-gray-300 bg-gray-50",
        className,
      ].join(" ")}
    >
      <ImageIcon size={28} strokeWidth={1.5} className={dark ? "text-gray-600" : "text-gray-300"} />
      <p
        className={[
          "text-[10px] font-bold uppercase tracking-[0.2em] text-center px-4",
          dark ? "text-gray-500" : "text-gray-400",
        ].join(" ")}
      >
        ▲&nbsp;&nbsp;Bild: {label}
      </p>
    </div>
  )
}
