import { ReactNode } from 'react'

const CardTitle = ({ children }: { children: ReactNode }) => {
  return <h3 className="text-lg font-bold lg:text-xl">{children}</h3>
}

export default CardTitle
