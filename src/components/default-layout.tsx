"use client";

import { useEffect } from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import AOS from "aos";
import "aos/dist/aos.css";
export interface IDefaultLayoutProps {
  children: React.ReactNode;
}

export function DefaultLayout({ children }: IDefaultLayoutProps) {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
