interface NavLink {
  label: string;
  href: string;
}

export interface Tire {
  id: number;
  name: string;
  image: string;
  category: string;
}

export interface Technology {
  id: number;
  title: string;
  name: string;
  description: string;
  image: string;
}

export interface BrandInfo {
  id: number;
  headline?: string;
  title: string;
  description: string;
  image?: string;
}

export interface CatalogItem {
  title: string;
  source: string;
}

export interface VehicleModel {
  id: number;
  series: string;
  name: string;
  description: string;
  image: string;
  engines: string[];
  models: string[];
  gvw: string;
  gcw?:string;
  cabines: string[];
  business?:string[];
  catalogPdf: CatalogItem[];
}

interface IBrand {
  id: number;
  brand: string;
  info: string;
  img: string;
  url: string;
  navs?: NavLink[];
  gallery?: string[];
  tires?: Tire[];
  technologies?: Technology[];
  infos?: BrandInfo[];
  models?: VehicleModel[];
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
  info: "About.renault",
  img: "/images/renault.png",
  url: "/brands/1/renault",
  gallery: [
    "/images/renault-gallery-1.jpg",
    "/images/renault-gallery-2.jpg",
    "/images/renault-gallery-3.jpg",
    "/images/renault-gallery-4.jpg",
    "/images/renault-gallery-5.jpg",
    "/images/renault-gallery-6.jpg",
  ],
  navs: [
    { label: "BrandDetail.navigation.home", href: "/brands/1/renault" },
    { label: "BrandDetail.navigation.about", href: "/brands/1/about" },
    { label: "BrandDetail.navigation.models", href: "/brands/1/explore-models" },
    { label: "BrandDetail.navigation.gallery", href: "/brands/1/gallery" },
  ],
  infos: [
    {
      id: 1,
      title: "Renault.infos.since1894.title",
      description: "Renault.infos.since1894.description",
    },
    {
      id: 2,
      title: "Renault.infos.productivityProvider.title",
      description: "Renault.infos.productivityProvider.subtitle",
    },
    {
      id: 3,
      title: "Renault.infos.reliablePartner.title",
      description: "Renault.infos.reliablePartner.description",
    },
    {
      id: 4,
      title: "Renault.infos.volvoGroup.title",
      description: "Renault.infos.volvoGroup.description",
    },
  ],
  models: [
    {
      id: 1,
      series: "K",
      name: "Serie K",
      description: "Heavy-duty construction trucks designed for the toughest sites",
      image: "/images/renault-serie-k.jpg",
      engines: ["DXI 11: 380 / 440 HP", "DXI 13: 460 / 500 HP"],
      gvw: "19 – 42 T",
      gcw:"60 – 120 T",
      cabines: ["DAY CAB : Day cab, Standard roof", "NIGHT & DAY CAB : Cab with bunk and standard roof",],
      models: ["Renault K330 6 x 4", "Renault K380 6 x 4","Renault K500 6 x 4","Renault K500 8 x 4"],
      catalogPdf: [
        {
          title: "Renault.catalogs.serieK.heavyConstruction",
          source: "/files/serie-k.pdf"
        }
      ]
    },
    {
      id: 2,
      series: "D",
      name: "Serie D",
      description: "Versatile distribution trucks for urban and regional transport",
      image: "/images/renault-serie-d.jpg",
      engines: ["DXI 5: 190 / 220 HP", "DXI 7: 240 / 280 HP"],
      gvw: "13 – 15 T",
      cabines: ["DAY CAB : Day cab, normal roof / flat roof", "GLOBAL CAB : Intermediary cab", "CREW CAB : 4 door crew cab (standard) 6/7 seats"],
      models: ["Renault D13 P4 x 2","Renault D15 P4 x 4", "Renault D16 P4 x 2", "Renault D18 P4 x 2"],
      catalogPdf: [
        {
          title: "Renault.catalogs.serieD.distribution",
           source: "/files/serie-d.pdf"
        }
      ]
    },
    {
      id: 3,
      series: "T",
      name: "Serie T",
      description: "Highway trucks for long-distance transport with maximum comfort",
      image: "/images/renault-serie-t.jpg",
      engines: ["DXi 11L 380-520hp", "DXi 13L 430-520hp"],
      gvw: "18T - 70T",
      cabines: ["T-High Sleeper", "T-Xtreme", "T-Comfort"],
      models: [],
      catalogPdf: []
    },
    {
      id: 4,
      series: "C",
      name: "Serie C",
      description: "Compact and agile trucks for urban distribution",
      image: "/images/renault-serie-c.jpg",
      engines: ["DXI 11: 330 / 440 HP", "DXI 13: 460 / 500 HP"],
      gvw: "19 – 42 T",
      gcw:"60 – 120 T",
      cabines: ["DAY CAB : Day cab, normal roof / flat roof", "GLOBAL CAB : Intermediary cab", "CREW CAB : 4 door crew cab (standard) 6/7 seats"],
      models: ["Renault C330","Renault C440 6 x 4","Renault C440 8 x 4"],
      business:["C Range (Road long and short haul) – C330, C440 6×4 freight, C440 8×4", "Road Freight – (Truck tractor C440 6×4 day and night or sleeper cab)Concrete Mixers and Concrete Pumps – C330 "],
      catalogPdf: [
        {
          title: "Renault.catalogs.serieC.construction",
           source: "/files/serie-c.pdf"
        },
        {
          title: "Renault.catalogs.serieC.longHaul",
          source: "/files/serie-c1.pdf"
        }
      ]
    }
  ]
};

