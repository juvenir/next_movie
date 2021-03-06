import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home({list}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Movie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Filmes em Destaque
        </h1>

        <a href="/busca">
          Ir para a Busca
        </a>

        <ul>
          {list.map(item=>(
            <li>
              <a href={`/movie/${item.id}`}>
                  <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width="150" /><br/>
                  {item.title}  
              </a>
              </li>
            ))}
        </ul>

        <a href="/sobre">Sobre mim</a>
        
        </main>
        </div>
        
  )
}
 export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/trending');
  const json = await res.json();

  return {
    props: {
      list: json.list
    }
  };
 }