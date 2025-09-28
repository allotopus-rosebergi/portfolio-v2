import {ReactComponent as LogoSvg} from "../../assets/svg/logo_full_light.svg"
import bio_logo from "../../assets/img/bio_logo.png"
import {styles} from "../../styles.js";

function Footer() {
    return (
        <div className={`bg-tiefbraun`}>
            <div className={`max-w-[2000px] mx-auto  flex flex-col sm:flex-row w-full text-mandelweiss justify-between gap-6 ${styles.padding} `}>
                <LogoSvg className="w-full sm:w-1/6 p-8 sm:p-0"/>
                <div>
                    <p className="font-bold text-mandelweiss">Langfelder Bio Erdäpfel</p>
                    <p>Langfeld 27</p>
                    <p>3970 Weitra</p>
                </div>
                <div>
                    <p className="font-bold text-mandelweiss"> Kontakt </p>
                    <p> 0664 7952710</p>
                    <p> 0664 3200339</p>
                    <p> daniela.semper1@gmx.at</p>
                </div>
                <div className="flex flex-col">
                    <a href="#/impressum" className="hover:text-goldgelb" aria-label="Impressum"> Impressum </a>
                    <a href="#/datenschutz" className="hover:text-goldgelb" aria-label="Datenschutz"> Datenschutz </a>
                </div>
                <div>
                    <p> @2025 Alle Rechte vorbehalten. </p>
                    <a href="https://marius-lassl.com" target="_blank" aria-label="Portfolio Marius Lassl" className="underline underline-offset-4 hover:text-goldgelb"> Design: Marius Lassl </a>
                </div>
                <a href="https://www.bio-austria.at" aria-label="Bio Austria" target="_blank" className="w-1/3 sm:w-1/12 h-full">
                    <img src={bio_logo} alt="Bio Austria Logo" className=""/>
                </a>
            </div>
        </div>
    )
}

export default Footer