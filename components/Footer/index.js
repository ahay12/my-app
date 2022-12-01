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
              <li>Layanan Digital</li>
              <li>Layanan Klaim</li>
              <li>Kelola Polis</li>
              <li>Panduan Pembayaran</li>
              <li>Formulir</li>
              <li>FAQ</li>
              <li>Informasi Nasabah</li>
            </ul>
          </div>
          <div className="text-white container flex flex-col lg:px-10 pt-3">
            <h1 className="lg:text-4xl hp:text-2xl">Solution</h1>
            <ul className="py-6 hp:py-1">
              <li>Proteksi Jiwa</li>
              <li>Kesehatan</li>
              <li>Perlindungan dan Tabungan</li>
              <li>Proteksi dan Inventasi</li>
              <li>Korporasi</li>
            </ul>
          </div>
          <div className="text-white container flex flex-col lg:px-10 pt-3">
            <h1 className="lg:text-4xl hp:hidden md:inline">About Us</h1>
            <ul className="py-6 hp:hidden md:inline">
              <li>Tentang Kami</li>
              <li>Management</li>
              <li>Laporan Keuangan</li>
              <li>Karir</li>
              <li>Mitra</li>
              <li>Pusat Informasi</li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="lg:grid lg:grid-cols-2 justify-items-center">
            <div>
              <p className="text-white mt-3">
                Syarat Penggunaan | Kebijakan Privasi | Hubungi Kami
              </p>
            </div>
            <div className="">
              <ul className="flex flex-row">
                <l1>
                  <Link href={"/"}>
                    <Image src="/facebook.svg" width={40} height={25} />
                  </Link>
                </l1>
                <l1 className="pl-4">
                  <Link href={"/"}>
                    <Image src="/instagram.svg" width={40} height={25}></Image>
                  </Link>
                </l1>
                <l1 className="pl-4">
                  <Link href={"/"}>
                    <Image src="/twitter.svg" width={40} height={25}></Image>
                  </Link>
                </l1>
                <l1 className="pl-4">
                  <Link href={"/"}>
                    <Image src="/linkedin.svg" width={40} height={25}></Image>
                  </Link>
                </l1>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
