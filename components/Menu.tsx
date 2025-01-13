"use client";
import React from "react";

const MenuSection: React.FC = () => {
  const cakes = [
    { name: "Tart Coklat", price: "Rp90.000", sold: 4900 },
    { name: "Slice Cake", price: "Rp25.000", sold: 4800 },
    { name: "Roti Gandum", price: "Rp30.000", sold: 4700 },
    { name: "Roti Campur", price: "Rp75.000", sold: 4600 },
    { name: "Tart Stroberi", price: "Rp90.000", sold: 4500 },
    { name: "Croissant Keju", price: "Rp50.000", sold: 4400 },
    { name: "Roti Mousse", price: "Rp50.000", sold: 4300 },
    { name: "Roti Pelangi Red Velvet", price: "Rp65.000", sold: 4200 },
    { name: "Mini Tart Keju", price: "Rp90.000", sold: 4100 },
    { name: "American Chocolate Cake", price: "Rp120.000", sold: 4000 },
    { name: "Tart Oreo", price: "Rp100.000", sold: 3900 },
    { name: "Tart Almond", price: "Rp125.000", sold: 3800 },
    { name: "Tart Vanilla", price: "Rp85.000", sold: 3700 },
    { name: "Roti Almond", price: "Rp75.000", sold: 3600 },
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

  return (
    <section className="text-center mt-6 px-6 max-w-screen-lg mx-auto">
      <h2 className="text-4xl font-bold text-black mb-6">
        Nikmati kue terlaris di bulan ini dari Jaya Bakery
      </h2>
    </section>
  );
};

export default MenuSection;
