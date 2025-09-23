import PropTypes from "prop-types";
import classNames from "classnames";
import { useRef, useEffect } from "react";
import gsap from "gsap";

function AnimatedButton({
                            children,
                            primary,
                            secondary,
                            simple_w,
                            simple_b,
                            outline,
                            rounded,
                            className,
                            ...rest
                        }) {
    const buttonRef = useRef(null);
    const circleRef = useRef(null);

    useEffect(() => {
        const btn = buttonRef.current;
        const circle = circleRef.current;

        const moveCircle = (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            gsap.set(circle, { left: x, top: y });
        };

        const scaleUp = () => {
            gsap.to(circle, { scale: 1, duration: 0.6, ease: "power2.out" });
        };

        const scaleDown = () => {
            gsap.to(circle, { scale: 0, duration: 0.6, ease: "power2.in" });
        };

        btn.addEventListener("mousemove", moveCircle);
        btn.addEventListener("mouseenter", scaleUp);
        btn.addEventListener("mouseleave", scaleDown);

        return () => {
            btn.removeEventListener("mousemove", moveCircle);
            btn.removeEventListener("mouseenter", scaleUp);
            btn.removeEventListener("mouseleave", scaleDown);
        };
    }, []);

    const classes = classNames(
        "button relative px-12 py-1.5 border duration-300 overflow-hidden font-sans",
        {
            "border-mandelweiss text-mandelweiss backdrop-blur-xs": primary && !outline,
            "border-color-gray bg-color-gray text-color-light": secondary && !outline,
            "text-color-light": simple_w && !outline,
            "text-color-dark": simple_b && !outline,

            "bg-white": outline,
            "text-color-dark border-color-dark bg-color-light hover:text-color-light": outline && primary,
            "text-gray-900 border-gray-900": outline && secondary,
            "hover:text-color-dark": !outline,
            "rounded-full": rounded,
        },
        className
    );

    return (
        <button ref={buttonRef} className={classes} {...rest}>
            <span className="relative z-10">{children}</span>
            <div
                ref={circleRef}
                className={classNames(
                    "circle absolute rounded-full z-0 pointer-events-none",
                    {
                        "bg-color-dark": outline,
                        "bg-goldgelb opacity-50 backdrop-blur-2xl": !outline,
                    }
                )}
                style={{
                    width: "170%",
                    aspectRatio: "1",
                    transform: "translate(-50%, -50%) scale(0)",
                    transformOrigin: "0% 0%",
                }}
            ></div>
        </button>
    );
}

export default AnimatedButton;

AnimatedButton.propTypes = {
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    simple_w: PropTypes.bool,
    simple_b: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    className: PropTypes.string,

    checkVariationValue: function ({
                                       primary,
                                       secondary,
                                       simple_w,
                                       simple_b,
                                   }) {
        const count =
            Number(!!primary) +
            Number(!!secondary) +
            Number(!!simple_w) +
            Number(!!simple_b);
        if (count > 1) {
            return new Error(
                "Only one of primary, secondary, simple_w, or simple_b can be true."
            );
        }
    },
};
