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
const NIU: IBrand = {
  id: 2,
  brand: "NIU",
  info: "niu",
  img: "/images/niu.png",
};

const Continental: IBrand = {
  id: 3,
  brand: "Continental",
  info: "continental",
  img: "/images/continental.png",
};
const GeneralTyre: IBrand = {
  id: 4,
  brand: "General Tire",
  info: "general",
  img: "/images/generaltire.png",
};
const MaxxisTyre: IBrand = {
  id: 5,
  brand: "Maxxis Tyres",
  info: "maxxis",
  img: "/images/maxxis.png",
};

const CstTyre: IBrand = {
  id: 6,
  brand: "CST Tyres",
  info: "cst",
  img: "/images/cst.png",
};
export const AllBrands: IBrands = {
  brands: [Nissan, Renault, NIU, Continental, GeneralTyre, MaxxisTyre, CstTyre],
};
