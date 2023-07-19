import Link from 'next/link';

const Page = ({ params }) => {
  const { locale } = params;

  return (
    <main>
      <h2>Homepage</h2>

      <h4>Current locale: <b>{locale}</b></h4>

      <div>
        {locale === 'en' && <Link href='/en/program/hello/1'>Program</Link>}
        {locale === 'nl' && <Link href='/nl/programma/hallo/1'>Programma</Link>}
      </div>
    </main>
  );
};

export default Page;
