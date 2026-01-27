<template>
  <footer class="bg-black md:py-18 py-10">
    <div
      class="container mx-auto max-w-screen-xl flex flex-col md:gap-12 gap-[20px] justify-center items-center"
    >
      <div
        class="flex w-full flex-col md:flex-row justify-between items-center gap-8 border-b border-white/50 pb-10"
      >
        <div
          class="font-outfit font-medium text-[32px] leading-tight text-white text-left"
        >
          Subscribe to our <br />
          news later 🔔
        </div>

        <form
          class="flex flex-col sm:flex-row gap-4 w-fit justify-center items-center"
        >
          <input
            type="email"
            placeholder="Enter your email"
            class="w-full sm:w-[260px] md:w-[340px] rounded-full bg-[#FFFFFF1A] border border-white px-6 py-4 text-white placeholder-white/70 focus:outline-none"
          />
          <ButtonTertiaryLight label="Subscribe" />
        </form>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-[30%_70%] justify-between w-full gap-10"
      >
        <!-- Left column: logo + paragraph -->
        <div
          class="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <router-link to="/" class="w-24">
            <img
              src="../assets/img/logo/logo.png"
              alt="logo"
              class="w-full object-contain filter brightness-0 invert scale-125 md:scale-150"
            />
          </router-link>
          <p class="paragraph-16 paragraph-light max-w-sm text-[#98A2B3]">
            Professional video editing and digital marketing services helping
            Australian businesses stand out and grow across all platforms.
          </p>
        </div>

        <!-- Right column: nested grid of service columns -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 sm:gap-12"
        >
          <div
            v-for="(column, colIndex) in columns"
            :key="colIndex"
            class="flex flex-col gap-5 items-center sm:items-start"
          >
            <div
              class="font-inter font-semibold text-[14px] uppercase leading-[20px] tracking-normal text-[#98A2B3]"
            >
              {{ column.title }}
            </div>
            <ul
              class="flex flex-col items-center sm:items-start gap-4 text-white text-[16px]"
            >
              <li
                v-for="(item, index) in column.items"
                :key="index"
                class="flex items-center gap-4 cursor-pointer transition-colors duration-300 hover:text-[#56BEB7] group"
              >
                <router-link
                  v-if="item.to"
                  :to="item.to"
                  class="transition-colors duration-300 hover:text-[#56BEB7]"
                  :class="item.type === 'bold' ? 'see-more-text' : ''"
                >
                  {{ item.label }}
                </router-link>
                <span
                  v-else
                  :class="item.type === 'bold' ? 'see-more-text' : ''"
                >
                  {{ item.label }}
                </span>

                <button
                  v-if="item.hasButton"
                  class="px-2 rounded-lg text-black bg-white group-hover:bg-[#56BEB7] group-hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  {{ item.buttonText }}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        class="footer-container flex flex-col w-full justify-center items-center"
      >
        <h1 class="footer-outline-text footer-outline-text-light">CONNECT</h1>
        <h1 class="footer-outline-text footer-outline-text-dark">NATION</h1>
      </div>

      <div
        class="flex flex-col sm:flex-row w-full gap-6 justify-between items-center text-center sm:text-left"
      >
        <p class="font-inter text-[14px] sm:text-[16px] text-[#98A2B3]">
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
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                  role="img"
                  aria-label="X"
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
                  role="img"
                  aria-label="LinkedIn"
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
                  role="img"
                  aria-label="Facebook"
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
import ButtonTertiaryLight from "../components/buttons/ButtonTertiaryLight.vue";

// import XIcon from "../assets/img/icons/X.svg";
// import LinkedinIcon from "../assets/img/icons/Linkedin.svg";
// import FacebookIcon from "../assets/img/icons/fb.svg";

// const socialLinks = [
//   {
//     name: "X",
//     url: "#",
//     icon: XIcon,
//   },
//   {
//     name: "LinkedIn",
//     url: "https://linkedin.com",
//     icon: LinkedinIcon,
//   },
//   {
//     name: "Facebook",
//     url: "https://facebook.com",
//     icon: FacebookIcon,
//   },
// ];

const columns = [
  {
    title: "Quick Links",
    items: [
      { label: "Work", to: "/work" },
      { label: "Services", to: "/services" },
      // { label: "Upload Files", hasButton: true, buttonText: "New" },
      { label: "About", to: "/about-us" },
      { label: "Contacts", to: "/contact-us" },
      { label: "Blogs", to: "/blogs-insights" },
      { label: "Package Plans", to: "/packages" },
    ],
  },
  {
    title: "Our Services",
    items: [
      { label: "Website Development" },
      { label: "SaaS Development" },
      { label: "Mobile App Development" },
      { label: "Video Editing" },
      { label: "Graphic Design" },
      { label: "See more", type: "bold" },
    ],
  },
  {
    title: "SERVICE AREAS",
    items: [
      { label: "Adelaide, SA" },
      { label: "Sydney, NSW" },
      { label: "Perth, WA" },
      { label: "Melbourne, VIC" },
      { label: "Brisbane, QLD" },
      { label: "Australia Wide" },
    ],
  },
  {
    title: "LEGAL",
    items: [
      { label: "Privacy Policy" },
      { label: "Terms of Service" },
      { label: "Cookies Policy" },
    ],
  },
];
</script>
<style scoped>
.see-more-text {
  font-family: "Inter", sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0;
}
</style>
