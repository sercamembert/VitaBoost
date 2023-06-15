import React from "react";
import liamImg from "../../img/team/carter.jpg";

const Team = () => {
  return (
    <div className="container mx-auto my-24 p-6">
      <section className="mb-32 text-center">
        <h2 className="mb-12 font-primary text-3xl font-bold">
          VitaBoost Team
        </h2>

        <div className="grid gap-x-6 md:grid-cols-3 xl:gap-x-12">
          <div className="mb-6 lg:mb-0">
            <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img
                  src="https://images.pexels.com/photos/3766217/pexels-photo-3766217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="w-full rounded-t-lg"
                />

                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"></div>

                <svg
                  className="absolute bottom-0 left-0 text-white dark:text-neutral-700"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="currentColor"
                    d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <div className="p-6">
                <h5 className="mb-2 text-lg font-bold">Max Johnson</h5>
                <h6 className="dark:text-primary-400 mb-4 font-medium text-primary">
                  Creative Director
                </h6>
                <p className="font-primary">
                  Max is a visionary leader who spearheads the creation of
                  unique and compelling packaging and marketing campaigns for
                  the VitaBoost brand. His creativity and ability to think
                  outside the box captivate customers, making VitaBoost stand
                  out on store shelves. Max understands how to tap into
                  consumers emotions and turn them into loyal brand advocates.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6 lg:mb-0">
            <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img
                  src="https://images.pexels.com/photos/3768593/pexels-photo-3768593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="w-full rounded-t-lg"
                />

                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"></div>

                <svg
                  className="absolute bottom-0 left-0 text-white dark:text-neutral-700"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="currentColor"
                    d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <div className="p-6">
                <h5 className="mb-2 text-lg font-bold">Ava Cooper</h5>
                <h6 className="dark:text-primary-400 mb-4 font-medium text-primary">
                  Product Expert
                </h6>

                <p className="font-primary">
                  Ava is a passionate advocate of a healthy lifestyle and has
                  extensive knowledge in supplementation. As a product expert,
                  her role is to ensure the quality and effectiveness of
                  VitaBoost supplements. Ava closely follows the latest trends
                  and scientific research to ensure that VitaBoost offers
                  products that meet customers expectations and provide real
                  benefits to their health and well-being.
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img src={liamImg} className=" w-full rounded-t-lg" />

                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"></div>

                <svg
                  className="absolute bottom-0 left-0 text-white dark:text-neutral-700"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="currentColor"
                    d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <div className="p-6">
                <h5 className="mb-2 text-lg font-bold">Liam Carter</h5>
                <h6 className="dark:text-primary-400 mb-4 font-medium text-primary">
                  Sales Specialist
                </h6>
                <p className="font-primary">
                  Liam is an invaluable member of the team, effectively managing
                  the sales of VitaBoost products. His strong communication
                  skills, empathy, and expertise in supplements allow him to
                  build strong relationships with customers and drive sales.
                  Liam is dedicated to understanding needs and providing them
                  with personalized solutions to enhance their well-being
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
