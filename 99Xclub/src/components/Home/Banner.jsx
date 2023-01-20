import { useEffect, useState } from "react";
import AOS from "aos";
import Button from "../../common/Button";
import bg from "../../assets/images/bg.png";
import bgAfter from "../../assets/images/bg-hero-after.png";

const Banner = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();

}, []);
  const [countdownDate] = useState(new Date("Feb 02, 2023 20:30:00").getTime());
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();
      const distanceToDate = countdownDate - currentTime;
      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);
      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }
      setState({ days: days, hours: hours, minutes, seconds });
    }
  };
  return (
    <section
      style={{
        background: `url(${bg} )`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="relative hero_area" 
    >
      {/* bg bottom */}
      <div
        style={{
          background: `url(${bgAfter})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="absolute bottom-0 left-0 bg__bottom w-full h-[163.46px]"
      ></div>

      {/* shape top*/}
      <div className=" w-[300px] lg:w-[446px]  h-[300px] lg:h-[446px] rounded-[50%] shape__top absolute right-[6%] -top-[7%] opacity-50"></div>
      <div className=" w-[300px] lg:w-[446px]  h-[300px] lg:h-[446px] rounded-[50%] shape__bottom absolute left-[6%] bottom-0 opacity-30"></div>
      <div className="max-w-[1200px] mx-auto py-4 px-4 md:px-0">
        <div className="max-w-[683px] mx-auto  px-4 md:px-0 text-center  py-[70px] lg:pt-[200px] lg:pb-[146px]">
          <div>
            <div>
              <span className="text__style text-[16px] font-medium leading-[25px]" data-aos="fade-up" data-aos-duration="600">
                One Stop Solution for NFTs (Lifetime Pass)!
              </span>
              <h2 className="text-[#E1E2EE] text-[20px] leading-[24px] sm:text-[30px] sm:leading-[33px] md:text-[61px] font-black md:leading-[73.2px] mt-[10px]" data-aos="fade-up" data-aos-duration="700">
                Genesis Edition Digital Membership Pass
              </h2>
              <p className=" text-[#B4B5BD] font-normal text-base leading-[25.6px] mt-[20px] max-w-[497px] mx-auto" data-aos="fade-up" data-aos-duration="800">
                A private group of
                <strong> 3333 dedicated NFT collectors</strong> and artists.
                Membership to the collective and all of the benefits come from
                holding the <strong> 99xClub Membership Pass. </strong>
              </p>
              <Button classNames="py-[20px] px-[24px] mt-[40px]" data-aos="fade-up" data-aos-duration="900">
                Mint your NFT
              </Button>
            </div>
          </div>
          <div className="mt-[63px]">
            <p className="text-[#E1E2EE] text-[25px] leading-[35px] font-medium ">
              99xClub Pass Minting Starts In
            </p>
            <div className="grid grid-flow-col gap-2 sm:gap-5 text-center auto-cols-max justify-center mt-[33px] px-4">
              <div className="flex flex-col pr-[32px] border-r-[1px] border-white border-opacity-40">
                <span className="leading-[60px] text-white font-medium countdown font-mono text-2xl sm:text-5xl">
                  {state.days > 0 ? state.days : "0"}
                </span>
                
                <span className="text-[#B4B5BD] opacity-70 text-base leading-[19px] font-normal">
                  days
                </span>
              </div>
              <div className="flex flex-col pl-[26px] pr-[30px] border-r-[1px] border-white border-opacity-40">
                <span className="leading-[60px] text-white font-medium countdown font-mono text-2xl sm:text-5xl">
                  {state.hours > 0 ? state.hours : "00"}
                </span>
                <span className="text-[#B4B5BD] opacity-70 text-base leading-[19px] font-normal">
                  hours
                </span>
              </div>
              <div className="flex flex-col pl-[26px] pr-[30px] border-r-[1px] border-white border-opacity-40">
                <span className=" text-white font-medium countdown font-mono text-2xl sm:text-5xl">
                {state.minutes > 0 ? state.minutes : "00"}
                </span>
                <span className="text-[#B4B5BD] opacity-70 text-base leading-[19px] font-normal">
                  min
                </span>
              </div>
              <div className="flex flex-col pl-[29px]">
                <span className="leading-[60px] text-white font-medium countdown font-mono text-2xl sm:text-5xl">
                {state.seconds > 0 ? state.seconds : "00"}
                </span>
                <span className="text-[#B4B5BD] opacity-70 text-base leading-[19px] font-normal">
                  sec
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
