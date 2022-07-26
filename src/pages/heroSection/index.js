import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { heroStyles, heroMdStyles, heroSmStyles } from "./styles";
import ImagesCarousel from "./ImagesCarousel";

const imagesList = [
  {
    background: "/img/cards-icons/Hero-1.webp",
    displayImg: "block",
  },
  {
    background: "/img/cards-icons/Hero-2.webp",
    displayImg: "none",
  },
  {
    background: "/img/cards-icons/EOS-Previews-2.webp",
    displayImg: "none",
  },
];

const HeroSection = () => {
  const xsDown = useMediaQuery("(max-width:400px)");
  const smDown = useMediaQuery("(max-width:600px)");
  const mdDown = useMediaQuery("(max-width:900px)");
  const {
    button,
    textButton,
    textTitleImage,
    dot,
    textSubtitleImage,
    textImage,
  } = smDown ? heroSmStyles() : mdDown ? heroMdStyles() : heroStyles();

  return (
    <Box width="100%" position="relative">
      {imagesList.map(({ background, displayImg }, index) => (
        <ImagesCarousel
          key={background}
          background={background}
          index={index}
          displayImg={displayImg}
        />
      ))}
      <Box
        display="flex"
        justifyContent="center"
        width="100%"
        position="absolute"
        bottom={mdDown ? "160px" : "20vw"}
      >
        <Typography className={textTitleImage}>EOS Costa Rica</Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        width="100%"
        position="absolute"
        bottom={xsDown ? "140px" : mdDown ? "136px" : "17vw"}
      >
        <Typography className={textSubtitleImage}>Guías Generales</Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        width="100%"
        position="absolute"
        bottom={mdDown ? "95px" : "12vw"}
      >
        <Typography className={textImage}>
          Le damos la bienvenida a nuestro portal de aprendizaje de web3.
          Comience su viaje para aprender sobre la tecnología blockchain y todo
          lo que la hace posible.
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        width="100%"
        position="absolute"
        bottom={mdDown ? "55px" : "6vw"}
      >
        <Button className={button} href="/docs/cultura-ingenieril">
          <Typography className={textButton}>COMENZAR</Typography>
        </Button>
      </Box>
      <br />
      <Box
        display="flex"
        justifyContent="center"
        position="absolute"
        bottom={40}
        width="100%"
      >
        <Box className={`dot ${dot}`} />
        <Box className={`dot ${dot}`} />
        <Box className={`dot ${dot}`} />
      </Box>
    </Box>
  );
};

export default HeroSection;
