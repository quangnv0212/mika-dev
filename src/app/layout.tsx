import { DefaultLayout } from "@/components/default-layout";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore from "swiper/core";
import { Autoplay } from "swiper/modules";
SwiperCore.use([Autoplay]);
const inter = Syne({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Mika Vu - Software Developer",
  description:
    "I work with high-performance web applications with clean, maintainable code and intuitive user interfaces. My focus is on web development, problem-solving, and integrating the latest technologies to create scalable, efficient solutions. I am a website beauty maker.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}
