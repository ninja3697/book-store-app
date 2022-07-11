import { useState, useEffect } from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import BooksService from "../services/books.service";

export default function Home() {
  const [homepageData, setHomePageData] = useState();
  const [availableBooks, setAvailableBooks] = useState([]);

  useEffect(() => {
    BooksService.getHomepage().then((res) => setHomePageData(res));
    BooksService.getAvailableBooks().then((res) => setAvailableBooks(res));
  }, []);

  if (!homepageData) return null;
  const { SEO, homepageCopy } = homepageData;
  const { metaTitle, metaDescription } = SEO;

  return (
    <div className={styles.home}>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <h2 className={styles.title}>Online Book Store</h2>
      <h5 className={styles.subTitle}>Here you can order amazing books!</h5>
      <p className={styles.description}>{homepageCopy}</p>
      <div className={styles.illustration_bookLinks}>
        <div className={styles.main_img}>
          <Image
            src="/assets/main-img.jpg"
            alt="Vercel Logo"
            width={450}
            height={270}
          />
        </div>
        <ul className={styles.bookList}>
          {availableBooks.map(({ id, title }) => (
            <li key={id}>
              <Link href={`/books/${id}`}>
                <a>View: {title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// <div className={styles.container}>
//   <Head>
//     <title>Create Next App</title>
//     <meta name="description" content="Generated by create next app" />
//     <link rel="icon" href="/favicon.ico" />
//   </Head>

//   <main className={styles.main}>
//     <h1 className={styles.title}>
//       Welcome to <a href="https://nextjs.org">Next.js!</a>
//     </h1>

//     <p className={styles.description}>
//       Get started by editing{' '}
//       <code className={styles.code}>pages/index.js</code>
//     </p>

//     <div className={styles.grid}>
//       <a href="https://nextjs.org/docs" className={styles.card}>
//         <h2>Documentation &rarr;</h2>
//         <p>Find in-depth information about Next.js features and API.</p>
//       </a>

//       <a href="https://nextjs.org/learn" className={styles.card}>
//         <h2>Learn &rarr;</h2>
//         <p>Learn about Next.js in an interactive course with quizzes!</p>
//       </a>

//       <a
//         href="https://github.com/vercel/next.js/tree/canary/examples"
//         className={styles.card}
//       >
//         <h2>Examples &rarr;</h2>
//         <p>Discover and deploy boilerplate example Next.js projects.</p>
//       </a>

//       <a
//         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//         className={styles.card}
//       >
//         <h2>Deploy &rarr;</h2>
//         <p>
//           Instantly deploy your Next.js site to a public URL with Vercel.
//         </p>
//       </a>
//     </div>
//   </main>

//   <footer className={styles.footer}>
//     <a
//       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Powered by{' '}
//       <span className={styles.logo}>
//         <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//       </span>
//     </a>
//   </footer>
// </div>
