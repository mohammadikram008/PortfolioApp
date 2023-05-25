// import content
import { Fragment, useEffect } from "react";
import { content } from "../Content";
import "./Profile.css";
const Hero = () => {
  const { hero } = content;

  return (
    // <section id="home" className="overflow-hidden">
    //   {/* <div className="profile-picture mt-72">
    //       <div className="profile-picture-background  text-lg text-cyan-300">

    //       </div>
    //     </div> */}
    //   <div className="min-h-screen relative flex md:flex-row  flex-col-reverse md:items-end justify-center items-center">
    //     <div
    //       data-aos="slide-left"
    //       data-aos-delay="1200"
    //       className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-10 -z-10"
    //     >
    //       <h1 className="rotate-90 absolute top-[20%] lg:top-[30%] xlg:top-[30%] right-[-25%]  text-[#EAF2FA]">
    //         {hero.firstName}{" "}
    //         <span className="text-dark_primary">{hero.LastName}</span>
    //       </h1>
    //     </div>

    //     {/* first col */}
    //     <div className="pb-16 px-6 " data-aos="fade-down">
    //       <h2 className="xsm:text-sm ">{hero.title}</h2>
    //       <br />
    //       <div className="flex justify-center">
    //         <a href="Mohammadikram.pdf" download="Mohammadikram.pdf">
    //           <button className="btn">{hero.btnText}</button>
    //         </a>
    //       </div>
    //       <div className="flex flex-col gap-10 mt-10">
    //         {hero.hero_content.map((content, i) => (
    //           <div
    //             key={i}
    //             data-aos="fade-down"
    //             data-aos-delay={i * 300}
    //             className={`flex items-center w-80 gap-5
    //         ${i === 1 && " flex-row-reverse text-right"}  `}
    //           >
    //             <h3 className="xsm:text-sm">{content.count}</h3>
    //             <p className="xsm:text-sm">{content.text}</p>
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     {/* sec col */}
    //     <div className="profile-picture md:h-[37rem] h-96  ">
    //       <div className="profile-picture-background xsm:h-[20rem] xsm:w-10">
    //         <img
    //           src={hero.image}
    //           data-aos="slide-up"
    //           alt="..."
    //           className="profile-picture-background h-full mr-32 rounded-full  object-cover "
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <Fragment>
      <section id="home" className="overflow-hidden">
        <div className="grid lg:grid-cols-2 md:grid-cols-2  grid-cols-1">
          <div className="grid justify-center items-center m-16">
            <div className="profile-picture md:h-[37rem] h-96  ">
              <div className="profile-picture-background xsm:h-[20rem] xsm:w-10">
                <img
                  src={hero.image}
                  data-aos="slide-up"
                  alt="..."
                  className="profile-picture-background h-full mr-30 rounded-full  object-cover "
                />
              </div>
            </div>
            <div className="pb-16 px-6 " data-aos="fade-down">
              <br />
              <div className="flex justify-center">
                <a href="Mohammadikram.pdf" download="Mohammadikram.pdf">
                  <button className="btn">{hero.btnText}</button>
                </a>
              </div>
              <div className="flex flex-col gap-10 mt-10">
                {hero.hero_content.map((content, i) => (
                  <div
                    key={i}
                    data-aos="fade-down"
                    data-aos-delay={i * 300}
                    className={`flex items-center w-80 text-sm gap-3
            ${i === 1 && " flex-row-reverse text-right"}  `}
                  >
                    <h3 className="text-sm ">{content.count}</h3>
                    <span className="text-sm">{content.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid justify-center items-center m-12 lg:m-3">
            <div
              className="md:container px-5 py-14 rounded shadow-xl lg:px-0 lg-py-0 hover:bg-slate-400 hover:scale-110 lg:hover:scale-150   bg-slate-100"
              // data-aos="slide-left"
              // data-aos-delay="1200"
              // className="card rounded shadow bg-slate-100 h-full m-3 lg:h-full  lg:m-3"
              // className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-10 -z-10"
              // className="rotate-90 absolute top-[20%] lg:top-[30%] xlg:top-[30%] right-[-25%]  text-[#EAF2FA]"
            >
              <h4 className="p-4">
                {hero.firstName}
                <span className="text-dark_primary">{hero.LastName}</span>
              </h4>
              <span className=" p-4">{hero.title}</span>
              <br />
              <span className="p-4">{hero.Edu}</span>
              <br />
              <span className="p-4">{hero.phone}</span>
              <br />
              <span className="p-4">{hero.email}</span>
              <br />
              <span className="p-4">{hero.address}</span>
              <br />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;
