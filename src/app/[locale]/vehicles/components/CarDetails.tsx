import { IUsedCar } from "@/model/usedCar";
import Image from "next/image";
import { FC } from "react";

type CarDetailsProps = {
  car: IUsedCar;
};

const CarDetails: FC<CarDetailsProps> = (props) => {
  const images: string[] = JSON.parse(props.car.car_image);
  return (
    <div className="container mx-auto grid grid-cols-1 gap-6 px-4 py-6 lg:grid-cols-12">
      {/* LEFT SECTION */}
      <div className="lg:col-span-7">
        <Image
          src={images[0]}
          alt={props.car.brand}
          width={800}
          height={500}
          className="w-full rounded object-cover"
        />

        <div className="mt-4 flex gap-4">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Thumbnail ${index}`}
              width={120}
              height={80}
              className="rounded object-cover"
            />
          ))}
        </div>

        {/* DETAILS */}
        <div className="mt-8">
          <h2 className="mb-2 text-xl font-semibold">Detalhes</h2>
          <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
            <span>Modelo: {props.car.brand}</span>
            <span>Ano: {props.car.year_model}</span>
            <span>Cor: {props.car.color}</span>
            <span>Portas: {props.car.doors}</span>
            <span>Transmissão: {props.car.transmission}</span>
            <span>Lugares: {props.car.seats}</span>
            <span>Potência: {props.car.cylinder}</span>
            <span>Matrícula: {props.car.license_plate}</span>
            <span>Quilometragem: {props.car.mileage}</span>
            <span>Combustível: {props.car.fuel}</span>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="space-y-4 lg:col-span-5">
        <div className="text-sm text-gray-500">
          Ref: {props.car.id} / Lote Nº: 0
        </div>
        <h1 className="text-2xl font-bold">
          {props.car.brand} - Ano {props.car.year_model}
        </h1>
        <div className="w-fit rounded bg-black px-4 py-2 text-sm text-white">
          Termina em 24d 4h 15m 36s
        </div>

        <button className="mt-3 w-full rounded bg-red-600 py-3 text-white">
          Licitação Direta
        </button>

        <div>
          <label className="mb-1 block text-sm">Licitação Automática</label>
          <input
            type="number"
            className="w-full rounded border px-3 py-2"
            placeholder="Insira valor máximo"
          />
          <button className="mt-2 w-full rounded bg-red-600 py-2 text-white">
            Licitar
          </button>
        </div>

        {/* PAYMENT */}
        <div>
          <p className="mb-2 text-sm font-semibold">Métodos de pagamento</p>
          <div className="flex items-center gap-3">
            <Image src="/icons/visa.svg" alt="Visa" width={40} height={24} />
            <Image
              src="/icons/mastercard.svg"
              alt="Mastercard"
              width={40}
              height={24}
            />
            <Image src="/icons/mpesa.svg" alt="Mpesa" width={40} height={24} />
            <Image
              src="/icons/paypal.svg"
              alt="Paypal"
              width={40}
              height={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
