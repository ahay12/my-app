import Dropbox from "../components/Dropbox";
import Image from "next/image";
import Link from "next/link";
import CardHero from "../components/CardHero";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Slider from "../components/Slider";
import Popup from "../components/Popup";

export default function Home() {
  return (
    <>
      <Layout pageTitle={"Home"}>
        {/* Start Hero */}
        <section className="w-full h-auto pt-36 pb-10 bg-[url('/family.jpg')] lg:bg-cover">
          <div className="container">
            <div className="w-full items-center lg:w-1/2">
              <h1 className="font-bold text-6xl text-white mt-12">
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
            <div className="flex lg:flex-row  md:flex-row sm:flex-col">
              <CardHero
                link={""}
                con={"/health.svg"}
                title="Asuransi Jiwa"
                description="Bebas Rencana"
                discount="Diskon 20%"
              />
              <CardHero
                link={""}
                con={"/card.svg"}
                title="Asuransi Kesehatan"
                description="Asuransi Bebas Handal"
                discount="Diskon 15%"
              />

              <CardHero
                link={""}
                con={"/chair.svg"}
                title="Asuransi Jiwa"
                description="Bebas Rencana"
                discount="Diskon 30%"
              />
              <CardHero
                link={""}
                con={"/note.svg"}
                title="Asuransi Jiwa"
                description="Bebas Rencana"
                discount="Diskon 10%"
              />
            </div>
            <div className="mt-32">
              <Link href={""}>
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
          <div className="z-0 relative w-full h-64 container rounded-lg -mb-36 text-4xl text-center">
            <Slider />
          </div>
        </section>
        {/* End Carousel */}

        {/* Start Produk */}
        <section id="produk">
          <div className="z-auto w-full h-auto bg-gray-300 pb-10">
            <div className="flex flex-col container justify-center text-center">
              <h1 className="font-semibold text-4xl pt-52">
                Pilih produk sesuai kebutuhan kamu
              </h1>
              <div className="flex flex-row justify-center">
                <Popup
                  title={"Asuransi Jiwa"}
                  titleChd={"Asuransi Jiwa"}
                  img={"/health.svg"}
                />
                <Popup
                  title={"Asuransi Kesehatan"}
                  titleChd={"Asuransi Kesehatan"}
                  img={"/card.svg"}
                />
                <Popup
                  title={"Asuransi Kecelakaan Diri"}
                  titleChd={"Asuransi Kecelakaan Diri"}
                  img={"/note.svg"}
                />
                <Popup
                  title={"Asuransi Investasi"}
                  titleChd={"Asuransi Investasi"}
                  img={"/note.svg"}
                />
                <Popup
                  title={"Asuransi Pendidikan"}
                  titleChd={"Asuransi Pendidikan"}
                  img={"/chair.svg"}
                />
              </div>
            </div>
          </div>
        </section>
        {/* End Produk */}

        <section className="pb-32">
          <div className="w-full h-96">
            <h1 className="font-heletica text-4xl container font-semibold pt-20">
              Yang beda dari lain
            </h1>
            <div className="container pt-32 pb-32">
              <div className="flex flex-row">
                <div className="px-5">
                  <Image src={"/innovation.png"} width={100} height={50} />
                  <h1 className="text-2xl font-bold">Produk yang inovatif</h1>
                  <p>
                    Kami menawarkan produk yang mudah dipahami dengan sedikit
                    pengecualian
                  </p>
                </div>
                <div>
                  <Image src={"/hourglass.png"} width={100} height={50} />
                  <h1 className="text-2xl font-bold">Proses claim mudah</h1>
                  <p>
                    Kami menawarkan produk yang mudah dipahami dengan sedikit
                    pengecualian
                  </p>
                </div>
                <div>
                  <Image src={"/digital.png"} width={100} height={50} />
                  <h1 className="text-2xl font-bold">Asuransi digital</h1>
                  <p>
                    Kami menawarkan produk yang mudah dipahami dengan sedikit
                    pengecualian
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*start tentang kami */}
        <section id="tentang-kami">
          <div className="bg-gray-600 py-7">
            <div className="flex flex-col container pb-5">
              <Dropbox />
            </div>
          </div>
        </section>
        {/* end tentang kami */}
      </Layout>
      <Footer />
    </>
  );
}
