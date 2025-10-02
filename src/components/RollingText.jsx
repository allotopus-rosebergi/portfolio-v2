'use client';

import * as React from 'react';
import { motion } from 'motion/react';

const ENTRY_ANIMATION = {
    initial: { rotateX: 0 },
    animate: { rotateX: 90 },
};

const EXIT_ANIMATION = {
    initial: { rotateX: 90 },
    animate: { rotateX: 0 },
};

const formatCharacter = (char) => (char === ' ' ? '\u00A0' : char);

function RollingText({
                         transition = { duration: 0.3, delay: 0.02, ease: 'easeOut' },
                         text,
                         ...props
                     }) {
    const [hoverCount, setHoverCount] = React.useState(0);
    const [hasMounted, setHasMounted] = React.useState(false);

    React.useEffect(() => {
        setHasMounted(true);
    }, []);

    const characters = React.useMemo(() => text.split(''), [text]);

    const handleMouseEnter = () => {
        setHoverCount((c) => c + 1); // trigger fresh animation
    };

    return (
        <span
            data-slot="rolling-text"
            {...props}
            onMouseEnter={handleMouseEnter}
            className="cursor-pointer inline-block p-2"
        >
      {characters.map((char, idx) => (
          <span
              key={idx}
              className="relative inline-block perspective-[9999999px] transform-3d w-auto"
              aria-hidden="true"
          >
          {/* ENTRY */}
              <motion.span
                  key={`entry-${hoverCount}-${idx}`}
                  className="absolute inline-block backface-hidden origin-[50%_25%]"
                  initial={ENTRY_ANIMATION.initial}
                  animate={
                      hasMounted && hoverCount > 0
                          ? ENTRY_ANIMATION.animate
                          : undefined
                  }
                  transition={{
                      ...transition,
                      delay: idx * (transition?.delay ?? 0),
                  }}
              >
            {formatCharacter(char)}
          </motion.span>

              {/* EXIT */}
              <motion.span
                  key={`exit-${hoverCount}-${idx}`}
                  className="absolute inline-block backface-hidden origin-[50%_100%]"
                  initial={EXIT_ANIMATION.initial}
                  animate={
                      hasMounted && hoverCount > 0
                          ? EXIT_ANIMATION.animate
                          : undefined
                  }
                  transition={{
                      ...transition,
                      delay: idx * (transition?.delay ?? 0) + 0.15,
                  }}
              >
            {formatCharacter(char)}
          </motion.span>

          <span className="invisible">{formatCharacter(char)}</span>
        </span>
      ))}

            <span className="sr-only">{text}</span>
    </span>
    );
}

export { RollingText };
