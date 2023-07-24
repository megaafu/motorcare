import { ReactNode } from 'react'
import Divider from '../ui/Divider'
interface TitleRootProps {
  children: ReactNode
}
const TitleRoot = ({ children }: TitleRootProps) => {
  return (
    <div className="mb-8 lg:mb-10">
      <div className="flex flex-wrap items-center justify-between gap-4 my-auto lg:flex-nowrap">
        {children}
      </div>
      <Divider />
    </div>
  )
}

export default TitleRoot
