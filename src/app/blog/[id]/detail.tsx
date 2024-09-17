"use client";
export interface IDetailProps {
  data: any;
}
import { Breadcrumb, Tag } from "antd";
import ReactMarkdown from "react-markdown";
import Prism from "prismjs";
import "prismjs/themes/prism.css"; // Hoặc thay đổi theme theo ý thích
import { useEffect } from "react";
import { Blog } from "@/components/home/blog";

export default function Detail({ data }: IDetailProps) {
  useEffect(() => {
    Prism.highlightAll(); // Highlight code sau khi component mount
  }, []);

  return (
    <div>
      <section className="pt-20">
        <Breadcrumb
          className="max-w-[1075px] mx-auto px-4 xl:px-0 mt-5"
          items={[
            {
              title: <a href="/">Home</a>,
            },
            {
              title: <a href="/blog">Blogs</a>,
            },
            {
              title: data.name,
            },
          ]}
        />
        <div
          className="max-w-[1075px] mx-auto px-4 xl:px-0"
          data-aos="flip-down"
          data-aos-delay={300}
        >
          <div className="my-3 md:py-6 flex flex-col gap-5 md:gap-10">
            <h4 className="text-black-800 font-bold leading-snug text-[23px] sm:text-[32px] md:text-[44px] max-w-[950px]">
              {data.name}
            </h4>
            <div className="flex justify-center">
              <img
                className="rounded-[20px] mb-9 w-[700px]"
                src={data.thumbnail}
                alt="banner"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}
      <section className="bg-white pb-[120px] mt-[-280px] pt-[280px]">
        <div className="max-w-[1075px] mx-auto px-4 xl:px-0">
          <div className="grid grid-cols-1 mb-12">
            <ul className="flex flex-wrap gap-x-[80px] gap-y-6 pb-8 border-b border-black-800 border-opacity-10">
              <li className="flex flex-wrap gap-3">
                <img
                  src="/assets/images/ava.jpg"
                  alt=""
                  className="w-10 h-10"
                />
                <div className="flex-1 flex flex-col gap-3">
                  <span className="text-black-text-800 text-sm font-normal font-Inter leading-tight">
                    Written by
                  </span>
                  <h2 className="text-black-800 text-[15px] font-bold font-sans leading-none">
                    Mika Vu
                  </h2>
                </div>
              </li>
              <li className="flex flex-col gap-3">
                <span className="text-black-text-800 text-sm font-normal font-Inter leading-tight">
                  Category
                </span>
                <div className="">
                  {data?.category?.map((category: string) => (
                    <Tag
                      color="orange"
                      key={category}
                      className="text-black-800 text-xs font-bold font-sans leading-none p-1"
                    >
                      {category}
                    </Tag>
                  ))}
                </div>
              </li>
              <li className="flex flex-col gap-3">
                <span className="text-black-text-800 text-sm font-normal font-Inter leading-tight">
                  Tools
                </span>
                <div className="">
                  {data?.tools?.map((tool: string) => (
                    <Tag
                      color="blue"
                      key={tool}
                      className="text-black-800 text-xs font-bold font-sans leading-none p-1"
                    >
                      {tool}
                    </Tag>
                  ))}
                </div>
              </li>

              <li className="flex flex-wrap flex-col gap-3">
                <span className="text-black-text-800 text-sm font-normal font-Inter leading-tight">
                  Date
                </span>
                <Tag
                  color="cyan"
                  className="text-black-800 text-[15px] font-bold font-sans leading-none"
                >
                  {data.date}
                </Tag>
              </li>
            </ul>
          </div>
          <div className="container mx-auto">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12" data-aos="fade-up">
                <div className="font-bold text-center leading-none flex flex-wrap flex-col gap-y-2 mb-10">
                  <span className="text-orange text-xl">Markdown Demo</span>
                  <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                    ReactMarkdown Example
                  </h3>
                </div>
                <div className="prose max-w-none"></div>
              </div>
            </div>
          </div>
          {data?.content}
        </div>
      </section>
      <Blog />
    </div>
  );
}