const Continental: IBrand = {
  id: 2,
  brand: "Continental",
  info: "continental",
  img: "/images/continental.png",
  url: "/brands/2",
  navs: [
    { label: "BrandDetail.navigation.tires", href: "/brands/2/tires" },
    { label: "BrandDetail.navigation.technologies", href: "/brands/2/technology" },
    { label: "BrandDetail.navigation.why-us", href: "/brands/2/why-us" },
  ],
  gallery: [
    "/continental/img-1.jpeg",
    "/continental/img-2.jpeg",
    "/continental/img-3.jpeg",
    "/continental/img-4.jpeg",
    "/continental/img-5.jpeg",
    "/continental/img-6.jpeg",
    "/continental/img-7.jpeg",
    "/continental/img-8.jpeg",
    "/continental/img-9.jpg",
    "/continental/img-10.jpg"
  ],
  tires: [
    { id: 1, name: "ContiSportContact™ 3", image: "tires/tire-1", category: "BrandDetail.tires.categories.carro" },
    { id: 2, name: "ContiSportContact™ 5", image: "tires/tire-1", category: "BrandDetail.tires.categories.carro" },
    { id: 3, name: "ContiSportContact™ 5 SUV", image: "tires/tire-1", category: "BrandDetail.tires.categories.carro" },
    { id: 4, name: "ContiSportContact™ 5p", image: "tires/tire-1", category: "BrandDetail.tires.categories.carro" },
    { id: 5, name: "ContiSportContact™ 16", image: "tires/tire-1", category: "BrandDetail.tires.categories.carro" },
    { id: 6, name: "ContiCrossContact™ AT", image: "tires/tire-1", category: "BrandDetail.tires.categories.suv" },
    { id: 7, name: "ContiCrossContact™ LX", image: "tires/tire-1", category: "BrandDetail.tires.categories.suv" },
    { id: 8, name: "ContiCrossContact™ LX2", image: "tires/tire-1", category: "BrandDetail.tires.categories.suv" },
    { id: 9, name: "VANCO™ CONTACT", image: "tires/tire-1", category: "BrandDetail.tires.categories.van" },
    { id: 10, name: "VANCO™ CONTACT 2", image: "tires/tire-1", category: "BrandDetail.tires.categories.van" },
    { id: 11, name: "VANCO™ ECO CONTACT", image: "tires/tire-1", category: "BrandDetail.tires.categories.van" },
    { id: 12, name: "VANCO CONTACT AP 30", image: "tires/tire-1", category: "BrandDetail.tires.categories.van" },
  ],
  technologies: [
    {
      id: 1,
      title: "Continental.technologies.tireReplacement.title",
      name: "Continental.technologies.tireReplacement.name",
      description: "Continental.technologies.tireReplacement.description",
      image: "/technologies/img-1.jpg",
    },
    {
      id: 2,
      title: "Continental.technologies.tireCare.title",
      name: "Continental.technologies.tireCare.name",
      description: "Continental.technologies.tireCare.description",
      image: "/technologies/img-1.jpg",
    },
    {
      id: 3,
      title: "Continental.technologies.tireMaintenance.title",
      name: "Continental.technologies.tireMaintenance.name",
      description: "Continental.technologies.tireMaintenance.description",
      image: "/technologies/img-1.jpg",
    },
  ],
  infos: [
    {
      id: 1,
      headline: "Continental.infos.bestInBraking.headline",
      title: "Continental.infos.bestInBraking.title",
      description: "Continental.infos.bestInBraking.description",
      image: "/technologies/img-1.jpg",
    },
    {
      id: 2,
      headline: "Continental.infos.whyContinental.headline",
      title: "Continental.infos.whyContinental.title",
      description: "Continental.infos.whyContinental.description",
      image: "/technologies/img-1.jpg",
    },
    {
      id: 3,
      headline: "Continental.infos.germanTechnology.headline",
      title: "Continental.infos.germanTechnology.title",
      description: "Continental.infos.germanTechnology.description",
      image: "/technologies/img-1.jpg",
    },
    {
      id: 4,
      headline: "Continental.infos.testedForSafety.headline",
      title: "Continental.infos.testedForSafety.title",
      description: "Continental.infos.testedForSafety.description",
      image: "/technologies/img-1.jpg",
    },
    {
      id: 5,
      headline: "Continental.infos.automotiveExperience.headline",
      title: "Continental.infos.automotiveExperience.title",
      description: "Continental.infos.automotiveExperience.description",
      image: "/technologies/img-1.jpg",
    },
    {
      id: 6,
      headline: "Continental.infos.originalEquipment.headline",
      title: "Continental.infos.originalEquipment.title",
      description: "Continental.infos.originalEquipment.description",
      image: "/technologies/img-1.jpg",
    },
    {
      id: 7,
      headline: "Continental.infos.independentTests.headline",
      title: "Continental.infos.independentTests.title",
      description: "Continental.infos.independentTests.description",
      image: "/technologies/img-1.jpg",
    },
  ],
};

