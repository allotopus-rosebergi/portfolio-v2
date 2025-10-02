import poster from "../../assets/projects/blacktie/cs/BlackTie_Plakat_A2.webp"
import ticketf from "../../assets/projects/blacktie/cs/BlackTie_Eintrittskarte_70x150.webp"
import ticketb from "../../assets/projects/blacktie/cs/BlackTie_Eintrittskarte_70x1502.webp"
import post1 from "../../assets/projects/blacktie/cs/BlackTie_1x1.webp"
import post2 from "../../assets/projects/blacktie/cs/BlackTie_1x1_sponsoren.webp"
import post3 from "../../assets/projects/blacktie/cs/BlackTie_desscode_1x1.webp"
import post4 from "../../assets/projects/blacktie/cs/BlackTie_Tombola_1x1.webp"
import draft1 from "../../assets/projects/blacktie/cs/konzept (3).webp"
import draft2 from "../../assets/projects/blacktie/cs/konzept (2).webp"
import draft3 from "../../assets/projects/blacktie/cs/konzept (5).webp"
import draft4 from "../../assets/projects/blacktie/cs/konzept (1).webp"
import draft5 from "../../assets/projects/blacktie/cs/konzept (6).webp"
import draft6 from "../../assets/projects/blacktie/cs/konzept (4).webp"







const BlacktieCS = (
    <>
        {/* 01 Showcase */}
        <section className="mt-24">
            <h3 className="mb-12 text-2xl font-semibold">01 · SHOWCASE</h3>
            <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1">
                    <p>
                        Das zentrale Plakat nutzt ein bewusst angeschnittenes
                        Portraitmotiv. Der fehlende Kopf erzeugt Spannung und lenkt
                        den Blick sofort auf den Titel und die roten Akzente.
                        Minimalistische Typografie sorgt für Klarheit, die Signal­farbe Rot für Aufmerksamkeit.
                    </p>
                </div>
                <div className="sm:col-span-2 flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <img
                        src={poster}
                        alt="BlackTie Clubbing Plakat"
                        className="w-full sm:w-1/2 h-auto shadow-lg object-cover"
                        loading="lazy"
                    />
                    <div className="flex flex-col gap-4 sm:gap-6 w-full sm:w-1/2">
                        <img
                            src={ticketf}
                            alt="BlackTie Clubbing Eintrittskarte Vorderseite"
                            className=" shadow-lg"
                            loading="lazy"
                        />
                        <img
                            src={ticketb}
                            alt="BlackTie Clubbing Eintrittskarte Rückseite"
                            className=" shadow-lg"
                            loading="lazy"

                        />
                    </div>
                </div>
            </div>
        </section>

        {/* 02 Social Media */}
        <section className="mt-32">
            <h3 className="mb-12 text-2xl font-semibold">02 · SOCIAL MEDIA</h3>
            <div className="grid md:grid-cols-3 gap-8">
                <div>
                    <p>
                        Um die Zielgruppe zu erreichen, wurde eine eigene Instagram-Kampagne
                        entwickelt. Vier Posts informierten über Sponsoren, Dresscode
                        und Tombola und schufen gleichzeitig ein durchgängiges, stilvolles
                        Erscheinungsbild im Feed.
                    </p>
                </div>
                <div className="md:col-span-2 grid grid-cols-2 gap-2 sm:gap-6">
                    <img src={post1} alt="Instagram Post 1" className=" shadow" loading="lazy"/>
                    <img src={post2} alt="Instagram Post 2" className=" shadow" loading="lazy"/>
                    <img src={post3} alt="Instagram Post 3" className=" shadow" loading="lazy"/>
                    <img src={post4} alt="Instagram Post 4" className=" shadow" loading="lazy"/>
                </div>
            </div>
        </section>

        {/* 03 Designprozess */}
        <section className="mt-32">
            <h3 className="mb-12 text-2xl font-semibold">03 · DESIGNPROZESS</h3>
            <div className="grid md:grid-cols-3 gap-8">
                <div>
                    <p>
                        Mehrere Designrunden mit unterschiedlichen Kompositionen,
                        Schriften und Bildideen verdeutlichen, wie wichtig Experimentieren
                        im Grafikdesign ist, um kreative Lösungen zu entwickeln.
                    </p>
                </div>
                <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-6">
                    <img src={draft1} alt="Entwurf 1" className=" shadow" loading="lazy"/>
                    <img src={draft2} alt="Entwurf 2" className=" shadow" loading="lazy"/>
                    <img src={draft3} alt="Entwurf 3" className=" shadow" loading="lazy"/>
                    <img src={draft4} alt="Entwurf 4" className=" shadow" loading="lazy"/>
                    <img src={draft5} alt="Entwurf 5" className=" shadow" loading="lazy"/>
                    <img src={draft6} alt="Entwurf 6" className=" shadow" loading="lazy"/>
                </div>
            </div>
        </section>

        {/* Outro */}
        <section className="mt-32 text-center max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed">
                Das Projekt Black Tie Clubbing zeigt, wie eine konsistente Gestaltung ein
                Event von der Plakatwerbung bis hin zum Instagram-Auftritt visuell zusammenhält.
            </p>
        </section>
    </>
)


export default BlacktieCS;