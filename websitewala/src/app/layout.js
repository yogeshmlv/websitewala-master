import { Prompt } from "next/font/google";
import Head from "next/head"; // Import Head from next/head
import "./globals.css";
import Navbar from "@/component/navbar/Navbar";
import Footer from "@/component/footer/Footer";
import { metadata} from "./contact/metadata"; // Import metadata from ContactPage

const prompt = Prompt({ weight: '200', subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={prompt.className}>
        <div className="container">
          <Navbar />
          {children}
        </div>
         <div>
           <Footer />
          </div>
      </body>
    </html>
  );
}
