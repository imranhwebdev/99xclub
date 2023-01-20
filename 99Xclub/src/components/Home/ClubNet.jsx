import React, {useEffect} from "react";
import img from "../../assets/images/99xnft.png";
import bg3 from "../../assets/images/bg3.png";
import AOS from "aos";
const ClubNet = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();

}, []);
  return (
    <section className="club__net__bg  relative">
      <div
        className="club_net_shap absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url(${bg3})`,
          backgroundRepeat: "no-repeat",
          //   backgroundSize: "cover",
          backgroundPosition: "left center",
        }}
      ></div>
      <div className="max-w-[1187px] mx-auto px-4 flex justify-center items-center ">
        <div className="grid grid-cols-9 justify-center items-center">
          <div className="col-span-9 lg:col-span-4  ">
            <div className="w-full md:mt-[-16%] lg:-mt-[40%] z-20 relative" data-aos="fade-left" data-aos-duration="800">
              <img src={img} alt="" className="club_net_img" />
            </div>
          </div>
          <div className="col-span-9 lg:col-span-5 sm:mt-0 club_net_content" data-aos="fade-right" data-aos-duration="1000">
            <p className="text-[#E1E2EE] text-[24px] leading-[33px] md:text-[31px] md:leading-[44px] font-bold p-2">
              Owning one of these limited digital collectibles, and the image it
              represents, says to the world who you are, what you’re all about,
              and what community you’re proud to be a part of.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubNet;
