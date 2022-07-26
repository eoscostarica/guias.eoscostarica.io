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
    <Box
      border={1}
      width={smDown ? "256px" : "360px"}
      height={smDown ? "320px" : "412px"}
      className="cardroot"
      marginBottom={smDown ? "8px" : ""}
    >
      <Box borderBottom={colorMode === "dark" ? 0 : 1}>
        <img src={useBaseUrl(img)} loading="lazy" width="100%" />
      </Box>
      <Box height="196px">
        <CardContent>
          <p className={`${theme ? "overlineDark" : "overlineLight"}`}>
            ARTÍCULO
          </p>
          <Box display="flex" alignItems="center" mt={smDown ? 1 : 2}>
            <Box className={"blueBoxTitle"} />
            <Box height="40px">
              <h2 className={`${theme ? "titleDark" : "titleLight"}`}>
                {title}
              </h2>
            </Box>
          </Box>
          <Box mt={smDown ? 1 : 2}>
            <p
              className={`${theme ? "bodyDark" : "bodyLight"}`}
              variant="body2"
              component="p"
            >
              {body}
            </p>
          </Box>
        </CardContent>
        <Box
          display="flex"
          position="absolute"
          bottom={0}
          width="100%"
          justifyContent="center"
          marginBottom={smDown ? 1 : 2}
        >
          <Box position="relative" id="box-link-id-customCard">
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
    img: "/img/cards-icons/blog2.webp",
  },
  {
    title: "¿Cómo funciona una blockchain?",
    body: "Explicamos, con ejemplos, qué es y cómo funciona una blockchain..",
    href: "https://eoscostarica.medium.com/https-medium-com-eoscostarica-que-es-blockchain-d54d42439ef3",
    img: "/img/cards-icons/blog3.webp",
  },
];

const MediumSection = () => {
  const smDown = useMediaQuery("(max-width:400px)");
  const mdDown = useMediaQuery("(max-width:800px)");

  return (
    <Box
      className="container"
      mt={smDown ? 3 : mdDown ? 7 : 10}
      mb={smDown ? 3 : 8}
    >
      <Box display="flex" mb={smDown ? 2 : mdDown ? 5 : 8} alignItems="center">
        <Box className="box-title-startResource" />
        <h1 id="section-title-startResource-id">Artículos de blog</h1>
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
            md={6}
            lg={4}
            container
            display="flex"
            justifyContent="center"
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
