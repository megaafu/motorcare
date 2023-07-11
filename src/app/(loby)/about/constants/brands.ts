interface IBrand {
  id: number
  brand: string
  info: string
  img: string
}
interface IBrands {
  brands: IBrand[]
}

const Nissan: IBrand = {
  id: 0,
  brand: 'Nissan',
  info: `As an authorized dealership for Nissan vehicles, MOTORCARE provides the best automotive solutions, genuine parts, accessories, as well as access to after-sales services such as preventive and corrective maintenance. We offer solutions for B2B and B2C segments.`,
  img: '/images/nissan.png',
}

const Renault: IBrand = {
  id: 1,
  brand: 'Reault',
  info: `Renault Trucks has been distributed in Mozambique by Motorcare since 2014. It has innovative vehicles adapted to a wide range of transport activities: distribution, construction, heavy construction, long distance.`,
  img: '/images/renault.png',
}

const NIU: IBrand = {
  id: 2,
  brand: 'Reault',
  info: `NIU is the world’s leading provider of smart urban mobility solutions. Instead of waiting for the market to request the “move to green” change, Motorcare offers zero emission mobility solutions. `,
  img: '/',
}
const Continental: IBrand = {
  id: 3,
  brand: 'Continental',
  info: `Continental manufactures safe, efficient, and performance-oriented tires for passenger cars, commercial vehicles, and two-wheelers. They are one of the foremost leaders in tire technology and tire production, with a broad product range suitable for use in a variety of conditions and applications. `,
  img: '/images/continental.png',
}
const GeneralTyre: IBrand = {
  id: 4,
  brand: 'General Tyres',
  info: `General Tire, part of Continental Group, offer products you can rely on for the little adventure in your everyday life at affordable prices.`,
  img: '/images/generaltire.png',
}
const MaxxisTyre: IBrand = {
  id: 5,
  brand: 'Maxxis Tyres',
  info: `Maxxis is brand committed to delivering high-quality tyres at affordable prices.  Maxxis´s range includes tyres for motorcycle, car, van, truck, agricultural vehicles and more, all to an outstanding quality.`,
  img: '/images/maxxis.png',
}

const CstTyre: IBrand = {
  id: 6,
  brand: 'CST Tyres',
  info: `Cheng Shin Tire is the world's largest bicycle and motorcycle tire manufacturer. It is part of Maxxis group, and their range includes tires and inner tubes for bicycles, motorcycles, all-terrain vehicles, cars, trucks, forklifts, agricultural and lawn and garden equipment.`,
  img: '/images/cst.png',
}
export const AllBrands: IBrands = {
  brands: [Nissan, Renault, NIU, Continental, GeneralTyre, MaxxisTyre, CstTyre],
}
