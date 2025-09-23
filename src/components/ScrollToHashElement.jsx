import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHashElement() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            // remove the "#" and find the element
            const id = hash.replace("#", "");
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            // no hash → scroll to top
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [pathname, hash]);

    return null;
}

export default ScrollToHashElement;
