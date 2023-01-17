import React, { useEffect, useState, useRef } from "react";
import siteLogo from "../assets/images/99x-logo.png";

const Nav = () => {
  const [setIsOpen] = React.useState(false);
  const [isTrue, setTrue] = React.useState(false);
  const ref = useRef(null);
  let Links = [
    { name: "Membership", link: "/" },
    { name: "Rewards", link: "/" },
    { name: "Affiliates", link: "/" },
    { name: "Services", link: "/" },
    { name: "FAQ", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  useEffect(() => {
    // scrollHandler functionality
    const headerHandler = () => {
      if (window.scrollY >= 98) {
        return setTrue(true);
      } else {
        return setTrue(false);
      }
    };

    window.addEventListener("scroll", headerHandler);
    const handler = (e) => {
      if (ref && ref.current && !ref.current.contains(e.target)) {
        return setIsOpen(false);
      }
    };
    window.addEventListener("mousedown", handler);

    return () => {
      window.removeEventListener("mousedown", handler);
      window.removeEventListener("scroll", headerHandler);
    };
  }, [ref, isTrue]);
  return (
    <div className={`
    ${
      isTrue
        ? "Header_area sticky shadow-lg left-0 top-0 !bg-[#100f11] bg-opacity-75 "
        : "!bg-transparent bg-opacity-0 absolute top-0 left-0 w-full z-50"
    }  z-50 transition ease-in-out delay-150 `} 
    >
      <div className="md:flex items-center justify-between  py-4 md:px-10 px-7 max-w-[1230px] mx-auto">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <a href="/" className="site-logo">
            <img src={siteLogo} alt="" />
          </a>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer lg:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`main_menu lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-12 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="lg:ml-8 text-xl lg:my-0 my-7">
              <a
                href={link.link}
                className="text-gray hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <a href="/" className="for_small_screen boxed_btn">Mint NFT</a>
        </ul>
        <a href="/" className="for_large_screen boxed_btn" >Mint NFT</a>
      </div>
    </div>
  );
};

export default Nav;
