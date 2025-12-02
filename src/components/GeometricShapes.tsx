import { motion } from 'motion/react';

export function GeometricShapes() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Large circle - top right */}
            <motion.div
                className="absolute -top-40 -right-40 w-80 h-80 border border-white/5 rounded-full"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.05, 0.1, 0.05],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Medium circle - bottom left */}
            <motion.div
                className="absolute -bottom-32 -left-32 w-64 h-64 border border-white/5 rounded-full"
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.03, 0.08, 0.03],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
            />

            {/* Small hexagon - center */}
            <motion.svg
                className="absolute top-1/4 right-1/4 w-32 h-32"
                viewBox="0 0 100 100"
                animate={{
                    rotate: [0, 360],
                    opacity: [0.03, 0.06, 0.03],
                }}
                transition={{
                    rotate: {
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    },
                    opacity: {
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                }}
            >
                <polygon
                    points="50 5, 90 25, 90 75, 50 95, 10 75, 10 25"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.1)"
                    strokeWidth="0.5"
                />
            </motion.svg>

            {/* Triangle - top left */}
            <motion.svg
                className="absolute top-1/3 left-1/4 w-24 h-24"
                viewBox="0 0 100 100"
                animate={{
                    rotate: [0, -360],
                    opacity: [0.02, 0.05, 0.02],
                }}
                transition={{
                    rotate: {
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    },
                    opacity: {
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                }}
            >
                <polygon
                    points="50 10, 90 90, 10 90"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.08)"
                    strokeWidth="0.5"
                />
            </motion.svg>

            {/* Vertical lines - accent */}
            <motion.div
                className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"
                animate={{
                    opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute right-1/3 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"
                animate={{
                    opacity: [0.3, 0.1, 0.3],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
            />
        </div>
    );
}
