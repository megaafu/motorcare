interface IMenu {
  label: string;
  subMenu: string[];
}

export const BrochureMenu: IMenu = {
  label: "presented_vehicles",
  subMenu: [""],
};
export const IsoMenu: IMenu = {
  label: "certification",
  subMenu: [""],
};
export const HistoryMenu: IMenu = {
  label: "history",
  subMenu: [""],
};
export const CategoriesMenu: IMenu = {
  label: "new_vehicles",
  subMenu: ["Vehicles", "Trucks", "Electrics"],
};

export const FindCarsMenu: IMenu = {
  label: "find_cars",
  subMenu: [""],
};

export const BlogMenu: IMenu = {
  label: "blog",
  subMenu: ["all", "tranding", "last_week"],
};

export const AboutMenu: IMenu = {
  label: "about",
  subMenu: ["Our History", "Our Brands"],
};

export const BrandsMenu: IMenu = {
  label: "brands",
  subMenu: [
    "Nissan",
    "Renault",
    "General Tyres",
    "Maxxis Tyres",
    "CST tyres",
    "Continental",
  ],
};
