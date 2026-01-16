import { Link } from 'react-router-dom';
import { 
  Stethoscope, Heart, Activity, Brain, Eye, Bone, Baby, 
  CheckCircle2, ArrowRight, Calendar, Clock, MapPin, Phone, Mail,
  Award, Shield, Users, TrendingUp
} from 'lucide-react';
import logoIPS from 'figma:asset/90f4af159a8911e848aed34370866cc925276c92.png';

export function IPS() {
  const specialties = [
    { icon: Heart, name: 'Cardiología', description: 'Salud cardiovascular integral' },
    { icon: Brain, name: 'Neurología', description: 'Diagnóstico y tratamiento neurológico' },
    { icon: Eye, name: 'Oftalmología', description: 'Cuidado de la salud visual' },
    { icon: Bone, name: 'Ortopedia', description: 'Traumatología y rehabilitación' },
    { icon: Baby, name: 'Pediatría', description: 'Atención integral infantil' },
    { icon: Activity, name: 'Medicina Interna', description: 'Diagnóstico y prevención' },
  ];

  const benefits = [
    'Atención personalizada con cita previa',
    'Tecnología médica de última generación',
    'Equipo multidisciplinario certificado',
    'Convenios con principales EPS y aseguradoras',
    'Instalaciones modernas y cómodas',
    'Resultados de laboratorio en línea'
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565647946321-a146ac24a220?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFscyUyMGhvc3BpdGFsfGVufDF8fHx8MTc2ODU3NDA0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')] bg-cover bg-center"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Link to="/" className="inline-flex items-center text-green-100 hover:text-white mb-6 transition-colors">
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                Volver a Ensalud Group
              </Link>
              <img src={logoIPS} alt="Ensalud IPS" className="h-16 mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Institución Prestadora de Servicios de Salud
              </h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Atención médica de excelencia con tecnología de punta y un equipo humano comprometido con tu bienestar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contacto-ips" 
                  className="bg-white text-green-700 px-8 py-4 rounded-lg hover:bg-green-50 transition-colors font-semibold text-center inline-flex items-center justify-center"
                >
                  Agendar Cita
                  <Calendar className="ml-2 w-5 h-5" />
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
                <div className="text-3xl font-bold mb-2">50K+</div>
                <div className="text-green-100">Pacientes atendidos anualmente</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">20+</div>
                <div className="text-green-100">Especialidades médicas</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">8</div>
                <div className="text-green-100">Sedes en Colombia</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">300+</div>
                <div className="text-green-100">Profesionales de salud</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios y Especialidades */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Especialidades Médicas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contamos con las mejores especialidades médicas para cuidar tu salud integral
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-green-100"
              >
                <div className="bg-green-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <specialty.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{specialty.name}</h3>
                <p className="text-gray-600">{specialty.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-green-50 rounded-2xl p-8 border border-green-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Servicios Adicionales</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Laboratorio clínico completo</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Imagenología: Rayos X, TAC, Resonancia</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Cirugías ambulatorias</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Urgencias 24/7</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Hospitalización</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Rehabilitación física</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Telemedicina</h3>
                <p className="text-gray-700 mb-4">
                  Accede a consultas médicas desde la comodidad de tu hogar con nuestro servicio de telemedicina disponible 24/7.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Consulta médica virtual</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Seguimiento de tratamientos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Prescripción electrónica</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-xl text-gray-600">
              Beneficios que nos distinguen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <div className="font-bold text-gray-900 text-lg">Acreditación Internacional</div>
              <div className="text-gray-600 text-sm">Certificados ISO</div>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <div className="font-bold text-gray-900 text-lg">Seguridad</div>
              <div className="text-gray-600 text-sm">Protocolos rigurosos</div>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <div className="font-bold text-gray-900 text-lg">Equipo Experto</div>
              <div className="text-gray-600 text-sm">Certificación continua</div>
            </div>
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <div className="font-bold text-gray-900 text-lg">Innovación</div>
              <div className="text-gray-600 text-sm">Tecnología avanzada</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto y Formulario */}
      <section id="contacto-ips" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Agenda tu Cita
            </h2>
            <p className="text-xl text-gray-600">
              Estamos listos para atenderte
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-xl border border-green-200">
            <form className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre completo *</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Documento de identidad *</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none"
                  placeholder="Número de documento"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono *</label>
                <input 
                  type="tel" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none"
                  placeholder="+57 300 123 4567"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Correo electrónico *</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none"
                  placeholder="tu@correo.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Especialidad *</label>
                <select 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none"
                >
                  <option value="">Selecciona una especialidad</option>
                  <option>Cardiología</option>
                  <option>Neurología</option>
                  <option>Oftalmología</option>
                  <option>Ortopedia</option>
                  <option>Pediatría</option>
                  <option>Medicina Interna</option>
                  <option>Otra</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">EPS / Aseguradora</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none"
                  placeholder="Nombre de tu EPS"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Motivo de consulta</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none resize-none"
                  placeholder="Describe brevemente el motivo de tu consulta..."
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button 
                  type="submit" 
                  className="w-full bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center"
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Solicitar Cita
                </button>
              </div>
            </form>

            <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-green-200">
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-green-600" />
                <div>
                  <div className="text-sm text-gray-600">Línea de atención</div>
                  <div className="font-semibold text-gray-900">018000 123 456</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-green-600" />
                <div>
                  <div className="text-sm text-gray-600">Email</div>
                  <div className="font-semibold text-gray-900">citas@ensaludips.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-green-600" />
                <div>
                  <div className="text-sm text-gray-600">Horario</div>
                  <div className="font-semibold text-gray-900">Lun - Sáb: 7am - 7pm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
