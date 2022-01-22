import Image from "next/image";
import Link from "next/link";
import Logo from "../public/Assets/logo.png";

const Navbar = () => {
  const handleScroll = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="absolute inset-x-0 top-0 z-10">
      <div className="flex justify-between items-center lg:px-[70px] sm:px-12 px-2 py-5">
        <Link href="/">
          <Image
            src={Logo}
            alt="the5starz Brand Logo"
            className="object-cover cursor-pointer"
            width={212}
            height={78}
          />
        </Link>
        <div>
          <button
            className="bg-primaryRed text-white lg:py-3 lg:px-5 sm:py-2 px-3 uppercase text-sm font-semibold"
            onClick={handleScroll}
          >
            Lets Talk
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
