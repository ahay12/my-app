import Header from "../Header";
import Head from "next/head"

export default function Layout({ children, pageTitle }) {
  return (
    <div>
      <Head>
        <title>Our Insurance | {pageTitle}</title>
        <meta name="description" content="Asuransi Indonesia" />
        <link rel="icon" href="/asuransi_1.png" />
      </Head>
      <Header />
      <div>{children}</div>
      {/* <Footer/> */}
    </div>
  );
}