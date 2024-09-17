"use client";
import { Blog } from "@/components/home/blog";
import { Experience } from "@/components/home/experience";
import { HeroSectionStart } from "@/components/home/hero-section-start";
import { Pricing } from "@/components/home/pricing";
import { RecentWork } from "@/components/home/recent-work";
import { Resume } from "@/components/home/resume";
import { ServiceStart } from "@/components/home/service-start";
import ReactMarkdown from "react-markdown";

const markdown = `
  # Welcome to My Portfolio

  This is a demo of **ReactMarkdown**.

  ## Features

  - Easy to use
  - Supports all standard Markdown syntax
  - Customizable

  ## Code Example

  \`\`\`javascript
  function greet() {
    console.log("Hello, world!");
  }
  \`\`\`

  ![Sample Image](https://via.placeholder.com/150)

  `;
export default function Home() {
  return (
    <>
      <section className="bg-white pt-20 pb-[120px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12" data-aos="fade-up">
              <div className="font-bold text-center leading-none flex flex-wrap flex-col gap-y-2 mb-10">
                <span className="text-orange text-xl">Markdown Demo</span>
                <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                  ReactMarkdown Example
                </h3>
              </div>
              <div className="prose max-w-none">
                <ReactMarkdown>{markdown}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HeroSectionStart />
      <ServiceStart />
      <Experience />
      <Resume />
      <RecentWork />
      {/* <Testimonial /> */}
      <Blog />
      <Pricing />
    </>
  );
}
