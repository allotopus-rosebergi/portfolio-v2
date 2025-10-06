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

import PosterStandImg from "../../assets/projects/blacktie/cs/Plakat.webp"

const BlacktieCS = (
    <>
        <section>
            <p className="mono text-accent text-left sm:text-center"> Poster. Flyer. Eintrittskarten.</p>
            <h2 className="mb-4 sm:mb-12 text-left sm:text-center font-semibold">01 Printmedien</h2>

            <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.2fr_1fr] gap-6 items-center justify-center">
                <div className="flex h-full items-start sm:py-32">
                    <p>
                        Das zentrale Element der Black Tie Clubbing-Identität
                        ist das bewusst abgeschnittene Portraitmotiv. Der fehlende
                        Kopf lässt das Plakat aus der Masse herausstechen und lenkt
                        den Blick sofort auf den Titel.
                    </p>
                </div>

                <img
                    src={PosterStandImg}
                    alt="Black Tie Clubbing Plakat"
                    className="w-full h-auto object-contain justify-self-center py-4"
                    loading="lazy"
                />

                <div className="flex h-full items-end">
                    <p className="text-left sm:text-right sm:py-32">
                        Minimalistische Typografie sorgt für klare Lesbarkeit,
                        während die Signalfarbe Rot gezielt die wichtigsten
                        Informationen hervorhebt.
                    </p>
                </div>
            </div>
        </section>

        <section className="mt-48">
            <h2 className="mb-4 sm:mb-12 text-left sm:text-center font-semibold">02 Social Media</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div>
                    <p>
                        Der Ticketverkauf wurde über Instagram beworben. Vier Posts zum Event,
                        zu Sponsoren, Dresscode und Tombola setzen dabei den Stil der Printmedien
                        konsequent fort.
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

        <section className="mt-48">
            <h2 className="mb-4 sm:mb-12 text-left sm:text-center font-semibold">03 Design<wbr/>prozess</h2>

            <div className="grid md:grid-cols-3 gap-8">
                <div>
                    <p>
                        Mehrere Designrunden mit unterschiedlichen Kompositionen, Schriftzügen
                        und Bildideen zeigen, wie entscheidend Experimentieren im Grafikdesign
                        ist, um schließlich das finale Design zu finden.
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

        <section className="mt-32 text-center max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed">
                Das Projekt Black Tie Clubbing zeigt, wie eine konsistente Gestaltung ein
                Event von der Plakatwerbung bis hin zum Instagram-Auftritt visuell zusammenhält.
            </p>
        </section>
    </>
)


export default BlacktieCS;