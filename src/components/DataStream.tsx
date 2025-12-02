import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const dataPoints = [
  'Analizando patrones comportamentales...',
  'Procesando 2.4M consultas/s...',
  'Sincronizando nodos APAC...',
  'Optimizando rutas de distribución...',
  'Ejecutando modelos predictivos...',
  'Agregando métricas en tiempo real...',
];

export function DataStream() {
  const [visibleData, setVisibleData] = useState<string[]>([]);

  useEffect(() => {
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      setVisibleData((prev) => {
        const newData = [...prev, dataPoints[currentIndex % dataPoints.length]];
        return newData.slice(-3); // Keep only last 3
      });
      currentIndex++;
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-24 mb-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-transparent" />
      
      <div className="relative space-y-2">
        {visibleData.map((data, i) => (
          <motion.div
            key={`${data}-${i}`}
            initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
            animate={{ opacity: 1 - i * 0.3, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-2 h-2 border border-cyan-400 border-t-transparent rounded-full"
              />
              <span className="text-sm text-cyan-400/70 font-mono">{data}</span>
              <div className="flex gap-0.5">
                {[...Array(3)].map((_, j) => (
                  <motion.div
                    key={j}
                    className="w-0.5 h-3 bg-cyan-500/50"
                    animate={{
                      height: [8, 12, 8],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: j * 0.2,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
