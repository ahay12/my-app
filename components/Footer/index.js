import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="bg-gray-700  w-full h-[400px]">
        <div className="text-white container flex flex-row">
          <div className="pt-20">
            <Image src={"/logo-fix.png"} width={500} height={500} />
            <h3 className="text-orange-400 ml-2">Bumi Samudra insurance</h3>
          </div>
          <div className="text-white container flex flex-col px-10 pt-3">
            <h1 className="text-4xl">Services</h1>
            <ul className="py-6">
              <li>Layanan Digital</li>
              <li>Layanan Klaim</li>
              <li>Kelola Polis</li>
              <li>Panduan Pembayaran</li>
              <li>Formulir</li>
              <li>FAQ</li>
              <li>Informasi Nasabah</li>
            </ul>
          </div>
          <div className="text-white container flex flex-col px-10 pt-3">
            <h1 className="text-4xl">Solution</h1>
            <ul className="py-6">
              <li>Proteksi Jiwa</li>
              <li>Kesehatan</li>
              <li>Perlindungan dan Tabungan</li>
              <li>Proteksi dan Inventasi</li>
              <li>Korporasi</li>
            </ul>
          </div>
          <div className="text-white container flex flex-col px-10 pt-3">
            <h1 className="text-4xl">About Us</h1>
            <ul className="py-6">
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
          <div className="grid grid-cols-2 justify-items-center">
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
