import Image from "next/image";
import React from "react";
import bgHero from "@/assets/background/hero.svg";
import Button from "@/components/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="hidden md:block container relative mb-20 w-full ">
      <div className="gap-2 lg:gap-5 flex flex-col absolute md:w-[100vw] lg:w-[40vw] ">
        <h1 className="text-white text-2xl xl:text-4xl ">
          Connecting Everyday
          <span className="text-light-blue-text"> Investors</span>
          <br /> to{""}
          <span className="text-light-blue-text"> Stock Market</span>{" "}
          Opportunities
        </h1>
        <p className="text-white text-xs lg:text-base md:w-[30vw] lg:w-[35vw] xl:w-[30vw]">
          We simplify stock trading with tailored insights and tools, making it
          easy for anyone to grow their portfolio confidently.
        </p>
      </div>
      <Image src={bgHero} alt="bg-hero" className="" />
      <Link href={"/dashboard"}>
        <Button
          rounded="4xl"
          className="absolute right-8 bottom-0 lg:py-4 lg:px-16 xl:py-7 2xl:px-20"
        >
          <span
            className="text-base lg:text-xl xl:text-3xl 2xl:text-4xl
"
          >
            Get Started
          </span>
        </Button>
      </Link>
    </section>
  );
};

export default Hero;
