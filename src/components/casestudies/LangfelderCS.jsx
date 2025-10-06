import AboutUsPageImg from "../../assets/projects/langfelder/casestudy/Iphone_front.webp"
import FamilyImg from "../../assets/projects/langfelder/casestudy/about_us_full.webp"
import StandlImg from "../../assets/projects/langfelder/casestudy/verkaufsstand.webp"
import {ReactComponent as LogoSVG} from "../../assets/projects/langfelder/casestudy/logo.svg"

import KapelleImg from "../../assets/projects/langfelder/casestudy/Kapelle.webp"
import businesscardImg from "../../assets/projects/langfelder/casestudy/businesscard.webp"
import stampImg from "../../assets/projects/langfelder/casestudy/stamp.webp"

import macbookImg from "../../assets/projects/langfelder/casestudy/macbook.webp"

const LangfelderCS = (
    <>
        <section>
            <p className="mono text-accent text-left sm:text-center"> Echte Menschen. Echte Qualität.</p>
            <h2 className="mb-4 sm:mb-12 text-left sm:text-center font-semibold">01 Der Familien<wbr />betrieb</h2>

            <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.2fr_1fr] gap-6 items-center justify-center">
                <div className="flex h-full items-start sm:py-32">
                    <p>
                        Handgeschriebene Akzente und das leuchtende „Erdäpfel-Gelb“ werden gezielt eingesetzt,
                        um den familiären Charakter des Betriebs zu unterstreichen.
                    </p>
                </div>

                <img
                    src={AboutUsPageImg}
                    alt="Familie Semper"
                    className="w-full h-auto object-contain justify-self-center py-4"
                    loading="lazy"
                />

                <div className="flex h-full items-end">
                    <p className="text-left sm:text-right sm:py-32">
                        Ergänzt durch Fotografie vom Hof und der Familie wirkt die Website authentisch und
                        persönlich.
                    </p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row mt-12 gap-6">
                <img src={FamilyImg} alt="Familienfoto Semper" className="w-full sm:w-1/2 object-cover" loading="lazy" />
                <img src={StandlImg} alt="Verkaufsstand Langfelder Bio Erdäpfel" className="w-full sm:w-1/2 object-cover" loading="lazy" />
            </div>
        </section>
        <section className="mt-48">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-12 mb-12">
                <div>
                    <p className="mono text-accent">Ein Symbol, das Herkunft erzählt.</p>
                    <h2 className="mb-4 sm:mb-12">02 Das Logo</h2>

                    <p>
                        Die Bildmarke vereint drei Symbole: Die Ortskapelle von Langfeld steht für die
                        Heimatverbundenheit, die drei Wellen links symbolisieren den Fluss Lainsitz, an dem
                        Langfeld liegt, und die Felder stehen für den Erdäpfelanbau.
                    </p>
                </div>

                <div className="flex h-full w-full justify-center items-end">
                    <LogoSVG className="w-auto max-h-[180px]" />
                </div>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col justify-between gap-6 h-full">
                    <img
                        src={businesscardImg}
                        alt="Langfelder Bio Erdäpfel Visitenkarte"
                        loading="lazy"
                        className="w-full h-[60%] object-cover"
                    />
                    <div className="h-[40%]">
                        <img src={KapelleImg} alt="Kapelle Langfeld" loading="lazy" className="w-full h-full object-cover" />
                    </div>

                </div>

                <div className="flex flex-col justify-between gap-6 h-full">
                    <div className="bg-[#E1A62B] text-[#2F2425] font-semibold p-12 flex items-center justify-center h-[40%]">
                        <p>
                            Der bogenartige Rahmen verbindet die verschiedenen Symbole und
                            vermittelt Offenheit, Vertrauen und Zusammenhalt im Familienbetrieb.
                        </p>
                    </div>

                    <div className="h-[60%]">
                        <img src={stampImg} alt="Langfelder Bio Erdäpfel Stempel" loading="lazy" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
        <section className="mt-48">
            <p className="mono text-accent text-left sm:text-center"> Regional. Bio. Frisch vom Feld.</p>
            <h2 className="mb-12 text-left sm:text-center">03 Echte Waldviertler Qualität</h2>

            <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr_1fr] gap-6 items-center justify-center">
                <div className="flex h-full items-start sm:py-32">
                    <p>
                        Für die Bio Erdäpfel wurden professionelle Fotos erstellt, die ihre Qualität und Frische zur Geltung bringen.                     </p>
                </div>

                <img
                    src={macbookImg}
                    alt="Kartoffel Sorten Langfelder Bio Erdäpfel"
                    className="w-full h-auto object-cover justify-self-center py-4"
                    loading="lazy"
                />

                <div className="flex h-full items-end sm:py-32">
                    <p className="text-left sm:text-right">
                        Der bogenartige Rahmen des Logos zieht sich dabei subtil hinter die Erdäpfel und schafft so eine durchgehende, konsistente Markenidentität.                    </p>
                </div>
            </div>
        </section>
        <section className="mt-32 text-center max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed">
                Zur offiziellen Langfelder Bio Erdäpfel Website gehts&nbsp;<a href="https://www.langfelder-biokartoffel.at" target="_blank" rel="noopener noreferrer" className="text-accent underline">hier</a>.            </p>
        </section>

    </>
)


export default LangfelderCS;