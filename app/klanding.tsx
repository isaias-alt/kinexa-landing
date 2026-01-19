"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Rocket,
  Users,
  Zap,
  CheckCircle2,
  Menu,
  X,
  Github,
  Sparkles,
  Box,
  Award,
} from "lucide-react";

export default function KinexaLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#0c0c0f] text-white relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#181a41] opacity-10 blur-[120px] rounded-full"></div>
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#181a41] opacity-20 blur-[100px] rounded-full"></div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-md bg-[#0c0c0f]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-gradient-to-br from-[#ff5b04] to-[#ff8c42] transform rotate-45 rounded-sm"></div>
              <span className="text-xl font-bold tracking-tight">kinexa</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#productos"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Productos
              </a>
              <a
                href="#servicios"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Servicios
              </a>
              <a
                href="#nosotros"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Nosotros
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-all"
              >
                Contacto
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden border-t border-white/10 bg-[#0c0c0f]"
          >
            <div className="px-4 py-4 space-y-3">
              <a
                href="#productos"
                className="block text-gray-400 hover:text-white transition-colors py-2"
              >
                Productos
              </a>
              <a
                href="#servicios"
                className="block text-gray-400 hover:text-white transition-colors py-2"
              >
                Servicios
              </a>
              <a
                href="#nosotros"
                className="block text-gray-400 hover:text-white transition-colors py-2"
              >
                Nosotros
              </a>
              <a
                href="#contacto"
                className="block bg-white text-black px-4 py-2 rounded-lg text-center font-medium hover:bg-gray-100 transition-all"
              >
                Contacto
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center space-y-8"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="inline-flex">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm backdrop-blur-sm">
                <Sparkles size={14} className="text-[#ff5b04]" />
                <span className="text-gray-300">
                  Soluciones digitales de próxima generación
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                Construimos productos
                <br />
                <span className="bg-gradient-to-r from-[#ff5b04] to-[#ff8c42] bg-clip-text text-transparent">
                  que importan
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Transformamos ideas en soluciones tecnológicas eficientes.
                Desarrollamos software que realmente resuelve problemas.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="#contacto"
                className="group inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all"
              >
                Comenzar proyecto
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#productos"
                className="inline-flex items-center gap-2 border border-white/10 px-6 py-3 rounded-lg font-medium hover:bg-white/5 transition-all"
              >
                Ver productos
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="pt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-white/10 mt-16"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">2+</div>
                <div className="text-sm text-gray-400">Productos SaaS</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-sm text-gray-400">
                  Orientado a resultados
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-sm text-gray-400">Soporte dedicado</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Dos formas de trabajar con nosotros
            </h2>
            <p className="text-xl text-gray-400">
              Elige la opción que mejor se adapte a tu necesidad
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Productos Propios Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative p-8 rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 hover:border-[#ff5b04]/50 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#ff5b04]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#ff5b04]/10 flex items-center justify-center">
                  <Box className="text-[#ff5b04]" size={24} />
                </div>

                <h3 className="text-2xl font-bold">Productos Propios</h3>

                <p className="text-gray-400 leading-relaxed">
                  Soluciones SaaS listas para usar, diseñadas con conocimiento
                  profundo del mercado y optimizadas para casos de uso
                  específicos.
                </p>

                <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="text-[#ff5b04] flex-shrink-0 mt-0.5"
                      size={20}
                    />
                    <span className="text-sm text-gray-300">
                      <strong>NutriOne</strong> - Gestión completa para
                      nutricionistas
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="text-[#ff5b04] flex-shrink-0 mt-0.5"
                      size={20}
                    />
                    <span className="text-sm text-gray-300">
                      <strong>Kinexis</strong> - Suite integral para gimnasios
                    </span>
                  </div>
                </div>

                <a
                  href="#productos"
                  className="inline-flex items-center gap-2 text-[#ff5b04] hover:gap-3 transition-all mt-4"
                >
                  Ver productos
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>

            {/* Desarrollo a Medida Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative p-8 rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 hover:border-[#ff5b04]/50 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#ff5b04]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#ff5b04]/10 flex items-center justify-center">
                  <Code2 className="text-[#ff5b04]" size={24} />
                </div>

                <h3 className="text-2xl font-bold">Desarrollo a Medida</h3>

                <p className="text-gray-400 leading-relaxed">
                  Creamos la solución exacta que tu negocio necesita, con la
                  misma calidad y atención al detalle de nuestros productos.
                </p>

                <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="text-[#ff5b04] flex-shrink-0 mt-0.5"
                      size={20}
                    />
                    <span className="text-sm text-gray-300">
                      Mentalidad de producto en cada proyecto
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="text-[#ff5b04] flex-shrink-0 mt-0.5"
                      size={20}
                    />
                    <span className="text-sm text-gray-300">
                      Arquitectura escalable y mantenible
                    </span>
                  </div>
                </div>

                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 text-[#ff5b04] hover:gap-3 transition-all mt-4"
                >
                  Solicitar cotización
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section id="productos" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nuestros Productos</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Software diseñado para profesionales que quieren enfocarse en lo
              importante
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* NutriOne */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff5b04]/10 border border-[#ff5b04]/20 text-xs font-medium text-[#ff5b04] mb-4">
                      Health Tech
                    </div>
                    <h3 className="text-3xl font-bold mb-2">NutriOne</h3>
                  </div>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed">
                  Plataforma completa de gestión para nutricionistas. Centraliza
                  pacientes, planes nutricionales, seguimiento y administración
                  en un solo lugar.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-white">∞</div>
                    <div className="text-sm text-gray-400">Pacientes</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-sm text-gray-400">Disponible</div>
                  </div>
                </div>

                <a
                  href="#"
                  className="group/link inline-flex items-center gap-2 text-white hover:text-[#ff5b04] transition-colors mt-4"
                >
                  Conocer más
                  <ArrowRight
                    size={16}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </motion.div>

            {/* Kinexis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff5b04]/10 border border-[#ff5b04]/20 text-xs font-medium text-[#ff5b04] mb-4">
                      Fitness Tech
                    </div>
                    <h3 className="text-3xl font-bold mb-2">Kinexis</h3>
                  </div>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed">
                  Suite de gestión integral para gimnasios. Optimiza
                  operaciones, gestión de clientes y crecimiento del negocio
                  desde una plataforma unificada.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-white">360°</div>
                    <div className="text-sm text-gray-400">Control total</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-white">
                      Real-time
                    </div>
                    <div className="text-sm text-gray-400">Analytics</div>
                  </div>
                </div>

                <a
                  href="#"
                  className="group/link inline-flex items-center gap-2 text-white hover:text-[#ff5b04] transition-colors mt-4"
                >
                  Conocer más
                  <ArrowRight
                    size={16}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">¿Por qué Kinexa?</h2>
            <p className="text-xl text-gray-400">
              No solo desarrollamos software, construimos soluciones que
              funcionan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket size={24} />,
                title: "Experiencia Real",
                description:
                  "Usamos nuestros propios productos. Conocemos los desafíos desde adentro.",
              },
              {
                icon: <Award size={24} />,
                title: "Calidad Premium",
                description:
                  "Cada proyecto recibe el mismo nivel de excelencia que nuestros productos comerciales.",
              },
              {
                icon: <Users size={24} />,
                title: "Partner Tecnológico",
                description:
                  "No somos solo proveedores, somos tu equipo de confianza a largo plazo.",
              },
              {
                icon: <Zap size={24} />,
                title: "Innovación Práctica",
                description:
                  "Tecnología de vanguardia aplicada a resolver problemas reales del negocio.",
              },
              {
                icon: <Code2 size={24} />,
                title: "Código Limpio",
                description:
                  "Arquitectura escalable, mantenible y siguiendo las mejores prácticas.",
              },
              {
                icon: <Sparkles size={24} />,
                title: "Visión a Futuro",
                description:
                  "Construimos pensando en el crecimiento y evolución de tu negocio.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-[#ff5b04]/10 flex items-center justify-center text-[#ff5b04] mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="nosotros"
        className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-4xl font-bold">El origen de Kinexa</h2>

            <div className="space-y-4 text-lg text-gray-400 leading-relaxed">
              <p>
                Kinexa nace de una observación simple pero poderosa: muchas
                soluciones de software funcionan técnicamente, pero no ayudan
                realmente a las personas que las usan.
              </p>

              <p>
                Por eso decidimos construir nuestros propios productos,
                entendiendo los problemas desde adentro. Esta experiencia nos
                permite crear soluciones a medida con el mismo nivel de calidad
                y atención al detalle.
              </p>

              <p className="text-white font-medium text-xl pt-4">
                Nuestro objetivo: crear tecnología funcional, cercana y con
                impacto real.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contacto"
        className="relative py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl font-bold">¿Listo para comenzar?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Conversemos sobre cómo podemos ayudarte a transformar tu negocio
              con tecnología que realmente funciona.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a
                href="mailto:contacto@kinexa.com"
                className="group inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all text-lg"
              >
                Comenzar proyecto
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#productos"
                className="inline-flex items-center gap-2 border border-white/20 px-8 py-4 rounded-lg font-medium hover:bg-white/5 transition-all text-lg"
              >
                Ver productos
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-gradient-to-br from-[#ff5b04] to-[#ff8c42] transform rotate-45 rounded-sm"></div>
                <span className="text-xl font-bold">kinexa</span>
              </div>
              <p className="text-gray-400 max-w-xs">
                Transformando ideas en soluciones digitales que impulsan el
                crecimiento de tu negocio.
              </p>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold mb-4">Productos</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    NutriOne
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Kinexis
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a
                    href="#nosotros"
                    className="hover:text-white transition-colors"
                  >
                    Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    className="hover:text-white transition-colors"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; 2026 Kinexa. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacidad
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Términos
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
