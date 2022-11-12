import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      {/* Start Hero */}
      <section className="w-full pt-36 pb-80 bg-[url('/family.jpg')] bg-cover">
        <div className="container">
          <div className="w-full items-center lg:w-1/2">
            <h1 className="font-header text-6xl text-white font-bold mt-12">
              Mengubah cara pandang masyarakat tentang asuransi
            </h1>
            {/* <Link href={"/registrasi"}>
              <button className="bg-gradient-to-tr from-blue-500 to-green-400 hover:scale-110 transition duration-300 ease-in-out text-black px-6 py-3 rounded-lg mt-4 hover:text-white">
                Daftar Insurance
              </button>
            </Link> */}
          </div>
          <div className="mt-5 mb-5">
            <div>
              <div className="text-white text-2xl">Daftar Ansuransi</div>
            </div>
          </div>
          <div className="flex flex-row">
            <div>
              <Link href={"/"}>
                <div className="w-36 h-36 relative py-3 bg-white rounded-lg shadow-lg">
                  <div className="flex flex-col justify-around items-center pt-5">
                    <Image src={"/health.svg"} width={50} height={100} />
                    <h4>Asuransi Jiwa</h4>
                    <h4>Bebas Rencana</h4>
                  </div>
                </div>
              </Link>
            </div>
            <div className="ml-4">
              <Link href={"/"}>
                <div className="w-36 h-36 relative py-3 bg-white rounded-lg shadow-lg">
                  <div className="flex flex-col justify-around items-center pt-5">
                    <Image src={"/card.svg"} width={50} height={100} />
                    <h4>Asuransi Kesehatan</h4>
                    <h4>Bebas Rencana</h4>
                  </div>
                </div>
              </Link>
            </div>
            <div className="ml-4">
              <Link href={"/"}>
                <div className="w-36 h-36 relative py-3 bg-white rounded-lg shadow-lg">
                  <div className="flex flex-col justify-around items-center pt-5">
                    <Image src={"/chair.svg"} width={50} height={100} />
                    <h4>Asuransi Kesehatan</h4>
                    <h4>Bebas Rencana</h4>
                  </div>
                </div>
              </Link>
            </div>
            <div className="ml-4">
              <Link href={"/"}>
                <div className="w-36 h-36 relative py-3 bg-white rounded-lg shadow-lg">
                  <div className="flex flex-col justify-around items-center pt-5">
                    <Image src={"/note.svg"} width={50} height={100} />
                    <h4>Asuransi Jiwa</h4>
                    <h4>Bebas Rencana</h4>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="mt-32">
            <div className="text-white w-60 h-16 bg-orange-400 rounded-lg">
              <div className="items-center justify-around pl-7 pt-5">
                <h4>Temukan Produk Lainnya</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Hero */}
    </Layout>
  );
}
