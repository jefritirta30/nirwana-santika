import React from "react";
const page = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Tentang Jaya Bakery</h1>
      <div className="flex flex-col md:flex-row mb-8">
        <img
          alt="Interior of Jaya Bakery with shelves of baked goods and customers"
          className="w-full md:w-1/2 h-auto mb-4 md:mb-0 md:mr-4"
          src="https://placehold.co/600x400"
        />
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-2">Apa itu Jaya Bakery?</h2>
          <p className="mb-2">
            CV Jaya Bakery adalah perusahaan yang bergerak pada bidang industri
            pengolahan pangan khususnya roti dan kue. Perusahaan ini didirikan
            oleh bapak Siyono yang dahulu merupakan karyawan Roman Bakery.
            Beliau merintis usaha ini pada bulan Agustus 1997 yang dahulu
            dikenal dengan nama “Roti Kampas”. Pada awalnya bapak Siyono menjual
            roti dengan cara door to door atau dari rumah ke rumah. Dengan
            berjalannya waktu usaha ini terus berkembang hingga pada tahun 2003
            mendapat merek dagang “Jaya Bakery”.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Sejarah Jaya Bakery?</h2>
        <p>
          Usaha ini dimulai oleh Siyono Usaha ini dimulai oleh Siyono bersama
          istrinya pada o bersama istrinya pada tahun 1996. Mereka memilih tahun
          1996. Mereka memilih untuk menjalankan usaha ini karena sang istri
          memiliki keahlian di bidang ini. Nama jaya bakery sendiri sendiri
          diambil diambil dari nama anak mereka. mereka. Jaya bakery awalnya
          awalnya hanyalah sebuah industry roti hanyalah sebuah industry roti
          rumahan yang menjual produknya dengan menitipkan produknya dengan
          menitipkan ke warung-warung yang ada di bandarlampung. Setelah
          menekuni usaha tersebut selama 7 tahun merek memberanikan diri selama
          7 tahun merek memberanikan diri untuk membuk untuk membuka outlet
          pertama di rumah a outlet pertama di rumah sakit abdoel moeluk. Usaha
          ini terus berkembang hingga sekarang ,jaya bakery sendiri sudah
          memiliki 15 cabang dan memiliki 9 mitra di seluruh wilayah provinsi
          seluruh wilayah provinsi lampung dan pada bulan depan akan membuka
          cabang yang ke 16 di jalan pangeran antasari.
        </p>
      </div>
      <h2 className="text-2xl font-bold mb-2">Alamat Jaya Bakery</h2>
    </div>
  );
};
export default page;
