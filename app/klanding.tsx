"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Lightbulb,
  Users,
  Zap,
  CheckCircle2,
  Menu,
  X,
} from "lucide-react";

export default function KinexaLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#0c0c0f] text-[#d7d7d7]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#181a41]/95 backdrop-blur-sm z-50 border-b border-[#ff5b04]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#ff5b04] transform rotate-45"></div>
              <span className="text-2xl font-bold text-white">kinexa</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#productos"
                className="hover:text-[#ff5b04] transition-colors"
              >
                Productos
              </a>
              <a
                href="#servicios"
                className="hover:text-[#ff5b04] transition-colors"
              >
                Servicios
              </a>
              <a
                href="#nosotros"
                className="hover:text-[#ff5b04] transition-colors"
              >
                Nosotros
              </a>
              <a
                href="#contacto"
                className="bg-[#ff5b04] text-white px-6 py-2 rounded-md hover:bg-[#ff5b04]/90 transition-colors"
              >
                Contacto
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[#181a41] border-t border-[#ff5b04]/20"
          >
            <div className="px-4 py-4 space-y-3">
              <a
                href="#productos"
                className="block hover:text-[#ff5b04] transition-colors"
              >
                Productos
              </a>
              <a
                href="#servicios"
                className="block hover:text-[#ff5b04] transition-colors"
              >
                Servicios
              </a>
              <a
                href="#nosotros"
                className="block hover:text-[#ff5b04] transition-colors"
              >
                Nosotros
              </a>
              <a
                href="#contacto"
                className="block bg-[#ff5b04] text-white px-6 py-2 rounded-md text-center hover:bg-[#ff5b04]/90 transition-colors"
              >
                Contacto
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
              variants={fadeInUp}
            >
              Diseñamos, construimos y escalamos{" "}
              <span className="text-[#ff5b04]">productos digitales</span>
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl text-[#d7d7d7]/80 mb-12 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              que mejoran la forma en que las personas trabajan y viven
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <a
                href="#productos"
                className="bg-[#ff5b04] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#ff5b04]/90 transition-colors inline-flex items-center justify-center"
              >
                Ver productos
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="#servicios"
                className="border-2 border-[#ff5b04] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#ff5b04]/10 transition-colors inline-flex items-center justify-center"
              >
                Desarrollo a medida
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-[#181a41]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Creamos productos. Y cuando el problema lo requiere,{" "}
              <span className="text-[#ff5b04]">
                creamos la solución exacta para vos
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-[#0c0c0f] p-8 rounded-lg border border-[#ff5b04]/20"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Code2 className="text-[#ff5b04] mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Productos propios</h3>
              <p className="text-[#d7d7d7]/80 mb-4">
                Desarrollamos soluciones SaaS enfocadas en resolver problemas
                reales con conocimiento profundo del mercado.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2
                    className="text-[#ff5b04] mr-2 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>NutriOne - Gestión para nutricionistas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2
                    className="text-[#ff5b04] mr-2 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>Kinexis - Gestión integral para gimnasios</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-[#0c0c0f] p-8 rounded-lg border border-[#ff5b04]/20"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Lightbulb className="text-[#ff5b04] mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Desarrollo a medida</h3>
              <p className="text-[#d7d7d7]/80 mb-4">
                Construimos soluciones digitales personalizadas con la misma
                calidad que nuestros propios productos.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2
                    className="text-[#ff5b04] mr-2 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>Mentalidad de producto en cada proyecto</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2
                    className="text-[#ff5b04] mr-2 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>Soluciones escalables y mantenibles</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Nuestros productos</h2>
            <p className="text-xl text-[#d7d7d7]/80">
              Simplificamos la gestión para que puedas enfocarte en lo
              importante
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-[#181a41] p-8 rounded-lg border border-[#ff5b04]/20 hover:border-[#ff5b04]/40 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold mb-4 text-[#ff5b04]">
                NutriOne
              </h3>
              <p className="text-[#d7d7d7]/80 mb-6">
                Plataforma de gestión para nutricionistas que centraliza
                pacientes, planes, seguimiento y administración.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-[#ff5b04] hover:text-[#ff5b04]/80 transition-colors"
              >
                Conocer más
                <ArrowRight className="ml-2" size={20} />
              </a>
            </motion.div>

            <motion.div
              className="bg-[#181a41] p-8 rounded-lg border border-[#ff5b04]/20 hover:border-[#ff5b04]/40 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-3xl font-bold mb-4 text-[#ff5b04]">
                Kinexis
              </h3>
              <p className="text-[#d7d7d7]/80 mb-6">
                SaaS de gestión integral para gimnasios, enfocado en operación,
                clientes y crecimiento del negocio.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-[#ff5b04] hover:text-[#ff5b04]/80 transition-colors"
              >
                Conocer más
                <ArrowRight className="ml-2" size={20} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 bg-[#181a41]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">¿Por qué elegirnos?</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap size={40} />,
                title: "Experiencia real",
                description:
                  "No solo desarrollamos para otros: usamos lo que creamos",
              },
              {
                icon: <Code2 size={40} />,
                title: "Calidad sin concesiones",
                description: "Nivel de producto comercial en cada entrega",
              },
              {
                icon: <Users size={40} />,
                title: "Socios tecnológicos",
                description: "Nos involucramos profundamente en tu negocio",
              },
              {
                icon: <Lightbulb size={40} />,
                title: "Mentalidad de producto",
                description:
                  "Pensamos en usabilidad, escalabilidad y mantenimiento",
              },
              {
                icon: <CheckCircle2 size={40} />,
                title: "Innovación práctica",
                description: "Tecnología de vanguardia que realmente funciona",
              },
              {
                icon: <ArrowRight size={40} />,
                title: "Visión de largo plazo",
                description: "Construimos para hoy, pensando en el futuro",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#0c0c0f] p-6 rounded-lg border border-[#ff5b04]/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-[#ff5b04] mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-[#d7d7d7]/80">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-8">¿Por qué nace Kinexa?</h2>
            <p className="text-xl text-[#d7d7d7]/80 mb-6">
              Kinexa nace de la experiencia de crear software y ver una
              constante: muchas soluciones funcionan técnicamente, pero no
              ayudan realmente a las personas que las usan.
            </p>
            <p className="text-xl text-[#d7d7d7]/80 mb-6">
              Por eso decidimos construir nuestros propios productos,
              entendiendo el problema desde adentro, y al mismo tiempo ayudar a
              otros negocios a crear soluciones digitales bien pensadas.
            </p>
            <p className="text-xl text-[#d7d7d7]/80">
              Hoy Kinexa desarrolla productos propios como NutriOne y Kinexis, y
              también trabaja como partner tecnológico para empresas que
              necesitan soluciones a medida. Siempre con el mismo objetivo:{" "}
              <span className="text-[#ff5b04] font-semibold">
                crear tecnología funcional, cercana y con impacto real
              </span>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-20 bg-[#181a41]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="text-xl text-[#d7d7d7]/80 mb-8">
              Conversemos sobre cómo podemos ayudarte a crear soluciones que
              realmente funcionen
            </p>
            <a
              href="mailto:contacto@kinexa.com"
              className="bg-[#ff5b04] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#ff5b04]/90 transition-colors inline-flex items-center"
            >
              Comenzar proyecto
              <ArrowRight className="ml-2" size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0c0c0f] border-t border-[#ff5b04]/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-[#ff5b04] transform rotate-45"></div>
                <span className="text-2xl font-bold text-white">kinexa</span>
              </div>
              <p className="text-[#d7d7d7]/60">
                Transformando ideas en soluciones digitales
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Productos</h4>
              <ul className="space-y-2 text-[#d7d7d7]/60">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#ff5b04] transition-colors"
                  >
                    NutriOne
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#ff5b04] transition-colors"
                  >
                    Kinexis
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Servicios</h4>
              <ul className="space-y-2 text-[#d7d7d7]/60">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#ff5b04] transition-colors"
                  >
                    Desarrollo a medida
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#ff5b04] transition-colors"
                  >
                    Consultoría
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Contacto</h4>
              <ul className="space-y-2 text-[#d7d7d7]/60">
                <li>
                  <a
                    href="mailto:contacto@kinexa.com"
                    className="hover:text-[#ff5b04] transition-colors"
                  >
                    contacto@kinexa.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#ff5b04]/20 mt-12 pt-8 text-center text-[#d7d7d7]/60">
            <p>&copy; 2026 Kinexa. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
