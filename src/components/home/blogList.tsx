import { blogs } from "@/blogs";
import SwiperCore from "swiper/core";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Autoplay]);
export interface IBlogListProps {}

export function BlogList(props: IBlogListProps) {
  return (
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
      {blogs.map((item, index) => (
        <SwiperSlide key={index}>
          <div data-aos="fade-up">
            <div className="rounded-[20px] overflow-hidden mb-6">
              <img className="w-full" src={item.thumbnail} alt="blog image" />
            </div>
            <div className="flex flex-wrap flex-col gap-3">
              <ul className="flex flex-wrap text-sm font-normal font-Inter leading-tight">
                <li className="relative z-[1] before:rounded-full before:bg-black-800 before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[15px] before:-z-[1] before:w-[6px] before:h-[6px] pl-[30px]">
                  <a className="text-black-text-800" href="#">
                    {item.category}
                  </a>
                </li>
                <li className="relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[15px] before:-z-[1] before:w-[6px] before:h-[6px] pl-[30px]">
                  <a className="text-orange" href={`blog/${item.slug}`}>
                    {item.date}
                  </a>
                </li>
              </ul>
              <div className="flex justify-between items-end text-black-800 hover:text-orange group">
                <h4 className="font-bold  transition-all leading-8 text-[18px] md:text-[20px] 2xl:text-[22px]">
                  <a href={`blog/${item.slug}`}>{item.name}</a>
                </h4>
                <a href={`blog/${item.slug}`}>
                  <svg
                    className="group-hover:animate-arrow-move-up"
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
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
