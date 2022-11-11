import Image from "next/image";
import Link from "next/link";
import Identity from "../components/Identity";
import Layout from "../components/Layout";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className="font-open">
      <Identity>Our Insurance</Identity>
      <Layout>
        {/* Start Hero */}
        <section id="home" className="relative">
          <div className="container">
            <div className="flex mt-40 ml-32 mr-32 mb-72 items-center justify-between">
              <div className="w-1/2">
                <h1 className="font-jose text-5xl text-transparent bg-clip-text bg-gradient-to-tr from-green-400 to-blue-500">
                  Our Insurance
                </h1>
                <p className="text-base text-black mt-4">
                  <span className="text-bold text-red-500">
                    Desc Company Here{" "}
                  </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  voluptas, quod, quia, voluptates quae voluptatibus quibusdam
                  voluptatum quidem quos quas quia. Quisquam, quae. Quisquam
                  voluptates quae, quibusdam quia quod.
                </p>
                <Link href={"/registrasi"}>
                  <button className="bg-gradient-to-tr from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 hover:scale-110 transition duration-300 ease-in-out text-black px-6 py-3 rounded-lg mt-4">
                    Daftar Insurance
                  </button>
                </Link>
              </div>
              <Card>
                <div>
                  <Image src={""} alt="image"></Image>
                  <h1 className="text-2xl">Title</h1>
                  <p>lorem ipsum dolor</p>
                </div>
                <div>
                  <Image src={""} alt="image"></Image>
                  <h1 className="text-2xl">Title</h1>
                  <p>lorem ipsum dolor</p>
                </div>
              </Card>
              {/* <Image
                src={"/asuransi_1.png"}
                width={500}
                height={500}
                className="container w-1/3 mr-24"
              /> */}
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="w-full bg-gradient-to-tr from-green-400 to-blue-500">
              <div className="ml-24">
                <Image src={""} alt="image"></Image>
                <h1 className="">TITLE</h1>
                <p>lorem ipsum dolor</p>
                <p>lorem ipsum dolor</p>
                <p>lorem ipsum dolor</p>
                <p>lorem ipsum dolor</p>
                <p>lorem ipsum dolor</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="bg-white">
              <h1>TITLE</h1>
              <p>lorem ipsum dolor</p>
              <p>lorem ipsum dolor</p>
              <p>lorem ipsum dolor</p>
              <p>lorem ipsum dolor</p>
              <p>lorem ipsum dolor</p>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}
