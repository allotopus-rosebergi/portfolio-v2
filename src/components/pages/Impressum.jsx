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

                <section>
                    <p> Familie Semper </p>
                    <p className="highlight"> Manuel und Daniela Semper </p>
                </section>

                <section>
                    <p>Adresse:</p>
                    <p className="highlight">
                        Langfeld 27<br/>
                        A-3970 Weitra<br/>
                        Österreich
                    </p>
                </section>

                <section>
                    <p>Kontakt:</p>
                    <p className="highlight">Telefon: +43 (0)664 7952710</p>
                    <p className="highlight">Telefon: +43 (0)664 3200339</p>
                    <p className="highlight">E-Mail: daniela.semper1@gmx.at</p>
                </section>

                <section>
                    <p>Bio-Kontrollstelle</p>
                    <p className="highlight">AT-BIO-302</p>
                </section>


                <div className="w-full flex flex-row justify-center mt-8 sm:mt-16">
                    <InteractiveHoverButton className="text-tiefbraun border-tiefbraun"onClick={() => (window.location.href = "#/")}> Zurück zum Start <span>&#8203;</span> <span>&#8203;</span><span>&#8203;</span><span>&#8203;</span><span>&#8203;</span></InteractiveHoverButton>
                </div>
            </div>
        </div>
    )
}

export default Impressum;