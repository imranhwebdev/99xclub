import { useEffect } from "react";
import AOS from "aos";
const ProjectTeam = () => {  
  useEffect(() => {
  AOS.init();
  AOS.refresh();

}, []);
  return (
    <section
      className=" p-[30px] md:pt-[90px] md:pb-[216px] bg-[#100f11]"
      id="membership"
    >
      <div className="max-w-[1200px] mx-auto py-4 px-4 md:px-0">
        <div>
          <h2 className="text-[#E1E2EE] sm:text-[20px] sm:leading-[33px] md:text-[31px] font-normal md:leading-[43.4px] mt-[10px] text-center" data-aos="fade-up" data-aos-duration="900">
            Projects launched by 99xClub Team
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ProjectTeam;
