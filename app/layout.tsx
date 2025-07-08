import type { Metadata } from "next";
import "./globals.css";
import {Inter} from 'next/font/google';
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";

const inter = Inter({ subsets: ['latin'] });



export const metadata: Metadata = {
  title: "Samarth Sharma | Full-Stack Developer | React, Next.js, DevOps",
  description:
    "Samarth Sharma is a self-taught full-stack developer skilled in React, Next.js, Node.js, and DevOps. Explore his projects, SaaS tools, and freelance services.",
  keywords: [
    "Samarth Sharma",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Portfolio",
    "JavaScript Developer",
    "Freelance Web Developer India",
    "MERN Stack Developer",
    "DevOps Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer Portfolio",
    "SaaS Developer",
    "Form Builder App",
    "Docker Developer",
    "Software Engineer Portfolio"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas/>
        <Navbar/> 
        {children}
      </body>
    </html>
  );
}
