import React,{ useState, useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useThemeContext from '@theme/hooks/useThemeContext';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import '../css/homepage.css';

const lightTheme = makeStyles({
  heroButton:{
    width: 131,
    height: 50,
    fontFamily: "PT Sans",
    fontSize: 14.8,
    border: 'none',
    lineHeight: 1.8,
    letterSpacing:1.25,
    margin:"auto",
    backgroundColor:"#3EBBD3",
  },
  card:{
    backgroundColor: '#FFFFFF'
  },
  cardmedia:{
    height: 194
  },
  imgcard:{
    display:'block',
    width:150,
    margin: 'auto',
  },
  overline:{
    fontFamily: "PT Sans",
    fontSize: 12.7,
  },
  title: {
    fontFamily: "PT Sans",
    fontSize: 21.1,
    fontWeight: "bold",
  },
  body: {
    fontFamily: "Open Sans",
    fontSize: 13.8,
  },
  button:{
    fontFamily: "PT Sans",
    fontSize: 14.8,
    border: 'none',
    lineHeight: 1.8,
    letterSpacing:1.25,
    margin:"auto"
  },
  media: {
    objectFit: "cover",
    objectPosition:"bottom",
    height: 140,
  }
});

const DarkTheme = makeStyles({
  card:{
    backgroundColor: '#242526'
  },
  cardmedia:{
    height: 194
  },
  imgcard:{
    display:'block',
    width:150,
    margin: 'auto',
    filter:  'brightness(0) invert(1)',
  },
  overline:{
    fontFamily: "PT Sans",
    fontSize: 12.7,
    color: '#E9E9E9'
  },
  title: {
    fontFamily: "PT Sans",
    fontSize: 21.1,
    fontWeight: "bold",
    color: '#E9E9E9'
  },
  body: {
    fontFamily: "Open Sans",
    fontSize: 13.8,
    color: '#E9E9E9'
  },
  button:{
    fontFamily: "PT Sans",
    fontSize: 14.8,
    border: 'none',
    lineHeight: 1.8,
    letterSpacing:1.25,
    margin:"auto",
    color: '#E9E9E9'
  },
  media: {
    height: 140,
  }
});

const HeroSection  = () => {
  const images = ["https://raw.githubusercontent.com/eoscostarica/guias.eoscostarica.io/master/static/img/hero-images/heroe.png"];
  const background = images[Math.floor(Math.random() * images.length)];
  const {isDarkTheme, setLightTheme, setDarkTheme} = useThemeContext();
  let classes=null;
  
  if(!isDarkTheme){
     classes = lightTheme();
  }else{
     classes = DarkTheme();
  }

  return(  
    <div className=" hero-header">
      <img className="hero-img" src={background}/>
      <div className="hero-content">
        <div className="title-container">
          <h1 className="EOS-Costa-Rica-Devel text-style-1 ">EOS Costa Rica</h1>
          <h1 className="EOS-Costa-Rica-Devel">GUÍAS GENERALES</h1>
        </div>
        <div className="intro-container">
          <p className="intro-text">Bienvenido a nuestra herramienta de aprendizaje colaborativa e introductoria a la tecnología de blockchain y todos los paradigmas que lo hacen posible.</p>
        </div>
        <div className="buttons-intro-container">
          <Button className={classes.heroButton} href="/docs/cultura-ingenieril">EMPEZAR</Button> 
        </div>
      </div>
    </div>
  );
}

const CustomCard = (props) => {
  const {isDarkTheme, setLightTheme, setDarkTheme} = useThemeContext();
  let classes=null;

  if(!isDarkTheme){
     classes = lightTheme();
  }else{
     classes = DarkTheme();
  }

  return (
    <Card className="cardroot" className={classes.card} variant="outlined">
      <div className="card-img-container"> 
        <img src={props.img} className={classes.imgcard}/>
      </div>
      <CardContent>
        <Typography className={classes.overline} gutterBottom>SECCIÓN</Typography>
        <Typography className={classes.title}  gutterBottom variant="h5" component="h2">{props.title}</Typography>
        <Typography className={classes.body} variant="body2" component="p">{props.body}</Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.button} href={props.href} >Leer Más</Button>    
      </CardActions>
  </Card>
  );
}

