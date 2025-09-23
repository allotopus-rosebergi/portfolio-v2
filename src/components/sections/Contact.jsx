import {styles} from "../../styles.js";
import {useEffect} from "react";
import {SplitText} from "gsap/SplitText";
import {gsap} from "gsap";

function Contact (){
    useEffect(() => {
        const split = new SplitText('.para3', {type: "lines"});
        gsap.fromTo(split.lines,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.3,
                stagger: 0.1,
                delay: 0.3,
                scrollTrigger: {
                    trigger: ".para3",
                    start: "top 80%",
                    end: "top 55%",
                }
            }
        );

        gsap.fromTo('.title3',
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: ".para3",
                    start: "top 80%",
                    end: "top 55%",
                }
            }
        );
    }, []);
    return(
        <>
            <section id="kontakt">
                <div  className={`${styles.margin} my-8 sm:my-16`} >
                    <div className="flex flex-col sm:flex-row gap-16">

                        <img src="src/assets/img/verkaufsstand.webp" alt="Verkaufsstand" className="w-full sm:w-1/2 object-cover"/>

                        <div className="w-full sm:w-1/2 flex flex-col justify-center px-6">
                            <h2 className="title3"> Wie kommen Sie zu unseren Erdäpfeln? </h2>
                            <p className="para3"> Unsere Erdäpfel bekommen Sie direkt bei uns am Hof in Langfeld. Durch den Hofverkauf können Sie jederzeit, sofert es das Wetter erlaubt, vorbeikommen und sich die gewünschten Erdäpfel frisch abholen. </p>

                            <div className="para3 w-full flex flex-col justify-center pt-6 gap-6">
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