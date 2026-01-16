import { Link } from 'react-router-dom';
import { 
  Pill, ClipboardCheck, HeartPulse, Shield, Clock, Truck,
  CheckCircle2, ArrowRight, Phone, Mail, MapPin, Package,
  Sparkles, BarChart, FileText, AlertCircle
} from 'lucide-react';
import logoFarmar from '/asset/90f4af159a8911e848aed34370866cc925276c92.png';

export function Farmar() {
  const services = [
    { 
      icon: Pill, 
      title: 'Dispensación de Medicamentos',
      description: 'Entrega segura y oportuna de medicamentos con seguimiento farmacoterapéutico especializado.'
    },
    { 
      icon: ClipboardCheck, 
      title: 'Seguimiento Farmacoterapéutico',
      description: 'Monitoreo continuo de tratamientos para garantizar efectividad y seguridad.'
    },
    { 
      icon: HeartPulse, 
      title: 'Gestión de Tratamientos Crónicos',
      description: 'Programas especializados para pacientes con enfermedades crónicas.'
    },
    { 
      icon: Package, 
      title: 'Domicilios sin Costo',
      description: 'Envío gratuito de medicamentos a tu hogar o lugar de trabajo.'
    },
    { 
      icon: AlertCircle, 
      title: 'Asesoría Farmacéutica',
      description: 'Orientación profesional sobre uso correcto de medicamentos.'
    },
    { 
      icon: FileText, 
      title: 'Gestión de Autorizaciones',
      description: 'Tramitamos autorizaciones con tu EPS de manera ágil.'
    },
  ];

  const benefits = [
    'Farmacéuticos especializados disponibles',
    'Sistema de alertas de reabastecimiento',
    'Recordatorios de toma de medicamentos',
    'Historial farmacoterapéutico completo',
    'Convenio con todas las EPS',
    'App móvil para seguimiento'
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596522016734-8e6136fe5cfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjeSUyMG1lZGljYXRpb258ZW58MXx8fHwxNzY4NTc0MDQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')] bg-cover bg-center"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Link to="/" className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors">
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                Volver a Ensalud Group
              </Link>
              <img src={logoFarmar} alt="Ensalud Farmar" className="h-16 mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Gestor Farmacéutico Integral
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Tu salud en las mejores manos. Gestión profesional de medicamentos con tecnología y seguimiento personalizado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contacto-farmar" 
                  className="bg-white text-blue-700 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-center inline-flex items-center justify-center"
                >
                  Solicitar Servicio
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a 
                  href="#servicios" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-center"
                >
                  Ver Servicios
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">100K+</div>
                <div className="text-blue-100">Tratamientos gestionados</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-blue-100">Adherencia terapéutica</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Atención continua</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-blue-100">Farmacéuticos expertos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Servicios Especializados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gestión farmacéutica integral con tecnología y atención personalizada
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-blue-100"
              >
                <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Cómo funciona?
            </h2>
            <p className="text-xl text-gray-600">
              Proceso simple y seguro en 4 pasos
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-700">1</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Registro</h3>
              <p className="text-gray-600 text-sm">Regístrate con tu fórmula médica y datos de EPS</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-700">2</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Verificación</h3>
              <p className="text-gray-600 text-sm">Verificamos y tramitamos autorizaciones</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-700">3</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Dispensación</h3>
              <p className="text-gray-600 text-sm">Preparamos y entregamos tus medicamentos</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-700">4</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Seguimiento</h3>
              <p className="text-gray-600 text-sm">Monitoreamos tu tratamiento continuamente</p>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  <Sparkles className="inline w-6 h-6 text-blue-600 mr-2" />
                  Tecnología a tu servicio
                </h3>
                <p className="text-gray-700 mb-4">
                  Nuestra plataforma digital te permite:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Ver tu historial farmacoterapéutico completo</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Recibir alertas de reabastecimiento</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Consultar con farmacéuticos en línea</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Rastrear tus entregas en tiempo real</span>
                  </li>
                </ul>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1596522016734-8e6136fe5cfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjeSUyMG1lZGljYXRpb258ZW58MXx8fHwxNzY4NTc0MDQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                  alt="Pharmacy technology" 
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Beneficios de Nuestro Servicio
            </h2>
            <p className="text-xl text-gray-600">
              Todo lo que necesitas para un tratamiento exitoso
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 bg-blue-50 p-6 rounded-xl border border-blue-100">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="font-bold text-gray-900 text-lg">Seguridad</div>
              <div className="text-gray-600 text-sm">Almacenamiento certificado</div>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="font-bold text-gray-900 text-lg">Puntualidad</div>
              <div className="text-gray-600 text-sm">Entregas a tiempo</div>
            </div>
            <div className="text-center">
              <Truck className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="font-bold text-gray-900 text-lg">Domicilio Gratis</div>
              <div className="text-gray-600 text-sm">Sin costo de envío</div>
            </div>
            <div className="text-center">
              <BarChart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="font-bold text-gray-900 text-lg">Reportes</div>
              <div className="text-gray-600 text-sm">Analítica de tratamientos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto y Formulario */}
      <section id="contacto-farmar" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Solicita Nuestro Servicio
            </h2>
            <p className="text-xl text-gray-600">
              Completa el formulario y nos contactaremos contigo
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-xl border border-blue-200">
            <form className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre completo *</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Documento de identidad *</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  placeholder="Número de documento"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono *</label>
                <input 
                  type="tel" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  placeholder="+57 300 123 4567"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Correo electrónico *</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  placeholder="tu@correo.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">EPS *</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  placeholder="Nombre de tu EPS"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de servicio *</label>
                <select 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                >
                  <option value="">Selecciona un servicio</option>
                  <option>Dispensación de medicamentos</option>
                  <option>Seguimiento farmacoterapéutico</option>
                  <option>Gestión de tratamientos crónicos</option>
                  <option>Asesoría farmacéutica</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Comentarios adicionales</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none"
                  placeholder="Cuéntanos más sobre tus necesidades..."
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center"
                >
                  <Package className="mr-2 w-5 h-5" />
                  Solicitar Servicio
                </button>
              </div>
            </form>

            <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-blue-200">
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-blue-600" />
                <div>
                  <div className="text-sm text-gray-600">Línea gratuita</div>
                  <div className="font-semibold text-gray-900">018000 FARMAR</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-blue-600" />
                <div>
                  <div className="text-sm text-gray-600">Email</div>
                  <div className="font-semibold text-gray-900">servicios@farmar.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-blue-600" />
                <div>
                  <div className="text-sm text-gray-600">Atención</div>
                  <div className="font-semibold text-gray-900">24/7 todos los días</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
