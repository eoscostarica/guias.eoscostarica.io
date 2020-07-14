import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import '../css/homepage.css';


const TestPage = () => {
  return(
    <div className="hero text--center">
    <div className="container ">
      <div className="padding-vert--md">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
      <div>
        <Link
          to={useBaseUrl('/docs/pautas-para-codigo-abierto')}
          className="button button--lg button--outline button--primary">
          Get started
        </Link>
      </div>
    </div>
    </div>
  );
  
}


const HeroHeader  = () => {
  return(
    <div className=" hero-header Mask">
      <div className="title-container">
        <h1 className="EOS-Costa-Rica-Devel text-style-1 ">EOS Costa Rica</h1>
        <h1 className="EOS-Costa-Rica-Devel">Developers Guide</h1>
      </div>
      <div className="intro-container">
        <p className="Wed-like-to-welcome">We'd like to welcome you to our collaborative effort and induct you on to awesome blockchain technology and all paradigms that make it possible</p>
      </div>

      
     
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
      <HeroHeader></HeroHeader>
      
    </Layout>
  );
  
};

export default HomePage;