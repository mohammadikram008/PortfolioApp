// import content
import { useEffect } from "react";
import { content } from "../Content";

const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
         {/* <div className="profile-picture mt-72">
          <div className="profile-picture-background  text-lg text-cyan-300">
            
          </div>
        </div> */}
      <div className="min-h-screen relative flex md:flex-row  flex-col-reverse md:items-end justify-center items-center">
       
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-10 -z-10"
        >
          <h1 className="rotate-90 absolute top-[20%] lg:top-[30%] xlg:top-[30%] right-[-25%]  text-[#EAF2FA]">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>
     
        {/* first col */}
        <div className="pb-16 px-6 " data-aos="fade-down">
          <h2>{hero.title}</h2>
          <br />
          <div className="flex justify-center">
          <a
              href="Mohammadikram.pdf"
              download="Mohammadikram Mohammadikram.pdf"
            >
            <button className="btn">{hero.btnText}</button>
            </a>
           
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[37rem] h-96">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full mr-32   object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;