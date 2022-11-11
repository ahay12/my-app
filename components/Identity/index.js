import Head from "next/head";

export default function Identity({ children }) {
  return (
    <Head>
      <title>{children}</title>
      <link rel="icon" href="/asuransi_kesehatan.png" />
    </Head>
  );
}
