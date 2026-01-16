import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logoGroup from '/asset/fa9ac09e27bb775302e06e2d8ac988b742a9c6ab.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUnitsOpen, setIsUnitsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logoGroup} alt="Ensalud Group" className="h-12 md:h-14" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isActive('/') 
                  ? 'text-[#7B3F9E]' 
                  : 'text-gray-700 hover:text-[#7B3F9E]'
              }`}
            >
              Inicio
            </Link>
            
            <div className="relative group">
              <button className="flex items-center font-medium text-gray-700 hover:text-[#7B3F9E] transition-colors">
                Unidades de Negocio
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                <Link
                  to="/ips"
                  className="block px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors first:rounded-t-lg"
                >
                  <div className="font-semibold">IPS</div>
                  <div className="text-xs text-gray-500">Institución Prestadora de Salud</div>
                </Link>
                <Link
                  to="/farmar"
                  className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                >
                  <div className="font-semibold">Farmar</div>
                  <div className="text-xs text-gray-500">Gestor Farmacéutico</div>
                </Link>
                <Link
                  to="/bienestar"
                  className="block px-6 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-700 transition-colors last:rounded-b-lg"
                >
                  <div className="font-semibold">Bienestar</div>
                  <div className="text-xs text-gray-500">Programas de Salud Integral</div>
                </Link>
              </div>
            </div>

            <a href="#nosotros" className="font-medium text-gray-700 hover:text-[#7B3F9E] transition-colors">
              Nosotros
            </a>
            <a href="#contacto" className="font-medium text-gray-700 hover:text-[#7B3F9E] transition-colors">
              Contacto
            </a>
            <Link
              to="/#contacto"
              className="bg-[#7B3F9E] text-white px-6 py-2.5 rounded-lg hover:bg-[#6A3488] transition-colors font-medium"
            >
              Solicitar Información
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-100 mt-2">
            <div className="space-y-2 pt-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 px-4 rounded-lg ${
                  isActive('/') ? 'bg-purple-50 text-[#7B3F9E]' : 'text-gray-700'
                }`}
              >
                Inicio
              </Link>
              
              <div>
                <button
                  onClick={() => setIsUnitsOpen(!isUnitsOpen)}
                  className="w-full flex items-center justify-between py-2 px-4 text-gray-700"
                >
                  <span>Unidades de Negocio</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isUnitsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isUnitsOpen && (
                  <div className="ml-4 space-y-2 mt-2">
                    <Link
                      to="/ips"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-2 px-4 text-gray-600 hover:text-green-700"
                    >
                      IPS
                    </Link>
                    <Link
                      to="/farmar"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-2 px-4 text-gray-600 hover:text-blue-700"
                    >
                      Farmar
                    </Link>
                    <Link
                      to="/bienestar"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-2 px-4 text-gray-600 hover:text-orange-700"
                    >
                      Bienestar
                    </Link>
                  </div>
                )}
              </div>

              <a href="#nosotros" className="block py-2 px-4 text-gray-700">Nosotros</a>
              <a href="#contacto" className="block py-2 px-4 text-gray-700">Contacto</a>
              <Link
                to="/#contacto"
                onClick={() => setIsMenuOpen(false)}
                className="block bg-[#7B3F9E] text-white px-4 py-2.5 rounded-lg text-center mt-2"
              >
                Solicitar Información
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
