import bookImg from "../../assets/projects/wondrousnature/book.webp"
const WondrousNatureCS = (
    <>
        <section>
            <p className="mono text-accent text-left sm:text-center"> Gnadenlos. Täuschend. Elegant.</p>
            <h2 className=" text-center hidden sm:block">Kapitel 01 | Die Orchideenmantis</h2>
            <h2 className=" text-left block sm:hidden">Kapitel 01 | Orchideen<wbr />mantis</h2>



            <img
                    src={bookImg}
                    alt="Kartoffel Sorten Langfelder Bio Erdäpfel"
                    className="w-full h-auto justify-self-center py-12"
                    loading="lazy"
                />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex-row gap-4 lg:gap-16 sm:px-8">
                <p className="text-left">Die markanten Schlagworte „Gnadenlos“, „Täuschend“ und „Elegant“ ziehen sofort die Aufmerksamkeit auf sich und bringen auf den Punkt, was dieses Insekt genau ausmacht. </p>
                <p className="text-left">Das Layout mit dem freigestellten Bild und den klar gegliederten Textfeldern macht die Doppelseite spannend und bietet einen übersichtlichen Einblick in die Besonderheiten der Orchideenmantis.</p>
            </div>

        </section>
    </>
)


export default WondrousNatureCS;