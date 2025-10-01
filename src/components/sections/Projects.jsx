import {styles} from "../../styles.js";
import {useEffect} from "react";
import {SplitText} from "gsap/SplitText";
import {gsap} from "gsap";

function Contact (){
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