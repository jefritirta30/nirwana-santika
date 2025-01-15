import React from "react";
import FacebookLogo from "@/public/images/facebook-logo.png";
import InstagramLogo from "@/public/images/Instagram-Logo.png";
import TwitterLogo from "@/public/images/twitter-logo-removebg-preview.png";

import Image from "next/image";
const Footer = () => {
  return (
    <footer id="footer" className="bg-red-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-6 md:mb-0">
          <h2 className="font-bold text-lg">Alamat</h2>
          <p>
            Jl. Ryacudu No.25 B, Way Dadi, Kec. Sukarame, Kota Bandar Lampung,
            Lampung 35133
          </p>
          <h2 className="font-bold text-lg mt-4">Jam Operasional</h2>
          <p>Senin - Minggu : 07.15 - 21.00 (GMT+7)</p>
        </div>
        <div className="mb-6 md:mb-0">
          <h2 className="font-bold text-lg">Kontak Kami</h2>
          <p className="text-green-500">Whatsapp</p>
          <h2 className="font-bold text-lg mt-4">Email</h2>
          <p>jayabakery@gmail.com</p>
        </div>
        <div>
          <h2 className="font-bold text-lg">Sosial Media</h2>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a href="#" className="text-white">
              <Image src={FacebookLogo} alt="" width={40} height={40} />
            </a>
            <a href="#" className="text-white">
              <Image src={InstagramLogo} alt="" width={60} height={60} />
            </a>
            <a href="#" className="text-white">
              <Image src={TwitterLogo} alt="" width={40} height={40} />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <a href="#" className="bg-yellow-500 text-maroon-900 p-2 rounded-full">
          <i className="fas fa-arrow-up"></i>
        </a>
      </div>
    </footer>
  );
};
export default Footer;
