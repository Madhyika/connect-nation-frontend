<template>
  <section class="mx-auto bg-[#FAFAFA] container flex flex-col gap-5 md:gap-18">
    <div
      class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-between"
    >
      <SectionHeading
        span1="Connect with our<br>"
        span2="international office"
      />
      <div class="flex flex-col gap-5 md:gap-8 pt-2 md:pt-0 lg:pt-0">
        <p class="paragraph-20 paragraph-dark">
          Get in touch with our international office for seamless assistance.
          We’re here to support you across multiple location worldwide.
        </p>
      </div>
    </div>

    <div
      style="box-shadow: rgba(16, 24, 40, 0.05) 0px 0px 20px 7px"
      class="grid grid-cols-1 md:grid-cols-2 border border-[#E3E8EF] rounded-2xl relative overflow-hidden h-auto md:h-126"
    >
      <!-- IMAGE -->
      <div class="w-full h-[220px] md:h-full relative">
        <img
          class="w-full h-full object-cover"
          src="../../../assets/img/other/Boudha.png"
          alt="Kathmandu"
        />

        <!-- Gradient overlay (desktop only) -->
        <div
          class="absolute inset-x-0 bottom-0 h-24 md:inset-y-0 md:right-0 md:left-auto md:h-full md:w-32 bg-gradient-to-t md:bg-gradient-to-l from-white to-transparent pointer-events-none"
        ></div>
      </div>

      <!-- CONTENT -->
      <div
        class="flex justify-start md:justify-center items-start md:items-center p-6 md:p-0"
      >
        <ul class="space-y-5 md:space-y-6">
          <li
            v-for="(item, index) in contactItems"
            :key="index"
            class="flex items-center gap-4"
          >
            <img
              :src="item.icon"
              :alt="item.label"
              class="h-10 w-10 md:h-11 md:w-11 cursor-pointer rounded-lg bg-black p-2 md:p-3"
            />

            <!-- Check if the item is location -->
            <span
              class="font-inter font-normal text-[16px] md:text-[22px] leading-[22px] md:leading-[26px] text-black"
            >
              <template v-if="item.label !== 'Address'">
                {{ item.value }}
              </template>

              <template v-else>
                Kathmandu, Nepal (
                <a
                  :href="item.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="underline text-[#2B317F] hover:text-[#1A2156]"
                >
                  View Map
                </a>
                )
              </template>
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
import PhoneIcon from "../../../assets/img/icons/whatsapp.svg";
import LocationIcon from "../../../assets/img/icons/location.svg";
import ClockIcon from "../../../assets/img/icons/clock.svg";

const contactItems = [
  {
    icon: MailIcon,
    label: "Email",
    value: "info@elevexatech.com",
    url: "mailto:info@elevexatech.com",
  },
  {
    icon: PhoneIcon,
    label: "Phone",
    value: "+61 451 244 441",
    url: "tel:+61 451 244 441",
  },
  {
    icon: LocationIcon,
    label: "Address",
    value: "Kathmandu, Nepal (View Map)",
    url: "https://maps.app.goo.gl/7obbH8NtwzfuABPj9",
  },
  {
    icon: ClockIcon,
    label: "Response time",
    value: "Response within 24 hours",
    url: "#",
  },
];
</script>
