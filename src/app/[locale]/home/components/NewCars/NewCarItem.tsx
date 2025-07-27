import { BASEURL } from "@/lib/util/util";
import { INewCar } from "@/model/newCar";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface NewCarItemProps {
  carIndex: number;
  car: INewCar;
}

const NewCarItem: React.FC<NewCarItemProps> = ({ carIndex, car }) => {
  const t = useTranslations("Home");
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div key={carIndex}>
      <Link href={car.url_link} target="blank">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className=" group relative aspect-[4/3] h-[40vh] w-[75vw] pb-12 md:w-[50vw] lg:h-auto lg:w-auto"
        >
          <Image
            loader={() => `${BASEURL}${car.car_image}`}
            width={6048}
            height={4024}
            className=" aspect-[4/3] w-full transform-gpu transition-transform group-hover:scale-110"
            src={`${BASEURL}${car.car_image}`}
            alt=""
          />

          <p className="text-bold mt-4 text-center text-xl">{car.model}</p>

          <div className={`${isHovered ? "block" : "block lg:hidden"}`}>
            <div className="absolute bottom-0 left-0 right-0  space-y-2 bg-transparent  group-hover:block">
              <span className="block bg-primary p-2 text-center text-white duration-300">
                {t("explore")}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 border border-primary"></div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewCarItem;
