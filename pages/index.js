import AuthenticatedLayout from '../layouts/authenticated-layout';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <AuthenticatedLayout className='container'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      This is the homepage
    </AuthenticatedLayout>
  );
}
