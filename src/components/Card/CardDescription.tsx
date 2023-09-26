import { ReactNode } from 'react'

const CardDescription = ({ children }: { children: ReactNode }) => {
  return <div className="mt-2 flex  justify-between line-clamp-2">{children}</div>
}

export default CardDescription
