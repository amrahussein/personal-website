import Head from 'next/head';
export default function About() {
  return (
    <>
      <Head>
        <title>amromoorie| Welcome to my page!</title>
      </Head>

      <Head>
        <meta
          property="og:description"
          content="Here's a summary about me. Let's get connected!"
          key="description"
        />
      </Head>
      <h3>Nice to meet you!</h3>
    </>
  );
}
