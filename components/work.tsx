import Animation from './animations/bg_profile';

function Work() {
  return (
    <section id="work" className="text-gray-600 body-font overflow-hidden">
        <div className='absolute mt-6 lg:right-32 lg:mt-16 sm:right-0'>
            <Animation></Animation>
        </div>
        <div className="text-center mt-16 sm:text-3xl sm:mt-16 lg:mt-24 xs:text-xs text-2xl font-medium title-font text-gray-900">
        <h1>My Works</h1>
        </div>
      <div className="container px-5 py-16 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">
                BUMIT
              </span>
              <span className="mt-1 text-gray-500 text-sm">2021 - Present</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
              Bangkok University Multimedia Intelligence Technology,Pathumthani
              </h2>
              <p className="leading-relaxed">
              My duties are Front-end development and Mobile application
                development. Made two projects which are the Mobile application
                of the Smart School Bus platform that uses Dart and Flutter and
                the Tracking visualization that uses HTML, CSS, JS, and Mapbox.
              </p>
              
            </div>
          </div>
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">
                FREELANCE
              </span>
              <span className="mt-1 text-gray-500 text-sm">2014 - 2017</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
              Banchangtong Pattaya
              </h2>
              <p className="leading-relaxed">
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

export default Work;
