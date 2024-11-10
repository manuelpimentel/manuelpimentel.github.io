import "./App.css";
import { useEffect, useState } from "react";
import TopBar from "./assets/components/UI/TopBar"; // Asegúrate de que la ruta sea correcta
import myImage from "./assets/images/Roraima.jpg";
import myImage2 from "./assets/images/Door.jpeg";
import myImage3 from "./assets/images/Caballos.jpeg";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoEarthOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { initializeAnalytics, logPageView } from "./utils/analytics";

function App() {

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Righteous&family=Epilogue:wght@400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    initializeAnalytics();
    logPageView("/home");
  }, []);

  const handleButton = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const url = isMobile
      ? "https://www.instagram.com/somos.kau/"
      : "https://www.instagram.com/direct/t/17842961133339953/#";
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Primer div - Imagen de fondo con texto "KAU" */}
      <div className="hero">
        <TopBar /> {/* Aquí agregamos el TopBar */}
        <img src={myImage} alt="Fondo" className="hero-image" />
        <h1 className="hero-text">KAU</h1>
      </div>

      {/* Resto de los divs */}
      <section id="nosotros" className="about-section">
        <h2 className="section-title">Nosotros</h2>
        <div className="about-content">
          <div className="about-text">
            <h3 id="title">Únete a la Comunidad KAU</h3>
            <p id="paragraph1">
              Descubre <span className="kau-font">KAU</span>, la plataforma que
              conecta viajeros en busca de experiencias auténticas con
              alojamientos únicos en Venezuela.
            </p>
            <p id="paragraph2">
              En <span className="kau-font">KAU</span>, queremos dar visibilidad
              a los alojamientos que merecen ser descubiertos, buscando siempre
              crear alianzas que nos permitan
              <span style={{ fontWeight: "bold" }}>
                {" "}
                #ColaborarParaCrecer
              </span>{" "}
              y afianzar el
              <span style={{ fontWeight: "bold" }}>
                {" "}
                #TurismoTransformador.
              </span>
            </p>
            <p id="paragraph3">
              ¿Tienes un alojamiento al que quieres dar visibilidad de forma
              gratuita? Proporciona tus datos a continuación y juntos
              impulsaremos el crecimiento de tu negocio, facilitando que mas
              viajeros lleguen a tu puerta.
            </p>
            <div>
              <p id="paragraph4">
                ¡Únete y forma parte de esta aventura transformadora!
              </p>
              <button className="contact-button" onClick={handleButton}>
                Contáctanos
              </button>
            </div>
          </div>
          <div>
            <img src={myImage2} alt="Fondo" className="about-image" />
          </div>
        </div>
      </section>
      <div className="second-section">
        {/* Tercer div - Valores */}
        <div className="values-section">
          <h2 id="principios" className="section-title">
            Principios
          </h2>
          <h3 id="title">Valores que nos definen</h3>
          <div className="values-grid">
            <div className="value-box">
              <FaArrowTrendUp size={50} className="value-icon" />
              <h3>#ColaboramosParaCrecer</h3>
              <p>
                La colaboración es clave para el éxito. Fomentamos la diversidad
                de ideas y conexiones con nuestros equipos.
              </p>
            </div>
            <div className="value-box">
              <IoEarthOutline size={50} className="value-icon" />
              <h3>#SostenibilidadYDesarrollo</h3>
              <p>
                Fomentamos prácticas responsables que benefician nuestro
                ambiente y comunidades.
              </p>
            </div>
            <div className="value-box">
              <FaRegUserCircle size={50} className="value-icon" />
              <h3>#MotivamosLaConfianza</h3>
              <p>
                Actuamos con claridad e integridad, apoyando el turismo local
                con un firme compromiso hacia la transparencia.
              </p>
            </div>
            <div className="value-box">
              <GrMapLocation size={50} className="value-icon" />
              <h3>#TurismoTransformador</h3>
              <p>
                Creemos en el turismo como fuerza transformadora para el
                desarrollo de nuestro país y sus comunidades.
              </p>
            </div>
          </div>
        </div>

        {/* Cuarto div - Misión y visión */}
        <div className="purpose-section">
          <h2>Nuestro propósito y aspiración</h2>
          <div className="mission-vision">
            <div className="mission">
              <h3>Misión</h3>
              <p>
                Conectamos esfuerzo y talento local con exploradores que desean
                descubrir la riqueza cultural y natural de Venezuela. Promovemos
                turismo sostenible que beneficia a viajeros y alojadores,
                incentivando el desarrollo de comunidades locales, utilizando
                tecnología de manera eficiente y responsable. Con{" "}
                <span className="kau-font">KAU</span>, cada reserva es una
                oportunidad para descubrir Venezuela.
              </p>
            </div>
            <div className="vision">
              <h3>Visión</h3>
              <p>
                Nos enfocamos en crear conexiones auténticas entre visitantes,
                encargados y la riqueza natural de Venezuela, brindando
                experiencias de hospedaje que van más allá de lo tradicional.
                Nuestro objetivo es revitalizar el turismo de manera sostenible,
                impulsando el desarrollo de comunidades locales a través de un
                enfoque responsable.
              </p>
            </div>
          </div>
          <p id="paragraph5">
            "Queremos promover un turismo que beneficie tanto a los turistas
            como a las comunidades que los acogen."
          </p>
        </div>

        {/* Quinto div - myImage2 */}
        <div>
          <img src={myImage3} alt="Fondo" className="myImage3" />
        </div>

        {/* Sexto div - Acompañanos */}
        <div className="join-section">
          <h2 id="contactanos" className="section-title">
            Acompáñanos
          </h2>
          <h3 id="title">Viaja, descubre, crece.</h3>
          <p>
            Seguro que has soñado con escapar de la rutina y desconectar junto a
            la naturaleza. ¿Y si existiera una forma muy fácil de lograrlo? 🌴
            <p>
              Imagina un paraíso donde las playas de aguas cristalinas y las
              montañas envueltas en nubes te esperan, junto a la hospitalidad de
              un pueblo que te abraza como un viejo amigo.
            </p>
            En <span className="kau-font">KAU</span>, queremos conectar a los
            viajeros con anfitriones que ofrecen más que un simple hospedaje:
            una auténtica experiencia de inmersión en la tierra y su gente.
            <p>
              Cada reserva es una oportunidad para descubrir Venezuela y su
              magia✨🌺 Únete a <span className="kau-font">KAU</span> y sé parte
              de esta aventura transformadora.
            </p>
            <p id="paragraph5">¡Descubre Venezuela de una forma única!</p>
          </p>

          {/* Formulario de HubSpot */}
          <div id="hubspot-form-container"></div>

          <button className="contact-button" onClick={handleButton}>
            Contáctanos
          </button>
        </div>
      </div>

      {/* Sexto div - Experiencia */}
      <div className="experience-section">
        <h2 className="section-title">Sé parte de esta experiencia</h2>
        <div className="experience-icons">
          <a
            href="https://www.facebook.com/profile.php?id=61567693736874"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/somos.kau/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiInstagramFill />
          </a>
          <a
            href="https://www.linkedin.com/company/somoskau/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
