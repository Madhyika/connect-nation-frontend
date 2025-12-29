import { createRouter, createWebHistory } from "vue-router";

// Home page eager load
import HomePage from "../pages/Home/HomePage.vue";

// Other pages lazy-loaded
const WorkPage = () => import("../pages/Work/WorkPage.vue");
const ServicePage = () => import("../pages/Service/ServicePage.vue");
const TVHostPage = () => import("../pages/TVHost/TVHostPage.vue");
const AboutUsPage = () => import("../pages/AboutUs/AboutUsPage.vue");
const ContactUsPage = () => import("../pages/ContactUs/ContactUsPage.vue");
const BlogsInsightsPage = () =>
  import("../pages/BlogsInsights/BlogsInsightsPage.vue");
const PackagesPage = () => import("../pages/Packages/PackagesPage.vue");

const routes = [
  { path: "/", name: "home", component: HomePage },
  { path: "/work", name: "work", component: WorkPage },
  { path: "/service", name: "service", component: ServicePage },
  { path: "/tv-host", name: "tvhost", component: TVHostPage },
  { path: "/about-us", name: "aboutus", component: AboutUsPage },
  { path: "/contact-us", name: "contactus", component: ContactUsPage },
  {
    path: "/blogs-insights",
    name: "blogsinsights",
    component: BlogsInsightsPage,
  },
  { path: "/packages", name: "packages", component: PackagesPage },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
