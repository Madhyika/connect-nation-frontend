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
    meta: {
      layout: "DefaultLayout",
      title: "Connect Nation | Adelaide Web Design & SEO Agency",
      description:
        "Leading Adelaide web design & SEO agency delivering digital marketing, website development, video production & social media. Free consultation available.",
      canonical: "https://connectnation.com.au/",
    },
  },
  {
    path: "/work",
    name: "work",
    component: WorkPage,
    meta: {
      layout: "DefaultLayout",
      title: "Our Work | Web Design & Digital Marketing in Adelaide",
      description:
        "Explore our web design, SEO, digital marketing and video production projects. Real results for Adelaide and South Australian businesses.",
      canonical: "https://connectnation.com.au/work",
    },
  },
  {
    path: "/services",
    name: "services",
    component: ServicesPage,
    meta: {
      layout: "DefaultLayout",
      title: "Services | Web Design & Digital Marketing in Adelaide",
      description:
        "Professional web design, SEO and digital marketing services in Adelaide. We help South Australian businesses grow with results-driven strategies.",
      canonical: "https://connectnation.com.au/services",
    },
  },
  // {
  //   path: "/tv-host",
  //   name: "tvhost",
  //   component: TVHostPage,
  //   meta: {
  //     layout: "DefaultLayout",
  //     title: "About Us | Adelaide Web Design & SEO Agency",
  //     description:
  //       "Learn about Connect Nation, an Adelaide-based web design and SEO agency helping South Australian businesses grow through digital marketing.",
  //     canonical: "https://connectnation.com.au/about-us",
  //   },
  // },
  {
    path: "/about-us",
    name: "aboutus",
    component: AboutUsPage,
    meta: {
      layout: "DefaultLayout",
      title: "About Us | Adelaide Web Design & SEO Agency",
      description:
        "Learn about Connect Nation, an Adelaide-based web design and SEO agency helping South Australian businesses grow through digital marketing.",
      canonical: "https://connectnation.com.au/about-us",
    },
  },
  {
    path: "/contact-us",
    name: "contactus",
    component: ContactUsPage,
    meta: {
      layout: "DefaultLayout",
      title: "Contact Us | Adelaide Web Design & SEO Agency",
      description:
        "Contact Connect Nation, an Adelaide-based web design and SEO agency. Get in touch to discuss your digital marketing and website needs.",
      canonical: "https://connectnation.com.au/contact-us",
    },
  },
  {
    path: "/blogs-insights",
    name: "blogsinsights",
    component: BlogsInsightsPage,
    meta: {
      layout: "DefaultLayout",
      title: "Blog | Connect Nation  Adelaide Insights",
      description:
        "Insights on web design, SEO and digital marketing from an Adelaide agency. Practical tips, trends and strategies to grow your business online.",
      canonical: "https://connectnation.com.au/blogs-insights",
    },
  },
  {
    path: "/blog-insights/:slug",
    name: "blog-detail",
    component: BlogDetailPage,
    meta: {
      layout: "DefaultLayout",
      title: "Blog | Connect Nation  Adelaide Insights",
      description:
        "Insights on web design, SEO and digital marketing from an Adelaide agency. Practical tips, trends and strategies to grow your business online.",
      canonical: "https://connectnation.com.au/blogs-insights",
    },
  },
  {
    path: "/packages",
    name: "packages",
    component: PackagesPage,
    meta: {
      layout: "DefaultLayout",
      title: "Web Design & SEO Packages Adelaide | Connect Nation",
      description:
        "Affordable web design, SEO and digital marketing packages in Adelaide. Transparent pricing for growing South Australian businesses.",
      canonical: "https://connectnation.com.au/packages",
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});

export default router;
