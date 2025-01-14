"use client";
import React, { useState } from "react";

const MenuSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Data untuk menu roti (50 item dengan nama dan image yang diperbaiki)
  const cakes = [
    { "name": "Tart Coklat", "price": "Rp90.000", "sold": 4900, "image": "/images/TartMungil.png" },
    { "name": "Slice Cake", "price": "Rp25.000", "sold": 4800 , "image": "/images/Product24.png"},
    { "name": "Roti Gandum", "price": "Rp30.000", "sold": 4700, "image": "/images/Product1.png"},
    { "name": "Roti Campur", "price": "Rp75.000", "sold": 4600,"image": "/images/Product2.png"},
    { "name": "Tart Stroberi", "price": "Rp90.000", "sold": 4500,"image": "/images/Product25.png" },
    { "name": "Croissant Keju", "price": "Rp50.000", "sold": 4400,"image": "/images/Product29.png"},
    { "name": "Roti Mousse", "price": "Rp50.000", "sold": 4300,"image": "/images/Product8.png" },
    { "name": "Roti Pelangi Red Velvet", "price": "Rp65.000", "sold": 4200, "image": "/images/Product12.png" },
    { "name": "Mini Tart Keju", "price": "Rp90.000", "sold": 4100 ,"image": "/images/Product48.png"},
    { "name": "American Chocolate Cake", "price": "Rp120.000", "sold": 4000,"image": "/images/Product30.png" },
    { "name": "Tart Oreo", "price": "Rp100.000", "sold": 3900,"image": "/images/Product35.png" },
    { "name": "Tart Almond", "price": "Rp125.000", "sold": 3800,"image": "/images/Product50.png" },
    { "name": "Tart Vanilla", "price": "Rp85.000", "sold": 3700 ,"image": "/images/Product28.png"},
    { "name": "Roti Almond", "price": "Rp75.000", "sold": 3600 ,"image": "/images/Product31.png" },
    { name: "Tart Cherry", price: "Rp120.000", sold: 3500 },
    { name: "Roti Mocca", price: "Rp50.000", sold: 3400 },
    { name: "Cake Dessert", price: "Rp85.000", sold: 3300 },
    { name: "Roti Oreo", price: "Rp95.000", sold: 3200 },
    { name: "Roti Krim Pelangi", price: "Rp70.000", sold: 3100 },
    { name: "Tart Caramel", price: "Rp120.000", sold: 3000 },
    { name: "Slice Cake Red Velvet", price: "Rp65.000", sold: 2900 },
    { name: "Slice Cake Coklat", price: "Rp75.000", sold: 2800 },
    { name: "Slice Tart Oreo", price: "Rp50.000", sold: 2700 },
    { name: "Roti Kelapa Coklat", price: "Rp85.000", sold: 2600 },
    { name: "Tart Leci Hijau", price: "Rp95.000", sold: 2500 },
    { name: "Roti Keju Bulat", price: "Rp35.000", sold: 2400 },
    { name: "Tiger Roll Cake", price: "Rp30.000", sold: 2300 },
    { name: "Tart Sirup Triple", price: "Rp85.000", sold: 2200 },
    { name: "Banana Cake", price: "Rp45.000", sold: 2100 },
    { name: "Roti Swiss", price: "Rp55.000", sold: 2000 },
    { name: "Tart Caramel Triple", price: "Rp120.000", sold: 1900 },
    { name: "Tart Vanilla Butterfly", price: "Rp95.000", sold: 1800 },
    { name: "Tart Cotton Purple", price: "Rp85.000", sold: 1700 },
    { name: "Roti Tawar Spesial", price: "Rp30.000", sold: 1600 },
    { name: "Roti Cup Keju", price: "Rp40.000", sold: 1500 },
    { name: "Roti Mini Double Coklat", price: "Rp45.000", sold: 1400 },
    { name: "Tart Grinner", price: "Rp100.000", sold: 1300 },
    { name: "Roti Cup Seeds", price: "Rp35.000", sold: 1200 },
    { name: "Tart Cotton Blue", price: "Rp90.000", sold: 1100 },
    { name: "Roti Oreo Red Bean", price: "Rp27.500", sold: 1000 },
    { name: "Roti Talas", price: "Rp45.000", sold: 900 },
    { name: "Roti Korea", price: "Rp75.000", sold: 800 },
    { name: "Banana Roll Coklat", price: "Rp35.000", sold: 700 },
    { name: "Tart Dasar", price: "Rp90.000", sold: 600 },
    { name: "Roti Pelangi Coklat", price: "Rp65.000", sold: 500 },
    { name: "Roti Coklat Italia", price: "Rp42.500", sold: 400 },
    { name: "Roti Pelangi Putih", price: "Rp35.000", sold: 300 },
    { name: "Roti Bakar", price: "Rp35.000", sold: 200 },
    { name: "Roti Claudia Original", price: "Rp35.000", sold: 100 },
    { name: "Roti Krim Kacang", price: "Rp40.000", sold: 50 },
  ];
  
  const displayedCakes = isExpanded ? cakes : cakes.slice(0, 8);
  const gridCols = isExpanded ? 5 : 4;

  return (
    <section className="text-center mt-6 px-6 max-w-screen-lg mx-auto mb-16">
      <h2 className="text-4xl font-bold text-black mb-6">
        Nikmati kue terlaris di bulan ini dari Jaya Bakery
      </h2>
      <div
        className="grid gap-4 place-items-center transition-all duration-500 ease-in-out"
        style={{
          gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`,
        }}
      >
        {displayedCakes.map((cake) => (
          <div
            key={cake.name} // Menggunakan name sebagai key
            className="bg-white border rounded-lg shadow-lg p-3 text-center hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105 flex flex-col items-center"
            style={{
              width: isExpanded ? "180px" : "200px",
              height: isExpanded ? "250px" : "230px",
            }}
          >
            <div className="bg-gray-200 w-full h-32 rounded-lg mb-3 overflow-hidden">
              <img
                src={cake.image}
                alt={cake.name}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{cake.name}</h3>
            <p className="text-red-500 font-bold mt-2">{cake.price}</p>
            <p className="text-gray-600 text-sm">Terjual: {cake.sold}</p>
          </div>
        ))}
      </div>

      <button
        className="mt-6 bg-[#FFC107] hover:bg-[#d69c06] text-black font-semibold py-2 px-6 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Tutup" : "Lihat semua kue"}
      </button>
    </section>
  );
};

export default MenuSection;
