import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="w-full">
      <Image alt="Jaya Bakery Building" className="w-full" width={10000}
              height={10000} src='/Logo2.jpeg' />
    </div>
  );
};
export default Hero;