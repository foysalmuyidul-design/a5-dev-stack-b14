import BannerHero from "../assets/banner-stack.png";

const Banner = () => {
  const commonStyle = "px-3 md:px-10";
  return (
    <div
      className={`${commonStyle} pt-10 pb-5 flex flex-col gap-3 max-md:text-center md:text-left max-md:items-center bg-gray-50`}
    >
      <div className="flex max-md:flex-col gap-1 md:gap-4  items-center">
        <div className="md:flex-1 flex flex-col gap-4">
          <h1 className="text-3xl font-bold md:text-5xl md:font-extrabold">
            Build Your Ideal <br />
            <span className="bg-linear-to-r from-[#fd5525] via-[#AC248E] to-[#8C349C] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="max-w-full max-md:px-15 text-gray-500 text-sm md:text-xl">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="flex w-full lg:w-[80%] gap-5 text-md md:text-xl md:pt-8">
            <button className="flex-1 bg-linear-to-r from-[#f87218]  to-[#ec4a92] text-white  py-2 rounded-lg">
              Explore Technologies
            </button>
            <button className="bg-white flex-1  py-2 rounded-lg border border-gray-300 text-gray-600">
              Learn More
            </button>
          </div>
        </div>
        <div className="md:flex-1 overflow-hidden">
          <img src={BannerHero} alt="" className="-my-15" />
        </div>
      </div>

      <div>
        <h2 className="text-3xl md:text-4xl  font-bold md:pt-10">
          Explore the{" "}
          <span className="bg-linear-to-r from-[#E31E53] via-[#AC248E] to-[#8C349C] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="text-md md:text-lg font-semibold text-gray-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
    </div>
  );
};

export default Banner;
