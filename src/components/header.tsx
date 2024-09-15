"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  const [isSticky, setIsSticky] = useState(false);
  const header = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 1) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const offcanvasToggle = document.getElementById("offcanvas-toggle");
    const offcanvas = document.getElementById("offcanvas");
    const offcanvasClose = document.getElementById("offcanvas-close");

    const handleToggle = () => {
      offcanvas?.classList.toggle("offcanvas-open");
    };

    offcanvasToggle?.addEventListener("click", handleToggle);
    offcanvasClose?.addEventListener("click", handleToggle);

    return () => {
      offcanvasToggle?.removeEventListener("click", handleToggle);
      offcanvasClose?.removeEventListener("click", handleToggle);
    };
  }, []);
  return (
    <>
      <div
        id="offcanvas"
        className="offcanvas right-0 top-0 bottom-0 z-50 transform translate-x-full fixed h-full w-[350px] md:w-[460px] transition-all ease-in-out duration-300 bg-black-800 pl-8 flex flex-wrap flex-col justify-between"
      >
        <div>
          <div className="flex flex-wrap justify-between items-center border-b border-border-white mb-[80px]">
            <a href="/">
              <img src="/assets/images/logo/logo.png" className="w-40" />
            </a>
            <button
              id="offcanvas-close"
              className="offcanvas-close bg-primary py-7 px-[38px]"
              aria-label="offcanvas"
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.2803 4.71967C19.5732 5.01256 19.5732 5.48744 19.2803 5.78033L5.78033 19.2803C5.48744 19.5732 5.01256 19.5732 4.71967 19.2803C4.42678 18.9874 4.42678 18.5126 4.71967 18.2197L18.2197 4.71967C18.5126 4.42678 18.9874 4.42678 19.2803 4.71967Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.71967 4.71967C5.01256 4.42678 5.48744 4.42678 5.78033 4.71967L19.2803 18.2197C19.5732 18.5126 19.5732 18.9874 19.2803 19.2803C18.9874 19.5732 18.5126 19.5732 18.2197 19.2803L4.71967 5.78033C4.42678 5.48744 4.42678 5.01256 4.71967 4.71967Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <nav className="offcanvas-menu mr-[40px] flex flex-wrap flex-col justify-between">
            <ul>
              <li className="border-b border-border-white py-4 group">
                <a
                  href="/"
                  className="text-white text-xl font-bold  leading-none flex flex-wrap items-center justify-between hover:text-orange transition duration-300"
                >
                  Home
                  <span className="inline-block group-hover:animate-arrow-move-up">
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
                </a>
              </li>

              <li className="border-b border-border-white py-4 group">
                <a
                  href="/projects"
                  className="text-white text-xl font-bold  leading-none flex flex-wrap items-center justify-between hover:text-orange transition duration-300"
                >
                  Project
                  <span className="inline-block group-hover:animate-arrow-move-up">
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
                </a>
              </li>

              <li className="border-b border-border-white py-4 group">
                <a
                  href="/blog"
                  className="text-white text-xl font-bold  leading-none flex flex-wrap items-center justify-between hover:text-orange transition duration-300"
                >
                  Blog
                  <span className="inline-block group-hover:animate-arrow-move-up">
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
                </a>
              </li>

              <li className="border-b border-border-white py-4 group">
                <a
                  href="contact"
                  className="text-white text-xl font-bold  leading-none flex flex-wrap items-center justify-between hover:text-orange transition duration-300"
                >
                  Contact
                  <span className="inline-block group-hover:animate-arrow-move-up">
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
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <header
        className={`xl:pl-12 absolute left-0 top-0 w-full z-10 ${
          isSticky ? "is-sticky" : ""
        }`}
      >
        <div className="flex pl-4 xl:pl-0">
          <div className="flex-1 flex items-center justify-between border-b border-black-800 border-opacity-40 ">
            <a href="/">
              <img
                src="/assets/images/logo/logo.png"
                className="w-48"
                alt="logo"
              />
            </a>
            {/* <a
              href="contact"
              className="flex items-center flex-wrap py-[6px] px-3 text-[15px] font-bold text-active leading-none mr-2 transition-all duration-300 hover:text-orange"
            >
              Let’s Talk
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
            </a> */}
          </div>
          <div
            id="offcanvas-toggle"
            className="flex-none bg-active flex items-center flex-wrap justify-center py-7 px-[38px] cursor-pointer"
          >
            <button>
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x={3} y={8} width={18} height={2} fill="white" />
                <rect x={3} y={14} width={18} height={2} fill="white" />
              </svg>
            </button>
          </div>
          {/* Button End */}
        </div>
      </header>
    </>
  );
}
