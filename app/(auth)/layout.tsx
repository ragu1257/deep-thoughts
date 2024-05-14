
import {Metadata} from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Deep Thoughts',
  description: 'Express your thoughts and feelings with Deep Thoughts',
};

export default function RootLayout({children}: {readonly children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark-1`}>
        {children}
      </body>
    </html>
  );
}