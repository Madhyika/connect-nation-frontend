import { createRouter, createWebHistory } from "vue-router";

import DefaultLayout from "../layouts/DefaultLayout.vue";
import HomePage from "../pages/Home/HomePage.vue";
import TestLayout from "../layouts/TestLayout.vue";

const WorkPage = () => import("../pages/Work/WorkPage.vue");
const ServicesPage = () => import("../pages/Services/ServicesPage.vue");
const TVHostPage = () => import("../pages/TVHost/TVHostPage.vue");
const AboutUsPage = () => import("../pages/AboutUs/AboutUsPage.vue");
const ContactUsPage = () => import("../pages/ContactUs/ContactUsPage.vue");
const BlogsInsightsPage = () =>
  import("../pages/BlogsInsights/BlogsInsightsPage.vue");
const PackagesPage = () => import("../pages/Packages/PackagesPage.vue");
const BlogDetailPage = () => import("../pages/BlogsInsights/[slug].vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    meta: { layout: "DefaultLayout" },
  },
  {
    path: "/work",
    name: "work",
    component: WorkPage,
    meta: { layout: "DefaultLayout" },
  },
  {
    path: "/services",
    name: "services",
    component: ServicesPage,
    meta: { layout: "DefaultLayout" },
  },
  {
    path: "/tv-host",
    name: "tvhost",
    component: TVHostPage,
    meta: { layout: "DefaultLayout" },
  },
  {
    path: "/about-us",
    name: "aboutus",
    component: AboutUsPage,
    meta: { layout: "DefaultLayout" },
  },
  {
    path: "/contact-us",
    name: "contactus",
    component: ContactUsPage,
    meta: { layout: "DefaultLayout" },
  },
  {
    path: "/blogs-insights",
    name: "blogsinsights",
    component: BlogsInsightsPage,
    meta: { layout: "DefaultLayout" },
  },
  {
    path: "/blog-insights/:slug",
    name: "blog-detail",
    component: BlogDetailPage,
    meta: { layout: "DefaultLayout" },
  },

  {
    path: "/packages",
    name: "packages",
    component: PackagesPage,
    meta: { layout: "DefaultLayout" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
