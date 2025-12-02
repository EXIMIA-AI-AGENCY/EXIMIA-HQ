import { motion } from 'motion/react';

export function FloatingParticles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 10 + 20,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="relative"
            animate={{ rotate: 360 }}
            transition={{
              duration: particle.duration / 2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Particle core */}
            <div
              className="rounded-full bg-gradient-to-br from-cyan-400 to-purple-500"
              style={{
                width: particle.size,
                height: particle.size,
                boxShadow: `0 0 ${particle.size * 4}px rgba(6, 182, 212, 0.6)`,
              }}
            />
            
            {/* Particle trail */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full rounded-full bg-cyan-400/30 blur-sm"
              animate={{
                scale: [1, 2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