const CardsSection = () => {
  return (
    <div className="container section-container">
      <h1 className="section-tittle">Comience de inmediato</h1>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
      <Grid item xs={12} sm={12} md={4}>
        <CustomCard 
          title="Guias generales"
          body= "Guías para los desarrolladores sobre como programar en código abierto."
          href= "/docs/pautas-para-codigo-abierto"
          img="https://raw.githubusercontent.com/eoscostarica/guias.eoscostarica.io/master/static/img/cards-icons/guidelines.svg"></CustomCard>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <CustomCard 
          title="Aprender EOSIO"
          body= "Conjunto de información necesaria para aprender sobre el protocolo EOSIO."
          href= "/docs/aprender-eosio/protocolo-eosio"
          img="https://raw.githubusercontent.com/eoscostarica/guias.eoscostarica.io/master/static/img/cards-icons/icons-eosio.svg"></CustomCard>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <CustomCard 
          title="Tutoriales"
          body= "Información de apoyo necesaria para realizar la instalación y la ejecución de procesos. "
          href= "docs/tutoriales/como-iniciar"
          img="https://raw.githubusercontent.com/eoscostarica/guias.eoscostarica.io/master/static/img/cards-icons/tutorials.svg"></CustomCard>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <CustomCard 
          title="Herramientas"
          body= "Conjunto de herramientas útiles durante el proceso de aprendizaje."
          href= "docs/herramientas/glosario"
          img="https://raw.githubusercontent.com/eoscostarica/guias.eoscostarica.io/master/static/img/cards-icons/tools.svg"></CustomCard>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <CustomCard 
          title="Comunidad"
          body= "Enlaces a sitios de interés de la comunidad de EOS"
          href= "docs/comunidad/canales-de-telegram"
          img="https://raw.githubusercontent.com/eoscostarica/guias.eoscostarica.io/master/static/img/cards-icons/community.svg"></CustomCard>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <CustomCard 
          title="Proyectos de código abierto"
          body= "Listado de proyectos de código abierto que realizamos."
          href= "docs/proyectos-de-codigo-abierto"
          img="https://raw.githubusercontent.com/eoscostarica/guias.eoscostarica.io/master/static/img/cards-icons/icons-opensource.svg"></CustomCard>
      </Grid>
    </Grid>
    </div>
  );
}

const CustomArticle= (props) => {
  const {isDarkTheme, setLightTheme, setDarkTheme} = useThemeContext();
  let classes=null;

  if(!isDarkTheme){
     classes = lightTheme();
  }else{
     classes = DarkTheme();
  }

  return (
    <Card className="cardroot" className={classes.card} variant="outlined">
      <CardMedia
          className={classes.media}
          image={props.img}
        />
      <CardContent>
        <Typography className={classes.overline} gutterBottom>ARTÍCULO</Typography>
        <Typography className={classes.title}  gutterBottom variant="h5" component="h2">{props.title}</Typography>
        <Typography className={classes.body} variant="body2" component="p">{props.body}</Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.button} href={props.href} >Leer Más</Button>    
      </CardActions>
  </Card>
  );
}

const MediumSection = () => {
  return (
    <div className="container section-container">
       <h1 className="section-tittle">Artículos de blogs</h1>
       <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
      <Grid item xs={12} sm={12} md={4}>
        <CustomArticle 
          title="¿Qué es un smart contract?"
          body= "Explicamos como funcina la descentralización en sus registros, mediante contratos inteligentes."
          href= "https://medium.com/@eoscostarica/qu%C3%A9-es-un-smart-contract-793d2042c65d"
          img="https://miro.medium.com/max/700/1*rjtG8XyIEQM5xApCbLHk5A.png"></CustomArticle>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <CustomArticle 
          title="¿Qué es EOSIO?"
          body= "Explicamos en qué consiste el protocolo blockchain EOSIO."
          href= "https://medium.com/@eoscostarica/que-es-eosio-178e21ac2ebb"
          img="https://miro.medium.com/max/700/1*Po0W5EAkJDn4LPTFytFl9A.png"></CustomArticle>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <CustomArticle 
          title="¿Cómo funciona una blockchain?"
          body= "Explicamos, con ejemplos, qué es y cómo funciona una blockchain."
          href= "https://medium.com/@eoscostarica/https-medium-com-eoscostarica-que-es-blockchain-d54d42439ef3"
          img="https://miro.medium.com/max/700/1*iv_880P8jBGDlTKRwmNmfw.jpeg"></CustomArticle>
      </Grid>
    </Grid>
    </div>
  );
}

const HomePage = () => {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      permalink="/"
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <HeroSection></HeroSection>
      <CardsSection></CardsSection>
      <MediumSection></MediumSection>
    </Layout>
  );
};

export default HomePage;
