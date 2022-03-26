import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";

function Reviews() {
  return (
    <>
      <Head>
        <title>GamerHub ~ Review</title>
        <meta
          name="description"
          content="This is a Review page of gamerhub their you get many information about it."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="pt-20">Review page</div>
    </>
  );
}

export default Reviews;
