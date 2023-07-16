import styles from './Navbar.module.css';
import { ActiveLink } from './ActiveLink';
import { FC } from 'react';

type menuItem = {
  text: string,
  href: string
};

const menuItems: menuItem[] = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const Navbar: FC = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        {menuItems.map((menuItem, i) => (
          <ActiveLink href={menuItem.href} text={menuItem.text} key={i} />
        ))}
      </ul>
    </nav>
  );
};