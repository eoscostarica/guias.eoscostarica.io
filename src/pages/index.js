import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import { useColorMode } from "@docusaurus/theme-common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Box, Grid, useMediaQuery } from "@material-ui/core";
import "../css/homepage.css";
class Carousel {
  constructor() {
    this.slideIndex = 0;
    this.animation = null;
  }
  start() {
    this.animation = setInterval(() => {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      this.slideIndex++;
      if (this.slideIndex > slides.length) {
        this.slideIndex = 1;
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].style.backgroundColor = "";
      }
      slides[this.slideIndex - 1].style.display = "block";
      dots[this.slideIndex - 1].style.backgroundColor = "#2d9cdb";
    }, 6000);
  }
  stop() {
    clearInterval(this.animation);
  }
}

const imagesList = [
  { background: "/img/cards-icons/Hero-1.webp" },
  { background: "/img/cards-icons/Hero-2.webp" },
  { background: "/img/cards-icons/Hero-3.webp" },
];

const HeroSection = () => {
  useEffect(() => {
    document.getElementsByClassName("mySlides")[0].style.display = "block";
    const carousel = new Carousel();
    carousel.start();
    return () => carousel.stop();
  }, []);
  return (
    <Box className="carouselContainer">
      {imagesList.map(({ background }, index) => (
        <Box key={background} className="mySlides fade">
          <Box className="numberImagetext">{index + 1} / 3</Box>
          <img
            alt={background}
            src={useBaseUrl(background)}
            width="100%"
            className="imgHero"
          />
        </Box>
      ))}
      <h1 className="textImgTitle">EOS Costa Rica</h1>
      <h2 className="textSubTitleImg">Guías Generales</h2>
      <h3 className="textImg">
        Le damos la bienvenida a nuestro portal de web3. Comience su viaje para
        aprender sobre la tecnología blockchain y todo lo que la hace posible.
      </h3>
      <Box className="buttonHeroContainer">
        <a
          className="buttonHero"
          style={{ textDecoration: "none" }}
          href="/docs/engineering-culture"
        >
          COMENZAR
        </a>
      </Box>
      <Box className="dotContainer">
        <Box className="dot" />
        <Box className="dot" />
        <Box className="dot" />
      </Box>
    </Box>
  );
};

const startResourceList = [
  {
    title: "Guías Generales",
    body: "Guías para los desarrolladores sobre como programar en código abierto.",
    href: "/docs/pautas-para-codigo-abierto",
    img: "/img/cards-icons/guidelines.svg",
  },
  {
    title: "Aprender EOSIO",
    body: "Conjunto de información necesaria para aprender sobre el protocolo EOSIO.",
    href: "/docs/aprender-eosio/protocolo-eosio",
    img: "/img/cards-icons/icons-eosio.svg",
  },
  {
    title: "Tutoriales",
    body: "Información de apoyo necesaria para realizar la instalación y la ejecución de procesos.",
    href: "/docs/tutoriales/contrato-hola-mundo",
    img: "/img/cards-icons/tutorials.svg",
  },
  {
    title: "Herramientas",
    body: "Conjunto de herramientas útiles durante el proceso de aprendizaje.",
    href: "/docs/herramientas/glosario",
    img: "/img/cards-icons/tools.svg",
  },
  {
    title: "Comunidad",
    body: "Enlaces a sitios de interés de la comunidad de EOS.",
    href: "/docs/comunidad/canales-de-telegram",
    img: "/img/cards-icons/community.svg",
  },
  {
    title: "Proyectos de Código Abierto",
    body: "Listado de proyectos de código abierto que realizamos.",
    href: "/docs/proyectos-de-codigo-abierto",
    img: "/img/cards-icons/icons-opensource.svg",
  },
];

