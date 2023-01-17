import { useEffect } from "react";
import "../style/home.css";
import AOS from "aos";
const Button = ({ children, classNames }) => {  
  useEffect(() => {
  AOS.init();
  AOS.refresh();

}, []);
  return (
    <button
      className={`border-none text-white leading-[19px] inline-block cursor-pointer font-medium text-base  rounded-lg button__style ${classNames}`}
       data-aos="fade-up" data-aos-duration="900">
      {children}
    </button>
  );
};

export default Button;
