"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import Image from "next/image";
export interface IAppProps {
  dataProject: any[];
}

export function ListProject({ dataProject }: IAppProps) {
  return (
    <Swiper spaceBetween={50} slidesPerView={3}>
      {dataProject.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="" data-aos="fade-up" data-aos-delay={300}>
            <div className="rounded-[20px] overflow-hidden mb-6">
              <Image width={400} height={400} src={item.img} alt="project1" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <p className="text-xs text-black-text-800 uppercase font-medium font-Inter leading-none py-[6px] px-4 rounded-[40px] border border-black-text-400 transition-all hover:bg-active hover:border-active hover:text-white">
                  APP DEVELOPMENT
                </p>
              </div>
              <div className="flex items-center justify-between text-black-800 hover:text-orange group">
                <h4 className="font-bold leading-10 text-[20px] lg:text-[24px] xl:text-[32px] capitalize">
                  <Link
                    className="transition-all"
                    href={`/projects/${item.id}`}
                  >
                    {item.title}
                  </Link>
                </h4>
                <Link
                  className="group-hover:animate-arrow-move-up"
                  href={`/projects/${item.id}`}
                >
                  <svg
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M30.8839 9.11612C31.372 9.60427 31.372 10.3957 30.8839 10.8839L10.8839 30.8839C10.3957 31.372 9.60427 31.372 9.11612 30.8839C8.62796 30.3957 8.62796 29.6043 9.11612 29.1161L29.1161 9.11612C29.6043 8.62796 30.3957 8.62796 30.8839 9.11612Z"
                      fill="currentColor"
                      fillOpacity="0.9"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.5 10C12.5 9.30964 13.0596 8.75 13.75 8.75H30C30.6904 8.75 31.25 9.30964 31.25 10V26.25C31.25 26.9404 30.6904 27.5 30 27.5C29.3096 27.5 28.75 26.9404 28.75 26.25V11.25H13.75C13.0596 11.25 12.5 10.6904 12.5 10Z"
                      fill="currentColor"
                      fillOpacity="0.9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
