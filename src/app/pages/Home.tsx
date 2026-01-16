import { Link } from 'react-router-dom';
import { 
  Heart, Users, Building2, Award, TrendingUp, CheckCircle2, 
  ArrowRight, PhoneCall, Mail, MapPin, Star
} from 'lucide-react';
import logoIPS from 'figma:asset/90f4af159a8911e848aed34370866cc925276c92.png';
import logoFarmar from 'figma:asset/90f4af159a8911e848aed34370866cc925276c92.png';
import logoBienestar from 'figma:asset/47c0b9ac6c0eca7a338570f8d4923729eb0adb0c.png';

export function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#7B3F9E] via-[#6A3488] to-[#5A2F78] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565647946321-a146ac24a220?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFscyUyMGhvc3BpdGFsfGVufDF8fHx8MTc2ODU3NDA0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')] bg-cover bg-center"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              🏥 Líder en Servicios de Salud Integral
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Una marca, múltiples soluciones,
              <span className="block text-purple-200">un solo compromiso</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed">
              Transformamos la salud en Latinoamérica con tecnología de punta, talento humano excepcional y un modelo de atención centrado en ti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contacto" 
                className="bg-white text-[#7B3F9E] px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center inline-flex items-center justify-center"
              >
                Solicitar Información
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#unidades" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-center"
              >
                Conocer Servicios
              </a>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Cifras Clave Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#7B3F9E] mb-2">500K+</div>
              <div className="text-gray-600">Pacientes Atendidos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#7B3F9E] mb-2">15+</div>
              <div className="text-gray-600">Sedes en Colombia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#7B3F9E] mb-2">25</div>
              <div className="text-gray-600">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#7B3F9E] mb-2">800+</div>
              <div className="text-gray-600">Profesionales</div>
            </div>
          </div>
        </div>
      </section>

      {/* Nosotros Section */}
      <section id="nosotros" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Quiénes Somos
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Ensalud Group es un conglomerado empresarial líder en servicios de salud integral en Latinoamérica. Desde hace más de 25 años, hemos transformado la manera en que las personas acceden y experimentan los servicios de salud.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nuestro modelo de negocio integrado combina atención médica de alta calidad, gestión farmacéutica eficiente y programas de bienestar personalizados, todo bajo una misma visión: mejorar la calidad de vida de nuestros usuarios.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Innovación Continua</div>
                    <div className="text-sm text-gray-600">Tecnología de punta</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Calidad Certificada</div>
                    <div className="text-sm text-gray-600">Estándares internacionales</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Equipo Experto</div>
                    <div className="text-sm text-gray-600">Profesionales certificados</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Cobertura Nacional</div>
                    <div className="text-sm text-gray-600">15+ sedes</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1662414185445-b9a05e26dba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2ODU0MDc2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Modern healthcare facility" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl hidden md:block">
                <div className="flex items-center space-x-3">
                  <Award className="w-12 h-12 text-[#7B3F9E]" />
                  <div>
                    <div className="font-bold text-2xl text-gray-900">ISO 9001</div>
                    <div className="text-sm text-gray-600">Certificado</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unidades de Negocio Section */}
      <section id="unidades" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestras Unidades de Negocio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluciones integrales de salud diseñadas para cada necesidad
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* IPS Card */}
            <Link 
              to="/ips" 
              className="group bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-green-200"
            >
              <div className="bg-white rounded-xl p-4 inline-block mb-6">
                <img src={logoIPS} alt="Ensalud IPS" className="h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                IPS
              </h3>
              <p className="text-gray-600 mb-6">
                Institución Prestadora de Servicios de Salud con especialidades médicas de alta complejidad y atención personalizada.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                  Consulta especializada
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                  Cirugías ambulatorias
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                  Imagenología avanzada
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                  Laboratorio clínico
                </li>
              </ul>
              <div className="flex items-center text-green-700 font-semibold group-hover:gap-3 gap-2 transition-all">
                Conocer más
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>

            {/* Farmar Card */}
            <Link 
              to="/farmar" 
              className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-200"
            >
              <div className="bg-white rounded-xl p-4 inline-block mb-6">
                <img src={logoFarmar} alt="Ensalud Farmar" className="h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                Farmar
              </h3>
              <p className="text-gray-600 mb-6">
                Gestor farmacéutico integral con tecnología de punta para optimización de tratamientos y gestión de medicamentos.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                  Dispensación de medicamentos
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                  Seguimiento farmacoterapéutico
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                  Gestión de tratamientos
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                  Asesoría especializada
                </li>
              </ul>
              <div className="flex items-center text-blue-700 font-semibold group-hover:gap-3 gap-2 transition-all">
                Conocer más
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>

            {/* Bienestar Card */}
            <Link 
              to="/bienestar" 
              className="group bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-orange-200"
            >
              <div className="bg-white rounded-xl p-4 inline-block mb-6">
                <img src={logoBienestar} alt="Ensalud Bienestar" className="h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-700 transition-colors">
                Bienestar
              </h3>
              <p className="text-gray-600 mb-6">
                Programas de salud integral y prevención con enfoque holístico para empresas e individuos.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0" />
                  Programas corporativos
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0" />
                  Nutrición y fitness
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0" />
                  Salud mental
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0" />
                  Medicina preventiva
                </li>
              </ul>
              <div className="flex items-center text-orange-700 font-semibold group-hover:gap-3 gap-2 transition-all">
                Conocer más
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Aliados Estratégicos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            Aliados Estratégicos
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="bg-white p-8 rounded-xl flex items-center justify-center h-24">
              <Building2 className="w-16 h-16 text-gray-400" />
            </div>
            <div className="bg-white p-8 rounded-xl flex items-center justify-center h-24">
              <Heart className="w-16 h-16 text-gray-400" />
            </div>
            <div className="bg-white p-8 rounded-xl flex items-center justify-center h-24">
              <Users className="w-16 h-16 text-gray-400" />
            </div>
            <div className="bg-white p-8 rounded-xl flex items-center justify-center h-24">
              <Award className="w-16 h-16 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros pacientes
            </h2>
            <p className="text-xl text-gray-600">
              Testimonios de quienes confían en nosotros
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'María González',
                role: 'Paciente IPS',
                text: 'Excelente atención médica y tecnología de última generación. El equipo es muy profesional y amable.',
                rating: 5
              },
              {
                name: 'Carlos Rodríguez',
                role: 'Cliente Farmar',
                text: 'El seguimiento farmacológico ha mejorado significativamente mi adherencia al tratamiento. Muy recomendado.',
                rating: 5
              },
              {
                name: 'Ana Martínez',
                role: 'Programa Bienestar',
                text: 'Los programas de bienestar han transformado la cultura de salud en nuestra empresa. Excelentes resultados.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#7B3F9E] rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-[#7B3F9E] to-[#5A2F78] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para transformar tu experiencia en salud?
            </h2>
            <p className="text-xl text-purple-100">
              Contáctanos y descubre cómo podemos ayudarte
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <form className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre completo</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#7B3F9E] focus:border-transparent outline-none"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Correo electrónico</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#7B3F9E] focus:border-transparent outline-none"
                  placeholder="tu@correo.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#7B3F9E] focus:border-transparent outline-none"
                  placeholder="+57 300 123 4567"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Servicio de interés</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#7B3F9E] focus:border-transparent outline-none">
                  <option>Selecciona una opción</option>
                  <option>IPS - Servicios de salud</option>
                  <option>Farmar - Gestión farmacéutica</option>
                  <option>Bienestar - Programas corporativos</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#7B3F9E] focus:border-transparent outline-none resize-none"
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button 
                  type="submit" 
                  className="w-full bg-[#7B3F9E] text-white px-8 py-4 rounded-lg hover:bg-[#6A3488] transition-colors font-semibold"
                >
                  Enviar Solicitud
                </button>
              </div>
            </form>

            <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center space-x-3">
                <PhoneCall className="w-6 h-6 text-[#7B3F9E]" />
                <div>
                  <div className="text-sm text-gray-600">Llámanos</div>
                  <div className="font-semibold text-gray-900">+57 (1) 300 1234</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-[#7B3F9E]" />
                <div>
                  <div className="text-sm text-gray-600">Escríbenos</div>
                  <div className="font-semibold text-gray-900">contacto@ensalud.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-[#7B3F9E]" />
                <div>
                  <div className="text-sm text-gray-600">Visítanos</div>
                  <div className="font-semibold text-gray-900">Bogotá, Colombia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
