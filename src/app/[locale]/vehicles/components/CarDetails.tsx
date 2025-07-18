import { IUsedCar } from '@/model/usedCar'
import Image from 'next/image'
import { FC } from 'react'

type CarDetailsProps = {
  car: IUsedCar
}

const CarDetails: FC<CarDetailsProps> = (props) => {
  const images: string[] = JSON.parse(props.car.car_image)
  return (
    <div className="container mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* LEFT SECTION */}
      <div className="lg:col-span-7">
        <Image
          src={images[0]}
          alt={props.car.brand}
          width={800}
          height={500}
          className="w-full object-cover rounded"
        />

        <div className="flex gap-4 mt-4">
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
          <h2 className="text-xl font-semibold mb-2">Detalhes</h2>
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
      <div className="lg:col-span-5 space-y-4">
        <div className="text-sm text-gray-500">Ref: {props.car.id} / Lote Nº: 0</div>
        <h1 className="text-2xl font-bold">
          {props.car.brand} - Ano {props.car.year_model}
        </h1>
        <div className="bg-black text-white px-4 py-2 rounded text-sm w-fit">
          Termina em 24d 4h 15m 36s
        </div>

        <button className="w-full bg-red-600 text-white py-3 rounded mt-3">Licitação Direta</button>

        <div>
          <label className="text-sm mb-1 block">Licitação Automática</label>
          <input
            type="number"
            className="w-full border px-3 py-2 rounded"
            placeholder="Insira valor máximo"
          />
          <button className="w-full bg-red-600 text-white py-2 rounded mt-2">Licitar</button>
        </div>

        {/* PAYMENT */}
        <div>
          <p className="text-sm font-semibold mb-2">Métodos de pagamento</p>
          <div className="flex gap-3 items-center">
            <Image src="/icons/visa.svg" alt="Visa" width={40} height={24} />
            <Image src="/icons/mastercard.svg" alt="Mastercard" width={40} height={24} />
            <Image src="/icons/mpesa.svg" alt="Mpesa" width={40} height={24} />
            <Image src="/icons/paypal.svg" alt="Paypal" width={40} height={24} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarDetails

