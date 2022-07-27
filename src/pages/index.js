import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useColorMode } from "@docusaurus/theme-common";
import CardContent from "@material-ui/core/CardContent";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Box, Grid, useMediaQuery } from "@material-ui/core";

import "../css/homepage.css";

const CustomArticle = ({ title, body, href, img }) => {
  const smDown = useMediaQuery("(max-width:400px)");

  const { colorMode } = useColorMode();
  const theme = colorMode === "dark";

  return (
    <Box className="cardroot">
      <Box className={`${theme ? "" : "box-card-img"}`}>
        <img src={useBaseUrl(img)} loading="lazy" width="100%" />
      </Box>
      <Box className="box-card-content">
        <CardContent>
          <p className={`${theme ? "overlineDark" : "overlineLight"}`}>
            ARTÍCULO
          </p>
          <Box className="box-card-body">
            <Box className="blueBoxTitle" />
            <Box className="box-blue-title">
              <h2 className={`${theme ? "titleDark" : "titleLight"}`}>
                {title}
              </h2>
            </Box>
          </Box>
          <Box className="box-card-body">
            <p
              className={`${theme ? "bodyDark" : "bodyLight"}`}
              variant="body2"
              component="p"
            >
              {body}
            </p>
          </Box>
        </CardContent>
        <Box className="box-card-link">
          <Box className="box-card-readMore" id="box-link-id-customCard">
            <a
              id="link-id-customCard"
              href={href}
              style={{ textDecoration: "none", cursor: "pointer" }}
              className={`${theme ? "linkDark" : "linkLight"}`}
            >
              LEER MÁS
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
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

const MediumSection = () => {
  const smDown = useMediaQuery("(max-width:400px)");
  const mdDown = useMediaQuery("(max-width:800px)");

  return (
    <Box className="container">
      <Box className="box-title">
        <Box className="box-title-article" />
        <h1 id="section-title-article-id">Artículos de blog</h1>
      </Box>
      <Grid container className="grid-container">
        {articlesList.map(({ title, body, href, img }) => (
          <Grid
            key={title}
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
            container
            className="grid-component"
          >
            <CustomArticle title={title} body={body} href={href} img={img} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export const HomePage = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      permalink="/"
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <MediumSection />
    </Layout>
  );
};

export default HomePage;
