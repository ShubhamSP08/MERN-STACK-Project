import { services } from "../assets/data/services";
import ServiceCard from "../components/Services/ServiceCard";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles


const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1100, // Animation duration
      easing: "ease-in-out", // Easing option
      once: false, // Whether animation should happen only once
    });
  }, []);
  return (
    <section data-aos="fade-up">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] ">
          {services.map((item, index) => (
            <ServiceCard item={item} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
