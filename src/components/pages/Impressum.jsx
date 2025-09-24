import HeroHeader from "../sections/HeroHeader.jsx";
import {InteractiveHoverButton} from "../InteractiveButton.jsx";

function Impressum() {
    return (
        <div className={`min-h-screen`}>
            <HeroHeader />
            <div className={`w-full p-6 pt-36 flex flex-row justify-center items-center`}>
                <h2> Impressum </h2>
            </div>
            <div className={`p-6 sm:p-16 w-full sm:w-1/2 m-auto flex flex-col gap-6`}>
                <p>Angaben gemäß § 5 ECG und § 25 MedienG</p>

                <section>
                    <p> Betriebsname / Hofname: </p>
                    <p className="highlight"> Erdäpfelhof Mustermann </p>
                </section>

                <section>
                    <p>Inhaber:</p>
                    <p className="highlight">Maria und Max Mustermann</p>
                </section>

                <section>
                    <p>Adresse:</p>
                    <p className="highlight">
                        Musterstraße 12<br/>
                        A-1234 Musterstadt<br/>
                        Österreich
                    </p>
                </section>

                <section>
                    <p>Kontakt:</p>
                    <p className="highlight">Telefon: +43 (0)123 456 789</p>
                    <p className="highlight">E-Mail: info@mustergut.at</p>
                </section>

                <section>
                    <p>Behörde gemäß ECG:</p>
                    <p className="highlight">Bezirkshauptmannschaft Musterstadt</p>
                </section>

                <section>
                    <p>Mitgliedschaften:</p>
                    <p className="highlight">Mitglied der Landwirtschaftskammer [Bundesland]</p>
                </section>

                <div className="w-full flex flex-row justify-center mt-8 sm:mt-16">
                    <InteractiveHoverButton className="text-tiefbraun border-tiefbraun"onClick={() => (window.location.href = "/")}> Zurück zum Start <span>&#8203;</span> <span>&#8203;</span><span>&#8203;</span><span>&#8203;</span><span>&#8203;</span></InteractiveHoverButton>
                </div>
            </div>
        </div>
    )
}

export default Impressum;