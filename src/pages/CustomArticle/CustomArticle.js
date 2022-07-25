import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Box, Link, useMediaQuery } from "@material-ui/core";
import { useColorMode } from "@docusaurus/theme-common";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import "../../css/homepage.css";

const overlineClass = {
  fontFamily: "Roboto",
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  textAlign: "left",
};

const titleClass = {
  fontFamily: "Roboto",
  fontWeight: "bold",
  fontStretch: "normal",
  fontStyle: "normal",
  textAlign: "left",
};

const bodyClass = {
  fontFamily: "Roboto",
  fontStretch: "normal",
  fontStyle: "normal",
  textSlign: "left",
  fontWeight: "normal",
};

const lightTheme = makeStyles((theme) => ({
  overline: {
    color: "#333",
    ...overlineClass,
    [theme.breakpoints.down("sm")]: {
      //Responsive
      fontSize: "12px",
      lineHeight: 1.16,
      letterSpacing: "0.29px",
    },
    [theme.breakpoints.up("sm")]: {
      //Normal
      fontSize: "18.4px",
      lineHeight: 1.71,
      letterSpacing: "0.66px",
    },
  },
  titleClass: {
    color: "#000",
    ...titleClass,
    [theme.breakpoints.down("sm")]: {
      //Responsive
      fontSize: "14px",
      lineHeight: 0.99,
      letterSpacing: "0.06px",
    },
    [theme.breakpoints.up("sm")]: {
      //Normal
      fontSize: "21px",
      lineHeight: 1.09,
      letterSpacing: "0.13px",
    },
  },
  bodyClass: {
    color: "#333",
    ...bodyClass,
    [theme.breakpoints.down("sm")]: {
      //Responsive
      fontSize: "12px",
      lineHeight: 1.33,
      letterSpacing: "0.4px",
    },
    [theme.breakpoints.up("sm")]: {
      //Normal
      fontSize: "14.5px",
      lineHeight: 1.45,
      letterSpacing: "0.66px",
    },
  },
  linkClass: {
    color: "#000",
  },
  blueBoxTitle: {
    [theme.breakpoints.down("sm")]: {
      //Responsive
      width: "3px",
      height: "20px",
      margin: "0 5px 0 0",
      backgroundColor: "#2d9cdb",
    },
    [theme.breakpoints.up("sm")]: {
      //Normal
      width: "3px",
      height: "40px",
      margin: "0 16px 0 0",
      backgroundColor: "#2d9cdb",
    },
  },
}));

const DarkTheme = makeStyles((theme) => ({
  overline: {
    color: "#f2f2f2",
    ...overlineClass,
    [theme.breakpoints.down("sm")]: {
      //Responsive
      fontSize: "12px",
      lineHeight: 1.16,
      letterSpacing: "0.29px",
    },
    [theme.breakpoints.up("sm")]: {
      //Normal
      fontSize: "18.4px",
      lineHeight: 1.71,
      letterSpacing: "0.66px",
    },
  },
  titleClass: {
    color: "#fff",
    ...titleClass,
    [theme.breakpoints.down("sm")]: {
      //Responsive
      fontSize: "14px",
      lineHeight: 0.99,
      letterSpacing: "0.06px",
    },
    [theme.breakpoints.up("sm")]: {
      //Normal
      fontSize: "21px",
      lineHeight: 1.09,
      letterSpacing: "0.13px",
    },
  },
  bodyClass: {
    color: "#f2f2f2",
    ...bodyClass,
    [theme.breakpoints.down("sm")]: {
      //Responsive
      fontSize: "12px",
      lineHeight: 1.33,
      letterSpacing: "0.4px",
    },
    [theme.breakpoints.up("sm")]: {
      //Normal
      fontSize: "14.5px",
      lineHeight: 1.45,
      letterSpacing: "0.66px",
    },
  },
  linkClass: {
    color: "#fff",
  },
  blueBoxTitle: {
    [theme.breakpoints.down("sm")]: {
      //Responsive
      width: "3px",
      height: "20px",
      margin: "0 5px 0 0",
      backgroundColor: "#2d9cdb",
    },
    [theme.breakpoints.up("sm")]: {
      //Normal
      width: "3px",
      height: "40px",
      margin: "0 16px 0 0",
      backgroundColor: "#2d9cdb",
    },
  },
}));

const CustomArticle = ({ title, body, href, img }) => {
  const theme = useTheme();
  const smDown = useMediaQuery("(max-width:400px)");

  const { colorMode } = useColorMode();
  // const classes = DarkTheme();
  const classes = colorMode === "dark" ? DarkTheme() : lightTheme();

  return (
    <Box
      border={1}
      width={smDown ? "256px" : "360px"}
      height={smDown ? "300px" : "412px"}
      className="cardroot"
      marginBottom={smDown ? "8px" : ""}
    >
      <Box>
        <img
          src={useBaseUrl(img)}
          loading="lazy"
          width="100%"
          style={{ borderBottom: "1px solid black" }}
        />
      </Box>
      <Box height="196px">
        <CardContent>
          <Typography className={classes.overline} gutterBottom>
            ARTÍCULO
          </Typography>
          <Box display="flex" alignItems="center" mt={smDown ? 1 : 2}>
            <Box className={classes.blueBoxTitle} />
            <Typography className={classes.titleClass}>{title}</Typography>
          </Box>
          <Box mt={smDown ? 1 : 2}>
            <Typography
              className={classes.bodyClass}
              variant="body2"
              component="p"
            >
              {body}
            </Typography>
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
            <Link
              id="link-id-customCard"
              href={href}
              style={{ textDecoration: "none", cursor: "pointer" }}
              className={classes.linkClass}
            >
              LEER MÁS
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomArticle;
