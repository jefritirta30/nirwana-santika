"use client"; // Anotasi untuk Client Component

import Card from "@/components/Card";
import dummyData from "@/components/data/dummydataproduk.json";


interface Product {
  id: number;
  name: string;
  price: string;
  sold: number;
  image: string;
}

const page = () => {
  return (
    <>
      <main className="bg-yellow-200 py-8 custom-font">
        <div className="container mx-auto text-center mt-10">
          <h1 className="text-3xl font-bold text-yellow-900">
            Kumpulan Produk di
            <span className="text-red-500"> Jaya Bakery</span>
          </h1>
          <p className="mt-2 text-lg text-yellow-900">
            Dengan ini bahan-bahan pilihan dan resep yang sempurna, kue unik ini
            tercipta bak sebuah mahakarya.
          </p>
        </div>
      </main>
      <section className="container mx-auto py-8 custom-font">
        <div className="flex justify-end mb-4">
          <label className="mr-2 text-lg font-semibold">
            Urutkan Berdasarkan:
          </label>
          <select className="border rounded px-2 py-1" id="sort">
            <option value="terlaris">Terlaris</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {dummyData.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
