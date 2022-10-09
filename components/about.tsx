import Image from "next/image";
import * as React from "react";
import Animation from "./animations/bg_profile";
import Space from "./animations/space";
import SpaceTravel from "./animations/space_travel";

function About() {
  return (
    <section id="about" className="text-gray-600">
      <div className="container mx-auto flex lg:px-24 lg:mt-10 lg:py-10 xl:py-28 px-24 sm:px-8 sm:py-16 md:py-12 py-12 md:flex-row flex-col items-center md:justify-between">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 items-center text-center">
          <div className="slide_in_right lg:-mt-0 lg:max-w-lg lg:w-full sm:-mt-16 sm:scale-75 xl:hidden lg:hidden md:hidden sm:visible lg:invisible xl:invisible md:invisible md:w-72 w-5/6">
            <Image
              className="object-cover object-center rounded-full xl:hidden md:hidden sm:hidden"
              alt="hero"
              src="/profile.jpg"
              width={600}
              height={600}
            ></Image>
          </div>
          <div className="absolute top-32 right-3 sm:top-25 sm:right-0 xl:-left-80 xl:top-40 2xl:top-52 md:scale-75 2xl:scale-100 xl:scale-90 scale-50">
            <SpaceTravel />
          </div>
          <div className="absolute bottom-24 -left-56 lg:-left-60 xl:scale-100 sm:top-25 scale-75">
            <Space />
          </div>

          <h1 className="slide_in_left mt-8 xl:mt-0 text-xl title-font sm:text-4xl lg:text-5xl mb-8 font-medium text-gray-900">
            Hello, I&apos;m
            <br />
            Bandit Tirasatian
          </h1>

          <p className="slide_in_left mb-8 text-xs lg:text-base leading-relaxed">
            Actually I am a student in Computer Science at Bangkok University
            <br></br> who would like to do anything about web design, frontend
            development.<br></br> I usually play video games, listen to music
            and coding my mini project.
          </p>

          <div className="flex">
            <a
              href="https://www.facebook.com/messages/t/100008274760107"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="inline-flex transition duration-300 sm:w-36 ease-in-out hover:-translate-y-1 hover:scale-110 text-white h-14 w-36 xl:w-40 bg-[#8873EF] border-0 py-4 px-6 focus:outline-none hover:bg-[#7361C9] rounded-2xl text-sm xl:text-base font-medium">
                <p className="mt-1 xl:mt-0 xl:ml-1">Let&apos;s Talk</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="ml-4 mt-0 w-5 h-5 sm:ml-2 lg:ml-4 xl:ml-5 -rotate-45 rounded"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </button>
            </a>

            <a
              download
              href="/files/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="ml-4 inline-flex transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 md:w-auto lg:w-auto h-14 py-3 px-6 focus:outline-none hover:bg-gray-200 rounded-2xl text-sm 2xl:text-base xl:text-base">
                <p className="lg:mr-4 md:mr-4 font-medium my-1 xl:my-1">Resume</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 ml-4 lg:ml-1  my-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </button>
            </a>

            
          </div>
          <div className="mt-12 flex sm:mt-24">
          <p className="hidden sm:block font-medium my-4 mr-8 sm:w-28">Check out my</p>
          
          <a
            href="https://www.linkedin.com/in/bandittira/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 w-15 h-14 bg-gray-100 rounded-full hover:bg-gray-200"
          >
            <button>
              <svg className="w-7 mx-4 mt-3" viewBox="0 0 512 512">
                <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z" />
              </svg>
            </button>
          </a>

          <a
            href="https://github.com/bandittira"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 w-15 h-15 ml-5 bg-gray-100 rounded-full hover:bg-gray-200"
          >
            <button>
              <svg className="w-7 mx-4 mt-3" viewBox="0 0 512 512">
                <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z" />
              </svg>
            </button>
          </a>

          <a
            href="https://www.instagram.com/120697_/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 w-15 h-15 ml-5 bg-gray-100 rounded-full hover:bg-gray-200"
          >
            <button>
              <svg className="w-7 mx-4 mt-3" viewBox="0 0 512 512">
                <path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z" />
                <path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z" />
                <circle cx="351.5" cy="160.5" r="21.5" />
              </svg>
            </button>
          </a>
        </div>
        </div>

        <div>
          <div className="slide_in_right hidden md:block">
          <div className="absolute top-40 right-20 sm:top-25 sm:right-0">
              <Animation />
            </div>
            <div className="lg:max-w-lg sm:-mt-16 lg:w-full invisible lg:visible md:visible xl:visible sm:invisible md:w-72 md:-mt-36">
              <Image
                className="object-cover object-center rounded-3xl"
                alt="hero"
                src="/profile.jpg"
                width={600}
                height={600}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
