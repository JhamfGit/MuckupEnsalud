import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import logoGroup from '/assets/fa9ac09e27bb775302e06e2d8ac988b742a9c6ab.png';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Columna 1: Logo y descripción */}
          <div>
            <img src={logoGroup} alt="Ensalud Group" className="h-12 mb-4 brightness-0 invert" />
            <p className="text-gray-400 text-sm mb-4">
              Líder en servicios de salud integral en Latinoamérica. Una marca, múltiples soluciones, un solo compromiso: tu bienestar.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Columna 2: Unidades de Negocio */}
          <div>
            <h3 className="font-semibold mb-4">Unidades de Negocio</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/ips" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  IPS - Institución Prestadora de Salud
                </Link>
              </li>
              <li>
                <Link to="/farmar" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Farmar - Gestor Farmacéutico
                </Link>
              </li>
              <li>
                <Link to="/bienestar" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  Bienestar - Programas de Salud
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Enlaces rápidos */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <a href="#nosotros" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Trabaja con nosotros
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#7B3F9E] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Cra. 7 # 32-45, Bogotá D.C., Colombia
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#7B3F9E] flex-shrink-0" />
                <a href="tel:+5713001234567" className="text-gray-400 hover:text-white transition-colors text-sm">
                  +57 (1) 300 123 4567
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#7B3F9E] flex-shrink-0" />
                <a href="mailto:contacto@ensaludgroup.com.co" className="text-gray-400 hover:text-white transition-colors text-sm">
                  contacto@ensaludgroup.com.co
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2026 Ensalud Group. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Términos y Condiciones
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Habeas Data
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
