import {styles} from '../../styles.js';

function AboutUs() {
    return (
        <section id="ueber-uns">
            <div  className={styles.margin} >
                <div className="flex flex-col sm:flex-row gap-16">

                    <img src="src/assets/img/about_us.webp" alt="Über Uns" className="w-full sm:w-1/2 object-cover"/>

                    <div className="w-full sm:w-1/2 flex flex-col justify-center px-6">
                        <p className="cursive_highlight"> Willkommen! </p>
                        <h2> Wir sind die Familie Semper</h2>
                        <p> … ehemals Lassl. Schon seit 1992 dreht sich bei uns alles um Erdäpfel. Als Familienbetrieb arbeiten wir Seite an Seite und bringen Erfahrung und Begeisterung für die Landwirtschaft zusammen. </p>
                    </div>

                </div>
            </div>

            <div className={`${styles.marginY} mt-16`}>
                <img src="src/assets/img/about_us_full.webp" alt="Über uns Familienfoto" className="w-full object-cover"/>
            </div>
        </section>
    )
}

export default AboutUs