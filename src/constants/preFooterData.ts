import { Car, Coins, Gear, Plus, User } from '@/components/icons/Icons'
import { ElementType } from 'react'

interface items {
  link: string
  label: string
  icon: ElementType
}

export const links: items[] = [
  {
    link: '/peacesform',
    label: 'quote',
    icon: Coins,
  },
  {
    link: '/testdriveform',
    label: 'test_drive',
    icon: Car,
  },
  {
    link: '/serviceform',
    label: 'service',
    icon: Gear,
  },
  {
    link: '/requests/',
    label: 'learn_more',
    icon: Plus,
  },
  {
    link: '/requests/',
    label: 'contacts',
    icon: User,
  },
]
