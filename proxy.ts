import { NextRequest, NextResponse } from "next/server"

const domainToPathPrefix: Record<string, string> = {
  "ps-kieswerke.de": "/kieswerke",
  "ps-bauschutt.de": "/bauschutt",
  "ps-infrabau.de": "/infrabau",
  "ps-strassentiefbau.de": "/strassen-und-tiefbau",
}

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.replace(/:\d+$/, "").replace(/^www\./, "")
  const prefix = host ? domainToPathPrefix[host] : undefined

  if (!prefix) return NextResponse.next()

  const { pathname } = request.nextUrl
  if (pathname.startsWith(prefix)) return NextResponse.next()

  const url = request.nextUrl.clone()
  url.pathname = `${prefix}${pathname === "/" ? "" : pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|txt|xml|json|woff|woff2|ttf)$).*)",
  ],
}
