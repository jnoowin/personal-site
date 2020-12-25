import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Welcome from "./welcome";

export default function Home() {
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
        <h1>hello</h1>
      </Layout>
    </>
  );
}
