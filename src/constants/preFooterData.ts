import { Accessorie, Car, Coins, Service, Suggestion } from '@/components/icons/Icons'
import { ElementType } from 'react'

interface items {
  link: string
  label: string
  icon: ElementType
}

export const links: items[] = [
  {
    link: '/brandform',
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
    icon: Service,
  },
  {
    link: '/peaceform',
    label: 'parts_accesories',
    icon: Accessorie,
  },
  {
    link: '/sugestionform',
    label: 'complains',
    icon: Suggestion,
  },
]
