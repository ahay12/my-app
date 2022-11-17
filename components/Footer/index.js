export default function Footer() {
  return (
    <footer>
      <div className="bg-gray-700 relative w-full h-80 bottom-0">
        <div className="text-white container flex flex-row">
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
          <div className="grid grid-cols-2">
            <div>
              <p className="text-white">
                Syarat Penggunaan Kebijakan Privasi Hubungi Kami
              </p>
            </div>
            <div>
              <p className="text-white">
                Syarat Penggunaan Kebijakan Privasi Hubungi Kami
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
