<template>
  <section class="mx-auto container flex flex-col gap-18">
    <div class="grid grid-cols-2 items-start">
      <SectionHeading
        span1="Connect with our<br>"
        span2="international office"
      />
      <p class="paragraph-20 paragraph-dark font-bold">
        Get in touch with our international office for seamless assistance.
        We’re here to support you across multiple location worldwide.
      </p>
    </div>

    <div
      style="box-shadow: rgba(16, 24, 40, 0.05) 0px 0px 20px 7px"
      class="grid grid-cols-2 h-126 border border-[#E3E8EF] rounded-2xl relative overflow-hidden"
    >
      <div class="w-full h-full relative">
        <img
          class="w-full h-full object-cover"
          src="../../../assets/img/other/Boudha.png"
          alt=""
        />
        <div
          class="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-white to-transparent pointer-events-none"
        ></div>
      </div>

      <div class="flex justify-center items-center">
        <ul class="mt-10 space-y-6">
          <li
            v-for="(item, index) in contactItems"
            :key="index"
            class="flex items-center gap-4"
          >
            <a :href="item.url" target="_blank" rel="noopener noreferrer">
              <img
                :src="item.icon"
                :alt="item.label"
                class="h-11 w-11 cursor-pointer rounded-lg bg-black p-3 transition-transform duration-300 hover:scale-110 hover:bg-[#56BEB7]"
              />
            </a>
            <span
              class="font-inter font-normal text-[22px] leading-[26px]"
              :class="item.textColor ? item.textColor : 'text-black'"
            >
              {{ item.value }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeading from "../../../components/headings/SectionHeading.vue";
import MailIcon from "../../../assets/img/icons/mail.svg";
import PhoneIcon from "../../../assets/img/icons/phone.svg";
import LocationIcon from "../../../assets/img/icons/location.svg";
import ClockIcon from "../../../assets/img/icons/clock.svg";

const contactItems = [
  {
    icon: MailIcon,
    label: "Email",
    value: "admin@connectnation.com.au",
    url: "mailto:admin@connectnation.com.au",
  },
  {
    icon: PhoneIcon,
    label: "Phone",
    value: "0451 244 441",
    url: "tel:0451244441",
  },
  {
    icon: LocationIcon,
    label: "Address",
    value: "23 Kent Road, Macdonald Park SA 5121",
    url: "https://share.google/9MeQThDjtUmolx0Ke", // replace with actual Google Maps link
  },
  {
    icon: ClockIcon,
    label: "Response time",
    value: "Response within 24 hours",
    url: "#",
  },
];
</script>
