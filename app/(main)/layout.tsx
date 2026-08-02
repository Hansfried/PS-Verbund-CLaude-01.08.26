import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex-1 flex flex-col pt-16 nav:pt-[120px]">
      <Navbar />
      <div className="flex-1 flex flex-col">{children}</div>
      <Footer />
    </div>
  )
}
