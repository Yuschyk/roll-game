import '../styles/globals.css';
import { Inter } from '@next/font/google';
import type { AppProps } from 'next/app';
import '../app/global.scss';


const inter = Inter();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
