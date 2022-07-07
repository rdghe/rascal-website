import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className='hero__text text--center'>
          <img src='img/rascal_logo.png' className='hero__image' /><br/>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.description}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <p className='text--center'>
          <a href='/docs/GettingStarted'>Feature comparisons between frontends (Eclipse, VSCode, CLI, Maven)</a>
        </p>
      </main>
    </Layout>
  );
}