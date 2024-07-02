import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import FullLayout from '../../src/layouts/full/FullLayout';

export default function Administrator() {
  const router = useRouter();

  return (
    <div>
      <h1>Protected Page</h1>
      <p>This page can only be accessed by allowed IP addresses.</p>
    </div>
  );
}

Administrator.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};
