import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import CustomCard from "./CustomCard";

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
    href: "/docs/tutoriales/guia-markdown",
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
  const mdDown = useMediaQuery("(max-width:800px)");

  return (
    <Box className="container">
      <Box
        display="flex"
        mb={smDown ? 2 : mdDown ? 5 : 8}
        alignItems="center"
      ></Box>
      <Box
        mb={smDown ? 2 : 6}
        mt={smDown ? 0 : mdDown ? 2 : 4}
        display="flex"
        alignItems="center"
      >
        <Box className="box-title-startResource" />
        <Typography variant="h1" id="section-title-startResource-id">
          Empiece con estos recursos
        </Typography>
      </Box>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={smDown ? 1 : 3}
      >
        {startResourceList.map((item) => (
          <Grid
            key={item.title}
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
            container
            display="flex"
            justifyContent="center"
          >
            <CustomCard
              title={item.title}
              body={item.body}
              href={item.href}
              img={item.img}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StartResourceSection;
