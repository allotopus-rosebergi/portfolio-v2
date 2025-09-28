import {InteractiveHoverButton} from "../InteractiveButton.jsx";
import {useEffect, useState} from "react";
import HeroHeader from "./HeroHeader.jsx";
import { gsap } from "gsap";

import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText,TextPlugin, ScrollTrigger);

function Hero () {
    const [setActive] = useState("");

    useEffect(() => {
        document.fonts.ready.then(() => {
            const splitAddText = new SplitText(".hero_info", { type: "lines", mask: "lines" });

            const split = new SplitText(".hero_text", {
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
                delay: 0.5,
            });

            gsap.from(
                splitAddText.lines,
                {
                    duration: 0.6,
                    delay: 1.1,
                    rotate: 30,
                    y: 100,
                    autoAlpha: 0,
                    opacity: 0,
                    ease: "expo.out",
                    stagger: {
                        amount: 0.2,
                        from: "start",
                    },
                    onComplete: () => {
                        ScrollTrigger.refresh();
                    }
                }
            );

            gsap.fromTo(".hero_button",
                { opacity: 0, y: 20},
                {
                    duration: 0.4,
                    delay: 1,
                    opacity: 1,
                    y: 0,
                    ease: "expo.out",
                    onComplete: () => {
                        gsap.set(".hero_button", { clearProps: "transform" });
                    }
                }
            );


            return () => {
                split.revert();
                splitAddText.revert();
            };
        });
    }, []);

    return (
        <>
            <HeroHeader />

            <div className="flex-1 flex flex-col justify-center items-center px-6 sm:px-16">
                <p className="hero_text text-3xl sm:text-6xl rubik-bold text-tiefbraun text-center">LANGFELDER</p>
                <h1 className="hero_text text-4xl sm:text-7xl text-center">BIO ERDÄPFEL</h1>
                <p className="hero_text hero_subtitle text-2xl sm:text-5xl text-center">
                    Beste Waldviertler Qualität seit 1992
                </p>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center gradient-bg px-6 sm:px-16 pb-6">
                <InteractiveHoverButton
                    className="mb-4 hero_button text-mandelweiss sm:text-mandelweisstransp border-mandelweiss sm:border-mandelweisstransp hover:text-mandelweiss hover:border-mandelweiss"
                    onClick={() => {
                        const kontaktSection = document.getElementById("kontakt");
                        if (kontaktSection) {
                            kontaktSection.scrollIntoView({ behavior: "smooth" });
                        }
                        setActive("kontakt");
                    }}
                >
                    Jetzt Kontakt aufnehmen <span>&#8203;</span> <span>&#8203;</span><span>&#8203;</span><span>&#8203;</span><span>&#8203;</span>
                </InteractiveHoverButton>

                <p className="hero_info w-full sm:w-1/3 text-mandelweiss text-center">
                    Seit Generationen bauen wir in Langfeld Erdäpfel mit Liebe und Sorgfalt an. Regional, nachhaltig und voller Geschmack.
                </p>
            </div>
        </>
    )
}

export default Hero