export interface IIntroProps {}

export function Experience(props: IIntroProps) {
  return (
    <section
      className="about-section pb-[120px]"
      data-aos="zoom-out"
      data-aos-delay={300}
    >
      <div className="">
        <div className="">
          <img
            src="/assets/images/about/about-mobile.png"
            className=" md:hidden"
          />
          <img
            src="/assets/images/about/about.png"
            className="md:w-[700px] w-[1000px] top-0 desktop"
          />
          <div className="font-bold leading-none flex flex-wrap flex-col gap-y-2 md:absolute top-0 md:right-0 md:w-1/2 p-4 md:p-0">
            <span className="text-orange text-xl">Hello I’m</span>
            <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px] relative before:rounded-full before:bg-primary before:block before:absolute before:top-[2px] before:left-0 before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">
              Mika Vu, Software Developer
            </h3>
            <h4 className="text-black-800 text-2xl lg:text-3xl xl:text-[44px] mt-3 mb-4">
              Based in Hanoi 🇻🇳
            </h4>
            <p className="paragraph pr-10">
              I work with high-performance web applications with clean,
              maintainable code and intuitive user interfaces. My focus is on
              web development, problem-solving, and integrating the latest
              technologies to create scalable, efficient solutions. I am a
              website beauty maker.
            </p>
            <ul className="flex flex-wrap gap-9 2xl:gap-[40px] mb-7">
              <li>
                <span className="text-black-800 text-[32px] font-bold  leading-10 relative before:rounded-full before:bg-black-300 before:block before:absolute before:top-[0px] before:left-0 before:right-0 before:-z-[1] before:w-[43px] before:h-[43px]">
                  30+
                </span>
                <p className="paragraph">Available Projects</p>
              </li>
              <li>
                <span className="text-black-800 text-[32px] font-bold  leading-10 relative before:rounded-full before:bg-black-300 before:block before:absolute before:top-[0px] before:left-0 before:right-0 before:-z-[1] before:w-[43px] before:h-[43px]">
                  20+
                </span>
                <p className="paragraph">Worldwide client</p>
              </li>
              <li>
                <span className="text-black-800 text-[32px] font-bold  leading-10 relative before:rounded-full before:bg-black-300 before:block before:absolute before:top-[0px] before:left-0 before:right-0 before:-z-[1] before:w-[43px] before:h-[43px]">
                  20+
                </span>
                <p className="paragraph">Projects done successfully</p>
              </li>
            </ul>
            <div className="flex flex-wrap">
              <a
                href="contact"
                className="flex items-center flex-wrap btn-primary group"
              >
                Download my resume
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
