import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6 md:p-8 mb-12 border border-gray-300" style={{ background: "linear-gradient(to bottom, #ffffff, #f8f9fa)", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <Image
          alt="Tampilan Jaya Bakery"
          className="rounded-lg w-full md:w-1/2 h-auto mb-6 md:mb-0 md:mr-6"
          width={600}
          height={400}
          src="/CAPTURE.PNG"
        />
        <div className="md:w-1/2 text-gray-700">
          <h3 className="text-3xl font-semibold mb-4 text-black">
            Apa itu Jaya Bakery?
          </h3>
          <p className="text-lg leading-relaxed">
            CV Jaya Bakery adalah perusahaan yang bergerak di bidang produksi
            roti dan kue, dengan kantor pusat berlokasi di Jl. Pulau Damar Gg.
            Sapta Marga, Blok E 19, Way Dadi, Sukarame, Bandar Lampung.
            Perusahaan ini didirikan oleh Bapak Siyono pada tahun 1997. Awalnya,
            usaha ini dikenal dengan nama "Roti Kampas", sebelum akhirnya
            berkembang dan berganti nama menjadi CV Jaya Bakery. Hingga saat
            ini, CV Jaya Bakery terus berkomitmen untuk menyediakan produk roti
            dan kue berkualitas tinggi bagi pelanggan di wilayah Bandar Lampung
            dan sekitarnya.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg p-6 md:p-8 shadow-lg mb-12">
        <h3 className="text-3xl font-semibold mb-4 text-black">
          Sejarah Jaya Bakery
        </h3>
        <p className="text-lg leading-relaxed text-gray-700">
          Usaha ini dimulai oleh Siyono bersama istrinya pada tahun 1996. Mereka
          memilih untuk menjalankan usaha ini karena sang istri memiliki
          keahlian di bidang ini. Nama Jaya Bakery sendiri diambil dari nama
          anak mereka. Jaya Bakery awalnya hanyalah sebuah industri roti
          rumahan yang menjual produknya dengan menitipkan ke warung-warung di
          Bandar Lampung. Setelah menekuni usaha tersebut selama 7 tahun, mereka
          memberanikan diri untuk membuka outlet pertama di Rumah Sakit Abdoel
          Moeloek. Saat ini, Jaya Bakery sudah memiliki 15 cabang dan 9 mitra
          di seluruh wilayah Provinsi Lampung, dan akan membuka cabang ke-16 di
          Jalan Pangeran Antasari.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
        <h3 className="text-3xl font-semibold mb-4 text-black">
          Alamat Jaya Bakery
        </h3>
        <div className="w-full overflow-hidden rounded-lg shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.362725841614!2d105.30112497591266!3d-5.361506753661621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40db38a3282303%3A0x8491b62d67bc221!2sJaya%20Bakery!5e0!3m2!1sen!2sid!4v1736530876274!5m2!1sen!2sid"
            className="w-full h-64 md:h-96 border-0"
            loading="lazy"
            title="Lokasi Jaya Bakery"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
