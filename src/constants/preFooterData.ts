import { Car, Coins, Gear, Plus, User } from '@/components/icons/Icons'

interface items {
  link: string
  label: string
  icon: any
}

export const links: items[] = [
  {
    link: '/peacesform',
    label: 'Get a Quote',
    icon: Coins,
  },
  {
    link: '/testdriveform',
    label: 'Book a Test-Drive',
    icon: Car,
  },
  {
    link: '/serviceform',
    label: 'Book a Service',
    icon: Gear,
  },
  {
    link: '/requests/',
    label: 'Learn More',
    icon: Plus,
  },
  {
    link: '/requests/',
    label: 'Contact Us',
    icon: User,
  },
]
