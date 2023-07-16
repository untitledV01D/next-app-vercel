import Image from 'next/image';
import Link from 'next/link';
import { MainLayout } from '../components/Layouts/MainLayout';

export default function Home() {
  return (
    <>
      <MainLayout>
        <div className={'center'}>
          <Image
            className={'logo'}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className={'grid'}>

          <Link
            href="/about"
            className={'card'}
            rel="noopener noreferrer"
          >
            <h2>
              💥💥💥💥 <span>⚽</span>
            </h2>
            <p>
              Hola hola hola hola hola holaaaaaaaaaaa
            </p>
          </Link>

        </div>
      </MainLayout>
    </>
  );
};
