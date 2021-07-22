import Head from "next/head";

export default function Favicon() {
  return (
    <Head>
      <link rel="icon" href="/favicon.svg" />
      <link rel="mask-icon" href="/mask-icon.svg" color="#6B3992" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <meta name="theme-color" content="#6B3992" />
    </Head>
  );
}
