import Image from "next/image";
import blogimg from "../public/thalia-tran-d1Wj9qU5C-o-unsplash.jpg";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Hunting Coder Site!!</h1>
        <p className={styles.description}>Help to Solve the Bug for you!!</p>
        <Image src={blogimg} width={500} height={500} className="rounded-lg" />

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
