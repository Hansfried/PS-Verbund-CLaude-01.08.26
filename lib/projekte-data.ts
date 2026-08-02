export type ProjektKategorie = 'strassenbau' | 'erd-und-tiefbau' | 'abriss-recycling'

export type Projekt = {
  name: string
  gesellschaft: string
  kategorie: ProjektKategorie
  jahr: number
  highlight?: boolean
}

export const kategorieLabels: Record<ProjektKategorie, string> = {
  strassenbau: 'Straßenbau',
  'erd-und-tiefbau': 'Erd- und Tiefbau',
  'abriss-recycling': 'Abriss & Recycling',
}

// Minimalliste — nur aus Ordnernamen ableitbare Fakten (Name, Gesellschaft, Jahr, Kategorie).
// Keine Beschreibungen oder Fotos, da die Quellordner keine veröffentlichbaren Inhalte enthielten.
export const projekte: Projekt[] = [
  { name: 'Abbruch Trafo Garkisch', gesellschaft: 'PS Infrabau GmbH', kategorie: 'abriss-recycling', jahr: 2026 },
  { name: 'GALA Vogel', gesellschaft: 'PS Infrabau GmbH', kategorie: 'erd-und-tiefbau', jahr: 2026 },
  { name: 'Karstädt Abbruch Schornstein', gesellschaft: 'PS Infrabau GmbH', kategorie: 'abriss-recycling', jahr: 2026 },
  { name: 'Zernitz Löschwassertank', gesellschaft: 'PS Infrabau GmbH', kategorie: 'erd-und-tiefbau', jahr: 2026 },
  { name: 'Falkenhagen', gesellschaft: 'PS Kieswerke GmbH', kategorie: 'erd-und-tiefbau', jahr: 2025 },
  { name: 'Ostbau Feuerwehr', gesellschaft: 'PS Kieswerke GmbH', kategorie: 'erd-und-tiefbau', jahr: 2025 },
  { name: 'Alba Quitzow Kabelarbeiten', gesellschaft: 'PS Straßen und Tiefbau GmbH', kategorie: 'erd-und-tiefbau', jahr: 2026 },
  { name: 'Abriss Netto Güstrow', gesellschaft: 'PS Straßen und Tiefbau GmbH', kategorie: 'abriss-recycling', jahr: 2026 },
  { name: 'Erweiterung P+R-Anlage Bahnhof Ludwigslust', gesellschaft: 'PS Straßen und Tiefbau GmbH', kategorie: 'strassenbau', jahr: 2026, highlight: true },
  { name: 'Perleberg Hopfenstraße', gesellschaft: 'PS Straßen und Tiefbau GmbH', kategorie: 'strassenbau', jahr: 2026 },
  { name: 'Repowering Schönfeld', gesellschaft: 'PS Straßen und Tiefbau GmbH', kategorie: 'erd-und-tiefbau', jahr: 2026, highlight: true },
  { name: 'Umspannwerk Mühlenbeck Schossin', gesellschaft: 'PS Straßen und Tiefbau GmbH', kategorie: 'erd-und-tiefbau', jahr: 2026 },
]
