import React, { useContext } from "react";

function Team() {
    return (
        <div >
          <section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Team</h2>
          <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">We prioritize communication and transparency at every step of the development process to create websites that meet and exceed our clients' expectations and drive real results for their businesses.</p>
      </div> 
      <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar"/>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Prof. Sumit S Shevtekar</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">Our Mentor</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Trusted advisor who provides guidance, and feedback.</p>
                  
              </div>
          </div> 
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Avatar"/>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Amit Purohit</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">Developer</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Amit drives the technical strategy of the CryptoBridge.</p>
                 
              </div>
          </div> 
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="Michael Avatar"/>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Aditya Sonawane</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400"> Developer</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Aditya drives the technical strategy of the flowbite platform and brand.</p>
                  
              </div>
          </div> 
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia Avatar"/>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Ganesh Khandepalli</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">Developer</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Ganesh drives the technical strategy of the CryptoBridge.</p>
                  
              </div>
          </div>  
      </div>  
  </div>
</section>
        </div>
      );
}


export default Team;