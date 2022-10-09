import Image from "next/image";

function Experience() {
  return (
    <section id="Experience" className="text-gray-600 body-font">
      <div className="container px-5 lg:mt-16 sm:py-0 mx-auto">
        <div className="flex flex-wrap w-full mb-10">
          <div className="w-screen sm:mb-0 lg:mb-0 text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-0 text-gray-900">
              My Experience
            </h1>
              <div className="h-1 w-48 bg-[#698BFC] rounded invisible"></div>
          </div>
        </div>

        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6 hover:scale-150 md:hover:scale-125 ease-in duration-500"
                src="/ieee.jpg"
                alt="content"
                width={720}
                height={400}
              ></Image>
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                IEEE Lifetech 2022
              </h2>
              <p className="leading-relaxed text-sm">
                Presented at the IEEE Lifetech 2022 online conference about the
                paper School Bus Platform for Integrating in a School Van to
                Avoid Trapped Kindergarten Students.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6 hover:scale-150 md:hover:scale-125 ease-in duration-500"
                src="/ryukoku.jpg"
                alt="content"
                width={720}
                height={400}
              ></Image>
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Event with Ryukoku
              </h2>
              <p className="leading-relaxed text-sm">
                Presented at the online meeting with Ryukoku University about
                university life that we shared between Bangkok University and
                Ryukoku University.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6 hover:scale-150 md:hover:scale-125 ease-in duration-500"
                src="/paper.png"
                alt="content"
                width={720}
                height={400}
              ></Image>
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Paper submitted to IEEE
              </h2>
              <p className="leading-relaxed text-sm">
                Author of the Smart School Bus Platform paper. The paper was
                submitted to the IEEE. You can read this paper if you are a
                member of the IEEE.
              </p>

              <div className="flex items-end flex-wrap ">
                <a
                  href="https://ieeexplore.ieee.org/document/9754958"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                >
                  IEEE document
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6 hover:scale-150 md:hover:scale-125 ease-in duration-500"
                src="/ambas.jpg"
                alt="content"
                width={720}
                height={400}
              ></Image>
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Presented to Ambassade de France en Thaïlande
              </h2>
              <p className="leading-relaxed text-sm">
                Presented at the BU-MIT lab about the Smart School Bus Platform
                to Ambassade de France en Thaïlande.
              </p>

              <div className="flex items-end flex-wrap ">
                <a
                  href="https://www.facebook.com/BUITInnovation/posts/pfbid021MsMD5yrCy7qG5Lm3z5tobgGn6giRXjmfUZnBunqaXPmKTbBjWt4hsqhh6BiP87Nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                >
                  Post
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ------------- Below ------------- */}
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6 hover:scale-150 md:hover:scale-125 ease-in duration-500"
                src="/mobileapp2.png"
                alt="content"
                width={720}
                height={400}
              ></Image>
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Smart School Bus application
              </h2>
              <p className="leading-relaxed text-sm">
                Smart School Bus Application used dart and flutter to develop
                and it has 2 version which are REST-API and Firebase.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6 hover:scale-150 md:hover:scale-125 ease-in duration-500"
                src="/smsc.png"
                alt="content"
                width={720}
                height={400}
              ></Image>
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Designed Smart School Bus Platform
              </h2>
              <p className="leading-relaxed text-sm">
                Designed the architecture of the Smart School Bus Platform which
                are the front-end, back-end, database, and raspberry pi that
                include AI and BLE.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6 hover:scale-150 md:hover:scale-125 ease-in duration-500"
                src="/tracking.png"
                alt="content"
                width={720}
                height={400}
              ></Image>
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Tracking Visualization
              </h2>
              <p className="leading-relaxed text-sm">
                Made a project about tracking visualization a point of heatmap
                about the number of workers. The data is got from API. This
                project uses HTML, CSS, JS, and Mapbox.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6 hover:scale-150 md:hover:scale-125 ease-in duration-500"
                src="/facebookpages.png"
                alt="content"
                width={720}
                height={400}
              ></Image>
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4 ">
                Photography, Content Creator, Facebook Advertiser
              </h2>
              <p className="leading-relaxed text-sm">
                I used to work at Banchangtong Pattaya and Freelance from
                2014-2017. My duties are Photographer, Content Creator, and
                Advertiser.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
