import Image from 'next/image';
import { MainLayout } from '../../components/Layouts/MainLayout';

export default function Pricing() {
  return (
    <>
      <MainLayout>
        <h3>Pricing</h3>
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
      </MainLayout>
    </>
  );
};