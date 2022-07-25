import React from "react";
import { Box, Grid, Typography, useMediaQuery } from "@material-ui/core";

import CustomArticle from "./CustomArticle";

import "../../css/homepage.css";

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
        <Typography id="section-title-startResource-id">
          Artículos de blog
        </Typography>
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

export default MediumSection;
