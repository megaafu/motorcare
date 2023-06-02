
import Link from 'next/link';
import Container from './ui/Container';
import LanguageSwitcher from './ui/LanguageSwitcher';
import MenuHeaderItem from './MenuHeaderItem';
import { menu } from '@/data/menuData';

const Header: React.FC = () => {
  
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
