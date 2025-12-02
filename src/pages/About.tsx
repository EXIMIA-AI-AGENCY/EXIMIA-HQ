import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, Target, Zap, Globe, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

export function About() {
    const milestones = [
        { year: '2022', title: 'Fundación', description: 'Alan Rodriguez funda EXIMIA en San Juan, Puerto Rico' },
        { year: '2022', title: 'EXIMIA AGENCY', description: 'Lanzamiento de plataforma de marketing con IA' },
        { year: '2023', title: 'EXIMIA AI Platform', description: 'Plataforma empresarial de agentes de IA especializados' },
        { year: '2024', title: 'EXIMIA GOV', description: 'Sistema de análisis de inteligencia gubernamental' },
    ];

    const values = [
        {
            icon: Target,
            title: 'Precisión',
            description: 'Cada decisión respaldada por datos, cada sistema optimizado al máximo.',
        },
        {
            icon: Zap,
            title: 'Velocidad',
            description: 'Innovación continua. Del concepto a producción en semanas, no años.',
        },
        {
            icon: Globe,
            title: 'Impacto Global',
            description: 'Desde Puerto Rico hacia el mundo. Tecnología sin fronteras.',
        },
        {
            icon: Award,
            title: 'Excelencia',
            description: 'Estándares de clase mundial en cada línea de código.',
        },
    ];

    return (
        <div className="min-h-screen bg-slate-950">
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
                            <Sparkles className="w-4 h-4 text-emerald-400" />
                            <span className="text-white/80 tracking-[0.2em] text-xs font-light uppercase">
                                Nuestra Historia
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6"
                        >
                            Construyendo el Futuro
                            <br />
                            <span className="text-white/70 font-extralight">Desde el Caribe</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed font-light"
                        >
                            Una visión audaz nacida en Puerto Rico que está transformando cómo las organizaciones aprovechan la inteligencia artificial.
                        </motion.p>
                    </div>
                </section>

                {/* Story Section */}
                <section className="py-20 px-6">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="prose prose-invert prose-lg max-w-none"
                        >
                            <div className="space-y-8 text-white/70 leading-relaxed">
                                <p className="text-xl text-white/80 font-light">
                                    En 2022, mientras las empresas luchaban por adaptarse al boom del marketing digital post-pandemia, un joven desarrollador en San Juan, Puerto Rico, veía una oportunidad única.
                                </p>

                                <p>
                                    Alan Rodriguez, con 23 años y experiencia autodidacta en desarrollo de software e inteligencia artificial, identificó una brecha crítica: las agencias de marketing gastaban fortunas en contenido que podía ser generado y optimizado por IA. La tecnología existía, pero nadie la había hecho accesible para el mercado masivo.
                                </p>

                                <p>
                                    Desde su apartamento en San Juan, Alan lanzó EXIMIA AGENCY, una plataforma que automatizaba la creación y distribución de contenido a escala. No como una herramienta más, sino como un sistema completo que entendía audiencias, optimizaba campañas, y generaba ROI medible. El éxito fue inmediato.
                                </p>

                                <p>
                                    El siguiente paso fue natural: si la IA podía revolucionar el marketing, podía transformar cualquier industria. En 2023, nació EXIMIA AI Platform, consolidando todo el conocimiento en una plataforma empresarial donde cualquier organización podía desplegar agentes de IA especializados en minutos.
                                </p>

                                <p>
                                    En 2024, EXIMIA dio su salto más ambicioso: EXIMIA GOV. Conversaciones con funcionarios gubernamentales revelaron una necesidad crítica de sistemas de inteligencia que pudieran integrar y analizar datos clasificados con precisión de seguridad nacional. Alan diseñó una plataforma que no solo cumplía con los estándares más exigentes, sino que los superaba.
                                </p>

                                <p className="text-xl text-white/80 font-light">
                                    Hoy, a sus 26 años, Alan lidera un ecosistema completo de soluciones de IA desde Puerto Rico, demostrando que la innovación tecnológica de clase mundial puede originarse desde cualquier lugar con la visión correcta.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* CEO Section */}
                <section className="py-20 px-6">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="grid md:grid-cols-2 gap-12 items-center"
                        >
                            {/* CEO Info */}
                            <div>
                                <div className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 mb-6">
                                    <span className="text-xs tracking-wider text-emerald-400 uppercase">Fundador & CEO</span>
                                </div>

                                <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
                                    Alan Rodriguez
                                </h2>

                                <p className="text-xl text-emerald-400 font-light mb-6">
                                    Desarrollador, Emprendedor, Visionario
                                </p>

                                <div className="space-y-4 text-white/60 leading-relaxed">
                                    <p>
                                        Especializado en Machine Learning e Inteligencia Artificial con experiencia autodidacta. A los 26 años, Alan ha construido uno de los ecosistemas de IA más completos del mercado.
                                    </p>

                                    <p>
                                        Su enfoque único combina rigor técnico con visión empresarial, permitiéndole identificar oportunidades donde otros ven limitaciones. Desde Puerto Rico, lidera equipos distribuidos en tres continentes.
                                    </p>

                                    <p>
                                        "La tecnología no tiene fronteras. Puerto Rico puede ser un hub de innovación global si construimos con los estándares correctos." - Alan Rodriguez
                                    </p>
                                </div>

                                <div className="mt-8 grid grid-cols-3 gap-6">
                                    <div>
                                        <div className="text-3xl font-light text-white mb-1">26</div>
                                        <div className="text-xs text-white/50 uppercase tracking-wider">Años</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-light text-white mb-1">3+</div>
                                        <div className="text-xs text-white/50 uppercase tracking-wider">Años Exp</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-light text-white mb-1">3</div>
                                        <div className="text-xs text-white/50 uppercase tracking-wider">Productos</div>
                                    </div>
                                </div>
                            </div>

                            {/* Visual Element */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative"
                            >
                                <div className="relative p-12 border border-emerald-500/30 bg-emerald-500/5 backdrop-blur-sm">
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-transparent opacity-50" />

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
                                        className="absolute inset-0 border border-emerald-500/30 blur-xl"
                                    />

                                    <div className="relative z-10 space-y-6">
                                        <div className="text-6xl font-light text-white">🇵🇷</div>
                                        <div className="text-white/80 font-light text-lg">
                                            San Juan, Puerto Rico
                                        </div>
                                        <div className="text-white/50 text-sm">
                                            Innovación Global desde el Caribe
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Timeline */}
                <section className="py-20 px-6">
                    <div className="max-w-4xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-light text-white mb-16 text-center"
                        >
                            Nuestra Trayectoria
                        </motion.h2>

                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="flex gap-8 items-start group"
                                >
                                    <div className="flex-shrink-0 w-24">
                                        <div className="text-2xl font-light text-emerald-400">{milestone.year}</div>
                                    </div>
                                    <div className="flex-1 pb-12 border-l border-white/10 pl-8 group-last:border-l-0">
                                        <div className="relative">
                                            <div className="absolute -left-[33px] w-2 h-2 bg-emerald-400 rounded-full" />
                                            <h3 className="text-xl text-white font-light mb-2">{milestone.title}</h3>
                                            <p className="text-white/60">{milestone.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="py-20 px-6">
                    <div className="max-w-6xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-light text-white mb-16 text-center"
                        >
                            Nuestros Valores
                        </motion.h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-6 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300 group"
                                >
                                    <value.icon className="w-8 h-8 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-lg text-white font-light mb-2">{value.title}</h3>
                                    <p className="text-sm text-white/60">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    );
}
