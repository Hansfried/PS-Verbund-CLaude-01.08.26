export default function DatenschutzContent() {
  return (
    <div className="w-full bg-white">
    <div className="max-w-3xl mx-auto px-6 py-24">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#a8c200] mb-3">▲&nbsp;&nbsp;Rechtliches</p>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Datenschutzerklärung</h1>
      <p className="text-gray-500 leading-relaxed mb-12">
        Diese Datenschutzerklärung gilt für den gesamten Web-Auftritt der PS Verbund-Gruppe: psverbund.de,
        ps-kieswerke.de, ps-bauschutt.de, ps-infrabau.de und ps-strassentiefbau.de.
      </p>

      <section className="border-t border-gray-200 pt-8 mb-10">
        <h2 className="text-lg font-bold text-gray-900 mb-3">1. Verantwortlicher</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          Verantwortliche im Sinne des Art. 4 Nr. 7 DSGVO sind die PS Kieswerke GmbH, die PS Bauschutt GmbH, die
          PS Infrabau GmbH und die PS Straßen und Tiefbau GmbH, jeweils Reetzer Chaussee 1, 19348 Perleberg OT
          Groß Buchholz (PS Straßen und Tiefbau GmbH: Lenzenerstraße 39, 19322 Wittenberge). Kontaktdaten der
          jeweils zuständigen Gesellschaft finden Sie im{" "}
          <a href="/impressum" className="underline hover:text-[#a8c200] transition-colors">Impressum</a>.
        </p>
      </section>

      <section className="border-t border-gray-200 pt-8 mb-10">
        <h2 className="text-lg font-bold text-gray-900 mb-3">2. Ihre Rechte als betroffene Person</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          Sie haben jederzeit das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung
          (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20 DSGVO)
          sowie Widerspruch gegen die Verarbeitung (Art. 21 DSGVO) bezüglich der Sie betreffenden
          personenbezogenen Daten. Sie haben außerdem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
          über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
        </p>
      </section>

      <section className="border-t border-gray-200 pt-8 mb-10">
        <h2 className="text-lg font-bold text-gray-900 mb-3">3. Hosting und Server-Logfiles</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          Diese Website wird bei Plesk gehostet. Beim Aufruf unserer Website erhebt unser Hosting-Anbieter
          automatisch Informationen in sogenannten Server-Logfiles, die Ihr Browser automatisch übermittelt:
          IP-Adresse, Datum und Uhrzeit der Anfrage, Inhalt der Anfrage, aufgerufene Seite, Browsertyp und
          -version, verwendetes Betriebssystem und Referrer-URL. Diese Daten sind nicht bestimmten Personen
          zuordenbar und werden nicht mit anderen Datenquellen zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1
          lit. f DSGVO (berechtigtes Interesse an der technisch fehlerfreien Darstellung und Optimierung unserer
          Website).
        </p>
      </section>

      <section className="border-t border-gray-200 pt-8 mb-10">
        <h2 className="text-lg font-bold text-gray-900 mb-3">4. Kontaktformulare</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          Auf den Seiten unserer vier Gesellschaften bieten wir Kontaktformulare an. Wenn Sie ein Formular
          nutzen, verarbeiten wir die von Ihnen angegebenen Daten (Name, E-Mail-Adresse, Nachricht, ggf.
          hochgeladene Dateianhänge) ausschließlich zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Art. 6
          Abs. 1 lit. b DSGVO (Anfrage im Hinblick auf einen möglichen Vertrag) bzw. Art. 6 Abs. 1 lit. f DSGVO
          (berechtigtes Interesse an der Beantwortung Ihrer Anfrage). Die Daten werden gelöscht, sobald sie für
          die Bearbeitung Ihrer Anfrage nicht mehr erforderlich sind.
        </p>
        <p className="text-sm text-gray-600 leading-relaxed mt-4">
          Zur technischen Verarbeitung und Speicherung der Formulardaten und Dateianhänge setzen wir den Dienst
          Supabase ein, dessen Server für dieses Projekt in der EU (Frankfurt) stehen. Supabase verarbeitet die
          Daten dabei als unser Auftragsverarbeiter gemäß Art. 28 DSGVO ausschließlich nach unserer Weisung. Eine
          Übermittlung in Drittländer außerhalb der EU findet dabei nicht statt.
        </p>
      </section>

      <section className="border-t border-gray-200 pt-8 mb-10">
        <h2 className="text-lg font-bold text-gray-900 mb-3">5. Google Maps</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          Auf unserer Startseite binden wir eine Karte des Kartendienstes Google Maps ein, betrieben von Google
          Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland (&bdquo;Google&ldquo;). Beim Aufruf der Seite mit
          der eingebundenen Karte stellt Ihr Browser eine Verbindung zu Servern von Google her, wobei unter
          anderem Ihre IP-Adresse an Google übertragen werden kann. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
          DSGVO (berechtigtes Interesse an einer ansprechenden Darstellung unserer Standorte). Weitere
          Informationen zum Umgang mit Nutzerdaten finden Sie in der{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#a8c200] transition-colors"
          >
            Datenschutzerklärung von Google
          </a>
          .
        </p>
      </section>

      <section className="border-t border-gray-200 pt-8 mb-10">
        <h2 className="text-lg font-bold text-gray-900 mb-3">6. Video-Einbindung (Vidzflow)</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          Auf unserer Startseite binden wir ein Hintergrundvideo über den Dienst Vidzflow ein. Beim Laden der
          Seite stellt Ihr Browser eine Verbindung zu den Servern des Anbieters her, wobei unter anderem Ihre
          IP-Adresse übertragen werden kann. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
          Interesse an einer ansprechenden Darstellung unserer Inhalte).
        </p>
      </section>

      <section className="border-t border-gray-200 pt-8 mb-10">
        <h2 className="text-lg font-bold text-gray-900 mb-3">7. Cookies und Analyse-Tools</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          Diese Website setzt derzeit keine Cookies und keine Analyse- oder Tracking-Tools (z. B. Google
          Analytics) ein.
        </p>
      </section>

      <section className="border-t border-gray-200 pt-8">
        <h2 className="text-lg font-bold text-gray-900 mb-3">8. Änderung dieser Datenschutzerklärung</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          Wir passen diese Datenschutzerklärung an, sobald sich die Datenverarbeitung auf unserer Website
          ändert, z. B. bei Einführung neuer Funktionen. Stand: 01.08.2026.
        </p>
      </section>
    </div>
    </div>
  )
}
