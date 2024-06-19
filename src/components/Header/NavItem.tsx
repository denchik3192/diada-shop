'use client';
import { FC } from 'react';
import { IMenuItem } from './menu.interface';
import Link from 'next/link';
import cn from 'clsx';
import { usePathname } from 'next/navigation';

interface INavItemProps {
  item: IMenuItem;
}

const NavItem: FC<INavItemProps> = ({ item }) => {
  const pathname = usePathname();
  return (
    <div>
      <Link
        className={cn(
          'text-base font-medium transition duration-100 hover:text-lime-600',
          pathname === item.link ? 'text-lime-600' : 'text-grey-600',
        )}
        href={item.link}>
        {item.name}
      </Link>
    </div>
  );
};

export default NavItem;
