import Rocket from "./animations/rocket";
import Read from "./animations/astronaut_read";


function Skill() {
  return (
    <section id="skills" className="text-gray-600 body-font bg-[#FCDA69]">
            <div className="absolute xl:-left-96 xl:right-96 xl:mt-0 xl:scale-100 lg:scale-75 -mt-9 -left-8 sm:invisible lg:visible scale-50">
            <Rocket></Rocket>
          </div>
          <div className="absolute sm:-my-40 lg:-my-32 lg:ml-0 sm:scale-50 mt-2 -right-16 scale-50">
            <Read/>
          </div>

      <div className="container px-5 lg:py-36 sm:mt-24 mt-20 py-10 md:py-4 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            My skills
          </h1>
        </div>

        <div className="flex flex-wrap md:flex-nowrap md:justify-between md:mb-6 mb-0">
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-10 py-6 border-l-2 border-gray-600 border-opacity-40">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Designer
            </h2>

            <ul className="list-disc ml-5 text-gray-700 font-medium">
              <li>Figma</li>
              <li>Photoshop</li>
            </ul>

            <h2 className="text-lg sm:text-xl mt-6 text-gray-900 font-medium title-font mb-2">
              Other skills
            </h2>

            <ul className="list-disc ml-5 text-gray-700 font-medium">
              <li>Photography<p></p></li>
              <li>Content Creator</li>
              <li>Facebook Advertiser</li>
            </ul>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-10 py-6 border-l-2 border-gray-600 border-opacity-40">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Front-end Dev
            </h2>

            <ul className="list-disc ml-5 text-gray-700 font-medium">
              <li>HTML, CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-10 py-6 border-l-2 border-gray-600 border-opacity-40">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Back-end Dev
            </h2>

            <ul className="list-disc ml-5 text-gray-700 font-medium">
              <li>Nodejs / TypeScript<p className="inline-flex text-[#FCDA69]">r</p></li>
              <li>Next.js</li>
              <li>MySQL</li>
              <li>Golang</li>
              <li>Firebase</li>
            </ul>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-10 py-6 border-l-2 border-gray-600 border-opacity-40">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Mobile application Dev
            </h2>

            <li className="text-gray-700 font-medium">Dart / Flutter</li>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
