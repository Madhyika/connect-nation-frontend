<template>
  <section class="relative bg-gradient-to-b from-white to-sky-50 py-20">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div class="flex flex-col justify-between">
          <div class="flex flex-col gap-4">
            <SectionHeading span1="Get In" span2="Touch" />
            <ul class="mt-10 space-y-6">
              <li
                v-for="(item, index) in contactItems"
                :key="index"
                class="flex items-center gap-4"
              >
                <img
                  :src="item.icon"
                  :alt="item.label"
                  class="h-11 w-11 rounded-lg bg-[#000000] p-2"
                />
                <span
                  class="font-inter font-normal text-[22px] leading-[26px]"
                  :class="item.textColor ? item.textColor : 'text-black'"
                >
                  {{ item.value }}
                </span>
              </li>
            </ul>
          </div>

          <div class="flex flex-col gap-6">
            <h3
              class="text-[#0C111D] font-outfit font-bold text-[48px] leading-[66px]"
            >
              Have a project in mind?
            </h3>
            <p
              class="text-[#0C111D] font-caveat font-normal text-[40px] leading-[100%]"
            >
              Get in touch and let’s build something impactful together.
            </p>
          </div>
        </div>

        <div
          style="box-shadow: 0px 0px 64px -12px #10182824"
          class="bg-white/10 rounded-lg shadow-lg p-8 flex flex-col gap-12"
        >
          <div class="flex flex-col gap-3">
            <h3
              class="font-outfit font-semibold text-[22px] leading-[100%] uppercase text-[#2B317F]"
            >
              SEND US A MESSAGE
            </h3>
            <p class="paragraph-17">
              Got an idea or need support? Drop us a message and let’s start the
              conversation. We’d love to hear from you.
            </p>
          </div>

          <form class="flex flex-col gap-8" @submit.prevent="submitForm">
            <div class="flex flex-col gap-2">
              <label class="form-label">Name *</label>
              <input
                v-model="form.name"
                type="text"
                placeholder="Your full name"
                class="w-full h-[40px] bg-white border border-[#56BEB7] rounded-[8px] shadow-[0_1px_2px_0_#1018280D] px-[12px] py-[8px]"
                required
              />
            </div>

            <div class="flex flex-col gap-2">
              <label class="form-label">Email *</label>
              <input
                v-model="form.email"
                type="email"
                placeholder="you@example.com"
                class="w-full h-[40px] bg-white border border-[#56BEB7] rounded-[8px] shadow-[0_1px_2px_0_#1018280D] px-[12px] py-[8px]"
                required
              />
            </div>

            <div class="flex flex-col gap-2">
              <label class="form-label">Subject</label>
              <input
                v-model="form.subject"
                type="text"
                placeholder="What can we help you with?"
                class="w-full h-[40px] bg-white border border-[#56BEB7] rounded-[8px] shadow-[0_1px_2px_0_#1018280D] px-[12px] py-[8px]"
              />
            </div>

            <div class="flex flex-col gap-2">
              <label class="form-label">Message *</label>
              <textarea
                v-model="form.message"
                rows="4"
                placeholder="Tell us about your project or ask any questions..."
                class="w-full bg-white border border-[#56BEB7] rounded-[8px] shadow-[0_1px_2px_0_#1018280D] px-[12px] py-[8px] resize-none"
                required
              ></textarea>
            </div>

            <ButtonPrimaryLight class="z-100" label="Send Message" to="/" />
          </form>
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 right-0 h-[300px] overflow-hidden">
      <img
        src="../../../assets/img/decor/sky.png"
        alt=""
        class="w-full h-full object-cover"
        style="
          mask-image: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0)
          );
          -webkit-mask-image: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0)
          );
        "
      />
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";
import SectionHeading from "../../../components/headings/SectionHeading.vue";
import ButtonPrimaryLight from "../../../components/buttons/ButtonPrimaryLight.vue";

const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const submitForm = () => {
  console.log("Form submitted:", form);
};
import MailIcon from "../../../assets/img/icons/mail.svg";
import PhoneIcon from "../../../assets/img/icons/phone.svg";
import LocationIcon from "../../../assets/img/icons/location.svg";
import ClockIcon from "../../../assets/img/icons/clock.svg";
const contactItems = [
  {
    icon: MailIcon,
    label: "Email",
    value: "admin@connectnation.com.au",
  },
  {
    icon: PhoneIcon,
    label: "Phone",
    value: "0451 244 441",
  },
  {
    icon: LocationIcon,
    label: "Address",
    value: "23 Kent Road, Macdonald Park SA 5121",
  },
  {
    icon: ClockIcon,
    label: "Response time",
    value: "Response within 24 hours",
  },
];
</script>
