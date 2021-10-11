import type { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';

const Init: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/Main');
  }, []);

  return <div className='root' />
}

export default Init;
