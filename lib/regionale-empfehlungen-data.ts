export type Kategorie = "Hausmeister Service" | "Stahlbau" | "Elektriker" | "Heizung und Sanitär"

export type Betrieb = {
  name: string
  kategorie: Kategorie
  logo?: string
  beschreibung?: string
  leistungen?: string[]
  vorherNachher?: { vorher: string; nachher?: string }[]
  adresse?: string
  telefon?: string
  email?: string
  website?: string
}

export const kategorien: Kategorie[] = ["Hausmeister Service"]

export const betriebe: Betrieb[] = [
  {
    name: "H.S.-Dienstleistungen – Heiko Steil",
    kategorie: "Hausmeister Service",
    logo: "/logo-hausmeister-service.jpg",
    beschreibung:
      "H.S.-Dienstleistungen ist Ihr zuverlässiger Ansprechpartner für die Pflege und Instandhaltung von Haus und Garten. Ob Rasenpflege, Heckenschnitt und Gartengestaltung, kleine Reparaturen im und am Haus, Terrassen- und Außenreinigung oder Be- und Entsorgungsarbeiten – wir übernehmen die Aufgaben rund um Ihre Immobilie, für die Ihnen selbst die Zeit fehlt. Auch bei Materialbeschaffung und Transporttätigkeiten sind wir für Sie da. Persönlich, flexibel und mit Blick für Details.",
    leistungen: [
      "Hausmeisterdienstleistungen",
      "Kleinreparaturen",
      "Terrassenreinigung",
      "Be- und Entsorgung",
      "Materialbeschaffung",
      "Transporttätigkeiten",
      "Gartenservice",
    ],
    vorherNachher: [
      { vorher: "/hausmeister-service-vorher.jpg", nachher: "/hausmeister-service-nachher.jpg" },
    ],
    adresse: "Bentwischer Weg 72, 19322 Wittenberge",
    telefon: "0152 58541901",
    email: "heiko.steil@yahoo.com",
  },
]
