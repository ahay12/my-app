import Header from "../Header";
import Head from "next/head";

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <title>Bumi Samudra Insurance | {pageTitle}</title>
        <meta name="description" content="Asuransi Indonesia" />
        <link rel="icon" href="/logo-fix.png" />
      </Head>
      <Header />
      {children}
    </>
  );
}
