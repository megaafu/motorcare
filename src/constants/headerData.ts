interface IMenu {
  label: string
  url: string
}

export const menu: IMenu[] = [
  {
    label: 'home',
    url: '/home',
  },
  {
    label: 'about',
    url: '/about',
  },
  {
    label: 'vehicles',
    url: '/vehicles',
  },
 
  {
    label: 'find_dealer',
    url: '/dealer',
  },
]
