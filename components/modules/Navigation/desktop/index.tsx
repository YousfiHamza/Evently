import { NavItems } from '../../navItems';

export const DesktopNav = () => {
  return (
    <nav className="md:flex-between hidden w-full max-w-xs">
      <NavItems />
    </nav>
  );
};
