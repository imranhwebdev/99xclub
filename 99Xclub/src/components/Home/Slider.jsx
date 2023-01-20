import { useEffect } from "react";
import AOS from "aos";
import sliderImg from "../../assets/images/slider.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import Button from "../../common/Button";

const Slider = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();

}, []);
  return (
    <section className="ninetynine_x_slider py-[100px] bg-[#080709]" id="affiliates">
      <div>
        <div className="section_title max-w-[659px] mx-auto text-center pb-[50px] md:pb-[100]">
          <span className="text__style tracking-[0.2em] font-bold"  data-aos="fade-up" data-aos-duration="800">
            REWARD SYSTEM
          </span>
          <h2 className="text-[#E1E2EE] sm:text-[32px] leading-[35px] md:text-[49px] md:leading-[58.8px] font-bold p-2 mt-[10px] mb-[20px] text-[25px] "  data-aos="fade-up" data-aos-duration="1000">
            Which are 12 Projects that will be launched by 99xclub team and
            their affiliates?
          </h2>
        </div>
        {/* slider code */}
        <div  data-aos="fade-up" data-aos-duration="1200">
          <Swiper
            spaceBetween={30}
            slidesPerView={2.4}
            centeredSlides={true}
            loop={true}
            pagination={{
              clickable: true,
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            breakpoints={{
              "360": {
                slidesPerView: 1,
                centeredSlides:false,
                spaceBetween: 10,
                loop:false
              },
              "576": {
                slidesPerView: 1.2,
                centeredSlides:false,
              },
              "768": {
                slidesPerView: 1.6,
              },
              "992": {
                slidesPerView: 1.8,
              },
              "1200": {
                slidesPerView: 2,
              },
              "1280": {
                slidesPerView: 3,
              }
            }}
            className="mySwiper "
          >
            <SwiperSlide className="slider__item !bg-opacity-10 ">
              <img src={sliderImg} alt="" className="w-full " />
              <div className="slide_content_box absolute left-[0%] top-[0%] text-left p-[30px] bg-[#1B1A1C] !rounded-[30px] z-10">
                <div className="">
                  <h2 className="text-[#E1E2EE] text-[25px] leading-[35px] font-medium p-2 mt-[10px] mb-[20px]">
                    Mutant Women Ape YC
                  </h2>
                  <div className="mtp_wrapper flex justify-between mt-[24px] ">
                    <div className="item">
                      <span className="text-[#B4B5BD] opacity-70 leading-[25.6px]">
                        Mint Date
                      </span>
                      <h4 className="text-[#E1E2EE] text-[18px] font-medium leading-[27px]">
                      03 'Feb' 2023
                      </h4>
                    </div>
                    <div className="item">
                      <span className="text-[#B4B5BD] opacity-70 leading-[25.6px]">
                        Total Supply
                      </span>
                      <h4 className="text-[#E1E2EE] text-[18px] font-medium leading-[27px]">
                      15,555
                      </h4>
                    </div>
                    <div className="item">
                      <span className="text-[#B4B5BD] opacity-70 leading-[25.6px]">
                        Publit Mint Price
                      </span>
                      <h4 className="text-[#E1E2EE] text-[18px] font-medium leading-[27px]">
                        0.08 ETH
                      </h4>
                    </div>
                  </div>
                  <div className="mt-[33px]">
                    <span className="text-[#B4B5BD] opacity-70 leading-[25.6px]">
                      Free Spots for 99x Club Pass Holders
                    </span>
                    <h4 className="text-[#E1E2EE] text-[18px] font-medium leading-[27px]">
                      3,333
                    </h4>
                  </div>
                  <div className="mt-[33px]">
                    <span className="text-[#B4B5BD] opacity-70 leading-[25.6px]">
                      Price for 99x Club Pass Holder
                    </span>
                    <h4 className="text-[#E1E2EE] text-[18px] font-medium leading-[27px]">
                      0.00 ETH (Only Gas Fees)
                    </h4>
                  </div>
                  <div className="mt-[33px]">
                    <Button classNames={"py-5 px-[35px]"}>Claim Soon</Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slider__item !bg-opacity-10">
              <h2 className="text-[#B4B5BD] opacity-50 font-medium w-full ">
                Coming Soon 
              </h2>
            </SwiperSlide>
            <SwiperSlide className="slider__item !bg-opacity-10">
              <h2 className="text-[#B4B5BD] opacity-50 font-medium w-full ">
                Coming Soon
              </h2>
            </SwiperSlide>
            <SwiperSlide className="slider__item !bg-opacity-10">
              <h2 className="text-[#B4B5BD] opacity-50 font-medium w-full ">
                Coming Soon
              </h2>
            </SwiperSlide>
            <SwiperSlide className="slider__item !bg-opacity-10">
              <h2 className="text-[#B4B5BD] opacity-50 font-medium w-full ">
                Coming Soon
              </h2>
            </SwiperSlide>
            <SwiperSlide className="slider__item !bg-opacity-10">
              <h2 className="text-[#B4B5BD] opacity-50 font-medium w-full ">
                Coming Soon
              </h2>
            </SwiperSlide>
            <SwiperSlide className="slider__item !bg-opacity-10">
              <h2 className="text-[#B4B5BD] opacity-50 font-medium w-full ">
                Coming Soon
              </h2>
            </SwiperSlide>
            <SwiperSlide className="slider__item !bg-opacity-10">
              <h2 className="text-[#B4B5BD] opacity-50 font-medium w-full ">
                Coming Soon
              </h2>
            </SwiperSlide>
            <SwiperSlide className="slider__item !bg-opacity-10">
              <h2 className="text-[#B4B5BD] opacity-50 font-medium w-full ">
                Coming Soon
              </h2>
            </SwiperSlide>
            <SwiperSlide className="slider__item !bg-opacity-10">
              <h2 className="text-[#B4B5BD] opacity-50 font-medium w-full ">
                Coming Soon
              </h2>
            </SwiperSlide>
            <SwiperSlide className="slider__item !bg-opacity-10">
              <h2 className="text-[#B4B5BD] opacity-50 font-medium w-full ">
                Coming Soon
              </h2>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Slider;
