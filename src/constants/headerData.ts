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
    subMenu: ['new', 'pre_owned', 'trucks', 'scooter'],
  },
  {
    label: 'parts_accesories',
    url: '/',
    subMenu: ['parts', 'tires', 'acessories'],
  },
  {
    label: 'services',
    url: '/',
    subMenu: ['revision', 'reparation', 'diagnosis', 'panel_beating'],
  },
  {
    label: 'contact',
    url: '/dealer',
    subMenu: ['find_dealer', 'complains'],
  },
]
