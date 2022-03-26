import Head from "next/head";
import React from "react";
import Navbar from "../../components/Navbar";

function Blog() {
  return (
    <>
      <Head>
        <title>GamerHub ~ Blog</title>
        <meta
          name="description"
          content="This is a blog page of gamerhub their you get many information about it."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="pt-20">Blog page</div>
    </>
  );
}

export default Blog;
