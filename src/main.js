import "./assets/css/tailwind.css";
import "./assets/css/fonts.css";
import "./assets/css/components.css";
import "./assets/css/typography.css";
import "./assets/css/variables.css";

import App from "./App.vue";
import { createApp } from "vue";
import router from "./router";

createApp(App).use(router).mount("#app");
