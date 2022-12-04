import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";
import NavItems from "../NavItems";

export default function Header() {
  function hamClick() {
    const hamburger = document.querySelector("#hamburger");
    const nav = document.querySelector("#nav-menu");
    hamburger.classList.toggle("hamburger-active");
    nav.classList.toggle("hidden");
  }

  // function navClick() {}
  const [scroll, setScroll] = React.useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setScroll(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  });
  return (
    <>
      <header
        className={`bg-transparent absolute top-0 left-0 w-full h-24 flex items-center z-30 ${
          scroll ? "navbar-fixed" : ""
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4 md:max-lg:hidden">
              <Link href={"/"} className="block py-6">
                <Image
                  src={"/logo-fix.png"}
                  alt="logo website"
                  width={59}
                  height={50}
                ></Image>
              </Link>
            </div>
            <div className="flex items-center px-4" onClick={hamClick}>
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className="block absolute right-4 lg:hidden md:hidden"
              >
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              </button>
              <nav
                id="nav-menu"
                className="hidden absolute py-5 max-w-[250px] w-full right-0 top-full lg:static lg:bg-transparent lg:max-w-full md:block md:static md:max-w-full md:bg-transparent xs:bg-white xs:rounded-md hp:bg-white hp:rounded-md"
                onClick={hamClick}
              >
                <ul className="block font-semibold lg:flex lg:shadow-none lg:rounded-none md:flex md:shadow-none md:rounded-none">
                  <li className="group">
                    <NavItems
                      linkPage={"/"}
                      textLink="Home"
                      style={"border-b-4 border-orange-400"}
                    />
                  </li>
                  <li className="group text-base text-black py-2 mx-8">
                    <a href="/#produk">Produk</a>
                  </li>
                  <li className="group text-base text-black py-2 mx-8">
                    <a href="/#tentang-kami">Tentang Kami</a>
                  </li>
                  <li className="group">
                    <NavItems linkPage={"/profile"} textLink="Profile" />
                  </li>
                  <li className="group">
                    <button className="bg-orange-400 rounded-md bg-gradient-to-tr hover:scale-110 transition duration-300 ease-in-out delay-150 xs:ml-5 hp:ml-5">
                      <Link
                        href={"/"}
                        className="text-base text-white
                        py-2 mx-8 flex group-hover:text-white"
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
    </>
  );
}
//
