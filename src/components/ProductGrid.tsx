import { motion, useMotionValue, useTransform } from 'motion/react';
import { Shield, Zap, Layers, ArrowUpRight, TrendingUp, Lock, Sparkles } from 'lucide-react';
import { useState } from 'react';

export function ProductGrid() {
  const products = [
    {
      id: 'gov',
      name: 'EXIMIA GOV',
      category: 'DEFENSA & GOBIERNO',
      description: 'Plataforma de análisis de inteligencia para operaciones soberanas. Decisiones críticas con datos clasificados.',
      features: [
        'Análisis de datos multi-fuente',
        'Seguridad nivel gubernamental',
        'Cumplimiento normativo total',
        'Infraestructura air-gapped',
      ],
      metrics: {
        uptime: '99.99%',
        classification: 'SECRET',
        deployments: '47',
      },
      stats: [
        { label: 'Consultas/día', value: '2.4M', trend: '+12%' },
        { label: 'Tiempo Respuesta', value: '8ms', trend: '-15%' },
        { label: 'Precisión', value: '99.7%', trend: '+2%' },
      ],
      color: 'cyan',
      Icon: Shield,
      url: 'https://eximiagov.com',
    },
    {
      id: 'agency',
      name: 'EXIMIA AGENCY',
      category: 'MARKETING & CRECIMIENTO',
      description: 'Automatización de marketing militar. Contenido generado y distribuido a escala con IA autónoma.',
      features: [
        'Generación de contenido multicanal',
        'Optimización predictiva de campañas',
        'Segmentación de audiencias en tiempo real',
        'ROI tracking automatizado',
      ],
      metrics: {
        brands: '230+',
        content: '1.2M/mes',
        conversion: '+340%',
      },
      stats: [
        { label: 'Contenido Generado', value: '847K', trend: '+89%' },
        { label: 'Tasa Conversión', value: '18.4%', trend: '+340%' },
        { label: 'ROI Promedio', value: '6.8x', trend: '+125%' },
      ],
      color: 'purple',
      Icon: Zap,
      url: 'https://eximia.agency',
    },
    {
      id: 'platform',
      name: 'EXIMIA AI PLATFORM',
      category: 'ENTERPRISE & SAAS',
      description: 'Fuerza laboral sintética bajo demanda. Agentes de IA especializados desplegables en minutos.',
      features: [
        'Biblioteca de 50+ agentes especializados',
        'API empresarial con SDKs completos',
        'Escalamiento automático de recursos',
        'Monitoreo y analytics en tiempo real',
      ],
      metrics: {
        pricing: '$30/mes',
        agents: '50+',
        uptime: '99.98%',
      },
      stats: [
        { label: 'Agentes Activos', value: '12.4K', trend: '+234%' },
        { label: 'Tareas/hora', value: '840K', trend: '+156%' },
        { label: 'Ahorro Costos', value: '78%', trend: '+12%' },
      ],
      color: 'indigo',
      Icon: Layers,
      url: 'https://ai.eximia.agency',
      featured: true,
    },
  ];

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-6 bg-cyan-500" />
            <span className="text-slate-500 tracking-[0.3em] text-sm">PRODUCTOS</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-white tracking-tight mb-4">
            Tres Pilares. Una Infraestructura.
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Soluciones especializadas construidas sobre la misma base tecnológica.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, index }: { product: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-100, 100], [5, -5]);
  const rotateY = useTransform(mouseX, [-100, 100], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const colorMap = {
    cyan: {
      border: 'border-cyan-500/30',
      borderGlow: 'shadow-[0_0_30px_rgba(6,182,212,0.3)]',
      bg: 'bg-cyan-500/5',
      gradient: 'from-cyan-500/20 via-transparent to-transparent',
      text: 'text-cyan-500',
      dot: 'bg-cyan-500',
    },
    purple: {
      border: 'border-purple-500/30',
      borderGlow: 'shadow-[0_0_30px_rgba(139,92,246,0.3)]',
      bg: 'bg-purple-500/5',
      gradient: 'from-purple-500/20 via-transparent to-transparent',
      text: 'text-purple-500',
      dot: 'bg-purple-500',
    },
    indigo: {
      border: 'border-indigo-500/30',
      borderGlow: 'shadow-[0_0_30px_rgba(99,102,241,0.3)]',
      bg: 'bg-indigo-500/5',
      gradient: 'from-indigo-500/20 via-transparent to-transparent',
      text: 'text-indigo-500',
      dot: 'bg-indigo-500',
    },
  };

  const colors = colorMap[product.color as keyof typeof colorMap];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`group relative border ${colors.border} bg-slate-900/50 backdrop-blur-sm transition-all duration-500 ${
        isHovered ? colors.borderGlow : ''
      }`}
    >
      {/* Animated gradient background */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        animate={isHovered ? { opacity: [0.5, 0.8, 0.5] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

      {/* Spotlight effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${mouseX.get() + 200}px ${mouseY.get() + 200}px, rgba(6, 182, 212, 0.15), transparent 50%)`,
        }}
      />

      {product.featured && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -top-3 left-8 px-3 py-1 bg-indigo-500 text-white text-xs tracking-wider flex items-center gap-1.5"
        >
          <Sparkles className="w-3 h-3" />
          DESTACADO
        </motion.div>
      )}

      <div className="relative p-8 h-full flex flex-col" style={{ transform: 'translateZ(20px)' }}>
        {/* Header */}
        <div className="mb-6">
          <motion.div
            className={`inline-block p-3 ${colors.bg} rounded mb-4 relative overflow-hidden`}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <product.Icon className={`w-6 h-6 ${colors.text} relative z-10`} strokeWidth={1.5} />
            <motion.div
              className={`absolute inset-0 ${colors.dot} opacity-20`}
              animate={isHovered ? { scale: [1, 1.5, 1], opacity: [0.2, 0, 0.2] } : {}}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>

          <div className="text-xs text-slate-500 tracking-[0.2em] mb-2">{product.category}</div>
          <h3 className="text-2xl text-white mb-3">{product.name}</h3>
          <p className="text-slate-400 leading-relaxed text-sm">{product.description}</p>
        </div>

        {/* Animated Stats */}
        <motion.div
          className="mb-6 space-y-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {product.stats.map((stat: any, i: number) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 + i * 0.1 }}
              className="flex items-center justify-between p-3 bg-slate-800/30 rounded border border-slate-800 group-hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center gap-2">
                <TrendingUp className={`w-3 h-3 ${colors.text}`} />
                <span className="text-xs text-slate-500">{stat.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white font-mono">{stat.value}</span>
                <span className="text-xs text-emerald-500">{stat.trend}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features */}
        <div className="mb-6 flex-1">
          <div className="space-y-2">
            {product.features.map((feature: string, i: number) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 + i * 0.05 }}
                className="flex items-start gap-2 group/item"
              >
                <motion.div
                  className={`w-1.5 h-1.5 ${colors.dot} rounded-full mt-1.5`}
                  whileHover={{ scale: 2 }}
                  transition={{ type: 'spring' }}
                />
                <span className="text-sm text-slate-500 group-hover/item:text-slate-400 transition-colors">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Metrics Bar */}
        <div className="flex items-center gap-4 pb-6 mb-6 border-b border-slate-800">
          {Object.entries(product.metrics).map(([key, value], i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 + i * 0.1 }}
            >
              <div className="text-sm text-white font-mono">{value}</div>
              <div className="text-xs text-slate-600 capitalize">{key}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-between p-4 border ${colors.border} ${colors.bg} rounded group-hover:${colors.text} transition-all duration-300`}
          whileHover={{ x: 4 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <span className="text-sm tracking-wide text-slate-400 group-hover:text-white transition-colors">
            Acceder al Sistema
          </span>
          <motion.div
            animate={isHovered ? { x: [0, 5, 0] } : {}}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors" />
          </motion.div>
        </motion.a>

        {/* Security badge for GOV */}
        {product.id === 'gov' && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute top-4 right-4 flex items-center gap-1.5 px-2 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-xs text-cyan-400"
          >
            <Lock className="w-3 h-3" />
            <span>CLASSIFIED</span>
          </motion.div>
        )}
      </div>

      {/* Corner accent */}
      <motion.div
        className={`absolute bottom-0 right-0 w-20 h-20 ${colors.gradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-2xl`}
        animate={isHovered ? { scale: [1, 1.3, 1] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  );
}
