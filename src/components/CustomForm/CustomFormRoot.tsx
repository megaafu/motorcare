import { ReactNode } from 'react'
interface CustomFormProps {
  children: ReactNode
}
const CustomFormRoot = ({ children }: CustomFormProps) => {
  return <div>{children}</div>
}

export default CustomFormRoot
