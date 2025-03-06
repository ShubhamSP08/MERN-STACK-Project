import React from "react";
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const About = () => {
  const handleClick = () => {
    window.open('https://www.healthcareradius.in/awareness-and-promotion/national-doctors-day-honoring-the-healthcare-heroes', '_blank'); // Opens the URL in a new tab
  };

  return (
    <section >
      <div className="container">
        <div className="flex  justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* ======= about img ======= */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1  ">
            <img src={aboutImg} alt="" className="w-[500px]" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[6%]">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>

          {/* ======== about content ============== */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2"  data-aos="fade-right">
            <h2 className="heading">Honored to be recognized among the nation's leading professionals.</h2>
            <p className="text__para">
            For over 30 years, we have been recognized as one of India’s leading public hospitals, delivering exceptional care and earning the trust of countless patients nationwide.
            </p>

            <p className="text__para mt-0-[30px]">
            Every day, we push ourselves to go beyond past achievements, focusing not on what we’ve accomplished, but on what we can achieve tomorrow. Our commitment is to continually provide the best care for every patient, every time.
            </p>
            <Link to="/">
              <button onClick={handleClick} title="healthcareradius.in" className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
