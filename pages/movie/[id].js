import Head from 'next/head';
import styles from '../../styles/Home.module.css';

export default function MovieItem({info}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Movie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

      <a href={`http://localhost:3000`}>Home</a>

      <br/>

      <img src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`} width="600" />

        <h1 className={styles.title}>
        {info.title}
        </h1>

        <p>Nota: {info.vote_average}</p>

        <p>{info.overview}</p>
        
        </main>
    </div>
        
  )
}
 export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/movie/${context.params.id}`);
  const json = await res.json();

  return {
    props: {
      info: json.info
    }
  };
 }