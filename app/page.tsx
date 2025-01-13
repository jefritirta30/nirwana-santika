import Card from "@/components/Card";
// import Hero from "@/components/Hero";
import dummyData from "@/components/data/dumydata.json"
import HeroSection from "@/components/Hero";
import MenuSection from "@/components/Menu";

const Home: React.FC = () => {
  return (
    <>
    {/* <Hero Section /> */}
    <HeroSection />

    {/* Menu Section */}
    <MenuSection />
    </>
  );
};

export default Home;
