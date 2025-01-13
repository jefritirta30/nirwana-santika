import Card from "@/components/Card";
import Hero from "@/components/Hero";
import dummyData from "@/components/data/dumydata.json"

const Home: React.FC = () => {
  return (
    <>
    <Hero />
    <main className="container mx-auto py-12 px-6">
        <h1 className="text-center text-2xl font-bold mb-8">
          Nikmati kue terlaris di bulan ini dari Jaya Bakery
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {dummyData.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
        <div className="text-center">
          <a className="bg-red-800 text-white p-2 rounded font-bold" href="#">
            lihat semua kue
          </a>
        </div>
      </main>     
      <HeroSection /> 
    </>
  );
};

export default Home;
