import React from "react";
import Image from "next/image";
import Link from "next/link";
import Dropbox from "../components/Dropbox";
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
        <section
          id="section-hero"
          className="w-auto h-auto pt-36 pb-10"
          style={{
            backgroundImage: `url(${"/background-hero.png"})`,
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="w-full items-center lg:w-1/2">
              <h1
                id="title-hero"
                className="font-bold lg:text-6xl xs:text-4xl text-white mt-12"
              >
                Mengubah cara pandang masyarakat tentang{" "}
                <span className="text-orange-400">asuransi</span>
              </h1>
            </div>
            <div className="mt-5 mb-5">
              <div className="text-white text-2xl border-b-4 border-orange-400 w-44">
                Daftar Asuransi
              </div>
            </div>
            <div className="lg:flex lg:flex-row xs:grid xs:grid-cols-2">
              <CardHero
                selector={"card1"}
                link={""}
                con={"/health.svg"}
                title="Asuransi Jiwa"
                description="Bebas Rencana"
                discount="Diskon 20%"
              />
              <CardHero
                selector={"card2"}
                link={""}
                con={"/card.svg"}
                title="Asuransi Kesehatan"
                description="Asuransi Bebas Handal"
                discount="Diskon 15%"
              />

              <CardHero
                selector={"card3"}
                link={""}
                con={"/chair.svg"}
                title="Asuransi Jiwa"
                description="Bebas Rencana"
                discount="Diskon 30%"
              />
              <CardHero
                selector={"card4"}
                link={""}
                con={"/note.svg"}
                title="Asuransi Jiwa"
                description="Bebas Rencana"
                discount="Diskon 10%"
              />
            </div>
            <div className="mt-[80px] flex flex-row">
              <Link href={"#produk"}>
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
          <div className="w-full h-32 bg-white">
            <div className="container">
              <div className="grid grid-cols-4 gap-5 justify-items-center opacity-70">
                <div className="mt-4">
                  <Image src={"/OJK_Logo.png"} width={150} height={150} />
                </div>
                <div className="mt-1">
                  <Image src={"/narasi.png"} width={150} height={150} />
                </div>
                <div className="mt-10">
                  <Image src={"/gotofinancial.png"} width={150} height={150} />
                </div>
                <div className="mt-10">
                  <Image src={"/ternakuang.png"} width={150} height={150} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End lisensi */}

        {/* Start Carousel */}
        <section className="hp:hidden md:inline">
          <div className="z-0 relative w-full h-64 container rounded-lg -mb-36 text-4xl text-center">
            <Slider />
          </div>
        </section>
        {/* End Carousel */}

        {/* Start Produk */}
        <section id="produk">
          <div className="w-full h-auto bg-gray-300 pb-10">
            <div className="flex flex-col container justify-center text-center">
              <h1 className="font-semibold lg:text-4xl pt-52">
                Pilih produk sesuai kebutuhan kamu
              </h1>
              <div className="lg:flex lg:flex-row xs:grid xs:grid-cols-2 justify-center">
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

        <section>
          <div className="w-full h-auto">
            <div className="container">
              <div className="lg:flex lg:flex-rows">
                <div className="flex flex-cols">
                  <div className="mt-32">
                    <h1 className="font-heletica text-2xl font-semibold lg:pt-20 text-center">
                      Yang beda dari lain
                    </h1>
                    <Image src="/vector1.jpg" width={370} height={100} />
                  </div>
                </div>
                <div className="container">
                  <div className="pt-32 pb-32 lg:pl-20">
                    <div className="lg:grid lg:grid-cols-2 xs:grid xs:grid-cols-1 sm:gap-3 gap-8">
                      <div className="p-6 lg:h-64 w-full bg-gray-300 shadow-lg rounded-lg hp:mb-3">
                        <Image
                          src={"/innovation.png"}
                          width={100}
                          height={50}
                        />
                        <h1 className="lg:text-2xl font-bold">
                          Produk yang inovatif
                        </h1>
                        <p>
                          Kami menawarkan produk yang mudah dipahami dengan
                          sedikit pengecualian
                        </p>
                      </div>
                      <div className="p-6 h-64 w-full bg-gray-300 shadow-lg rounded-lg hp:mb-3">
                        <div>
                          <Image
                            src={"/hourglass.png"}
                            width={100}
                            height={50}
                          />
                          <h1 className="lg:text-2xl font-bold">
                            Proses claim mudah
                          </h1>
                          <p>
                            Kami menawarkan produk yang mudah dipahami dengan
                            sedikit pengecualian
                          </p>
                        </div>
                      </div>
                      <div className="p-6 h-64 w-full bg-gray-300 shadow-lg rounded-lg hp:mb-3">
                        <div>
                          <Image src={"/digital.png"} width={100} height={50} />
                          <h1 className="lg:text-2xl font-bold">
                            Asuransi digital
                          </h1>
                          <p>
                            Kami menawarkan produk yang mudah dipahami dengan
                            sedikit pengecualian
                          </p>
                        </div>
                      </div>
                      <div className="p-6 h-64 w-full bg-gray-300 shadow-lg rounded-lg hp:mb-3">
                        <div>
                          <Image
                            src={"/24-hours.png"}
                            width={100}
                            height={50}
                          />
                          <h1 className="lg:text-2xl font-bold">
                            Customer Service 24/7
                          </h1>
                          <p className="">
                            Kami menawarkan produk yang mudah dipahami dengan
                            sedikit pengecualian
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*start tentang kami */}
        <section id="tentang-kami">
          <div className="bg-gray-600 py-7">
            <div className="container">
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
