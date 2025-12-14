import { motion } from 'motion/react';
import { Shield, Zap, ArrowRight, Check, ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

import { SEO } from '../components/SEO';

export function Products() {
    const products = [
        {
            id: 'accounting',
            name: 'EXIMIA ACCOUNTING',
            tagline: 'Todo-en-Uno para tu Firma',
            description: 'Digitaliza, centraliza y automatiza tu práctica contable con seguridad empresarial. Herramientas diseñadas específicamente para firmas contables modernas.',
            features: [
                'Gestión Avanzada de Clientes y Archivo',
                'Sistema de Permisos (RBAC) Granular',
                'Gestión de Procesos y Workflows',
                'Sistema de Documentos Inteligente con IA',
                'Búsqueda Global Unificada',
                'Agente AI Conversacional Contextual',
            ],
            benefits: [
                'Reduce tiempo administrativo en 40%',
                'Seguridad de Grado Bancario',
                'Automatización de flujos de trabajo',
                'Auditoría Completa de Acciones',
            ],
            color: 'emerald',
            Icon: FileText,
        },
        {
            id: 'gov',
            name: 'EXIMIA GOV',
            tagline: 'Plataforma de Inteligencia Gubernamental',
            description: 'Sistema de análisis de inteligencia para operaciones soberanas. Decisiones críticas respaldadas por datos clasificados y análisis en tiempo real.',
            features: [
                'Análisis de datos multi-fuente en tiempo real',
                'Seguridad nivel gubernamental con cifrado de extremo a extremo',
                'Cumplimiento normativo total y auditoría completa',
                'Infraestructura air-gapped para máxima seguridad',
                'Integración con sistemas legacy gubernamentales',
                'Dashboard de inteligencia operacional 24/7',
            ],
            benefits: [
                'Reduce tiempo de análisis en 85%',
                'Mejora precisión de decisiones críticas',
                'Cumplimiento automático de regulaciones',
                'Escalable a nivel nacional',
            ],
            color: 'cyan',
            Icon: Shield,
        },
        {
            id: 'agency',
            name: 'EXIMIA',
            tagline: 'Automatización de Marketing con IA',
            description: 'Plataforma de marketing autónoma que genera y distribuye contenido a escala. Campañas optimizadas por IA que se adaptan en tiempo real.',
            features: [
                'Generación de contenido multicanal automatizada',
                'Optimización predictiva de campañas con ML',
                'Segmentación de audiencias en tiempo real',
                'ROI tracking automatizado y analytics avanzados',
                'A/B testing continuo y optimización dinámica',
                'Integración con todas las plataformas principales',
            ],
            benefits: [
                'Incrementa conversiones hasta 340%',
                'Reduce costos de producción en 70%',
                'Escala contenido sin límites',
                'ROI promedio de 6.8x',
            ],
            color: 'purple',
            Icon: Zap,
        },

    ];

    const colorMap = {
        cyan: {
            text: 'text-cyan-400',
            border: 'border-cyan-500/30',
            bg: 'bg-cyan-500/10',
            gradient: 'from-cyan-500/20',
        },
        purple: {
            text: 'text-purple-400',
            border: 'border-purple-500/30',
            bg: 'bg-purple-500/10',
            gradient: 'from-purple-500/20',
        },
        indigo: {
            text: 'text-indigo-400',
            border: 'border-indigo-500/30',
            bg: 'bg-indigo-500/10',
            gradient: 'from-indigo-500/20',
        },
        emerald: {
            text: 'text-emerald-400',
            border: 'border-emerald-500/30',
            bg: 'bg-emerald-500/10',
            gradient: 'from-emerald-500/20',
        },
    };

    return (
        <div className="min-h-screen bg-slate-950">
            <SEO
                title="Nuestros Productos"
                description="Descubre nuestro ecosistema de soluciones de IA: EXIMIA GOV, AGENCY y AI PLATFORM. Tecnología avanzada para gobierno y empresa."
                url="https://www.eximiahq.com/products"
            />
            {/* Background */}
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black pointer-events-none" />

            {/* Video Background */}
            <div className="fixed inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-20"
                    src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477"
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Back Button */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed top-6 left-6 z-50"
            >
                <Link
                    to="/"
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-light">Volver</span>
                </Link>
            </motion.div>

            {/* Content */}
            <div className="relative z-10">
                {/* Hero Section */}
                <section className="pt-32 pb-20 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-white/10 backdrop-blur-sm rounded-full bg-white/5"
                        >
                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                            <span className="text-white/80 tracking-[0.2em] text-xs font-light uppercase">
                                Nuestros Productos
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6"
                        >
                            Ecosistema de Innovación.
                            <br />
                            <span className="text-white/70 font-extralight">Infraestructura del Futuro.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed font-light"
                        >
                            Soluciones especializadas construidas sobre la misma base tecnológica de IA avanzada.
                        </motion.p>
                    </div>
                </section>

                {/* Products Sections */}
                <section className="pb-20 px-6">
                    <div className="max-w-6xl mx-auto space-y-32">
                        {products.map((product, index) => {
                            const colors = colorMap[product.color as keyof typeof colorMap];
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 60 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                    className="relative"
                                >
                                    <div className={`grid md:grid-cols-2 gap-12 items-center ${isEven ? '' : 'md:grid-flow-dense'}`}>
                                        {/* Icon/Visual Side */}
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                                            className={`relative ${isEven ? '' : 'md:col-start-2'}`}
                                        >
                                            <div className={`relative p-12 border ${colors.border} ${colors.bg} backdrop-blur-sm`}>
                                                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} via-transparent to-transparent opacity-50`} />
                                                <product.Icon className={`w-32 h-32 ${colors.text} relative z-10`} strokeWidth={0.5} />

                                                {/* Animated particles */}
                                                <motion.div
                                                    animate={{
                                                        scale: [1, 1.2, 1],
                                                        opacity: [0.3, 0.6, 0.3],
                                                    }}
                                                    transition={{
                                                        duration: 3,
                                                        repeat: Infinity,
                                                        ease: "easeInOut",
                                                    }}
                                                    className={`absolute inset-0 border ${colors.border} blur-xl`}
                                                />
                                            </div>
                                        </motion.div>

                                        {/* Content Side */}
                                        <div className={isEven ? '' : 'md:col-start-1 md:row-start-1'}>
                                            <motion.div
                                                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                                            >
                                                <div className={`inline-block px-3 py-1 ${colors.bg} ${colors.border} border mb-4`}>
                                                    <span className={`text-xs tracking-wider ${colors.text} uppercase`}>
                                                        {product.id === 'gov' ? 'Gobierno' : product.id === 'agency' ? 'Marketing' : 'Enterprise'}
                                                    </span>
                                                </div>

                                                <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
                                                    {product.name}
                                                </h2>

                                                <p className={`text-xl ${colors.text} font-light mb-6`}>
                                                    {product.tagline}
                                                </p>

                                                <p className="text-white/60 leading-relaxed mb-8">
                                                    {product.description}
                                                </p>

                                                {/* Features */}
                                                <div className="space-y-3 mb-8">
                                                    {product.features.map((feature, i) => (
                                                        <motion.div
                                                            key={i}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ delay: index * 0.2 + i * 0.1 }}
                                                            className="flex items-start gap-3"
                                                        >
                                                            <Check className={`w-5 h-5 ${colors.text} mt-0.5 flex-shrink-0`} strokeWidth={2} />
                                                            <span className="text-white/70 text-sm">{feature}</span>
                                                        </motion.div>
                                                    ))}
                                                </div>

                                                {/* Benefits */}
                                                <div className={`p-6 border ${colors.border} ${colors.bg} backdrop-blur-sm mb-8`}>
                                                    <h3 className="text-white font-light mb-4 text-lg">Beneficios Clave</h3>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        {product.benefits.map((benefit, i) => (
                                                            <motion.div
                                                                key={i}
                                                                initial={{ opacity: 0, scale: 0.9 }}
                                                                whileInView={{ opacity: 1, scale: 1 }}
                                                                viewport={{ once: true }}
                                                                transition={{ delay: index * 0.2 + 0.5 + i * 0.1 }}
                                                                className="text-sm text-white/60"
                                                            >
                                                                • {benefit}
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* CTA */}
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: index * 0.2 + 0.8 }}
                                                >
                                                    {product.id === 'accounting' ? (
                                                        <button
                                                            disabled
                                                            className={`inline-flex items-center gap-2 px-6 py-3 border ${colors.border} ${colors.bg} ${colors.text} opacity-70 cursor-not-allowed`}
                                                        >
                                                            <span className="font-light">Coming Soon</span>
                                                        </button>
                                                    ) : (
                                                        <Link
                                                            to="/"
                                                            className={`inline-flex items-center gap-2 px-6 py-3 border ${colors.border} ${colors.bg} ${colors.text} hover:bg-white/10 transition-all duration-300 group`}
                                                        >
                                                            <span className="font-light">Más Información</span>
                                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                        </Link>
                                                    )}
                                                </motion.div>
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    {index < products.length - 1 && (
                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            whileInView={{ scaleX: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: index * 0.2 + 1 }}
                                            className={`h-px ${colors.bg} mt-32 origin-left`}
                                        />
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    );
}
