import {useEffect, useState} from "react";
import Navigation from "./Navigation.jsx";
import { gsap } from "gsap";

import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import AnimatedButton from "../AnimatedButton.jsx";

import PortraitImg from "../../assets/img/portrait.webp"

gsap.registerPlugin(SplitText,TextPlugin, ScrollTrigger);

function Hero () {
    const [setActive] = useState("");

    useEffect(() => {
        document.fonts.ready.then(() => {
            const split = new SplitText(".hero_text", {
                type: "lines",
                mask: "lines",
                linesClass: "lineChild"
            });

            let tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });

// Titel (Split-Lines, mask-Effekt)
            tl.from(split.lines, {
                duration: 1,
                y: 100,
                autoAlpha: 0,
                stagger: 0.15
            });

            tl.fromTo(".hero_info",
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.6 },
            );

            tl.fromTo(".hero_button",
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    onComplete: () => gsap.set(".hero_button", { clearProps: "transform" })
                },
                "-=0.8"
            );


            return () => {
                split.revert();
            };
        });
    }, []);

    return (
        <>
            <Navigation />

            <div className="flex flex-col sm:flex-row h-screen ">
                <div className="flex-1 flex flex-col justify-center px-6 sm:px-16 w-full sm:w-1/2">
                    <p className="hero_text text-light text-left mono w-full">GRAFIKDESIGN | WEBENTWICKLUNG | FOTOGRAFIE</p>
                    <h1 className="hero_text text-4xl sm:text-9xl text-left w-full py-4">Marius Lassl</h1>
                    <p className="hero_info text-left w-full">
                        Ich kombiniere Grafikdesign, Webentwicklung und Fotografie, um Projekte zu schaffen, die individuell, klar und von hoher Qualität sind. Dabei lasse ich mich von der Vielfalt der Natur inspirieren und lege Wert auf Details, die jedes Werk einzigartig machen.
                    </p>
                    <div className="w-full pt-8 flex  justify-center sm:justify-start">
                        <AnimatedButton
                            primary rounded
                            className="hero_button"
                            onClick={() => {
                                const kontaktSection = document.getElementById("contact");
                                if (kontaktSection) {
                                    kontaktSection.scrollIntoView({ behavior: "smooth" });
                                }
                                setActive("kontakt");
                            }}
                        >
                            Jetzt Kontakt aufnehmen
                        </AnimatedButton>
                    </div>
                </div>
                <img src={PortraitImg} alt="Marius Lassl Portrait" className="w-full sm:w-1/2 px-0 sm:px-8 object-contain h-full object-bottom"/>
            </div>
        </>
    )
}

export default Hero