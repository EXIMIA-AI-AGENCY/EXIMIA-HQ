import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { MetricsBar } from './components/MetricsBar';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black pointer-events-none" />
      <Hero />
      <MetricsBar />
      <ProductGrid />
      <Footer />
    </div>
  );
}