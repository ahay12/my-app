import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";
import NavItems from "../NavItems";

export default function Header() {
  function hamClick() {
    const hamburger = document.querySelector("#hamburger");
    hamburger.classList.toggle("hamburger-active");
  }

  function navClick() {
    const nav = document.querySelector("#nav-menu");
    nav.classList.toggle("hidden");
  }
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
        className={`bg-transparent absolute top-0 left-0 w-full h-24 flex items-center z-10 ${
          scroll ? "navbar-fixed" : ""
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <Link href={"/"} className="block py-6">
                <Image
                  src={"/asuransi_1.png"}
                  alt="logo website"
                  width={100}
                  height={100}
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
                className="hidden absolute py-5 max-w-[250px] w-full right-0 top-full lg:static lg:bg-transparent lg:max-w-full md:block md:static md:max-w-full md:bg-transparent"
                onClick={navClick}
              >
                <ul className="block font-semibold lg:flex lg:shadow-none lg:rounded-none md:flex md:shadow-none md:rounded-none">
                  <li className="group">
                    <NavItems
                      linkPage={"/"}
                      textLink="Home"
                      style={"border-b-4 border-orange-400"}
                    />
                  </li>
                  <li className="group">
                    <NavItems linkPage={"/#produk"} textLink="Produk" />
                  </li>
                  <li className="group">
                    <NavItems
                      linkPage={"/#tentang-kami"}
                      textLink="Tentang Kami"
                    />
                  </li>
                  <li className="group">
                    <NavItems linkPage={"/profile"} textLink="Profile" />
                  </li>
                  <li className="group">
                    <button className="bg-orange-400 rounded-md bg-gradient-to-tr hover:scale-110 transition duration-300 ease-in-out delay-150">
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
