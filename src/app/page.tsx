"use client";
import { Blog } from "@/components/home/blog";
import { Experience } from "@/components/home/experience";
import { HeroSectionStart } from "@/components/home/hero-section-start";
import { Pricing } from "@/components/home/pricing";
import { RecentWork } from "@/components/home/recent-work";
import { Resume } from "@/components/home/resume";
import { ServiceStart } from "@/components/home/service-start";

export default function Home() {
  return (
    <>
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
