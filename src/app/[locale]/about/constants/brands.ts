interface IBrand {
  id: number;
  brand: string;
  info: string;
  img: string;
  url:string;
}
interface IBrands {
  brands: IBrand[];
}

const Nissan: IBrand = {
  id: 0,
  brand: "Nissan",
  info: "nissan",
  img: "/images/nissan.png",
  url: "https://www.nissan.co.mz/",
};

const Renault: IBrand = {
  id: 1,
  brand: "Renault Trucks",
  info: "renault",
  img: "/images/renault.png",
  url: "/about?brand=Renault Trucks",
};
const Continental: IBrand = {
  id: 2,
  brand: "Continental",
  info: "continental",
  img: "/images/continental.png",
  url: "/about?brand=Continental",
};
const GeneralTyre: IBrand = {
  id: 3,
  brand: "General Tire",
  info: "general",
  img: "/images/generaltire.png",
  url: "/about?brand=General Tire",
};
const MaxxisTyre: IBrand = {
  id: 4,
  brand: "Maxxis Tyres",
  info: "maxxis",
  img: "/images/maxxis.png",
  url: "/about?brand=Maxxis Tyres",
};

const CstTyre: IBrand = {
  id: 5,
  brand: "CST Tyres",
  info: "cst",
  img: "/images/cst.png",
  url: "/about?brand=CST Tyres",
};
export const AllBrands: IBrands = {
  brands: [Nissan, Renault, Continental, GeneralTyre, MaxxisTyre, CstTyre],
};
