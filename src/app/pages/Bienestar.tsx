import { Link } from 'react-router-dom';
import { 
  Heart, Users, Dumbbell, Brain, Apple, Smile, Zap, Target,
  CheckCircle2, ArrowRight, Phone, Mail, Building2, TrendingUp,
  Award, Shield, BarChart, Sparkles
} from 'lucide-react';
import logoBienestar from '/assets/47c0b9ac6c0eca7a338570f8d4923729eb0adb0c.png';

export function Bienestar() {
  const programs = [
    { 
      icon: Building2, 
      title: 'Bienestar Corporativo',
      description: 'Programas integrales de salud y bienestar para empresas que quieren cuidar a su equipo.'
    },
    { 
      icon: Dumbbell, 
      title: 'Actividad Física',
      description: 'Rutinas personalizadas, clases grupales y seguimiento con entrenadores certificados.'
    },
    { 
      icon: Apple, 
      title: 'Nutrición Integral',
      description: 'Planes alimenticios personalizados con seguimiento nutricional profesional.'
    },
    { 
      icon: Brain, 
      title: 'Salud Mental',
      description: 'Apoyo psicológico, mindfulness y programas de gestión del estrés.'
    },
    { 
      icon: Heart, 
      title: 'Medicina Preventiva',
      description: 'Chequeos médicos periódicos y programas de prevención de enfermedades.'
    },
    { 
      icon: Smile, 
      title: 'Calidad de Vida',
      description: 'Actividades recreativas y programas de equilibrio vida-trabajo.'
    },
  ];

  const corporateBenefits = [
    'Reducción del ausentismo laboral',
    'Mejora del clima organizacional',
    'Aumento de la productividad',
    'Disminución de costos en salud',
    'Retención de talento humano',
    'Cumplimiento normativo SG-SST'
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-orange-700 to-amber-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635367216109-aa3353c0c22e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMGhlYWx0aCUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3Njg0Njc0NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')] bg-cover bg-center"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Link to="/" className="inline-flex items-center text-orange-100 hover:text-white mb-6 transition-colors">
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                Volver a Ensalud Group
              </Link>
              <img src={logoBienestar} alt="Ensalud Bienestar" className="h-16 mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Programas de Salud Integral y Bienestar
              </h1>
              <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                Transformamos la salud de tu organización con programas personalizados que impulsan el bienestar físico, mental y emocional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contacto-bienestar" 
                  className="bg-white text-orange-700 px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors font-semibold text-center inline-flex items-center justify-center"
                >
                  Solicitar Cotización
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a 
                  href="#programas" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-center"
                >
                  Ver Programas
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">200+</div>
                <div className="text-orange-100">Empresas atendidas</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">50K+</div>
                <div className="text-orange-100">Colaboradores beneficiados</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">85%</div>
                <div className="text-orange-100">Satisfacción promedio</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">30%</div>
                <div className="text-orange-100">Reducción ausentismo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programas */}
      <section id="programas" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Programas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluciones integrales de bienestar diseñadas para mejorar la calidad de vida
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-orange-100"
              >
                <div className="bg-orange-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <program.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bienestar Corporativo */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                <Sparkles className="inline w-8 h-8 text-orange-600 mr-2" />
                Bienestar Corporativo
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Diseñamos e implementamos programas de bienestar a la medida de tu organización, alineados con tus objetivos estratégicos y cultura empresarial.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Target className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Diagnóstico Organizacional</div>
                    <div className="text-sm text-gray-600">Análisis del estado de salud de tu equipo</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Programas Personalizados</div>
                    <div className="text-sm text-gray-600">Diseño a medida según necesidades</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BarChart className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Medición de Resultados</div>
                    <div className="text-sm text-gray-600">Indicadores de impacto y ROI</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Acompañamiento Continuo</div>
                    <div className="text-sm text-gray-600">Seguimiento y ajustes permanentes</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1758630737403-1bda34e3f98e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzY4NTc0MDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Corporate wellness" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporateBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm">
                <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestra Metodología
            </h2>
            <p className="text-xl text-gray-600">
              Proceso estructurado para garantizar resultados
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-700">1</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Diagnóstico</h3>
              <p className="text-gray-600 text-sm">Evaluación del estado actual de bienestar organizacional</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-700">2</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Diseño</h3>
              <p className="text-gray-600 text-sm">Creación de programa personalizado con objetivos claros</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-700">3</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Implementación</h3>
              <p className="text-gray-600 text-sm">Ejecución del programa con actividades y talleres</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-700">4</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Evaluación</h3>
              <p className="text-gray-600 text-sm">Medición de resultados y ajustes continuos</p>
            </div>
          </div>

          <div className="mt-16 bg-orange-50 rounded-2xl p-8 border border-orange-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Indicadores que Medimos</h3>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center bg-white p-6 rounded-xl">
                <TrendingUp className="w-10 h-10 text-orange-600 mx-auto mb-3" />
                <div className="font-bold text-gray-900">Productividad</div>
                <div className="text-sm text-gray-600">Rendimiento laboral</div>
              </div>
              <div className="text-center bg-white p-6 rounded-xl">
                <Heart className="w-10 h-10 text-orange-600 mx-auto mb-3" />
                <div className="font-bold text-gray-900">Salud</div>
                <div className="text-sm text-gray-600">Indicadores biométricos</div>
              </div>
              <div className="text-center bg-white p-6 rounded-xl">
                <Smile className="w-10 h-10 text-orange-600 mx-auto mb-3" />
                <div className="font-bold text-gray-900">Satisfacción</div>
                <div className="text-sm text-gray-600">Clima laboral</div>
              </div>
              <div className="text-center bg-white p-6 rounded-xl">
                <Shield className="w-10 h-10 text-orange-600 mx-auto mb-3" />
                <div className="font-bold text-gray-900">Ausentismo</div>
                <div className="text-sm text-gray-600">Reducción de faltas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Éxito */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Casos de Éxito
            </h2>
            <p className="text-xl text-gray-600">
              Empresas que han transformado su cultura de bienestar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                company: 'Empresa Tecnológica',
                industry: 'IT & Software',
                result: '40% reducción de estrés laboral',
                quote: 'El programa transformó completamente nuestra cultura organizacional.'
              },
              {
                company: 'Banco Nacional',
                industry: 'Sector Financiero',
                result: '35% aumento en productividad',
                quote: 'Nuestros colaboradores están más motivados y saludables.'
              },
              {
                company: 'Retail Corp',
                industry: 'Comercio',
                result: '50% reducción ausentismo',
                quote: 'Los resultados superaron nuestras expectativas iniciales.'
              }
            ].map((caso, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
                <Award className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{caso.company}</h3>
                <p className="text-sm text-gray-600 mb-4">{caso.industry}</p>
                <div className="bg-orange-50 p-4 rounded-lg mb-4">
                  <p className="font-semibold text-orange-700">{caso.result}</p>
                </div>
                <p className="text-gray-700 italic">"{caso.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto y Formulario */}
      <section id="contacto-bienestar" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Solicita una Cotización
            </h2>
            <p className="text-xl text-gray-600">
              Diseñemos juntos el programa ideal para tu organización
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 shadow-xl border border-orange-200">
            <form className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre completo *</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Cargo *</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none"
                  placeholder="Tu cargo en la empresa"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Empresa *</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none"
                  placeholder="Nombre de la empresa"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sector *</label>
                <select 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none"
                >
                  <option value="">Selecciona un sector</option>
                  <option>Tecnología</option>
                  <option>Financiero</option>
                  <option>Retail / Comercio</option>
                  <option>Manufactura</option>
                  <option>Servicios</option>
                  <option>Salud</option>
                  <option>Otro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Número de colaboradores *</label>
                <select 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none"
                >
                  <option value="">Selecciona un rango</option>
                  <option>1-50</option>
                  <option>51-200</option>
                  <option>201-500</option>
                  <option>501-1000</option>
                  <option>Más de 1000</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono *</label>
                <input 
                  type="tel" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none"
                  placeholder="+57 300 123 4567"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Correo electrónico *</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none"
                  placeholder="tu@empresa.com"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">¿Qué programa te interesa? *</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Bienestar corporativo', 'Actividad física', 'Nutrición', 'Salud mental', 'Medicina preventiva', 'Todos'].map((programa) => (
                    <label key={programa} className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-orange-600 focus:ring-orange-500" />
                      <span className="text-sm text-gray-700">{programa}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Comentarios adicionales</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none resize-none"
                  placeholder="Cuéntanos más sobre tus necesidades y objetivos..."
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button 
                  type="submit" 
                  className="w-full bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors font-semibold flex items-center justify-center"
                >
                  <Building2 className="mr-2 w-5 h-5" />
                  Solicitar Cotización
                </button>
              </div>
            </form>

            <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-orange-200">
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-orange-600" />
                <div>
                  <div className="text-sm text-gray-600">Contáctanos</div>
                  <div className="font-semibold text-gray-900">+57 (1) 300 9876</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-orange-600" />
                <div>
                  <div className="text-sm text-gray-600">Email</div>
                  <div className="font-semibold text-gray-900">bienestar@ensalud.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Building2 className="w-6 h-6 text-orange-600" />
                <div>
                  <div className="text-sm text-gray-600">Empresas</div>
                  <div className="font-semibold text-gray-900">200+ aliados</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
