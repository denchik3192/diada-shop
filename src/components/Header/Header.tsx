import Link from 'next/link';
import { FC, FunctionComponent } from 'react';
import { menu } from './menu.data';
import NavItem from './NavItem';

export const Header: FC = () => {
  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 py-5 sm:px-6 lg:max-w-7xl">
        <Link href={'/'}>
          <h1 className="text-2xl font-bold text-lime-800">DIADA</h1>
        </Link>

        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {menu.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