const GeneralTyre: IBrand = {
  id: 3,
  brand: "General Tire",
  info: "general",
  img: "/images/generaltire.png",
  url: "/brands/3",
  navs: [
    { label: "BrandDetail.navigation.tires", href: "/brands/3/tires" },
    { label: "BrandDetail.navigation.about", href: "/brands/3/about" },
  ],
  gallery: [
    "/general/img-1.jpg",
    "/general/img-2.jpg",
    "/general/img-3.jpeg",
    "/general/img-4.jpg",
    "/general/img-5.jpg",
    "/general/img-6.jpg",
    "/general/img-7.jpeg"
  ],
  tires: [
    { id: 1, name: "General Altimax Comfort", image: "tires/tire-1", category: "BrandDetail.tires.categories.carro" },
    { id: 2, name: "General Altimax Sport", image: "tires/tire-1", category: "BrandDetail.tires.categories.carro" },
    { id: 3, name: "General Grabber GT", image: "tires/tire-1", category: "BrandDetail.tires.categories.suv" },
    { id: 4, name: "General Grabber AT", image: "tires/tire-1", category: "BrandDetail.tires.categories.suv" },
    { id: 5, name: "EUROVAN 2", image: "tires/tire-1", category: "BrandDetail.tires.categories.van" },
  ],
  infos: [
    {
      id: 1,
      title: "GeneralTire.infos.goAnywhere.title",
      description: "GeneralTire.infos.goAnywhere.description"
    },
    {
      id: 2,
      title: "GeneralTire.infos.tires.title",
      description: "GeneralTire.infos.tires.description"
    },
    {
      id: 3,
      title: "GeneralTire.infos.fourByFour.title",
      description: "GeneralTire.infos.fourByFour.description"
    }
  ]
};

const MaxxisTyre: IBrand = {
  id: 4,
  brand: "Maxxis Tyres",
  info: "maxxis",
  img: "/images/maxxis.png",
  url: "/brands/4",
  gallery: [
    "/maxxis/img-1.jpg",
    "/maxxis/img-2.jpeg",
    "/maxxis/img-3.jpeg",
    "/maxxis/img-4.jpeg",
    "/maxxis/img-5.jpg"
  ]
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