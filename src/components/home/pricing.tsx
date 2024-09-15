export interface IPricingProps {}

export function Pricing(props: IPricingProps) {
  const data = [
    {
      title: "Basic",
      price: "$9/h",
      hours: "20 hrs",
      perWeek: "10 hours per week",
    },
    {
      title: "Premium",
      price: "$12/h",
      hours: "30 hrs",
      perWeek: "15 hours per week",
    },
    {
      title: "Platinum",
      price: "$15/h",
      hours: "20 hrs",
      perWeek: "20 hours per week",
    },
  ];
  return (
    <section className="bg-white pb-[120px]">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="flex flex-col md:flex-row justify-between md:items-end mb-16">
              <div
                className="font-bold  leading-none flex flex-wrap flex-col gap-y-2 max-w-[325px] lg:max-w-[400px] xl:max-w-[527px]"
                data-aos="fade-up"
              >
                <span className="text-orange text-xl">Pricing</span>
                <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                  Stay chill and pick your plan
                </h3>
              </div>
              <div
                className="flex mt-8 md:mt-0"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <a
                  href="contact"
                  className="flex items-center flex-wrap btn-primary group"
                >
                  Contact for Custom Project
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Pricing Item Start */}
          {data.map((item, index) => (
            <div
              key={index}
              className="p-6 lg:p-8 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white group flex flex-wrap flex-col gap-10 lg:gap-12 group"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-normal font-sans leading-none text-black-text-600">
                  {item.title}
                </span>
                <span className="font-bold text-xl  text-orange">
                  {item.price}
                </span>
              </div>
              <div className="flex flex-wrap justify-between items-end">
                <div>
                  <h4 className="font-bold  leading-10 text-[32px] text-black-800 mb-1">
                    {item.hours}
                  </h4>
                  <p className="text-lg font-normal font-sans leading-none text-black-text-600">
                    {item.perWeek}
                  </p>
                </div>
                <a
                  href="#"
                  className="text-black-text-600 group-hover:text-orange group-hover:animate-arrow-move-up"
                >
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="transition-all"
                      d="M7 17L17 7"
                      stroke="currentColor"
                      strokeOpacity="0.6"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      className="transition-all"
                      d="M7 7H17V17"
                      stroke="currentColor"
                      strokeOpacity="0.6"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
