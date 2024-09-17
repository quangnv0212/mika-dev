/* eslint-disable @next/next/no-img-element */
"use client";
import { projects } from "@/projects";
import { useParams } from "next/navigation";
import SwiperCore from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Tag } from "antd";
import Link from "next/link";
import Image from "next/image";
SwiperCore.use([Autoplay]);

export interface IProjectDetailProps {}

export default function ProjectDetail(props: IProjectDetailProps) {
  const { id } = useParams();
  const data = projects.find((item) => item.slug === id[0]);
  if (!data) {
    return <div>Not found</div>;
  }
  return (
    <>
      <section className="bg-secondary pt-40">
        <div
          className="max-w-[1275px] mx-auto px-4 xl:px-0"
          data-aos="flip-down"
          data-aos-delay={300}
        >
          <div className="flex flex-col md:flex-row gap-2 justify-between pb-12 ">
            <div className="mb-10">
              <ul className="flex flex-wrap text-sm font-normal font-Inter leading-tight">
                <li className="relative z-[1] before:rounded-full before:bg-black-800 before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[8px] before:-z-[1] before:w-[6px] before:h-[6px] pl-[20px]">
                  <a className="text-black-text-800" href="#">
                    {data.position}
                  </a>
                </li>
              </ul>
              <h4 className="text-black-800 font-bold  leading-snug text-[32px] lg:text-[44px]">
                {data.title}
              </h4>
            </div>
            <ul className="grid grid-cols-2 gap-3">
              <li className="flex flex-wrap flex-col gap-2 w-3/6 sm:w-1/3">
                <span className="text-black-text-800 text-sm font-normal font-Inter leading-tight">
                  Client
                </span>
                <h2 className="text-black-800 text-[15px] font-bold font-sans leading-none">
                  {data.client}
                </h2>
              </li>
              <li className="flex flex-wrap flex-col gap-2 w-3/6 sm:w-1/3">
                <span className="text-black-text-800 text-sm font-normal font-Inter leading-tight">
                  Category
                </span>
                <h4 className="text-black-800 text-[15px] font-bold font-sans leading-none">
                  {data.category}
                </h4>
              </li>
            </ul>
            <li className="flex md:flex-col gap-2">
              <span className="text-black-text-800 text-sm font-normal font-Inter leading-tight">
                Tools
              </span>
              <div className="text-black-800 gap-2 md:gap-0 flex flex-wrap leading-none">
                {data.tools.map((tool, index) => (
                  <Tag color="geekblue" key={index}>
                    {tool}
                  </Tag>
                ))}
              </div>
            </li>
          </div>
          <div className="grid grid-cols-1 mb-12">
            <img
              className="mx-auto w-[1276px] h-[580px] rounded-[20px] object-cover object-center"
              src={data.hero}
              alt="banner"
            />
          </div>
        </div>
      </section>
      {/* Hero Section End */}
      <section className="bg-white pb-[120px] mt-[-130px] pt-[130px] md:mt-[-280px] md:pt-[280px]">
        <div className="max-w-[1275px] mx-auto px-4 xl:px-0">
          <div
            // data-aos="fade-up"
            data-aos-delay={400}
            className="grid grid-cols-1"
          >
            <h3 className="text-[32px] font-bold leading-10 my-4">Overview</h3>
            <div className="flex flex-col gap-2">
              {data.overview.map((content, index) => (
                <p key={index} className="">
                  {content}
                </p>
              ))}
            </div>
          </div>
          <div data-aos-delay={400} className="grid grid-cols-1 my-4">
            <h3 className="text-[32px] font-bold leading-10 my-4">
              Project Challenge
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 ">
              {data.projectChallenge.map((content, index) => (
                <p key={index} className="">
                  {content}
                </p>
              ))}
            </div>
          </div>
          <div className="mx-auto w-5/6 md:w-full">
            <Swiper
              autoplay={{ delay: 1000 }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                900: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
            >
              {data.imgs.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="" data-aos="fade-up" data-aos-delay={300}>
                    <div className="rounded-[20px] overflow-hidden mb-6">
                      <Image
                        width={400}
                        height={400}
                        src={item}
                        alt="project1"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="" data-aos="fade-up" data-aos-delay={400}>
            <h3 className="text-[32px] font-bold leading-10 mb-4">
              Project Results
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {data.projectResult.map((content, index) => (
                <p key={index} className="">
                  {content}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Project Section Start */}
      <section className="bg-white pb-[120px]">
        <div className="container">
          <div className="col-span-12" data-aos="flip-down">
            <div className="font-bold  text-center leading-none flex flex-wrap flex-col gap-y-2 mb-10">
              <span className="text-orange text-xl">Portfolio</span>
              <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                <span className="relative z-[1] before:rounded-full before:bg-primary before:block before:absolute before:top-[8px] before:left-[32px] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">
                  Related work
                </span>
              </h3>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6" data-aos="flip-down">
            <div className="mx-auto w-5/6 md:w-full">
              <Swiper
                autoplay={{ delay: 1000 }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  900: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
              >
                {projects.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="" data-aos="fade-up" data-aos-delay={300}>
                      <div className="rounded-[20px] overflow-hidden mb-6">
                        <Image
                          width={400}
                          height={400}
                          src={item.thumbnail}
                          alt="project1"
                        />
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
                              href={`/projects/${item.slug}`}
                            >
                              {item.title}
                            </Link>
                          </h4>
                          <Link
                            className="group-hover:animate-arrow-move-up"
                            href={`/projects/${item.slug}`}
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
