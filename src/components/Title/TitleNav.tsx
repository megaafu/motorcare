import { ReactNode } from 'react'

interface TitleNavProps {
  children?: ReactNode
}
const TitleNav = ({ children }: TitleNavProps) => {
  return (
    <div className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto">
      <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0">
        {children}
      </ul>
    </div>
  )
}

export default TitleNav
