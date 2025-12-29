<template>
  <footer class="bg-black py-18">
    <div class="container mx-auto flex flex-col gap-12">
      <!-- newsletter -->
      <div
        class="flex justify-between items-center border-b-1 border-white/50 py-8"
      >
        <div
          class="font-outfit font-medium text-[32px] leading-[24px] tracking-normal text-white"
        >
          Subscribe To Our Newsletter 🔔
        </div>
        <form class="flex gap-6 justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            class="w-[340px] rounded-full bg-[#FFFFFF1A] border border-white px-6 py-4 text-white bg-transparent placeholder-white/70 focus:outline-none"
          />
          <ButtonTertiaryLight label="Subscribe" />
        </form>
      </div>

      <div
        class="grid grid-cols-1 gap-12 py-8 justify-center items-center /* center on mobile */ sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 sm:justify-between sm:items-start /* restore layout from sm: */ 2xl:gap-12"
      >
        <!-- Logo Column -->
        <div
          class="col-span-1 sm:col-span-2 flex flex-col items-center sm:items-start text-center sm:text-left"
        >
          <router-link to="/" class="w-24 relative">
            <img
              src="../assets/img/logo/logo.png"
              alt="logo"
              class="w-full h-full object-contain filter brightness-0 invert scale-150"
            />
          </router-link>
          <p class="paragraph-16 paragraph-light text-left w-2/3 md:w-full">
            Professional video editing and digital marketing services helping
            Australian businesses stand out and grow across all platforms.
          </p>
        </div>

        <!-- Footer Columns -->
        <div
          v-for="(column, colIndex) in columns"
          :key="colIndex"
          class="flex flex-col gap-5 col-span-1 items-center sm:items-start text-center sm:text-left"
        >
          <!-- Column title -->
          <div
            class="font-inter font-semibold text-[14px] uppercase leading-[20px] tracking-normal text-[#98A2B3]"
          >
            {{ column.title }}
          </div>

          <!-- Column menu items -->
          <ul class="text-white flex text-[16px] flex-col gap-4">
            <li
              v-for="(item, index) in column.items"
              :key="index"
              class="flex items-center gap-4 cursor-pointer text-white transition-colors duration-300 ease-in-out hover:text-[#56BEB7] group"
            >
              {{ item.label }}
              <button
                v-if="item.hasButton"
                class="px-2 rounded-lg text-black transition-colors duration-300 ease-in-out bg-white group-hover:bg-[#56BEB7] group-hover:text-white cursor-pointer"
              >
                {{ item.buttonText }}
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="footer-container flex flex-col container mx-auto justify-center items-center"
      >
        <h1 class="footer-outline-text footer-outline-text-light">CONNECT</h1>
        <h1 class="footer-outline-text footer-outline-text-dark">NATION</h1>
      </div>

      <div class="flex justify-between items-center">
        <p
          class="font-inter font-normal text-[16px] leading-[24px] tracking-normal text-[#98A2B3]"
        >
          © 2024 Connect Nation. All rights reserved.
        </p>

        <ul class="flex items-center gap-4">
          <li>
            <a
              href="#"
              aria-label="Close"
              class="text-[#98A2B3] hover:text-white transition-colors duration-300"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              class="text-[#98A2B3] hover:text-white transition-colors duration-300"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 24h5V7H0zM7.5 7h4.8v2.5h.07c.67-1.25 2.3-2.57 4.73-2.57 5.05 0 6 3.32 6 7.63V24h-5v-7.8c0-1.86-.03-4.25-2.6-4.25-2.6 0-3 2.02-3 4.1V24h-5z"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              class="text-[#98A2B3] hover:text-white transition-colors duration-300"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M22 12a10 10 0 10-11.5 9.95v-7.04h-2.5V12h2.5V9.8c0-2.47 1.47-3.84 3.73-3.84 1.08 0 2.21.2 2.21.2v2.43h-1.25c-1.23 0-1.62.77-1.62 1.56V12h2.76l-.44 2.91h-2.32v7.04A10 10 0 0022 12z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
import ButtonTertiaryLight from "../components/ButtonTertiaryLight.vue";
const columns = [
  {
    title: "Quick Links",
    items: [
      { label: "Video Editing Packages" },
      { label: "Digital Marketing" },
      { label: "Upload Files", hasButton: true, buttonText: "New" },
      { label: "About Us" },
      { label: "Testimonials" },
      { label: "FAQs" },
    ],
  },
  {
    title: "Our Services",
    items: [
      { label: "Video Editing" },
      { label: "Youtube Video" },
      { label: "SEO Optimization" },
      { label: "SMMs", hasButton: true, buttonText: "New" },
      { label: "Brand Strategy" },
      { label: "Billboard Advertising" },
    ],
  },
  {
    title: "SERVICE AREAS",
    items: [
      { label: "Adelaide, SA" },
      { label: "Sydney, NSW" },
      { label: "Perth, WA" },
      { label: "Melbourne, VIC" },
      { label: "Brisbane, QLD", hasButton: true, buttonText: "New" },
      { label: "Australia Wide" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy Policy" },
      { label: "Terms of Service" },
      { label: "Cookies" },
      { label: "Licenses" },
      { label: "Contact" },
    ],
  },
];
</script>
