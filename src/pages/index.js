import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header

  className={clsx('hero')}
  style={{
    backgroundImage: 'url(/img/imagen.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '600px',  // Aumenta la altura para ver si ahora aparece la imagen
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}>



      <div className="container">
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            E3-Store - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`E3-Store ${siteConfig.title}`}
      description="Conocé nuestro Store<head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
