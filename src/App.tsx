import { Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { Footer } from './components/Footer';
import { Products } from './pages/Products';
import { About } from './pages/About';

import { SEO } from './components/SEO';

function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <SEO
        title="EXIMIA | Innovación Sin Límites"
        description="Un conglomerado tecnológico impulsando la próxima generación de servicios digitales. Transformando industrias con inteligencia artificial avanzada."
        url="https://www.eximiahq.com/"
      />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black pointer-events-none" />
      <Hero />
      <ProductGrid />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}