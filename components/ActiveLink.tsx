import { CSSProperties, FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const style: CSSProperties = {
  color: '#ff8000',
  textDecoration: 'underline',
};

interface ActiveLinkProps {
  href: string;
  text: string;
};

export const ActiveLink: FC<ActiveLinkProps> = ({ href, text }) => {
  const { asPath } = useRouter();

  return (
    <li>
      <Link 
        href={href}
        style={(asPath == href) ? style : undefined}
      >
        { text }
      </Link>
    </li>
  );
};