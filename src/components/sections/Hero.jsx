import AnimatedButton from "../AnimatedButton.jsx";
import {useState} from "react";
import { styles } from '../../styles.js';


function Hero () {
    const [setActive] = useState("");

    return (
        <>
            <div className="h-1/2 w-full flex justify-end items-center flex-col">
                <p className="text-tiefbraun mb-2"> seit 1992 </p>
                <h1 className="text-3xl sm:text-6xl"> LANGFELDER </h1>
                <h1 className="text-4xl sm:text-7xl"> BIO ERDÄPFEL</h1>
                <p className="hero_subtitle text-2xl sm:text-5xl"> Aus der Region mit den besten Erdäpfel</p>
            </div>



            <div className={`${styles.paddingX} h-1/2 w-full flex justify-center items-center flex-col gradient-bg`}>
                <AnimatedButton primary rounded className="mb-4" onClick={() => {
                    const kontaktSection = document.getElementById("kontakt");
                    if (kontaktSection) {
                        kontaktSection.scrollIntoView({ behavior: "smooth" });
                    }
                    setActive("kontakt");
                }}>
                    Jetzt Kontakt aufnehmen
                </AnimatedButton>

                <p className="w-full sm:w-1/3 text-mandelweiss text-center"> Seit Generationen bauen wir in Langfeld Erdäpfel mit Liebe und Sorgfalt an. Regional, nachhaltig und voller Geschmack.</p>
            </div>
        </>
    )
}

export default Hero