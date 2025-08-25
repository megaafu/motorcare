interface IBrand {
  id: number;
  brand: string;
  info: string;
  img: string;
}
interface IBrands {
  brands: IBrand[];
}

const Nissan: IBrand = {
  id: 0,
  brand: "Nissan",
  info: "nissan",
  img: "/images/nissan.png",
};

const Renault: IBrand = {
  id: 1,
  brand: "Renault Trucks",
  info: "renault",
  img: "/images/renault.png",
};
const Continental: IBrand = {
  id: 2,
  brand: "Continental",
  info: "continental",
  img: "/images/continental.png",
};
const GeneralTyre: IBrand = {
  id: 3,
  brand: "General Tire",
  info: "general",
  img: "/images/generaltire.png",
};
const MaxxisTyre: IBrand = {
  id: 4,
  brand: "Maxxis Tyres",
  info: "maxxis",
  img: "/images/maxxis.png",
};

const CstTyre: IBrand = {
  id: 5,
  brand: "CST Tyres",
  info: "cst",
  img: "/images/cst.png",
};
export const AllBrands: IBrands = {
  brands: [Nissan, Renault, Continental, GeneralTyre, MaxxisTyre, CstTyre],
};
