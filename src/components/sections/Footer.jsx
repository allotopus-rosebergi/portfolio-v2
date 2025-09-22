import {ReactComponent as LogoSvg} from "../../assets/svg/logo_full_light.svg"

function Footer() {
    return (
        <div className={` flex flex-col sm:flex-row w-full text-mandelweiss justify-between gap-6`}>
            <LogoSvg className="w-full sm:w-1/6 p-8 sm:p-0"/>
            <div>
                <p className="font-bold text-mandelweiss">Langfelder Bio Erdäpfel</p>
                <p>Langfeld 27</p>
                <p>3970 Weitra</p>
            </div>
            <div>
                <p className="font-bold text-mandelweiss"> Kontakt </p>
                <p> +43 664 1234567</p>
                <p> office@lorem-ipsum.at</p>
            </div>
            <div>
                <p> Impressum </p>
                <p> Datenschutz </p>
            </div>
            <div>
                <p> @2025 Alle Rechte vorbehalten. </p>
                <p> Design: Marius Lassl </p>
            </div>
        </div>
    )
}

export default Footer