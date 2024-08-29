import { Accessorie, Car, Coins, Service, TradeIn } from '@/components/icons/Icons'
import { ElementType } from 'react'

interface items {
  link: string
  label: string
  icon: ElementType
}

export const links: items[] = [
  {
    link: '/quotesform',
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
    label: 'parts_accessories',
    icon: Accessorie,
  },
  {
    link: '/tradeinform',
    label: 'trade_in',
    icon: TradeIn,
  },
]
