import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-[#3F0405] text-white pt-24 pb-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        {/* Bagian Teks */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">Jaya Bakery</h1>
          <h2 className="text-lg font-medium text-[#FFC107] mb-6">
            Roti & Kue dengan Cita Rasa Istimewa
          </h2>
          <p className="text-sm leading-relaxed mb-6">
            Dengan lebih dari 4 cabang yang tersebar di berbagai wilayah di
            Bandar Lampung, Jaya Bakery menghadirkan roti dan kue berkualitas
            tinggi, dibuat dengan bahan terbaik untuk memberikan pengalaman rasa
            yang tak terlupakan.
          </p>
          <div className="flex gap-4">
            <Link href="/produk">
            <button className="bg-[#FFC107] hover:bg-[#d69c06] text-black font-semibold py-2 px-6 rounded">
            All Products
            Produk
            </button>
            </Link>
            
            <Link href="/tentang-kami">
            <button className="bg-white hover:bg-gray-200 text-[#3F0405] font-semibold py-2 px-6 rounded">
              Tentang Kami
            </button>
            </Link>
            
          </div>
        </div>

        {/* Bagian Gambar */}
        <div className="flex-1 mt-8">
          <Image
            src="/heroimage.jpeg"
            alt="Jaya Bakery Store"
            className="rounded-lg shadow-lg"
            width={600}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}
