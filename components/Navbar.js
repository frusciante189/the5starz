import Image from "next/image";
import Link from "next/link";
import Logo from "../public/Assets/logo.png";

const Navbar = () => {
  return (
    <nav className="absolute inset-x-0 top-0">
      <div className="flex justify-between items-center lg:px-[70px] sm:px-12 px-2 py-5">
        <Link href="/">
          <Image
            src={Logo}
            alt="the5starz Brand Logo"
            className="object-cover"
            placeholder="blur"
            width={212}
            height={78}
          />
        </Link>
        <div>
          <button className="bg-primaryRed text-white lg:py-3 lg:px-5 sm: py-2 px-3 uppercase text-sm font-semibold">
            Let's Talk
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
