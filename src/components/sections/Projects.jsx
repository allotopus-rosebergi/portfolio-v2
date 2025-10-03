import {styles} from "../../styles.js";
import {SplitText} from "gsap/SplitText";
import {projects} from "../../constants/index.jsx";
import CustomCursor from "../CustomCursor.jsx";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {TextPlugin} from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin, ScrollTrigger);


function Projects (){
    const [cursorEnabled, setCursorEnabled] = useState(false);
    useEffect(() => {
        document.fonts.ready.then(() => {
            const split = new SplitText(".projectTitle", {
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
                    trigger: ".projectTitle",
                    start: "top 95%",
                }
            });


            gsap.fromTo(".project",
                { y: 100, opacity: 0, scale: 0.93 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".projectWrapper",
                        start: "top 90%",
                        scrub: true,
                    }
                }
            );
        });
    }, []);

    return(
        <>
            <section id="projects" className="py-8">
                <CustomCursor enabled={cursorEnabled} />
                <div  className={`${styles.margin} my-24 sm:my-32`} >
                    <h2 className="text-center mb-6 projectTitle"> Ausgewählte Arbeiten </h2>
                    <p className="text-center mb-[4rem] projectTitle"> Um näheres zu erfahren, lässt sich jedes Projekt anklicken. </p>

                    <div className="w-full lg:w-3/4 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-16 projectWrapper">
                        {projects.map((project) => (
                            <Link
                                to={`/${project.slug}`}
                                key={project.id} className="w-full hover:cursor-none project"
                                 onMouseEnter={() => {
                                     console.log("Hover start");
                                     setCursorEnabled(true);
                                 }}
                                 onMouseLeave={() => {
                                     console.log("Hover end");
                                     setCursorEnabled(false);
                                 }}>

                                <img src={project.img} alt={project.alt} className="aspect-square w-full mb-4 transition-transform duration-500 hover:scale-105" />
                                <h3>{project.title}</h3>
                                <p className="mono text-gray">{project.tags}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects