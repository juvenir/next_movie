import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home({autor}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Movie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <a href={`http://localhost:3000`}>Home</a>
        
        <h1 className={styles.title}>
        Sobre o Sistema
        </h1>

        Sistema feito para estudo de Next.js. Créditos para Bonieky Lacerda.

        <hr/>
        
        Autor: {autor}

        </main>
        </div>
        
  )
}
 export async function getStaticProps() {
  return {
    props: {
      autor: 'Juvenir Teixeira'
    }
  };
 }