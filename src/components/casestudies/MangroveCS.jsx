import MangroveCanImg from "../../assets/projects/mangrove/can_front_coutout.webp"
import MangroveCanLabelImg from "../../assets/projects/mangrove/can_label_cutout.webp"
import macbookImg from "../../assets/projects/mangrove/mangrove_mac.webp";


const MangroveCS = (
    <>
        <section>
            <p className="mono text-accent text-left sm:text-center"> Wiedererkennbar. Auffällig. Ambitioniert.</p>
            <h2 className="mb-4 sm:mb-12 text-left sm:text-center font-semibold">01 Das Verpackungs-Design</h2>

            <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.2fr_1fr] gap-6 items-center justify-center">
                <div className="flex h-full items-start sm:py-32">
                    <p>
                        Die gelbe, holzähnliche Hintergrundstruktur verleiht
                        den Dosen in Kombination mit der Schlange einen hohen
                        Wiedererkennungswert.
                    </p>
                </div>

                <img
                    src={MangroveCanImg}
                    alt="Mangrove Energy Dose"
                    className="w-full h-auto object-contain justify-self-center py-4"
                    loading="lazy"
                />

                <div className="flex h-full items-end">
                    <p className="text-left sm:text-right sm:py-32">
                        Die Typografie ist bewusst schlicht gehalten und
                        setzt auf eine moderne Sans-Serif-Schrift, um das
                        Design nicht zu überladen.
                    </p>
                </div>
            </div>

            <div className=" mt-32 flex flex-col sm:flex-row w-full gap-6 items-center">
                <img
                    src={MangroveCanLabelImg}
                    alt="Mangrove Energy Dose Verpackungsdesign"
                    className="w-full sm:w-2/3 h-auto object-contain justify-self-center py-4"
                    loading="lazy"
                />

                <div className="flex h-full sm:py-32 gap-6 flex-col">
                    <p>Die Schlange steht für Kraft, Ausdauer und Präsenz. Werte, die auch MANGROVE verkörpert.</p>
                    <p>Die Mangroven-Nachtbaumnatter (Boiga dendrophila) ist Namensgeberin von MANGROVE und ziert jede Dose. Ihr Lebensraum in den Mangrovenbäumen spiegelt sich in der holzähnlichen Struktur wider.
                    </p>
                </div>
            </div>
        </section>

        <section className="mt-48">
            <p className="mono text-accent text-left sm:text-center"> WordPress mit WooCommerce.</p>
            <h2 className="mb-4 sm:mb-12 text-left sm:text-center font-semibold">02 Der Online-Shop</h2>


            <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr_1fr] gap-6 items-center justify-center">
                <div className="flex h-full items-start sm:py-32">
                    <p>
                        Das Highlight der MANGROVE-Website ist der integrierte Online-Shop, der eine einfache und intuitive Bestellung der Produkte ermöglicht.
                    </p>
                </div>

                <img
                    src={macbookImg}
                    alt="Online-Shop Mangrove Energy"
                    className="w-full h-auto object-cover justify-self-center py-4"
                    loading="lazy"
                />

                <div className="flex h-full items-end sm:py-32">
                    <p className="text-left sm:text-right">
                        Ergänzt wird die Seite durch einen Blog, der regelmäßig Einblicke in Marke und Produktwelt gibt.
                    </p>
                </div>
            </div>
        </section>
    </>
)


export default MangroveCS;