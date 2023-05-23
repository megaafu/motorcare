
import Link from 'next/link';
import Container from './ui/Container';
import LanguageSwitcher from './ui/LanguageSwitcher';
import MenuHeaderItem from './MenuHeaderItem';

interface MenuItem {
  label: string;
  url: string;
  subMenu:string[]
}



const Header: React.FC = () => {
  const menu: MenuItem[] = [
    {
      label: 'Home',
      url: '/home',
      subMenu:['submenu','submenu2']
    },
    {
      label: 'Sobre Nos',
      url: '/',
      subMenu:['submenu','submenu2']
    },
    {
      label: 'Veiculos',
      url: '/veiculos',
      subMenu:['submenu','submenu2']
    },
    {
      label: 'Pecas e Acessorios',
      url: '/',
      subMenu:['submenu','submenu2']
    },
    {
      label: 'Serviços',
      url: '/',
      subMenu:['submenu','submenu2']
    },
    {
      label: 'Contato',
      url: '/',
      subMenu:['submenu','submenu2']
    },
  ];

  return (
    <header className="mt-11 absolute w-full z-50">
      <nav className="bg-white border-gray-200">
        <Container>
          <div className="flex flex-wrap items-center justify-between py-2">
            <Link href="/">
              <div className="flex items-center">
                <img src="/images/logo.svg" alt="MotorCare" />
              </div>
            </Link>
            <div className="flex items-center md:order-2">
              <LanguageSwitcher />
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
              <MenuHeaderItem menu={menu} />
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
