"use state";

import { useState } from "react";
import { FaCss3Alt, FaHtml5, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill, RiReactjsLine } from "react-icons/ri";
import { SiSolidity, SiTypescript } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export interface IIntroProps {}

export function Resume(props: IIntroProps) {
  const [activeTab, setActiveTab] = useState("About Me");
  const skills = [
    {
      title: "HTML5",
      icon: (
        <FaHtml5
          style={{
            width: "50px",
            height: "50px",
          }}
        />
      ),
    },
    {
      title: "CSS3",
      icon: (
        <FaCss3Alt
          style={{
            width: "50px",
            height: "50px",
          }}
        />
      ),
    },

    {
      title: "Javascript",
      icon: (
        <IoLogoJavascript
          style={{
            width: "50px",
            height: "50px",
          }}
        />
      ),
    },
    {
      title: "NodeJS",
      icon: (
        <FaNodeJs
          style={{
            width: "50px",
            height: "50px",
          }}
        />
      ),
    },
    {
      title: "ReactJS",
      icon: (
        <RiReactjsLine
          style={{
            width: "50px",
            height: "50px",
          }}
        />
      ),
    },
    {
      title: "NextJS",
      icon: (
        <RiNextjsFill
          style={{
            width: "50px",
            height: "50px",
          }}
        />
      ),
    },
    {
      title: "TypeScript",
      icon: (
        <SiTypescript
          style={{
            width: "50px",
            height: "50px",
          }}
        />
      ),
    },
    {
      title: "Solidity",
      icon: (
        <SiSolidity
          style={{
            width: "50px",
            height: "50px",
          }}
        />
      ),
    },
    {
      title: "React Native",
      icon: (
        <TbBrandReactNative
          style={{
            width: "50px",
            height: "50px",
          }}
        />
      ),
    },
  ];
  const info = [
    {
      title: "Name",
      content: "Mika Vu",
    },
    {
      title: "National",
      content: "Vietnam",
    },
    {
      title: "Phone",
      content: "+84 942361202",
    },
    {
      title: "Email",
      content: "quangnv.0212@gmail.com",
    },
    {
      title: "Experience",
      content: "2+ year",
    },
    {
      title: "Freelance",
      content: "Available",
    },
    {
      title: "Language",
      content: "Vietnamese, English",
    },
  ];
  const experience = [
    {
      title: "Web Developer",
      company: "Nodemy Vietnam",
      time: "2022 - 2023",
    },
    {
      title: "Software Developer",
      company: "Nobisoft Vietnam",
      time: "2023 - present",
    },
  ];
  const education = [
    {
      major: "Business Administration",
      time: "08/2019 – 2023",
      school: "Foreign Trade University",
    },
    {
      major: "Information Technology",
      time: "08/2022 – present",
      school: "Posts and Telecommunications Institute of Technology",
    },
  ];
  const data = [
    {
      title: "About Me",
      content: (
        <div className="grid grid-cols-1">
          <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold  mb-6">
            Based in Hanoi 🇻🇳
          </h4>
          <p className="paragraph mb-7">
            Mika Vu, Software Developer, based in Hanoi. That is where I come
            in.
          </p>
          <ul className="flex-col gap-3 inline-flex">
            {info.map((item, index) => {
              return (
                <li key={index} className="gap-10 inline-flex items-center">
                  <span className="w-[110px] text-black-text-800 text-lg  font-normal leading-none">
                    {item.title}
                  </span>
                  <span className="text-black-800 md:text-2xl text-sm font-bold leading-8">
                    {item.content}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      ),
    },
    {
      title: "Experience",
      content: (
        <div className="">
          <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold  mb-6">
            Experience
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
            {experience.map((item, index) => {
              return (
                <div
                  key={index}
                  className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap flex-col gap-8 justify-between"
                >
                  <span className="text-sm font-normal font-Inter leading-tight text-black-text-800">
                    {item.time}
                  </span>
                  <div>
                    <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                      {item.company}
                    </p>
                    <h4 className="font-bold  leading-normal text-2xl text-black-800">
                      {item.title}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ),
    },
    {
      title: "Education",
      content: (
        <div>
          <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold  mb-6">
            Education
          </h4>
          <div className="grid grid-cols-1 gap-6">
            {education.map((item, index) => {
              return (
                <div
                  key={index}
                  className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-[30px] md:gap-[60px] lg:gap-[104px]"
                >
                  <span className="text-sm font-normal font-Inter leading-tight text-black-text-800">
                    {item.time}
                  </span>
                  <div className="flex-1">
                    <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                      {item.school}
                    </p>
                    <h4 className="font-bold  leading-normal text-2xl text-black-800">
                      {item.major}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ),
    },
    {
      title: "Skills",
      content: (
        <div>
          <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold  mb-6">
            Skills
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-5">
            {skills.map((item, index) => {
              return (
                <div
                  key={index}
                  className="pt-[30px] justify-center flex-col px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-center"
                >
                  <div className="">{item.icon}</div>
                  <h4 className="font-bold leading-normal text-xl text-black-800">
                    {item.title}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      ),
    },
  ];

  const activeContent = data.find((item) => {
    return activeTab === item.title;
  });
  return (
    <section className="featured-properties py-[80px] lg:py-[100px]">
      <div className="container">
        <div className="grid grid-cols-12 lg:gap-[60px] xl:gap-[100px] 2xl:gap-[134px]">
          <div
            className="col-span-12 lg:col-span-5 2xl:col-span-4"
            data-aos="fade-up"
          >
            <div className="font-bold  leading-none flex flex-wrap flex-col gap-y-2 mb-4">
              <span className="text-orange text-xl">Resume</span>
              <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px] relative before:rounded-full before:bg-primary before:block before:absolute before:top-[2px] before:left-0 before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">
                All over my details find here...
              </h3>
            </div>
            <div className="tabs flex flex-wrap lg:flex-col gap-2 my-8 lg:my-0">
              {data.map((item, index) => {
                const isActive = activeTab === item.title;
                return (
                  <button
                    key={index}
                    className={`tab-btn justify-between items-center inline-flex group ${
                      isActive ? "active" : ""
                    } `}
                    onClick={() => {
                      setActiveTab(item.title);
                    }}
                  >
                    {item.title}
                    <span className="inline-block ml-3 group-hover:animate-arrow-move-up">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 17L17 7"
                          stroke="currentColor"
                          strokeOpacity="0.9"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7 7H17V17"
                          stroke="currentColor"
                          strokeOpacity="0.9"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
          <div
            className="col-span-12 lg:col-span-7 2xl:col-span-8"
            data-aos="fade-up"
            data-aos-delay={400}
          >
            <div className="tab-content active relative">
              {activeContent?.content}
            </div>

            <span className="flex justify-end mt-14 -mr-3">
              <svg
                width={54}
                height={54}
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.5625 0C27.5625 23.1273 9.1875 28.5455 0 27.8182C16.875 31.0909 25.3125 34.3636 27 54C27 40.3636 34.875 30.5455 54 27.8182C46.125 28.3636 29.8125 24 27.5625 0Z"
                  fill="#FFB646"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
