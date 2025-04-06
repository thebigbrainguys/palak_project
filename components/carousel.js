import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function Carous() {
  return (
    <div className="">
      <div className="h-56 sm:h-64 md:h-[80vh]">
        <Carousel slideInterval={4000}>
          <Image width={1000} height={1000} className="object-cover object-center h-full w-full" src="/homepagecarousel/carousel1.jpg" alt="..." />
          <Image width={1000} height={1000} className="object-cover object-center h-full w-full" src="/homepagecarousel/carousel2.jpg" alt="..." />
          <Image width={1000} height={1000} className="object-cover object-center h-full w-full" src="/homepagecarousel/carousel3.jpg" alt="..." />
          <Image width={1000} height={1000} className="object-cover object-center h-full w-full" src="/homepagecarousel/carousel4.jpg" alt="..." />
        </Carousel>
      </div>
    </div>
  );
} 