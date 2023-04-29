import React from "react";
import aditya from "../../assets/images/aditya.jpeg";
import amit from "../../assets/images/amit.jpeg";
import ganesh from "../../assets/images/ganesh.jpg";

function Team() {
  return (
    <div id="team">
      <section className="">
        <div className="py-24 px-4 mx-auto max-w-screen-xl lg:py-170 lg:px-6 ">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-16">
            <h2 className="tracking-tight text-white font-bold text-center text-5xl mb-8">
              Our Team
            </h2>
            <p
              className="text-white text-center text-2xl mb-4"
              style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
            >
              We prioritize communication and transparency at every step of the
              development process to create websites that meet and exceed our
              clients' expectations and drive real results for their businesses.
            </p>
            <p
              className="text-white text-center text-2xl mb-4"
              style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
            >
              We are a team of passionate developers willing to understand
              Customer Problems and provide solutions using technology. We are
              guided by the expertise of{" "}
              <span className="font-bold">
                <a
                  href="https://www.linkedin.com/in/sumit-shevtekar-19b54415/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Prof. Sumit S Shevtekar
                </a>
              </span>
            </p>
          </div>
          <div
            className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-3"
            style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
          >
            <div className="items-center bg-gray-50 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 w-80 h-50">
              <a
                href="https://www.linkedin.com/in/aditya-sonawane-8b8b021b5/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src={aditya}
                  alt="Bonnie Avatar"
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a
                    href="https://www.linkedin.com/in/aditya-sonawane-8b8b021b5/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Aditya Sonawane
                  </a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  Developer
                </span>
              </div>
            </div>
            <div className="items-center bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-80 h-50">
              <a
                href="https://www.linkedin.com/in/amitpurohit47/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src={amit}
                  alt="Jese Avatar"
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a
                    href="https://www.linkedin.com/in/amitpurohit47/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Amit Purohit
                  </a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  Developer
                </span>
              </div>
            </div>

            <div className="items-center bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-80 h-50">
              <a
                href="https://www.linkedin.com/in/ganeshkandepalli/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src={ganesh}
                  alt="Sofia Avatar"
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a
                    href="https://www.linkedin.com/in/ganeshkandepalli/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ganesh Khandepalli
                  </a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  Developer
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
