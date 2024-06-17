import { Prompt } from "next/font/google";
import Head from "next/head";
import Script from 'next/script';
import "./globals.css";
import Navbar from "@/component/navbar/Navbar";
import Footer from "@/component/footer/Footer";
import { metadata } from "./contact/metadata";

const prompt = Prompt({ weight: '200', subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(', ')} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/favicon.ico" />
      </Head>
      <body className={prompt.className}>
        <div className="container">
          <Navbar />
          {children}
        </div>
        <Footer />

        {/* Add the Tawk.to script here */}
        <Script id="tawk.to-widget" strategy="afterInteractive">
          {`
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            (function() {
              var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = 'https://embed.tawk.to/666538bd9a809f19fb3baf6d/1hvtmb9sj';
              s1.charset = 'UTF-8';
              s1.setAttribute('crossorigin', '*');
              s0.parentNode.insertBefore(s1, s0);
            })();
          `}
        </Script>

         {/* Microsoft Clarity script */}
         <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "mt5d1bed0u");
          `}
        </Script>

        {/* Google Analytics script */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XF7D78DBYL" strategy="afterInteractive" async />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XF7D78DBYL');
          `}
        </Script>

      </body>
    </html>
  );
}
