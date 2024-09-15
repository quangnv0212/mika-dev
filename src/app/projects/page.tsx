"use client";
import { projects } from "@/projects";
import { Tag } from "antd";
import { useRouter } from "next/navigation";

export default function Project() {
  const router = useRouter();
  return (
    <section className="bg-white pt-20 pb-[120px]">
      <div className="container mx-auto p-10">
        <div className="grid grid-cols-12 gap-6">
          <div
            className="col-span-12"
            data-aos="flip-down"
            data-aos-delay={400}
          >
            <div className="font-bold text-center leading-none flex flex-wrap flex-col gap-y-2 mb-10">
              <span className="text-orange text-xl">Portfolio</span>
              <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                My recent work
              </h3>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {projects?.map((project, index) => (
            <div
              key={index}
              data-aos="flip-down"
              data-aos-delay={600}
              className="flex flex-col gap-3"
            >
              <div data-aos="flip-down" data-aos-delay={1200}>
                <div
                  onClick={() => router.push(`/projects/${project.slug}`)}
                  className="overflow-hidden relative rounded-[20px] group h-full cursor-pointer"
                >
                  <img
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-125"
                    src={project.thumbnail}
                    alt="project1"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
                  <div className="absolute bottom-[-150px] left-6 right-6 transition-all duration-300 group-hover:bottom-6 flex flex-col justify-between">
                    <div className="flex gap-2 flex-wrap">
                      <Tag color="blue">Country: {project.client}</Tag>
                      <Tag color="gold"> {project.category[0]}</Tag>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <span className="uppercase font-bold text-sm border p-1 bg-orange-400 text-white rounded-lg">
                  {project.position}
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-between hover:text-orange">
                <h4 className="font-bold text-center leading-10 text-[17px] sm:text-[20px] xl:text-[24px] 2xl:text-[28px] capitalize peer">
                  <a
                    className="transition-all"
                    href={`/projects/${project.slug}`}
                  >
                    {project.title}
                  </a>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
