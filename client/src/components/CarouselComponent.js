import { Carousel } from "flowbite-react";
import Car1 from "../assets/car1.png";
import Car2 from "../assets/car2.png";
import Car3 from "../assets/car3.png";
import Car4 from "../assets/car4.png";
import Car5 from "../assets/car5.png";
import Image from "next/image";

function CarouselComponent() {
  return (
    <>
      <div className="saturate-80 h-[55vh] md:w-[70vh] lg:w-[100vh] mx-auto">
        <Carousel slideInterval={3000}>
          <Image src={Car1} alt="Image1" />
          <Image src={Car2} alt="Image2" />
          <Image src={Car3} alt="Image3" />
          <Image src={Car4} alt="Image4" />
          <Image src={Car5} alt="Image5" />
        </Carousel>
      </div>
    </>
  );
}

export default CarouselComponent;
