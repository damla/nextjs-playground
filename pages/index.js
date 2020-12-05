import Head from "next/head";
import Layout, { siteTitle } from "../components/layout/layout.component";
import utilStyles from "../styles/utils.module.scss";

export default function Home() {
  return (
    // home olup olmadigini buradan prop olarak gonderdi
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello world!</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
