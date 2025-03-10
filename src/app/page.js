'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import "./styles.css";
import Image from "next/image";

export default function TechJacket() {
  const [email, setEmail] = useState("");

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="container">
      {/* Sección 1: Vistazo de la chaqueta */}
      <section className="hero">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1 className="title">TermoShield Jacket</h1>
          <p className="description">
            Descubre la chaqueta del futuro: equipada con sensores avanzados que regulan la temperatura según el clima, adaptándose a cualquier entorno. Su material hidrofóbico de última generación repele el agua y te mantiene seco incluso en las peores tormentas. Además, conéctala a tu smartphone mediante una app intuitiva para un control automático o manual de todas sus funciones. Tecnología, estilo y comodidad en una sola prenda.
          </p>
          <Image src="/jacket.PNG" alt="Chaqueta" width={400} height={600} className="hero-image" />
        </motion.div>
      </section>

      {/* Sección 2: Características (en tarjetas) */}
      <motion.section
        className="features"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="section-title">Características</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <Image src="/temperatura.png" alt="Sensores" width={180} height={180} className="feature-image" />
            <p>Sensores que regulan la temperatura según el clima</p>
          </div>
          <div className="feature-card">
            <Image src="/hidrofobico.png" alt="Hidrofóbico" width={180} height={180} className="feature-image" />
            <p>Material hidrofóbico para máxima protección contra el agua</p>
          </div>
          <div className="feature-card">
            <Image src="/app.png" alt="App" width={180} height={180} className="feature-image" />
            <p>Control automático o manual a través de una app</p>
          </div>
        </div>
      </motion.section>

      {/* Sección 3: Dónde comprar */}
      <motion.section
        className="buy"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="section-title">¿Dónde comprar?</h2>
        <p>Encuentra nuestra chaqueta en tiendas seleccionadas y en línea.</p>
        <button className="button">Comprar ahora</button>
      </motion.section>

      {/* Sección 4: Redes sociales */}
      <motion.section
        className="social"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="section-title">Síguenos en redes</h2>
        <div className="social-links">
          <a href="#">
            <Image src="/facebook.png" alt="Facebook" width={30} height={30} className="social-icon" />
          </a>

          <a href="#">
            <Image src="/instagram.png" alt="Instagram" width={30} height={30} className="social-icon" />
          </a>

          <a href="#">
            <Image src="/x.PNG" alt="X" width={30} height={30} className="social-icon" />
          </a>

          <a href="#">
            <Image src="/tiktok.png" alt="Tiktok" width={30} height={30} className="social-icon" />
          </a>
          
        </div>
      </motion.section>

      {/* Sección de contacto */}
      <motion.section
        className="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="section-title">Recibe más información</h2>
        <div className="form">
          <input
            type="email"
            placeholder="Tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
          <button className="button">Enviar</button>
        </div>
      </motion.section>
    </div>
  );
}
