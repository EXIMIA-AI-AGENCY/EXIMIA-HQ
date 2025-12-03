import { motion } from 'motion/react';

export function MetricsBar() {
  const stats = [

    { label: 'Marcas Globales', value: '230+' },
    { label: 'Petabytes Procesados', value: '12.4' },
    { label: 'Países Activos', value: '89' },
  ];

  return (
    <section className="relative py-16 px-6 border-y border-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="text-4xl text-white mb-2 font-mono">{stat.value}</div>
              <div className="text-sm text-slate-500 tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
