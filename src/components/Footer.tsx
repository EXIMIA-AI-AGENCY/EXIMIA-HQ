import { motion } from 'motion/react';
import eximiaLogo from '../assets/eximia-logo.png';

export function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={eximiaLogo} alt="EXIMIA" className="h-8 w-auto object-contain" />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Infraestructura de inteligencia artificial para operaciones críticas a escala global.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span className="text-slate-600 text-xs tracking-wider">TODOS LOS SISTEMAS OPERACIONALES</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="text-slate-400 text-sm mb-4 tracking-wide">Productos</div>
            <div className="space-y-2">
              <a href="#" className="block text-slate-600 hover:text-cyan-500 text-sm transition-colors">
                EXIMIA GOV
              </a>
              <a href="#" className="block text-slate-600 hover:text-cyan-500 text-sm transition-colors">
                EXIMIA AGENCY
              </a>
              <a href="#" className="block text-slate-600 hover:text-cyan-500 text-sm transition-colors">
                EXIMIA AI PLATFORM
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <div className="text-slate-400 text-sm mb-4 tracking-wide">Recursos</div>
            <div className="space-y-2">
              <a href="#" className="block text-slate-600 hover:text-cyan-500 text-sm transition-colors">
                Documentación Técnica
              </a>
              <a href="#" className="block text-slate-600 hover:text-cyan-500 text-sm transition-colors">
                API Reference
              </a>
              <a href="#" className="block text-slate-600 hover:text-cyan-500 text-sm transition-colors">
                Estado del Sistema
              </a>
              <a href="#" className="block text-slate-600 hover:text-cyan-500 text-sm transition-colors">
                Soporte Empresarial
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-600 text-sm">
            © 2025 EXIMIA Systems. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6 text-slate-600 text-sm">
            <a href="#" className="hover:text-cyan-500 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-cyan-500 transition-colors">Términos</a>
            <a href="#" className="hover:text-cyan-500 transition-colors">Seguridad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
