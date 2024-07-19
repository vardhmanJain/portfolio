import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "vardhman.dev",
  description: "Portfolio website of Vardhman Jain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="sm:text-[18px] md:text-[22px]  text-[16px]">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
