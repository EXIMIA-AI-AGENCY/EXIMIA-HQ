'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { useScroll, motion, useTransform } from 'motion/react'
import eximiaLogo from '../assets/eximia-logo.png'

// Simple Link component replacement for Vite
const Link = ({ href, children, className, ...props }: any) => (
  <a href={href} className={className} {...props}>
    {children}
  </a>
);

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <>
      <HeroHeader />
      <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Video Background - DNA 4K */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-70 scale-110"
            src="/DNA 4K Video 25fps.mp4"
          />
          {/* Color overlay with cyan/violet tint for brand consistency */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/40 via-black/50 to-violet-950/40" />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/30" />
          {/* Vignette effect */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.7)_70%,rgba(0,0,0,0.9)_100%)]" />
        </div>

        <motion.div
          style={{ y, opacity }}
          className="relative z-10 max-w-7xl mx-auto px-6 text-center"
        >
          {/* Top badge - minimal */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex items-center gap-3 mb-12 mt-20 px-5 py-2 border border-white/10 backdrop-blur-sm relative rounded-full bg-white/5"
          >
            <div className="relative flex items-center gap-3">
              <motion.div
                className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-white/80 tracking-[0.2em] text-xs font-light uppercase">
                AI Solutions and Software Development
              </span>
            </div>
          </motion.div>

          {/* Main Title - clean and bold */}
          <div className="mb-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-2"
            >
              <motion.div
                className="mb-0 flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <img
                  src={eximiaLogo}
                  alt="EXIMIA"
                  className="h-12 md:h-14 lg:h-16 w-auto object-contain"
                />
              </motion.div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="block text-white/90 text-5xl md:text-6xl lg:text-7xl font-extralight"
              >
                Innovación Sin Límites
              </motion.span>
            </motion.h1>
          </div>

          {/* Subtitle - refined */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
          >
            Un conglomerado tecnológico impulsando la próxima generación de servicios digitales.
            <br className="hidden md:block" />
            Transformando industrias con inteligencia artificial avanzada.
          </motion.p>

          {/* CTA Buttons - minimal and elegant */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex items-center justify-center mb-20"
          >
            <Button
              asChild
              size="lg"
              className="h-14 rounded-full px-8 text-base bg-white text-black hover:bg-white/90 transition-all duration-300">
              <Link href="/products">
                <span className="text-nowrap font-medium">Explorar Productos</span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </main>
    </>
  )
}

const menuItems = [
  { name: 'About', href: '/about' },
]

const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const { scrollYProgress } = useScroll()

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setScrolled(latest > 0.05)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <header>
      <nav
        data-state={menuState && 'active'}
        className="group fixed z-20 w-full pt-4">
        <div className={cn('mx-auto max-w-7xl rounded-full px-6 transition-all duration-300 lg:px-12', scrolled ? 'bg-black/50 backdrop-blur-xl border border-white/10 py-2' : 'py-4')}>
          <div className="flex items-center justify-between">
            <Link
              href="/"
              aria-label="home"
              className="flex items-center space-x-2">
              <Logo />
            </Link>

            <div className="hidden lg:block">
              <ul className="flex gap-8 text-sm font-light">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-white/70 hover:text-white transition-colors duration-200">
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setMenuState(!menuState)}
              aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
              className="relative z-20 block cursor-pointer lg:hidden text-white">
              <Menu className="group-data-[state=active]:hidden size-6" />
              <X className="hidden group-data-[state=active]:block size-6" />
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={menuState ? { x: 0, opacity: 1 } : { x: "100%", opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-10 bg-black/98 backdrop-blur-2xl lg:hidden"
        >
          <div className="flex flex-col h-full pt-24 px-8">
            {/* Menu Items */}
            <nav className="flex-1 flex items-center justify-center">
              <ul className="space-y-8 w-full max-w-sm">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={false}
                    animate={menuState ? {
                      opacity: 1,
                      x: 0,
                      transition: { delay: index * 0.1 + 0.2 }
                    } : {
                      opacity: 0,
                      x: 20
                    }}
                  >
                    <Link
                      href={item.href}
                      className="group block py-3 text-center"
                      onClick={() => setMenuState(false)}
                    >
                      <span className="text-2xl font-light text-white/70 group-hover:text-white transition-colors duration-200">
                        {item.name}
                      </span>
                      <div className="h-px bg-white/0 group-hover:bg-white/20 transition-all duration-300 mt-2" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Bottom Section */}
            <motion.div
              initial={false}
              animate={menuState ? {
                opacity: 1,
                y: 0,
                transition: { delay: 0.5 }
              } : {
                opacity: 0,
                y: 20
              }}
              className="pb-12 text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-white/40 text-xs tracking-widest uppercase">
                  AI Solutions
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </nav>
    </header>
  )
}

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <img
        src={eximiaLogo}
        alt="EXIMIA"
        className="h-6 w-auto object-contain"
      />
    </div>
  )
}
