import Head from "next/head";

import Layout from "../../components/layout/layout.component";
import Date from "../../components/date/date.component";

import { getAllPostIds, getPostData } from "../../lib/posts";
export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id); // id ve data donduruyor
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// staticprops'tan postData geldi, icinde id ve data var
export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      {postData.title}
      <br />
      {postData.id}
      <br />
      <Date dateString={postData.date} />
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}
