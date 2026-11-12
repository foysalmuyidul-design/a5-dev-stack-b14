import Logo from "../assets/logo-text.png";

const Footer = () => {
  const commonStyle = "px-3 md:px-10";
  return (
    <footer className={`${commonStyle} py-10 flex flex-col gap-3  `}>
      <div className="flex gap-5 justify-between border-b border-gray-200 pb-8">
        <div className="flex flex-3 flex-col gap-3 items-center md:items-start ">
          <img
            src={Logo}
            alt=""
            className="max-h-6 md:max-h-8 object-contain"
          />
          <h3 className="text-sm md:text-md text-gray-400 text-center md:text-left">
            Curated tools, technologies, and resources for developers building
            modern software.
          </h3>
          <div>
            <ul className="flex justify-center items-center gap-3 text-sm md:text-md text-gray-500">
              <li>GitHub</li>
              <li className="md:hidden">•</li>
              <li>Twitter</li>
              <li className="md:hidden">•</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
        <div className="max-md:hidden flex flex-col flex-1">
          <h2 className="text-xl font-semibold mb-5">PRODUCT</h2>
          <ul className="text-md text-gray-400 flex flex-col gap-1">
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
          </ul>
        </div>
        <div className="max-md:hidden flex flex-col flex-1">
          <h2 className="text-xl font-semibold mb-5">COMPANY</h2>
          <ul className="text-md text-gray-400 flex flex-col gap-1">
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="max-md:hidden flex flex-col flex-1">
          <h2 className="text-xl font-semibold mb-5">LEGAL</h2>
          <ul className="text-md text-gray-400 flex flex-col gap-1">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center text-sm md:text-md text-gray-500">
        <h4>© 2026 Dev Stack. All rights reserved.</h4>
        <div>
          <ul className="flex gap-3">
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