const StartResourceSection = () => {
  const smDown = useMediaQuery("(max-width:400px)");
  const { colorMode } = useColorMode();
  const [color, setColor] = useState(null);
  useEffect(() => {
    setColor(colorMode);
  }, [colorMode]);
  return (
    <>
      {color && (
        <Box className="container">
          <Box className="startTitleContainer">
            <Box className="box-title-startResource" />
            <Box className="section-title-startResource">
              Empiece con estos recursos
            </Box>
          </Box>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={smDown ? 1 : 3}
          >
            {startResourceList.map(({ title, body, href, img }) => (
              <Grid
                key={title}
                item
                xs={12}
                sm={6}
                lg={4}
                container
                display="flex"
                justifyContent="center"
              >
                <Box className="cardDimentions">
                  <div
                    className={`cardImgContainer ${
                      color === "dark"
                        ? "cardImgContainerDark"
                        : "cardImgContainerLight"
                    }`}
                  >
                    <img
                      src={useBaseUrl(img)}
                      alt={title}
                      loading="lazy"
                      className={`imgHero ${
                        color === "dark" && "cardImgColor"
                      }`}
                    />
                  </div>
                  <Box
                    className={`cardHeaderTransition ${
                      color === "dark"
                        ? "cardHeaderDark-mode"
                        : "cardHeaderLight-mode"
                    }`}
                  >
                    <span>SECCIÓN</span>
                  </Box>
                  <h1 className="cardTitle"> {title} </h1>
                  <Box
                    className={`cardBody ${
                      color === "dark" ? "darkTextColor" : "ligthTextColor"
                    }`}
                  >
                    {body}
                  </Box>
                  <a
                    className={`cardLinkFooter ${
                      color === "dark" ? "darkTextColor" : "ligthTextColor"
                    }`}
                    style={{ textDecoration: "none" }}
                    id="box-link-id-customCard"
                    href={href}
                  >
                    LEER MÁS
                  </a>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </>
  );
};

const articlesList = [
  {
    title: "¿Qué es un smart contract?",
    body: "Explicamos como funciona la descentralización en sus registros, mediante contratos inteligentes.",
    href: "https://eoscostarica.medium.com/qu%C3%A9-es-un-smart-contract-793d2042c65d",
    img: "/img/cards-icons/blog1.webp",
  },
  {
    title: "¿Qué es EOSIO?",
    body: "Explicamos en qué consiste el protocolo blockchain EOSIO.",
    href: "https://eoscostarica.medium.com/que-es-eosio-178e21ac2ebb",
    img: "/img/cards-icons/blog3.webp",
  },
  {
    title: "¿Cómo funciona una blockchain?",
    body: "Explicamos, con ejemplos, qué es y cómo funciona una blockchain..",
    href: "https://eoscostarica.medium.com/https-medium-com-eoscostarica-que-es-blockchain-d54d42439ef3",
    img: "/img/cards-icons/blog2.webp",
  },
];

const ArticleSection = () => {
  const smDown = useMediaQuery("(max-width:400px)");
  const { colorMode } = useColorMode();
  const [color, setColor] = useState(null);
  useEffect(() => {
    setColor(colorMode);
  }, [colorMode]);
  return (
    <>
      {color && (
        <Box className="container" id="article-id">
          <Box className="startTitleContainer">
            <Box className="box-title-startResource" />
            <Box className="section-title-startResource">
              Artículos de blogs
            </Box>
          </Box>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={smDown ? 1 : 3}
          >
            {articlesList.map(({ title, body, href, img }) => (
              <Grid
                key={title}
                item
                xs={12}
                sm={6}
                lg={4}
                container
                display="flex"
                justifyContent="center"
              >
                <Box
                  className={`cardArticleDimentions ${
                    color === "dark" ? "darkTextColor" : "ligthTextColor"
                  }`}
                >
                  <Box
                    component="img"
                    src={useBaseUrl(img)}
                    alt={title}
                    width="100%"
                    className="cardArticleImg"
                  />
                  <Box className="cardArticleHeader"> ARTÍCULO </Box>
                  <Box className="cardArticleTitleContainer">
                    <Box className="cardArticleBlueBoxTitle" />
                    <Box className="cardArticleTitle "> {title} </Box>
                  </Box>
                  <Box
                    className={`cardArticleBody ${
                      color === "dark" ? "darkTextColor" : "ligthTextColor"
                    }`}
                  >
                    {body}
                  </Box>
                  <a
                    className={`cardLinkFooter ${
                      color === "dark" ? "darkTextColor" : "ligthTextColor"
                    }`}
                    style={{ textDecoration: "none" }}
                    id="box-link-id-customCard"
                    href={href}
                  >
                    LEER MÁS
                  </a>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </>
  );
};

const HomePage = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      permalink="/"
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <HeroSection />
      <StartResourceSection />
      <ArticleSection />
    </Layout>
  );
};
export default HomePage;
