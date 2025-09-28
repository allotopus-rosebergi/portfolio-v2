import { HashLink } from 'react-router-hash-link';

import React, { useState, useEffect } from "react";
import { styles } from "../../styles.js";
import { navLinks } from "../../constants/index.jsx";
import { ReactComponent as LogoSvg } from "../../assets/svg/logo_vert.svg";
import {TextAlignEnd, X} from "lucide-react";


function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [active, setActive] = useState("");
    const [showHeader, setShowHeader] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);


    useEffect(() => {
        const threshold = 10;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < window.innerHeight) {
                setShowHeader(false);
            } else {
                if (currentScrollY > lastScrollY) {
                    setShowHeader(false);
                } else if (lastScrollY - currentScrollY > threshold) {
                     setShowHeader(true);
                }
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <>
            <nav
                className={`${styles.paddingX} 
                py-8 w-full  backdrop-blur-sm drop-shadow-md
                bg-gradient-to-tl from-transparent fixed to-mandelweiss
                top-0 z-20 transition-transform duration-300 
                ${
                    showHeader ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <div className="max-w-[2000px] mx-auto w-full flex justify-between ">
                    <HashLink
                        smooth to="/#start"
                        className="flex items-center gap-2"
                        onClick={() => {
                            setActive("");
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        aria-label="Zurück zum Start"
                    >
                        <LogoSvg className="w-2/3 " />
                    </HashLink>

                    <ul className="list-none hidden sm:flex flex-row items-center gap-10">
                        {navLinks.map((link) => (
                            <li
                                key={link.id}
                                className={`${
                                    active === link.slug ? "text-tiefbraun" : "text-tiefbraun"
                                } cursor-pointer transition-transform duration-300 hover:scale-125 hover:rotate-2 hover:border-b-[1px]`}
                                onClick={() => setActive(link.slug)}
                            >
                                <HashLink smooth to={`/#${link.slug}`}>{link.title}</HashLink>
                            </li>
                        ))}
                    </ul>

                    <button
                        className="sm:hidden text-tiefbraun"
                        onClick={() => setDrawerOpen(true)}
                        aria-label="Menü öffnen"
                    >
                        <TextAlignEnd size={34} />
                    </button>
                </div>
            </nav>

            {drawerOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30"
                    onClick={() => setDrawerOpen(false)}
                />
            )}

            <div
                className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-mandelweiss shadow-lg z-40 transform transition-transform duration-300
                ${drawerOpen ? "translate-x-0 visible opacity-100" : "translate-x-full invisible opacity-0"}
              `}
            >
                <div className="w-full flex justify-between items-center p-6">
                    <span className="text-2xl font-bold"> Menü </span>
                    <button onClick={() => setDrawerOpen(false)}
                            aria-label="Menü schließen">
                        <X size={32} className="text-taubengrau" />
                    </button>
                </div>

                <ul className="flex flex-col gap-2 p-6">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <HashLink
                                smooth to={`/#${link.slug}`}
                                className={`${
                                    active === link.slug ? "text-tiefbraun" : "text-tiefbraun"
                                } block text-4xl`}
                                onClick={() => {
                                    setActive(link.slug);
                                    setDrawerOpen(false);
                                }}
                            >
                                {link.title}
                            </HashLink>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Header;
