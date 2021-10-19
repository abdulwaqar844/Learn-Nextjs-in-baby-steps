import React from "react";
import Head from 'next/head'
const FirstPist = () => {
  return (
    <>
    <Head>
      <title>First Post</title>
    </Head>
    <h1>First Post</h1>
    <h2>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </h2>
  </>
  );
};

export default FirstPist;
