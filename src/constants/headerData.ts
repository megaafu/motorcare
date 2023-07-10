interface IMenu {
  label: string
  url: string
  subMenu: string[]
}

export const menu: IMenu[] = [
  {
    label: 'Home',
    url: '/home',
    subMenu: [],
  },
  {
    label: 'About Us',
    url: '/about',
    subMenu: ['Mission', 'Vision', 'Values', 'History'],
  },
  {
    label: 'Vehicles',
    url: '/vehicles',
    subMenu: ['New', 'Pre-Owned', 'Trucks', 'Scooter'],
  },
  {
    label: 'Parts and Accesories',
    url: '/',
    subMenu: ['Parts', 'Tires', 'Accessories'],
  },
  {
    label: 'Services',
    url: '/',
    subMenu: ['Revision', 'Repair', 'Diagnosis', 'Panel Beater and Painting'],
  },
  {
    label: 'Contacts',
    url: '/',
    subMenu: ['Find a Dealer', 'Complains and Suggestions'],
  },
]
