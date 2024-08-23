"use client";

import Nav from "@/app/_components/nav";
import { articles } from "../data";
import React, { useState } from "react";
import GetInTouch from "@/app/_sections/contact-us";
import { useRouter } from "next/navigation";

const angleRight = (
  <svg
    fill=""
    viewBox="-12 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    className="fill-[#A6A6AB] group-hover:fill-[#212529] w-12 h-12 transition-all duration-300"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <title>angle-right</title>{" "}
      <path d="M0.88 23.28c-0.2 0-0.44-0.080-0.6-0.24-0.32-0.32-0.32-0.84 0-1.2l5.76-5.84-5.8-5.84c-0.32-0.32-0.32-0.84 0-1.2 0.32-0.32 0.84-0.32 1.2 0l6.44 6.44c0.16 0.16 0.24 0.36 0.24 0.6s-0.080 0.44-0.24 0.6l-6.4 6.44c-0.2 0.16-0.4 0.24-0.6 0.24z"></path>{" "}
    </g>
  </svg>
);

const angleLeft = (
  <svg
    fill=""
    viewBox="-12 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    className="fill-[#A6A6AB] group-hover:fill-[#212529] w-12 h-12 transition-all duration-300"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <title>angle-left</title>{" "}
      <path d="M7.28 23.28c-0.2 0-0.44-0.080-0.6-0.24l-6.44-6.44c-0.32-0.32-0.32-0.84 0-1.2l6.44-6.44c0.32-0.32 0.84-0.32 1.2 0 0.32 0.32 0.32 0.84 0 1.2l-5.8 5.84 5.84 5.84c0.32 0.32 0.32 0.84 0 1.2-0.16 0.16-0.44 0.24-0.64 0.24z"></path>{" "}
    </g>
  </svg>
);

export default function PortfolioDetails({ params }: any) {
  /*const article = articles.find(
    (a) => a.id === Number.parseInt(params.portfolioId)
  );*/

  const router = useRouter();

  const [currentArticleIndex, setCurrentArticleIndex] = useState(() => {
    const initialIndex = articles.findIndex(
      (a) => a.id === Number.parseInt(params.portfolioId)
    );
    return initialIndex !== -1 ? initialIndex : 0;
  });

  const article = articles[currentArticleIndex];

  const goToNextArticle = () => {
    const nextIndex = (currentArticleIndex + 1) % articles.length;
    setCurrentArticleIndex(nextIndex);
    router.push(`/portfolio/${articles[nextIndex].id}`);
  };

  const goToPreviousArticle = () => {
    const prevIndex =
      (currentArticleIndex - 1 + articles.length) % articles.length;
    setCurrentArticleIndex(prevIndex);
    router.push(`/portfolio/${articles[prevIndex].id}`);
  };

  if (!article) {
    return (
      <>
        <header className="w-full bg-[#F4F4F4] pb-[50px] flex flex-col justify-center">
          <Nav
            color="text-[#212529]"
            background="bg-[#212529]"
            position="relative"
            img="/assets/images/logo2.png"
            border="hover:border-[#212529]"
            hoverbg="hover:bg-white"
            hovertext="hover:text-[#212529]"
          />

          <p className="contianer mt-[375px] text-[64px] text-[#212529] gap-12">
            Article not found
          </p>
        </header>

        <main>
          <p>Blog not found</p>
        </main>
      </>
    );
  }

  return (
    <>
      <header className="w-full bg-[#F4F4F4] pb-[50px] flex flex-col justify-center">
        <Nav
          color="text-[#212529]"
          background="bg-[#212529]"
          position="relative"
          img="/assets/images/logo2.png"
          border="hover:border-[#212529]"
          hoverbg="hover:bg-white"
          hovertext="hover:text-[#212529]"
        />

        <div className="container flex flex-col mt-[375px] w-full">
          <p className="text-lg text-[#A6A6AB] gap-12">Portfolio</p>
          <p className="text-[35px] sm:text-[64px] text-[#212529] max-w-[570px]">
            {article.concept}
          </p>

          <div className="w-full flex items-center justify-between">
            <div onClick={goToPreviousArticle} className="group w-12 h-12">
              {angleLeft}
            </div>
            <div onClick={goToNextArticle} className="group w-12 h-12">
              {angleRight}
            </div>
          </div>
        </div>
      </header>

      <main className="flex flex-col gap-[100px]">
        <section className="container flex flex-col gap-10">
          {article.paragraphs.map((item, index) => (
            <article
              className="container px-0 sm:px-8 text-lg text-[#212529]"
              key={index}
            >
              {item}
            </article>
          ))}
        </section>

        <img
          src={article.imgSrc}
          alt="Concept image"
          className="container w-full h-auto max-h-[500px]"
        />

        <GetInTouch />
      </main>
    </>
  );
}
