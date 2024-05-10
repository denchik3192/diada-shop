import Link from 'next/link';
import { FunctionComponent } from 'react';

interface HeaderProps {}

export const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <div className="flex items-center px-20 py-5">
      <h1 className="text-lg">DIADA</h1>
      <nav className="z-10 w-full max-w-8xl font-mono text-lg lg:flex justify-end">
        <Link className="pointer-events-none gap-2 lg:pointer-events-auto pr-10" href="/">
          <h2>Главная</h2>
        </Link>
        <Link className="pointer-events-none gap-2 lg:pointer-events-auto pr-10" href="/products">
          <h2>Каталог</h2>
        </Link>
        <Link className="pointer-events-none gap-2 lg:pointer-events-auto pr-10" href="/products">
          <h2>Контакты</h2>
        </Link>
        <Link
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="/products">
          <>+7(999) 895-01-11</>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
