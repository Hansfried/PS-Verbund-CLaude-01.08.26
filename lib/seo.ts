import type { Metadata } from "next"

export const SITE_URL = "https://psverbund.de"
export const SITE_NAME = "PS Verbund"
export const DEFAULT_OG_IMAGE = "/kieswerke-luftbild-neu.jpg"

type PageMetadataInput = {
  title: string
  description: string
  // Path on psverbund.de; used as canonical so the mirrored domains
  // (ps-bauschutt.de etc., see proxy.ts) don't count as duplicate content.
  path: string
  image?: string
  // Use the title as-is instead of applying the layout's title template.
  absoluteTitle?: boolean
  siteName?: string
}

export function pageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  absoluteTitle = false,
  siteName = SITE_NAME,
}: PageMetadataInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${siteName}`
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "de_DE",
      url: path,
      siteName,
      title: fullTitle,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  }
}

const HQ_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "Reetzer Chaussee 1",
  postalCode: "19348",
  addressLocality: "Perleberg OT Groß Buchholz",
  addressRegion: "Brandenburg",
  addressCountry: "DE",
}

const holding = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "PS Verbund",
  legalName: "PS Holding GmbH",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  telephone: "+49 3876 300830",
  address: HQ_ADDRESS,
}

export const subsidiaries = {
  kieswerke: {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/kieswerke#business`,
    name: "PS Kieswerke GmbH",
    description: "Gewinnung und Aufbereitung von Kies, Sand und Splitt in der Region Prignitz.",
    url: `${SITE_URL}/kieswerke`,
    logo: `${SITE_URL}/logo-kieswerke.png`,
    image: `${SITE_URL}/kieswerke-luftbild-neu.jpg`,
    telephone: "+49 3876 300830",
    email: "info-kieswerke@psverbund.de",
    address: HQ_ADDRESS,
    areaServed: "Prignitz",
    parentOrganization: { "@id": holding["@id"] },
  },
  bauschutt: {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/bauschutt#business`,
    name: "PS Bauschutt GmbH",
    description: "Bauschutt-Recycling und Entsorgung in der Prignitz.",
    url: `${SITE_URL}/bauschutt`,
    logo: `${SITE_URL}/logo-bauschutt.png`,
    image: `${SITE_URL}/bauschutt-luftbild.jpg`,
    telephone: "+49 175 5443554",
    address: HQ_ADDRESS,
    areaServed: "Prignitz",
    parentOrganization: { "@id": holding["@id"] },
  },
  infrabau: {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/infrabau#business`,
    name: "PS Infrabau GmbH",
    description: "Kabel- und Rohrleitungsbau sowie Tiefbauleistungen.",
    url: `${SITE_URL}/infrabau`,
    logo: `${SITE_URL}/logo-infrabau.png`,
    telephone: "+49 3876 300830",
    address: HQ_ADDRESS,
    areaServed: "Prignitz",
    parentOrganization: { "@id": holding["@id"] },
  },
  strassenUndTiefbau: {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/strassen-und-tiefbau#business`,
    name: "PS Straßen und Tiefbau GmbH",
    description: "Straßenbau und Tiefbauleistungen in der Region.",
    url: `${SITE_URL}/strassen-und-tiefbau`,
    logo: `${SITE_URL}/logo-strassen.png`,
    image: `${SITE_URL}/strassen-baustelle.jpg`,
    telephone: "+49 3876 300830",
    email: "info-strassenundtiefbau@psverbund.de",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Lenzenerstraße 39",
      postalCode: "19322",
      addressLocality: "Wittenberge",
      addressRegion: "Brandenburg",
      addressCountry: "DE",
    },
    areaServed: "Prignitz",
    parentOrganization: { "@id": holding["@id"] },
  },
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    holding,
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "de-DE",
      publisher: { "@id": holding["@id"] },
    },
  ],
}

export function businessJsonLd(business: (typeof subsidiaries)[keyof typeof subsidiaries]) {
  return { "@context": "https://schema.org", ...business }
}
