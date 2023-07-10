import { ReactNode } from 'react'
import Divider from '../ui/Divider'
interface TitleRootProps {
  children: ReactNode
}
const TitleRoot = ({ children }: TitleRootProps) => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between">
        {children}
      </div>
      <Divider />
    </>
  )
}

export default TitleRoot
