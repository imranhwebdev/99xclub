import { useEffect } from "react";
import AOS from "aos";
import ExclusiveAccess from "../../assets/images/Exclusive Access.png";
import ExclusiveRewards from "../../assets/images/Exclusive Rewards.png";
import rocket from "../../assets/images/rocket.png";

const BenefitsOfMinting = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();

}, []);
  return (
    <section className="benefits_of_minting_area pt-[70px] py-[40px] sm:py-[80px] md:pt-[165px] md:pb-[60px] relative" id="services">
      <div className="max-w-[1125px] mx-auto py-4 px-4 md:px-0 ">
        <div>
          <div className=" w-[300px] lg:w-[446px]  h-[300px] lg:h-[446px] rounded-[50%] shape__top absolute right-[2%] top-[8%] opacity-50"></div>
          <div className=" w-[300px] lg:w-[446px]  h-[300px] lg:h-[446px] rounded-[50%] shape__bottom absolute left-[13%] bottom-[14%] opacity-30"></div>
          <div className="max-w-[659px] mx-auto text-center pb-[75px]">
            <p className="text__style font-bold tracking-[0.2em]"  data-aos="fade-up" data-aos-duration="800">
              MEMBERSHIP PASS
            </p>
            <h2 className="text-[#E1E2EE] text-[32px] leading-[35px] md:text-[49px] md:leading-[58.8px] font-bold p-2 "  data-aos="fade-up" data-aos-duration="900">
              Benefits of Minting a 99xclub Membership Pass?
            </h2>
          </div>
          <div className="sm:flex justify-between items-center gap-[75px]">
            <div className="bm_single_service_item mb-20 sm:mb-0 w-full sm:max-w-[525px]" data-aos="fade-up" data-aos-duration="1000">
              <div className="text-center" >
                <div className="top_img">
                  <img className="mx-auto" src={ExclusiveAccess} alt="" />
                </div>
                <div className="bm_content_box">
                  <h3 className="text-[#E1E2EE] text-[24px] leading-[28px] md:text-[32px] md:leading-[44px] font-bold mb-[20px]">
                    Exclusive Access
                  </h3>
                  <p className="text-[#B4B5BD] opacity-80 text-base sm:text-[20px] font-medium sm:leading-[30px]">
                    Launching in January???23, People holding 99xClub Membership
                    Pass Genesis Edition will be able to claim a Mutant WAYC for
                    Free.
                  </p>
                </div>
              </div>
            </div>
            <div className="bm_single_service_item w-full sm:max-w-[525px]" data-aos="fade-up" data-aos-duration="1300">
              <div className="text-center" >
                <div className="top_img">
                  <img className="mx-auto" src={ExclusiveRewards} alt="" />
                </div>
                <div className="bm_content_box">
                  <h3 className="text-[#E1E2EE] text-[24px] leading-[28px] md:text-[32px] md:leading-[44px] font-bold mb-[20px]">
                    Exclusive Rewards
                  </h3>
                  <p className="text-base text-[#B4B5BD] opacity-80 sm:text-[20px] font-medium sm:leading-[30px]">
                    99xclub Membership Pass Genesis Edition holders will receive
                    long term benefits with NFTs Airdrop, rewards, events etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bm_single_service_item max-w-[787px] mx-auto mt-[90px]" data-aos="fade-up" data-aos-duration="1500">
            <div className="text-center">
              <div className="w-[181px] h-[181px] mx-auto">
                <img className="mx-auto" src={rocket} alt="" />
              </div>
              <div className="top_img p-5 -mt-[60px]">
                <h3 className="text-[#E1E2EE] text-[24px] leading-[28px] md:text-[32px] md:leading-[44px] font-bold mb-[20px]">
                  99xClub Metaverse
                </h3>
                <p className="text-[#B4B5BD] opacity-80 text-[20px] font-medium leading-[30px]">
                  99xclub team will launch minimum 12 different NFTs Project in
                  span of 3 years, only 99xclub Membership Pass holders will get
                  free access to these projects,99xclub pass holders will be
                  able to claim 1:1 nfts in new projects, for non-holders there
                  will be a mint price for these projects.
                </p>
                <p className="text-base leading-[25.6px] text-[#B4B5BD] opacity-80 mt-5">
                  Example : If a Person hold, 15 99xclub membership pass, that
                  person will be able to claim 15 NFTs each in every project
                  launched by 99xclub team. More 99xClub Membership Passes you
                  hold more NFTs you will be able to claim in new projects
                  launched by team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsOfMinting;
