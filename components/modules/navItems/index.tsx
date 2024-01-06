'use client';

import { headerLinks } from '@/constants/header';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavItems = () => {
  const pathName = usePathname();

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row md:items-center md:justify-center">
      {headerLinks.map((link, index) => {
        const isActive = pathName === link.route;
        return (
          <li
            key={index}
            className={`${
              isActive && 'text-primary-500'
            } flex-center whitespace-nowrap hover:underline hover:opacity-50`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};
