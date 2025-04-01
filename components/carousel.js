import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function Carous() {
  return (
    <div className="">
      <div className="h-56 sm:h-64 md:h-[80vh]">
        <Carousel slideInterval={4000}>
          <Image width={1000} height={1000} className="object-cover object-center h-full w-full" src="/homepagecarousel/img1.jpg" alt="..." />
          <Image width={1000} height={1000} className="object-cover object-center h-full w-full" src="/homepagecarousel/jordanred.jpg" alt="..." />
          <Image width={1000} height={1000} className="object-cover object-center h-full w-full" src="/homepagecarousel/leatherjacketbrown.jpg" alt="..." />
          <Image width={1000} height={1000} className="object-cover object-bottom h-full w-full" src="/homepagecarousel/blackshoes.jpg" alt="..." />
        </Carousel>
      </div>
    </div>
  );
} 