import { motion } from 'motion/react';
import { Shield, Zap, ArrowRight, Check, ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

import { SEO } from '../components/SEO';

export function Products() {
    const products = [
        {
            id: 'agency',
            name: 'EXIMIA',
            tagline: 'AI Solutions & Software Development',
            description: 'Soluciones de inteligencia artificial personalizadas y desarrollo de software empresarial. Transformamos tu negocio con tecnología de vanguardia y agentes de IA autónomos.',
            features: [
                'Desarrollo de agentes de IA personalizados',
                'Automatización de procesos empresariales con IA',
                'Desarrollo de software a medida',
                'Integración de APIs y sistemas legacy',
                'Chatbots y asistentes virtuales inteligentes',
                'Consultoría tecnológica y transformación digital',
            ],
            benefits: [
                'Reduce costos operativos hasta 60%',
                'Automatiza tareas repetitivas 24/7',
                'Escala tu negocio sin límites',
                'ROI promedio de 5x en 6 meses',
            ],
            color: 'purple',
            Icon: Zap,
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

            {/* Video Background - DNA 4K */}
            <div className="fixed inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-50 scale-110"
                    src="/DNA 4K Video 25fps.mp4"
                />
                {/* Color overlay with cyan/violet tint */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/40 via-black/60 to-violet-950/40" />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/40" />
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
                            initial={{ opacity: 0, y: -30, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                type: "spring",
                                stiffness: 100,
                                damping: 15
                            }}
                            className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-white/10 backdrop-blur-sm rounded-full bg-white/5"
                        >
                            <motion.div
                                className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.5, 1, 0.5]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <span className="text-white/80 tracking-[0.2em] text-xs font-light uppercase">
                                Nuestros Productos
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.2,
                                type: "spring",
                                stiffness: 80
                            }}
                            className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6"
                        >
                            <motion.span
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                            >
                                Ecosistema de Innovación.
                            </motion.span>
                            <br />
                            <motion.span
                                className="text-white/70 font-extralight"
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            >
                                Infraestructura del Futuro.
                            </motion.span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed font-light"
                        >
                            Soluciones especializadas construidas sobre la misma base tecnológica de IA avanzada.
                        </motion.p>

                        {/* Animated line separator */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                            className="w-32 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mt-12"
                        />
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
                                    initial={{ opacity: 0, y: 80 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{
                                        duration: 1,
                                        type: "spring",
                                        stiffness: 50,
                                        damping: 20
                                    }}
                                    className="relative"
                                >
                                    <div className={`grid md:grid-cols-2 gap-12 items-center ${isEven ? '' : 'md:grid-flow-dense'}`}>
                                        {/* Icon/Visual Side */}
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.8,
                                                delay: 0.2,
                                                type: "spring",
                                                stiffness: 100
                                            }}
                                            whileHover={{ scale: 1.02 }}
                                            className={`relative ${isEven ? '' : 'md:col-start-2'}`}
                                        >
                                            <motion.div
                                                className={`relative p-16 border ${colors.border} ${colors.bg} backdrop-blur-sm overflow-hidden`}
                                                whileHover={{
                                                    borderColor: "rgba(255,255,255,0.3)",
                                                    boxShadow: "0 0 60px rgba(139,92,246,0.3)",
                                                    transition: { duration: 0.4 }
                                                }}
                                            >
                                                {/* Animated grid background */}
                                                <div className="absolute inset-0 opacity-20">
                                                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:30px_30px]" />
                                                </div>

                                                {/* Gradient overlay */}
                                                <motion.div
                                                    className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} via-transparent to-transparent`}
                                                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                                />

                                                {/* Pulsing energy rings */}
                                                <motion.div
                                                    className={`absolute inset-8 border ${colors.border} rounded-full`}
                                                    animate={{
                                                        scale: [1, 1.2, 1],
                                                        opacity: [0.3, 0, 0.3],
                                                    }}
                                                    transition={{
                                                        duration: 3,
                                                        repeat: Infinity,
                                                        ease: "easeOut",
                                                    }}
                                                />
                                                <motion.div
                                                    className={`absolute inset-12 border ${colors.border} rounded-full`}
                                                    animate={{
                                                        scale: [1, 1.3, 1],
                                                        opacity: [0.2, 0, 0.2],
                                                    }}
                                                    transition={{
                                                        duration: 3,
                                                        repeat: Infinity,
                                                        ease: "easeOut",
                                                        delay: 0.5,
                                                    }}
                                                />

                                                {/* Central icon with enhanced animations */}
                                                <motion.div
                                                    className="relative z-20 flex items-center justify-center"
                                                    animate={{
                                                        rotateY: [0, 15, 0, -15, 0],
                                                        rotateX: [0, 5, 0, -5, 0],
                                                    }}
                                                    transition={{
                                                        duration: 10,
                                                        repeat: Infinity,
                                                        ease: "easeInOut",
                                                    }}
                                                    style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                                                >
                                                    <motion.div
                                                        whileHover={{ scale: 1.15, rotate: 5 }}
                                                        transition={{ type: "spring", stiffness: 300 }}
                                                    >
                                                        <product.Icon className={`w-36 h-36 ${colors.text}`} strokeWidth={0.5} />
                                                    </motion.div>
                                                </motion.div>

                                                {/* Animated glow behind icon */}
                                                <motion.div
                                                    className={`absolute inset-0 ${colors.text.replace('text-', 'bg-')} blur-3xl`}
                                                    animate={{
                                                        scale: [0.8, 1.1, 0.8],
                                                        opacity: [0.1, 0.25, 0.1],
                                                    }}
                                                    transition={{
                                                        duration: 5,
                                                        repeat: Infinity,
                                                        ease: "easeInOut",
                                                    }}
                                                />

                                                {/* Multiple floating particles */}
                                                {[...Array(6)].map((_, i) => (
                                                    <motion.div
                                                        key={i}
                                                        animate={{
                                                            y: [0, -30 + Math.random() * 20, 0],
                                                            x: [0, -15 + Math.random() * 30, 0],
                                                            opacity: [0.2, 0.8, 0.2],
                                                            scale: [1, 1.5, 1],
                                                        }}
                                                        transition={{
                                                            duration: 4 + Math.random() * 3,
                                                            repeat: Infinity,
                                                            ease: "easeInOut",
                                                            delay: i * 0.5,
                                                        }}
                                                        className={`absolute w-2 h-2 ${colors.text.replace('text-', 'bg-')} rounded-full blur-sm`}
                                                        style={{
                                                            top: `${20 + Math.random() * 60}%`,
                                                            left: `${10 + Math.random() * 80}%`,
                                                        }}
                                                    />
                                                ))}

                                                {/* Corner accents */}
                                                <motion.div
                                                    className={`absolute top-0 left-0 w-16 h-px ${colors.text.replace('text-', 'bg-')}`}
                                                    animate={{ scaleX: [0, 1, 0], opacity: [0, 1, 0] }}
                                                    transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                                                />
                                                <motion.div
                                                    className={`absolute top-0 left-0 h-16 w-px ${colors.text.replace('text-', 'bg-')}`}
                                                    animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
                                                    transition={{ duration: 3, repeat: Infinity, delay: 0.2 }}
                                                />
                                                <motion.div
                                                    className={`absolute bottom-0 right-0 w-16 h-px ${colors.text.replace('text-', 'bg-')}`}
                                                    animate={{ scaleX: [0, 1, 0], opacity: [0, 1, 0] }}
                                                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                                                />
                                                <motion.div
                                                    className={`absolute bottom-0 right-0 h-16 w-px ${colors.text.replace('text-', 'bg-')}`}
                                                    animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
                                                    transition={{ duration: 3, repeat: Infinity, delay: 1.7 }}
                                                />

                                                {/* Scanning line effect */}
                                                <motion.div
                                                    className={`absolute left-0 right-0 h-px ${colors.text.replace('text-', 'bg-')} opacity-50`}
                                                    animate={{ top: ["0%", "100%", "0%"] }}
                                                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                                                />
                                            </motion.div>
                                        </motion.div>

                                        {/* Content Side */}
                                        <div className={isEven ? '' : 'md:col-start-1 md:row-start-1'}>
                                            <motion.div
                                                initial={{ opacity: 0, x: isEven ? -50 : 50, filter: "blur(5px)" }}
                                                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 0.8,
                                                    delay: 0.3,
                                                    type: "spring",
                                                    stiffness: 80
                                                }}
                                            >
                                                <motion.div
                                                    className={`inline-block px-3 py-1 ${colors.bg} ${colors.border} border mb-4`}
                                                    whileHover={{ scale: 1.05, x: 5 }}
                                                    transition={{ type: "spring", stiffness: 300 }}
                                                >
                                                    <span className={`text-xs tracking-wider ${colors.text} uppercase`}>
                                                        {product.id === 'gov' ? 'Gobierno' : product.id === 'agency' ? 'AI Solutions' : 'Enterprise'}
                                                    </span>
                                                </motion.div>

                                                <motion.h2
                                                    className="text-4xl md:text-5xl font-light text-white mb-4"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.4, duration: 0.6 }}
                                                >
                                                    {product.name}
                                                </motion.h2>

                                                <motion.p
                                                    className={`text-xl ${colors.text} font-light mb-6`}
                                                    initial={{ opacity: 0, y: 15 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.5, duration: 0.6 }}
                                                >
                                                    {product.tagline}
                                                </motion.p>

                                                <motion.p
                                                    className="text-white/60 leading-relaxed mb-8"
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.6, duration: 0.8 }}
                                                >
                                                    {product.description}
                                                </motion.p>

                                                {/* Features with staggered animation */}
                                                <div className="space-y-3 mb-8">
                                                    {product.features.map((feature, i) => (
                                                        <motion.div
                                                            key={i}
                                                            initial={{ opacity: 0, x: -30 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{
                                                                delay: 0.7 + i * 0.08,
                                                                type: "spring",
                                                                stiffness: 100
                                                            }}
                                                            whileHover={{ x: 8, transition: { duration: 0.2 } }}
                                                            className="flex items-start gap-3 cursor-default group"
                                                        >
                                                            <motion.div
                                                                whileHover={{ scale: 1.3, rotate: 360 }}
                                                                transition={{ duration: 0.3 }}
                                                            >
                                                                <Check className={`w-5 h-5 ${colors.text} mt-0.5 flex-shrink-0`} strokeWidth={2} />
                                                            </motion.div>
                                                            <span className="text-white/70 text-sm group-hover:text-white/90 transition-colors duration-200">{feature}</span>
                                                        </motion.div>
                                                    ))}
                                                </div>

                                                {/* Benefits with enhanced animation */}
                                                <motion.div
                                                    className={`p-6 border ${colors.border} ${colors.bg} backdrop-blur-sm mb-8 overflow-hidden relative`}
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.9, duration: 0.5 }}
                                                    whileHover={{
                                                        borderColor: "rgba(255,255,255,0.15)",
                                                        transition: { duration: 0.3 }
                                                    }}
                                                >
                                                    {/* Animated background gradient */}
                                                    <motion.div
                                                        className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} via-transparent to-transparent opacity-0`}
                                                        whileHover={{ opacity: 0.3 }}
                                                        transition={{ duration: 0.3 }}
                                                    />

                                                    <h3 className="text-white font-light mb-4 text-lg relative z-10">Beneficios Clave</h3>
                                                    <div className="grid grid-cols-2 gap-4 relative z-10">
                                                        {product.benefits.map((benefit, i) => (
                                                            <motion.div
                                                                key={i}
                                                                initial={{ opacity: 0, y: 10 }}
                                                                whileInView={{ opacity: 1, y: 0 }}
                                                                viewport={{ once: true }}
                                                                transition={{
                                                                    delay: 1 + i * 0.1,
                                                                    type: "spring",
                                                                    stiffness: 100
                                                                }}
                                                                whileHover={{
                                                                    scale: 1.02,
                                                                    color: "rgba(255,255,255,0.9)",
                                                                    transition: { duration: 0.2 }
                                                                }}
                                                                className="text-sm text-white/60 cursor-default"
                                                            >
                                                                <motion.span
                                                                    className={`inline-block ${colors.text} mr-2`}
                                                                    animate={{ scale: [1, 1.2, 1] }}
                                                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                                                                >
                                                                    •
                                                                </motion.span>
                                                                {benefit}
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </motion.div>

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
