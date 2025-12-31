import "./assets/css/tailwind.css";
import "./assets/css/fonts.css";
import "./assets/css/components.css";
import "./assets/css/typography.css";
import "./assets/css/variables.css";
import "aos/dist/aos.css";

import AOS from "aos";
import App from "./App.vue";
import { createApp } from "vue";
import router from "./router";

AOS.init({
  duration: 800, 
  easing: "ease-in-out", // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
});

createApp(App).use(router).mount("#app");
