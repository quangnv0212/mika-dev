import { SocialNetWork } from "./social-network";

export function Footer() {
  return (
    <footer className="footer bg-black-800 pt-[80px] lg:pt-[100px] xl:pt-[120px] pb-[60px]">
      <div className="container">
        <div className="overflow-x-hidden" data-aos="flip-down">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            <div className="pt-12">
              <h3 className="text-white  font-bold text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                <span className="relative z-[1] before:rounded-full before:bg-primary before:block before:absolute before:top-[8px] before:left-[0] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[60px] before:h-[36px] lg:before:h-[48px] xl:before:h-[60px]">
                  Let’s work together
                </span>
              </h3>
              <div className="flex md:flex-wrap items-center mt-10">
                <span className="text-xl font-bold  text-white">
                  Based in Hanoi 🇻🇳
                </span>
                <div className="ml-5 md:ml-[5px] lg:ml-0 xl:ml-[16px] 2xl:ml-5">
                  <SocialNetWork />
                </div>
              </div>
            </div>
            <div className="py-9 px-7 border-border-white border rounded-2xl flex flex-col justify-between group">
              <h3 className="md:text-xl font-bold  text-white">
                Looking for a software developer
              </h3>
              <div className="flex justify-between items-center">
                <p className="md:text-2xl font-bold  leading-none text-orange ">
                  quangnv.0212@gmail.com
                </p>
                <a
                  href="#"
                  className="text-white group-hover:animate-arrow-move-up group-hover:text-orange"
                >
                  <svg
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.6667 28.3334L28.3334 11.6667"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.6667 11.6667H28.3334V28.3334"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="py-9 px-7 border-border-white border rounded-2xl flex flex-col justify-between group">
              <h3 className="md:text-xl font-bold  text-white">
                Want a more in-depth look at my history?
              </h3>
              <div className="flex justify-between items-center">
                <p className="md:text-2xl font-bold  leading-none text-orange">
                  +84 942 361 202
                </p>
                <a
                  href="#"
                  className="text-white group-hover:animate-arrow-move-up group-hover:text-orange"
                >
                  <svg
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.6667 28.3334L28.3334 11.6667"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.6667 11.6667H28.3334V28.3334"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="py-[72px]"></div>
          </div>
          <div className="border-t border-border-white pt-6 ">
            <div className="grid grid-cols-12">
              <div className="col-span-12 sm:col-span-8 order-last sm:order-first">
                <p className="text-white text-lg font-normal font-sans leading-7">
                  ©2024 Mika Vu, All Rights Reserved
                </p>
              </div>
              <div className="col-span-12 sm:col-span-4 order-first sm:order-last">
                <div className="flex justify-end mb-2 sm:mb-0">
                  <a
                    id="scrollUp"
                    className="flex flex-wrap items-center gap-2 group"
                    href="#"
                    aria-label="scroll up"
                  >
                    <span className="text-white text-lg font-normal font-sans leading-7 transition-all group-hover:text-orange">
                      Back to Top
                    </span>
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 19V5"
                        stroke="#FFB646"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19 12L12 5L5 12"
                        stroke="#FFB646"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
