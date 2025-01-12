"use client";
import React, { useState } from "react";

const MenuSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="text-center mt-6 px-6 max-w-screen-lg mx-auto">
      <h2 className="text-4xl font-bold text-black mb-6">
        Nikmati kue terlaris di bulan ini dari Jaya Bakery
      </h2>
    </section>
  );
};

export default MenuSection;