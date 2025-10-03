import {styles} from "../../styles.js";
import {SplitText} from "gsap/SplitText";
import {skills} from "../../constants/index.jsx"
import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {TextPlugin} from "gsap/TextPlugin";
import {useEffect} from "react";
gsap.registerPlugin(TextPlugin, ScrollTrigger);


function Skills (){
    useEffect(() => {
        document.fonts.ready.then(() => {
            const split = new SplitText(".skillTitle", {
                type: "lines",
                mask: "lines",
                linesClass: "lineChild"
            });

            gsap.from(split.lines, {
                duration: 1,
                y: 100,
                autoAlpha: 0,
                ease: "expo.out",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: ".skillTitle",
                    start: "top 95%",
                }
            });


            ScrollTrigger.matchMedia({
                "(min-width: 1024px)": function() {
                    gsap.fromTo(".skill",
                        { y: 0, opacity: 0 },
                        {
                            opacity: 1,
                            y: (i) => i === 0 ? -90 : i === 1 ? -20 : 70,

                            stagger: 0.05,
                            scrollTrigger: {
                                trigger: ".skills-wrapper",
                                scrub: true,
                                start: "top 95%",
                                end: "top 20%",
                            }
                        }
                    );
                },
                "(max-width: 1023px)": function() {
                    gsap.fromTo(".skill",
                        { y: 0 },
                        {
                            y: () => -35,
                            scrollTrigger: {
                                trigger: ".skills-wrapper",
                                scrub: true,
                                start: "top 95%",
                                end: "top 30%",
                            }
                        }
                    );
                }

            });

        });
    }, []);
    return(
        <>
            <section id="skills" className="py-8">
                <div  className={`${styles.margin} my-8 sm:my-16`} >
                    <h2 className="text-center pb-[6rem] skillTitle"> Meine Stärken </h2>
                    <div className="flex flex-col lg:flex-row gap-12 skills-wrapper">
                        {skills.map((skill) => (
                            <div key={skill.id} className="w-full lg:w-1/3 skill">
                                <h3>{skill.number}</h3>
                                <h3>{skill.title}</h3>
                                <p className="text-gray">{skill.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills