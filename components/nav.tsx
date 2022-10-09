import Image from "next/image";

function Navbar() {
  return (
    <header className="text-gray-600 body-font bg-white">
      <div className="container mt-6 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image
            className=""
            src={"/saturn.png"}
            alt="Bandit Tirasatian Portfolio"
            height={50}
            width={50}
          ></Image>
          <span className="ml-4 text-base">
            Port. <br></br> Bandit
          </span>
        </a>

        <nav className="md:ml-auto md:mr-auto mt-3 flex ml-6 flex-wrap items-center text-base justify-center">
          <a href="#">
          <button className="mr-7 text-base hover:text-[#8873EF] font-medium">
            <p className="transition duration-300 ease-in-out hover:scale-110">About</p>
          </button>
          </a>

          <a href="#Experience">
          <button className="mr-7 text-base hover:text-[#8873EF] font-medium">
          <p className="transition duration-300 ease-in-out hover:scale-110">Experience</p>
          </button>
          </a>

          <a href="#skills">
          <button className="mr-7 text-base hover:text-[#8873EF] font-medium">
          <p className="transition duration-300 ease-in-out hover:scale-110">Skills</p>
          </button>
          </a>

          <a href="#work">
          <button className="mr-7 text-base hover:text-[#8873EF] font-medium">
          <p className="transition duration-300 ease-in-out hover:scale-110">Works</p>
          </button>
          </a>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;
