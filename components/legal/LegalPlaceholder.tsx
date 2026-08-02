export default function LegalPlaceholder({ children }: { children: React.ReactNode }) {
  return (
    <span className="italic text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">
      {children}
    </span>
  )
}
