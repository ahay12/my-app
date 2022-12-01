import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="bg-gray-700  w-auto h-auto pb-6">
        <div className="text-white container lg:flex lg:flex-row hp:flex hp:flex-cols">
          <div className="text-white container flex flex-col lg:px-10 pt-3">
            <h1 className="lg:text-4xl hp:text-2xl">Services</h1>
            <ul className="py-6 hp:py-1">
              <li className="hover:text-orange-400">Layanan Digital</li>
              <li className="hover:text-orange-400">Layanan Klaim</li>
              <li className="hover:text-orange-400">Kelola Polis</li>
              <li className="hover:text-orange-400">Panduan Pembayaran</li>
              <li className="hover:text-orange-400">Formulir</li>
              <li className="hover:text-orange-400">FAQ</li>
              <li className="hover:text-orange-400">Informasi Nasabah</li>
            </ul>
          </div>
          <div className="text-white container flex flex-col lg:px-10 pt-3">
            <h1 className="lg:text-4xl hp:text-2xl">Solution</h1>
            <ul className="py-6 hp:py-1">
              <li className="hover:text-orange-400">Proteksi Jiwa</li>
              <li className="hover:text-orange-400">Kesehatan</li>
              <li className="hover:text-orange-400">
                Perlindungan dan Tabungan
              </li>
              <li className="hover:text-orange-400">Proteksi dan Inventasi</li>
              <li className="hover:text-orange-400">Korporasi</li>
            </ul>
          </div>
          <div className="text-white container flex flex-col lg:px-10 pt-3">
            <h1 className="lg:text-4xl hp:hidden md:inline">About Us</h1>
            <ul className="py-6 hp:hidden md:inline">
              <li className="hover:text-orange-400">Tentang Kami</li>
              <li className="hover:text-orange-400">Management</li>
              <li className="hover:text-orange-400">Laporan Keuangan</li>
              <li className="hover:text-orange-400">Karir</li>
              <li className="hover:text-orange-400">Mitra</li>
              <li className="hover:text-orange-400">Pusat Informasi</li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="lg:grid lg:grid-cols-2 justify-items-center">
            <div>
              <p className="text-white mt-3">
                <span className="hover:text-orange-400">Syarat Penggunaan</span>{" "}
                |{" "}
                <span className="hover:text-orange-400">Kebijakan Privasi</span>{" "}
                | <span className="hover:text-orange-400">Hubungi Kami</span>
              </p>
            </div>
            <div className="">
              <ul className="flex flex-row">
                <l1>
                  <Link href={"https://www.facebook.com/"}>
                    <Image src="/facebook.svg" width={40} height={25} />
                  </Link>
                </l1>
                <l1 className="pl-4">
                  <Link href={"https://www.instagram.com/"}>
                    <Image src="/instagram.svg" width={40} height={25}></Image>
                  </Link>
                </l1>
                <l1 className="pl-4">
                  <Link href={"https://twitter.com/"}>
                    <Image src="/twitter.svg" width={40} height={25}></Image>
                  </Link>
                </l1>
                <l1 className="pl-4">
                  <Link href={"https://www.linkedin.com/"}>
                    <Image src="/linkedin.svg" width={40} height={25}></Image>
                  </Link>
                </l1>
                <li className="pl-4">
                  <Link href={"mailto:bumisamudrainsurance@mail.com"}>
                    <Image src="/mail.svg" width={40} height={25} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
