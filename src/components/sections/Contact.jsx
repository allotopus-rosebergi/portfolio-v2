import {styles} from "../../styles.js";

function Contact (){
    return(
        <>
            <section id="kontakt">
                <div  className={`${styles.margin} my-16`} >
                    <div className="flex flex-col sm:flex-row gap-16">

                        <img src="src/assets/img/verkaufsstand.webp" alt="Verkaufsstand" className="w-full sm:w-1/2 object-cover"/>

                        <div className="w-full sm:w-1/2 flex flex-col justify-center px-6">
                            <h2> Wie kommen Sie zu unseren Erdäpfeln? </h2>
                            <p> Unsere Erdäpfel bekommen Sie direkt bei uns am Hof in Langfeld. Durch den Hofverkauf können Sie jederzeit, sofert es das Wetter erlaubt, vorbeikommen und sich die gewünschten Erdäpfel frisch abholen. </p>

                            <div className=" w-full flex flex-col justify-center pt-6 gap-6">
                                <div>
                                    <p> Rufen Sie uns an </p>
                                    <p className="highlight text-lg"> +43 664 1234567 </p>
                                </div>

                                <div>
                                    <p> Senden Sie uns eine E-Mail </p>
                                    <p className="highlight text-lg"> office@lorem-ipsum.at </p>
                                </div>

                                <div>
                                    <p> Besuchen Sie uns </p>
                                    <p className="highlight text-lg"> Langfeld 27 </p>
                                    <p className="highlight text-lg"> 3970 Weitra </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact