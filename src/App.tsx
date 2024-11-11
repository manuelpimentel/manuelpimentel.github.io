import "./App.css";
import { useEffect, useState } from "react";
import TopBar from "./assets/components/UI/TopBar"; // Asegúrate de que la ruta sea correcta
import myImage from "./assets/images/Roraima.jpg";
import myImage1 from "./assets/images/KAU.png";
import myImage2 from "./assets/images/Door.jpeg";
import myImage3 from "./assets/images/Caballos.jpeg";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoEarthOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { TbMapSearch } from "react-icons/tb"
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import {
  initializeAnalytics,
  logPageView,
  logButtonClick,
} from "./utils/analytics";

function App() {
  const [currentPath, setCurrentPath] = useState("/");

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
    logPageView(currentPath);
  }, [currentPath]);

  const handleContactButton = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const url = isMobile
      ? "https://www.instagram.com/somos.kau/"
      : "https://www.instagram.com/direct/t/17842961133339953/#";
    window.open(url, "_blank");
    logButtonClick("Contact");
  };

  return (
    <>
      {/* Primer div - Imagen de fondo con texto "KAU" */}
      <div className="hero">
        <TopBar onSectionChange={setCurrentPath} /> {/* Aquí agregamos el TopBar */}
        <img src={myImage} alt="Fondo" className="hero-image" />
        <img src={myImage1} alt="Fondo" className="hero-imagetitle" />
      </div>

      {/* Resto de los divs */}
      <section id="nosotros" className="about-section">
        <h2 className="section-title">Nosotros</h2>
        <div className="about-content">
          <div className="about-text">
            <h3 id="title">Únete a la Comunidad  <span className="kau-font">KAU</span></h3>
            <p id="paragraph1">
              Descubre <span className="kau-font">KAU</span>, la plataforma que
              conecta viajeros en busca de experiencias auténticas con
              alojamientos únicos en Venezuela.
            </p>
            <p id="paragraph1">
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
            <p id="paragraph1">
              ¿Tienes un alojamiento al que quieres dar visibilidad de forma
              gratuita? Proporciona tus datos a continuación y juntos
              impulsaremos el crecimiento de tu negocio, facilitando que mas
              viajeros lleguen a tu puerta.
            </p>
            <div className="contact-button-container">
              <p id="paragraph4">
                ¡Únete y forma parte de esta aventura transformadora!
              </p>
              <button className="contact-button" onClick={handleContactButton}>
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
              <h3 id="paragraph">#ColaboramosParaCrecer</h3>
              <p id="paragraph1">
                La colaboración es clave para el éxito. Fomentamos la diversidad
                de ideas y conexiones con nuestros equipos.
              </p>
            </div>
            <div className="value-box">
              <IoEarthOutline size={50} className="value-icon" />
              <h3 id="paragraph">#SostenibilidadYDesarrollo</h3>
              <p id="paragraph1">
                Fomentamos prácticas responsables que benefician nuestro
                ambiente y comunidades.
              </p>
            </div>
            <div className="value-box">
              <FaRegUserCircle size={50} className="value-icon" />
              <h3 id="paragraph">#MotivamosLaConfianza</h3>
              <p id="paragraph1">
                Actuamos con claridad e integridad, apoyando el turismo local
                con un firme compromiso hacia la transparencia.
              </p>
            </div>
            <div className="value-box">
              <TbMapSearch size={50} className="value-icon" />
              <h3 id="paragraph">#TurismoTransformador</h3>
              <p id="paragraph1">
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
              <h3 id="paragraph4">Misión</h3>
              <p id="paragraph1">
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
              <h3 id="paragraph4">Visión</h3>
              <p id="paragraph1">
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
          <div>
            <img src={myImage3} alt="Fondo" className="myImage3" />
          </div>
        </div>

        {/* Quinto div - myImage2 */}


        {/* Sexto div - Acompañanos */}
        <div className="join-section">
          <h2 id="contactanos" className="section-title">
            Acompáñanos
          </h2>
          <h3 id="title">Viaja, descubre, crece.</h3>
          <p id="paragraph1">
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

          <button className="contact-button" onClick={handleContactButton}>
            Contáctanos
          </button>
        </div>
      </div>

      {/* Sexto div - Experiencia */}
      <div className="experience-section">
        <h2 className="section-title-footer">Sé parte de esta experiencia</h2>
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
