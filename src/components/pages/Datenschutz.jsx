import HeroHeader from "../sections/HeroHeader.jsx";
import {InteractiveHoverButton} from "../InteractiveButton.jsx"


function Datenschutz() {
    return (
        <div className={`min-h-screen`}>
            <HeroHeader />
            <div className={`w-full p-6 pt-36 flex flex-row justify-center items-center`}>
                <h2> Datenschutz </h2>
            </div>
            <div className={`p-6 sm:p-16 w-full sm:w-1/2 m-auto flex flex-col gap-6`}>
                <section>
                    <p>Diese Datenschutzerklärung informiert über die Erhebung und Verwendung von Daten auf dieser Website.</p>
                </section>

                <section>
                    <p className="highlight">Verantwortlicher:</p>
                    <p>Maria und Max Mustermann, Erdäpfelhof Mustermann, Musterstraße 12, A-1234 Musterstadt, Österreich</p>
                </section>

                <section>
                    <p className="highlight">Erhebung und Verwendung personenbezogener Daten:</p>
                    <p>Die Website sammelt keine personenbezogenen Daten der Besucher. Es werden weder Cookies noch Formulare verwendet, die Name, E-Mail-Adresse oder Telefonnummer abfragen.</p>
                </section>

                <section>
                    <p className="highlight">Cookies:</p>
                    <p>Diese Website verwendet keine Cookies.</p>
                </section>

                <section>
                    <p className="highlight">Bildrechte:</p>
                    <p>Alle auf dieser Website verwendeten Bilder und das Logo wurden von Marius Lassl erstellt. Eine Weiterverwendung, Vervielfältigung oder Veröffentlichung durch Dritte ist nicht gestattet. Die Nutzung ist nur nach ausdrücklicher schriftlicher Zustimmung von Marius Lassl erlaubt. Die Inhalte dürfen vom Website-Betreiber (Maria und Max Mustermann) für den vereinbarten Zweck verwendet werden.</p>
                </section>

                <section>
                    <p className="highlight">Externe Links:</p>
                    <p>Die Website enthält einen Link zu <a href="https://www.bio-austria.at" target="_blank" className="underline underline-offset-4">Bio Austria</a>. Durch das Anklicken dieses Links können Daten an die verlinkte Website übertragen werden. Wir haben keinen Einfluss auf die Erhebung und Verwendung dieser Daten durch die verlinkte Website.</p>
                    <p>Die Website nutzt externe Schriftarten (Google Fonts). Durch den Abruf dieser Schriftarten können Daten an Google übertragen werden.</p>
                </section>

                <section>
                    <p className="highlight">Änderungen der Datenschutzerklärung:</p>
                    <p>Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen. Die aktuelle Version ist stets auf dieser Seite verfügbar.</p>
                </section>

                <hr/>

                <section>
                    <p className="highlight">Website Erstellung:</p>
                    <p>Die Website, das Logo und die Fotos wurden von Marius Lassl erstellt. Alle Rechte an der Gestaltung, den Bildern und dem Logo liegen bei Marius Lassl. Die Nutzung durch Dritte ist nur mit ausdrücklicher schriftlicher Zustimmung gestattet.</p>
                </section>

                <section>
                    <p className="highlight">Dienstleister Kontaktdaten:</p>
                    <p>
                        Marius Lassl<br/>
                        E-Mail: office@marius-lassl.at<br/>
                        Website: <a href="https://www.marius-lassl.com" target="_blank" className="underline underline-offset-4">www.marius-lassl.com</a>
                    </p>
                </section>

                <div className="w-full flex flex-row justify-center mt-8 sm:mt-16">
                    <InteractiveHoverButton className="text-tiefbraun border-tiefbraun"onClick={() => (window.location.href = "#/")}> Zurück zum Start <span>&#8203;</span> <span>&#8203;</span><span>&#8203;</span><span>&#8203;</span><span>&#8203;</span></InteractiveHoverButton>
                </div>
            </div>
        </div>
    )
}

export default Datenschutz