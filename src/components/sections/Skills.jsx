import {styles} from "../../styles.js";
import {useEffect} from "react";
import {SplitText} from "gsap/SplitText";
import {gsap} from "gsap";

function Contact (){
    useEffect(() => {
        document.fonts.ready.then(() => {
            const split = SplitText.create('.info3', {type: "lines", mask:"lines"});

            gsap.fromTo(split.lines,
                {opacity: 0, y: 20},
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    delay: 0.5,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: ".para3",
                        start: "top 80%",
                        end: "top 20%",
                    }
                }
            );

            gsap.fromTo(".para3",
                {opacity: 0, y: 20},
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    delay: 0.3,
                    stagger: 0.02,
                    scrollTrigger: {
                        trigger: ".para3",
                        start: "top 80%",
                        end: "top 20%",
                    }
                }
            );

            gsap.fromTo('.title3',
                {opacity: 0, y: 20},
                {
                    opacity: 1,
                    y: 0,
                    ease: "power1.inOut",
                    scrollTrigger: {
                        trigger: ".para3",
                        start: "top 80%",
                        end: "top 20%",
                    }
                }
            );
        });
    }, []);
    return(
        <>
            <section id="skills">
                <div  className={`${styles.margin} mt-8 sm:my-16`} >
                    Skills
                </div>
            </section>
        </>
    )
}

export default Contact