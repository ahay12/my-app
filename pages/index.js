import Image from "next/image";
import Link from "next/link";
import CardHero from "../components/CardHero";
import Layout from "../components/Layout";
import CardProduct from "../components/Product";

export default function Home() {
  return (
    <Layout pageTitle={"Home"}>
      {/* Start Hero */}
      <section className="w-full pt-36 pb-10 bg-[url('/family.jpg')] bg-cover">
        <div className="container">
          <div className="w-full items-center lg:w-1/2">
            <h1 className="font-header text-6xl text-white font-bold mt-12">
              Mengubah cara pandang masyarakat tentang asuransi
            </h1>
          </div>
          <div className="mt-5 mb-5">
            <div>
              <div className="text-white text-2xl border-b-4 border-orange-400 w-44">
                Daftar Asuransi
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <CardHero
              link={"/"}
              icon={"/health.svg"}
              title="Asurans Jiwa"
              description="Bebas Rencana"
            />
            <CardHero
              link={"/"}
              icon={"/card.svg"}
              title="Asuransi Kesehatan"
              description="Asuransi Bebas Handal"
            />

            <CardHero
              link={"/"}
              icon={"/chair.svg"}
              title="Asurans Jiwa"
              description="Bebas Rencana"
            />
            <CardHero
              link={"/"}
              icon={"/note.svg"}
              title="Asurans Jiwa"
              description="Bebas Rencana"
            />
          </div>
          <div className="mt-32">
            <Link href={"/"}>
              <div className="text-white w-60 h-16 bg-orange-400 rounded-lg transition hover:bg-white hover:text-orange-400">
                <div className="items-center justify-around pl-7 pt-5">
                  <h4 className="font-bold">Temukan Produk Lainnya</h4>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      {/* End Hero */}

      {/* Start lisensi */}
      <section>
        <div className="w-full h-64 bg-white">
          <div className="container">
            <div className="flex flex-row justify-center opacity-70">
              <div className="w-2/12 py-2">
                <Image src={"/OJK_Logo.png"} width={150} height={100} />
              </div>
              <div className="w-2/12 py-2">
                <Image src={"/OJK_Logo.png"} width={150} height={100} />
              </div>
              <div className="w-2/12 py-2">
                <Image src={"/OJK_Logo.png"} width={150} height={100} />
              </div>
              <div className="w-2/12 py-2">
                <Image src={"/OJK_Logo.png"} width={150} height={100} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End lisensi */}

      {/* Start Carousel */}
      <section>
        <div className="z-0 relative w-full h-64 container bg-orange-400 rounded-lg -mb-36 text-4xl text-center shadow-lg">
          Carousel In Here
        </div>
      </section>
      {/* End Carousel */}

      {/* Start Produk */}
      <section>
        <div className="z-auto w-full h-auto bg-gray-300 pb-10">
          <div className="flex flex-col container justify-center text-center">
            <h1 className="text-4xl font-bold pt-52">
              Pilih produk sesuai kebutuhan kamu
            </h1>
            <div className="flex flex-row justify-center">
              <CardProduct link={"/"}></CardProduct>
              <CardProduct link={"/"}></CardProduct>
              <CardProduct link={"/"}></CardProduct>
              <CardProduct link={"/"}></CardProduct>
              <CardProduct link={"/"}></CardProduct>
            </div>
          </div>
        </div>
      </section>
      {/* End Produk */}

      <section>
        <div className="w-full h-96">
          <h1 className="text-4xl container font-semibold pt-20">
            Yang beda dari lain
          </h1>
          <div className="container pt-44">
            <div className="flex flex-row">
              <div className="px-5">
                <h1 className="text-2xl font-bold">Produk yang inovatif</h1>
                <p>
                  Kami menawarkan produk yang mudah dipahami dengan sedikit
                  pengecualian
                </p>
              </div>
              <div>
                <h1 className="text-2xl font-bold">Produk yang inovatif</h1>
                <p>
                  Kami menawarkan produk yang mudah dipahami dengan sedikit
                  pengecualian
                </p>
              </div>
              <div>
                <h1 className="text-2xl font-bold">Produk yang inovatif</h1>
                <p>
                  Kami menawarkan produk yang mudah dipahami dengan sedikit
                  pengecualian
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
