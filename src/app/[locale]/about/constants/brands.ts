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
  url: "/renault",
};
const Continental: IBrand = {
  id: 2,
  brand: "Continental",
  info: "continental",
  img: "/images/continental.png",
  url: "/brands/2",
};
const GeneralTyre: IBrand = {
  id: 3,
  brand: "General Tire",
  info: "general",
  img: "/images/generaltire.png",
  url: "/brands/3",
};
const MaxxisTyre: IBrand = {
  id: 4,
  brand: "Maxxis Tyres",
  info: "maxxis",
  img: "/images/maxxis.png",
  url: "/brands/4",
};

const CstTyre: IBrand = {
  id: 5,
  brand: "CST Tyres",
  info: "cst",
  img: "/images/cst.png",
  url: "/brands/5",
};
export const AllBrands: IBrands = {
  brands: [Nissan, Renault, Continental, GeneralTyre, MaxxisTyre, CstTyre],
};
