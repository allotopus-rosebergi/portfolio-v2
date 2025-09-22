import React, { useState } from 'react';
import { styles } from '../../styles.js';
import { navLinks } from '../../constants';
import { ReactComponent as LogoSvg } from '../../assets/svg/logo_vert.svg';

function Header() {
    const [active, setActive] = useState("");

    return (
        <nav className={`${styles.paddingX} py-8 w-full flex justify-between fixed top-0 z-20`}>
            <a
                href="#top"
                className="flex items-center gap-2"
                onClick={() => {
                    setActive("");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }}
            >
                <LogoSvg className="w-2/3" />
            </a>

            <ul className="list-none hidden sm:flex flex-row items-center gap-10">
                {navLinks.map((link) => (
                    <li
                        key={link.id}
                        className={`${
                            active === link.slug ? "text-taubengrau" : "text-tiefbraun"
                        }  cursor-pointer transition-transform duration-300 hover:scale-125`}
                        onClick={() => setActive(link.slug)}
                    >
                        <a href={`#${link.slug}`}>
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Header;
