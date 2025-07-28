export interface IMenu {
  label: string;
  url: string;
}

export interface IMenuWithSub {
  label: string;
  url?: string;
  dropdown?: IMenu[];
}
export interface INav {
  menu: IMenu;
  dropdown?: IMenuWithSub[];
}

export const menu: INav[] = [
  {
    menu: {
      label: "menu",
      url: "",
    },
    dropdown: [
      {
        label: "cars",
        url: "",
        dropdown: [
          {
            label: "nissan",
            url: "https://www.nissan.co.mz/",
          },
          {
            label: "renault",
            url: "/about?brand=Renault Trucks",
          },
        ],
      },
      {
        label: "tires",
        url: "",
        dropdown: [
          {
            label: "general",
            url: "/about?brand=General Tire",
          },
          {
            label: "continental",
            url: "/about?brand=Continental",
          },
          {
            label: "maxxis",
            url: "/about?brand=Maxxis Tyres",
          },
        ],
      },
    ],
  },
  {
    menu: {
      label: "vehicles",
      url: "/vehicles",
    },
  },

  {
    menu: {
      label: "after_sales",
      url: "",
    },
    dropdown: [
      {
        label: "service",
        url: "/serviceform",
      },
      {
        label: "parts_accessories",
        url: "/peaceform",
      },
    ],
  },

  {
    menu: {
      label: "find_dealer",
      url: "/dealer",
    },
  },
  {
    menu: {
      label: "about",
      url: "/about",
    },
  },

  {
    menu: {
      label: "whistleblowing",
      url: "/whistleblowing",
    },
  },
];
