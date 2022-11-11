import Link from "next/link";
import Image from "next/image";

export default function Header() {
  function hamClick() {
    const hamburger = document.querySelector("#hamburger");

    hamburger.classList.toggle("hamburger-active");
  }

  function navClick() {
    const nav = document.querySelector("#nav-menu");

    nav.classList.toggle("hidden");
  }
  return (
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4 ml-10">
            <Link href={"/"} className="block py-6">
              <Image
                src={"/asuransi_kesehatan.png"}
                alt="logo website"
                width={70}
                height={70}
              ></Image>
            </Link>
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className="block absolute right-4 lg:hidden md:hidden"
              onClick={hamClick}
            >
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
            </button>
            <nav
              id="nav-menu"
              className="hidden nav-fixed absolute py-5 max-w-[250px] w-full right-0 top-full lg:static lg:bg-transparent lg:max-w-full md:block md:static md:max-w-full md:bg-transparent"
              onClick={navClick}
            >
              <ul className="block lg:flex lg:shadow-none lg:rounded-none md:flex md:shadow-none md:rounded-none">
                <li className="group">
                  <Link
                    href={"/"}
                    className="text-base text-black
								py-2 mx-8 flex group-hover:text-blue-500"
                  >
                    Home
                  </Link>
                </li>
                <li className="group">
                  <Link
                    href={"/about"}
                    className="text-base text-black
								py-2 mx-8 flex group-hover:text-blue-500"
                  >
                    About
                  </Link>
                </li>
                <li className="group">
                  <Link
                    href={"/produk"}
                    className="text-base text-black
								py-2 mx-8 flex group-hover:text-blue-500"
                  >
                    Produk
                  </Link>
                </li>
                <li className="group">
                  <Link
                    href={"/contact"}
                    className="text-base text-black
								py-2 mx-8 flex group-hover:text-blue-500"
                  >
                    Contact
                  </Link>
                </li>
                <li className="group">
                  <button className="bg-blue-500 rounded-md bg-gradient-to-tr hover:from-blue-500 hover:to-green-400 hover:scale-110 transition duration-300 ease-in-out">
                    <Link
                      href={"/masuk"}
                      className="text-base text-white
								py-2 mx-8 flex group-hover:text-black"
                    >
                      Masuk
                    </Link>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
