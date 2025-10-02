import { HashLink } from 'react-router-hash-link';
import { RollingText } from '../RollingText.jsx';
import React, { useState } from "react";
import { styles } from "../../styles.js";
import { navLinks } from "../../constants/index.jsx";
import {TextAlignEnd, X} from "lucide-react";

function Navigation() {
    const [active, setActive] = useState("");
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <>
            <nav
                className={`${styles.paddingX} py-8 w-full top-0 z-20 transition-transform duration-300 relative sm:absolute flex flex-row justify-end sm:justify-center`}
            >
                    <ul className="list-none hidden sm:flex flex-row items-center gap-10">
                        {navLinks.map((link) => (
                            <li
                                key={link.id}
                                className={`${
                                    active === link.slug ? "text-light" : "text-light"
                                } cursor-pointer font-bold`}
                                onClick={() => setActive(link.slug)}
                            >
                                <HashLink smooth to={`/#${link.slug}`}><RollingText text={link.title}></RollingText></HashLink>
                            </li>
                        ))}
                    </ul>

                    <button
                        className="sm:hidden "
                        onClick={() => setDrawerOpen(true)}
                        aria-label="Menü öffnen"
                    >
                        <TextAlignEnd size={34}/>
                    </button>
            </nav>

            {drawerOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30"
                    onClick={() => setDrawerOpen(false)}
                />
            )}

            <div
                className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-dark shadow-lg z-40 transform transition-transform duration-300
                ${drawerOpen ? "translate-x-0 visible opacity-100" : "translate-x-full invisible opacity-0"}
              `}
            >
                <div className="w-full flex justify-between items-center p-6">
                    <span className="text-2xl font-bold text-gray"> Menü </span>
                    <button onClick={() => setDrawerOpen(false)} aria-label="Menü schließen">
                        <X size={32} className="text-gray" />
                    </button>
                </div>

                <ul className="flex flex-col gap-2 p-6">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <HashLink
                                smooth to={`/#${link.slug}`}
                                className={`${
                                    active === link.slug ? "text-light" : "text-light"
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

export default Navigation;
