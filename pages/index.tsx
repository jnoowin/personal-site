import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Welcome from "../components/welcome";
import About from "../components/about";
import { getIcons } from "../lib/icon";

export async function getStaticProps() {
  const icons = getIcons();
  return {
    props: {
      icons,
    },
  };
}

export default function Home({ icons }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/static/logo.ico" />
        <meta
          name="Home of the Jared"
          content="Jared Nguyen's Personal Website"
        />
      </Head>

      <Layout>
        <Welcome />
        <About icons={icons} />
      </Layout>
    </>
  );
}
