import { ReactNode } from 'react'

const CardSub = ({ children }: { children: ReactNode }) => {
  return <div className="mt-4 flex  justify-between">{children}</div>
}

export default CardSub
