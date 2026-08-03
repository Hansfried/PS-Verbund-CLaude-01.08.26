export type NavSubItem = {
  label: string
  href: string
  children?: NavSubItem[]
}

export type TeaserCard = {
  title: string
  subtitle: string
  href: string
  image?: string
}

export type NavItem = {
  label: string
  href?: string
  children?: NavSubItem[]
  teasers?: TeaserCard[]
}

export type Brand = {
  label: string
  shortLabel: string
  href: string
  externalUrl: string
  accentColor: string
  logo: string
}

export const brands: Brand[] = [
  {
    label: 'PS Kieswerke GmbH',
    shortLabel: 'Kieswerke',
    href: '/kieswerke',
    externalUrl: 'https://ps-kieswerke.de',
    accentColor: '#a8c200',
    logo: '/logo-kieswerke-brand.png',
  },
  {
    label: 'PS Straßen und Tiefbau GmbH',
    shortLabel: 'Straßen & Tiefbau',
    href: '/strassen-und-tiefbau',
    externalUrl: 'https://ps-strassentiefbau.de',
    accentColor: '#eab308',
    logo: '/logo-strassen.png',
  },
  {
    label: 'PS Infrabau GmbH',
    shortLabel: 'Infrabau',
    href: '/infrabau',
    externalUrl: 'https://ps-infrabau.de',
    accentColor: '#f97316',
    logo: '/logo-infrabau.png',
  },
  {
    label: 'PS Bauschutt GmbH',
    shortLabel: 'Bauschutt',
    href: '/bauschutt',
    externalUrl: 'https://ps-bauschutt.de',
    accentColor: '#38bdf8',
    logo: '/logo-bauschutt.png',
  },
]

export const mainNavItems: NavItem[] = [
  {
    label: 'Gesellschaften',
    children: [
      { label: 'PS Kieswerke GmbH', href: '/kieswerke' },
      { label: 'PS Straßen und Tiefbau GmbH', href: '/strassen-und-tiefbau' },
      { label: 'PS Infrabau GmbH', href: '/infrabau' },
      { label: 'PS Bauschutt GmbH', href: '/bauschutt' },
    ],
    teasers: [
      { title: 'Alle Gesellschaften', subtitle: 'Unsere Unternehmen', href: '/gesellschaften', image: '/gesellschaften-team.jpg' },
    ],
  },
  {
    label: 'Projekte',
    href: '/projekte',
    children: [
      { label: 'Alle Projekte', href: '/projekte' },
      { label: 'Highlights', href: '/projekte/highlights' },
      { label: 'Straßenbau', href: '/projekte/strassenbau' },
      { label: 'Erd- und Tiefbau', href: '/projekte/erd-und-tiefbau' },
      { label: 'Abriss & Recycling', href: '/projekte/abriss-recycling' },
    ],
    teasers: [
      { title: 'Alle Projekte', subtitle: 'Referenzprojekte', href: '/projekte', image: '/projekte-fahrzeuge.jpg' },
      { title: 'Unsere Highlights', subtitle: 'Ausgewählte Projekte', href: '/projekte/highlights', image: '/projekte-highlights.jpg' },
    ],
  },
  {
    label: 'Unsere Gruppe',
    children: [
      { label: 'Nachhaltigkeit / Sponsoring / Haltung und Werte', href: '/gruppe/nachhaltigkeit' },
      { label: 'Geschichte', href: '/gruppe/geschichte' },
      { label: 'Gesellschafter', href: '/gruppe/gesellschafter' },
      { label: 'Auszeichnungen', href: '/gruppe/auszeichnungen' },
      { label: 'Zertifikate', href: '/gruppe/zertifikate' },
      {
        label: 'Stellenangebote',
        href: '/karriere/stellenangebote',
        children: [
          { label: 'Alle Jobs', href: '/karriere/stellenangebote' },
          { label: 'Praktikum', href: '/karriere/praktikum' },
        ],
      },
      {
        label: 'Karriere im PS Verbund',
        href: '/karriere/stellenangebote',
        children: [
          { label: 'Bewerbungstipps', href: '/karriere/bewerbungstipps' },
          { label: 'Für Berufserfahrene', href: '/karriere/berufserfahrene' },
          { label: 'Die PS Gruppe als Arbeitgeber', href: '/karriere/arbeitgeber' },
        ],
      },
    ],
    teasers: [
      { title: 'Alle Stellenangebote', subtitle: 'Werde ein Teil von uns', href: '/karriere/stellenangebote', image: '/gruppe-stellenangebote.jpg' },
      { title: 'Die PS Gruppe', subtitle: 'Über uns', href: '/gruppe', image: '/gruppe-ueberuns.jpg' },
    ],
  },
  {
    label: 'Neuigkeiten',
    href: '/news',
    children: [
      { label: 'Alle News', href: '/news' },
      { label: 'Sponsoring', href: '/news/sponsoring' },
      { label: 'Events', href: '/news/events' },
      { label: 'PS Momente', href: '/news/ps-momente' },
      { label: 'Pressespiegel', href: '/news/pressespiegel' },
    ],
    teasers: [
      { title: 'Alle Neuigkeiten', subtitle: 'Aktuelles aus der PS Gruppe', href: '/news', image: '/neuigkeiten-team.jpg' },
    ],
  },
  {
    label: 'Kontakt',
    href: '/kontakt',
  },
]

type FlattenableItem = { label: string; href?: string; children?: FlattenableItem[] }

function flattenNavItems(items: FlattenableItem[]): { label: string; href: string }[] {
  const result: { label: string; href: string }[] = []
  for (const item of items) {
    if (item.href) result.push({ label: item.label, href: item.href })
    if (item.children) result.push(...flattenNavItems(item.children))
  }
  return result
}

const rawSearchIndex: { label: string; href: string }[] = [
  { label: 'Home', href: '/' },
  { label: 'Gesellschaften', href: '/gesellschaften' },
  ...flattenNavItems(mainNavItems),
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutzerklärung', href: '/datenschutz' },
]

export const searchIndex: { label: string; href: string }[] = rawSearchIndex.filter(
  (item, index) => rawSearchIndex.findIndex((other) => other.href === item.href) === index
)
