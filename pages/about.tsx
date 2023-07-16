import Image from 'next/image';
import { MainLayout } from '../components/Layouts/MainLayout';
import { DarkLayout } from '../components/Layouts/DarkLayout';
import { ReactNode } from 'react';

export default function About() {
  return (
    <>
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

      </div>
    </>
  );
};



About.getLayout = (page: ReactNode) => {
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  );
};