import { Inter } from "next/font/google";
import "./globals.css";
import   NavBar   from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}></body>
      <div className="container ">
        
        <div className="container-navBar">
        <NavBar/>
        </div>

        <div className="content">
          {children}
        </div>

      </div>
    </html>
  );
}