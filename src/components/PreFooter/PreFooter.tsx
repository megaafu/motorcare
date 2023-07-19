import { links } from '@/constants/preFooterData'
import Link from 'next/link'
import Container from '../ui/Container'

const Prefooter = () => {
  return (
    <div className=" w-full bg-primary">
      <Container>
        <ul className=" text-ligth flex flex-col gap-2 py-6 md:text-lg lg:flex-row lg:justify-around lg:text-xl">
          {links.map((link, index) => {
            return (
              <li key={index} className="flex  items-center">
                <Link
                  href={link.link}
                  className="color flex items-center gap-4 text-white transition duration-300 hover:text-secundary"
                >
                  {<link.icon />}
                  <span>{link.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </Container>
    </div>
  )
}

export default Prefooter
