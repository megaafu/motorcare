interface IMenu {
  label: string
  url: string
  subMenu: string[]
}

export const menu: IMenu[] = [
  {
    label: 'home',
    url: '/home',
    subMenu: [],
  },
  {
    label: 'about',
    url: '/about',
    subMenu: ['mission', 'vision', 'values', 'history'],
  },
  {
    label: 'vehicles',
    url: '/vehicles',
    subMenu: ['New', 'Pre-Owned', 'Trucks', 'Scooter'],
  },
  {
    label: 'parts_accesories',
    url: '/',
    subMenu: ['parts', 'tires', 'accessories'],
  },
  {
    label: 'services',
    url: '/',
    subMenu: ['revision', 'repair', 'diagnosis', 'panel_beating'],
  },
  {
    label: 'contact',
    url: '/',
    subMenu: ['find_dealer', 'complains'],
  },
]
