import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '@/app/pages/Home';
import { IPS } from '@/app/pages/IPS';
import { Farmar } from '@/app/pages/Farmar';
import { Bienestar } from '@/app/pages/Bienestar';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ips" element={<IPS />} />
            <Route path="/farmar" element={<Farmar />} />
            <Route path="/bienestar" element={<Bienestar />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
