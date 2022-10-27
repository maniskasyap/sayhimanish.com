import '../styles/global.css';
import Script from 'next/script';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}');
          `,
        }}
      />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
