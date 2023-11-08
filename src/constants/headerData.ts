export interface IMenu {
  label: string
  url: string
}
export interface INav {
  menu: IMenu
  dropdown?: IMenu[]
}

export const menu: INav[] = [
  {
    menu: {
      label: 'home',
      url: '/home',
    }

  },
  {
    menu: {
      label: 'about',
      url: '/about',
    }

  },
  {
    menu: {
      label: 'vehicles',
      url: '/vehicles',
    }

  },

  {
    menu: {
      label: 'after_sales',
      url: '#',
    },
    dropdown: [
      {
        label: "service",
        url: "/serviceform"
      },
      {
        label: "parts_accessories",
        url: "/peaceform"
      },
    ]
  },

  {
    menu: {
      label: 'find_dealer',
      url: '/dealer',
    }
  },
]
