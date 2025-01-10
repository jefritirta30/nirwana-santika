import Card from "@/components/Card";
import dummyData from "@/components/data/dummydataproduk.json"

const page = () => {
  return (
    <>
      <main className="bg-yellow-200 py-8">
        <div className="container mx-auto text-center mt-10">
          <h1 className="text-3xl font-bold">
            Kumpulan Produk di
            <span className="text-maroon-800">Jaya Bakery</span>
          </h1>
          <p className="mt-2 text-lg">
            Dengan bahan-bahan pilihan dan resep yang sempurna, kue unik ini
            tercipta bak sebuah mahakarya.
          </p>
        </div>
      </main>
      <section className="container mx-auto py-8">
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