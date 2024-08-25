import Head from 'next/head';
import Header from '../components/Header';
import Socials from '../components/Socials';
import Link from 'next/link';
// import Image from 'next/image';

export default function Home() {
  return (
    <div className='min-h-screen bg-tertiary'>
      <Head>
        <title>Neohex</title>
        <meta name='Binary Bodhi' content='Binary Bodhi' />
        <link rel='icon' href='/public/favicon.ico'/>
      </Head>

      <Header />
      <div className='max-w-xs grid-cols-1 py-4 mx-auto mt-24 space-y-5 border rounded-lg border-borderSecondary md:pt-8 bg-quaternary sm:max-w-md md:max-w-2xl xl:max-w-6xl'>
        <div className='px-5 mb-8 space-y-10 text-lg font-semibold text-center text-textTertiary md:text-xl'>
          <h1 className='text-center'>Hello I am Neohex</h1>
          <h2>Veteran Blockchain Developer | Security Researcher | Philosophical Explorer</h2>
          <h2>Bridging the realms of technology, consciousness, and decentralized innovation</h2>
          <p>
            Currently in Dubai
          </p>
          <p className=''>Specialize in Web3 Development and Analysis</p>
        </div>
        <div>
          <h3 className='text-center text-textTertiary'>Socials</h3>
          <div className='flex items-center justify-center py-2 space-x-3 md:py-5'>
            {Socials.map((social) => (
              <div
                className='pb-3 text-textTertiary hover:text-blue-50'
                key={social.id}
              >
                <Link target={'_blank'} href={social.path} passHref>
                  <div className='text-3xl md:text-4xl'>
                    {social.icon}
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className='flex items-center justify-center pb-8'>
            <Link
              target={'_blank'}
              className=''
              href='https://drive.google.com/file/d/1BkD9QpKlDSUBwDrMy62XGy0xiwbbrQlg/view?usp=sharing'
              passHref >

              <div className='p-2 font-semibold text-center border-2 rounded-lg cursor-pointer text-textTertiary border-borderSecondary bg-secondary hover:text-blue-50' >
                My CV
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
