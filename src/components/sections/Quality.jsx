import {styles} from "../../styles.js";

function Quality() {
    return (
        <section id="qualitaet">
            <div  className={styles.margin} >
                <div className="flex flex-col sm:flex-row gap-16">

                    <img src="src/assets/img/kartoffeln.webp" alt="Kartoffeln" className="w-full sm:w-1/2 object-cover"/>

                    <div className="w-full sm:w-1/2 flex flex-col justify-center px-6">
                        <h2> Was macht unsere Erdäpfel so besonders? </h2>
                        <p> Unsere Erdäpfel wachsen im Waldviertel in Langfeld. Die Region ist bekannt für ihren <span className="highlight"> nährstoffreichen Boden </span> und das <span className="highlight"> ideale Klima </span>. Durch die mineralhaltige Erde und die sorgfältige Bewirtschaftung entstehen Erdäpfel mit einzigartigem Geschmack, hoher Qualität und langer Haltbarkeit. </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Quality