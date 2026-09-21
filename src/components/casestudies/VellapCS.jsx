import IdentityImg from "../../assets/projects/vellap/casestudy/macbook_identity.webp"
import DemoVideo from "../../assets/projects/vellap/casestudy/demo.mp4"

import ShopImg from "../../assets/projects/vellap/casestudy/macbook_shop.webp"
import B2BImg from "../../assets/projects/vellap/casestudy/macbook_b2b.webp"

import ProcessImg from "../../assets/projects/vellap/casestudy/process.webp"

import{ReactComponent as WaveSVG} from "../../assets/projects/vellap/VELLAP_Welle_2366_C_Cosmic_Blue.svg"

const VellapCS = (
    <>
        <section>
            <h2 className="mb-4 sm:mb-12 text-left sm:text-center font-semibold">01 Die Identität</h2>

            <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.6fr_1fr] gap-6 items-center justify-center ">
                <div className="flex h-full items-start sm:py-24">
                    <p>
                        Cosmic Blue, dunkle Ästhetik, eckige Kästchen und als Kontrast dazu eine fließende
                        Wellenlinie, die für die V-Flow-Methode steht und die visuelle Identität von Vellap
                        zusammenbringt.
                    </p>
                </div>

                <img
                    src={IdentityImg}
                    alt="Vellap V-Flow Website auf einem MacBook"
                    className="w-full h-auto object-contain justify-self-center py-4"
                    loading="lazy"
                />

                <div className="flex h-full items-end">
                    <p className="text-left sm:text-right sm:py-24">
                        Einen Diagnostik-Schnelltest zu entwickeln und zuzulassen ist komplex. V-Flow teilt
                        diesen Prozess in acht Phasen auf. „DU ENTSCHEIDEST“, wie der Test zum Schluss aussieht.
                    </p>
                </div>
            </div>

            <div className="relative w-full max-w-6xl mx-auto sm:my-64 my-24 overflow-visible">
                <WaveSVG
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen max-w-none h-auto pointer-events-none z-0 overflow-visible"
                    aria-hidden="true"
                />
                <video
                    src={DemoVideo}
                    className="relative z-10 w-full h-auto border-[1px] border-gray"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                />
                <p className="relative z-10 text-left sm:text-right mt-6 text-white">
                    Vellap verbindet minimalistisches Design mit interaktiven Elementen.
                </p>
            </div>
        </section>
        <section className="mt-24">
            <h2 className="mb-4 text-left sm:text-center font-semibold">02 Der Shop</h2>
            <p className="sm:mb-32 mb-12 text-left sm:text-center text-sm opacity-70 max-w-xl sm:mx-auto">
                (Abbildungen zeigen den fertigen Shop mit Testprodukten. Preise und weitere Angaben dienen
                nur der Darstellung.)
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-24 items-center max-w-6xl m-auto">
                <div>
                    <p className="mb-6">
                        Es werden vier Shops für verschiedene Zielgruppen unterschieden.
                    </p>
                    <p className="mb-2">Schnelltest für:</p>
                    <ul className="list-disc pl-6">
                        <li>Zuhause</li>
                        <li>Praxis und Apotheke</li>
                        <li>Labore, Forscher & Entwickler</li>
                        <li>den Fachhandel</li>
                    </ul>
                </div>

                <img
                    src={ShopImg}
                    alt="Vellap Online-Shop Produktseite"
                    className="w-full h-auto object-contain"
                    loading="lazy"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-24 items-center mt-24 max-w-6xl m-auto">
                <img
                    src={B2BImg}
                    alt="Vellap Shop Übersicht für Praxis und Labor"
                    className="w-full h-auto object-contain order-2 sm:order-1"
                    loading="lazy"
                />

                <div className="order-1 sm:order-2 text-left sm:text-right">
                    <p className="font-semibold mb-4 text-white">Verifizierte Zugänge für B2B-Kunden</p>
                    <p>
                        Durch einen Verifizierungsprozess bei der Registrierung können Produkte gezielt ein-
                        oder ausgeblendet sowie Preise und Lieferbedingungen individuell angepasst werden.
                    </p>
                </div>
            </div>

            <img
                src={ProcessImg}
                alt="Vom Wireframe über den interaktiven Prototyp zur fertigen Website mit Shop"
                className="w-full h-auto object-contain mt-32"
                loading="lazy"
            />
        </section>
    </>
)

export default VellapCS;