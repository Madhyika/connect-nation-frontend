<template>
  <section class="relative bg-gradient-to-b from-white to-sky-50 py-20">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div class="flex flex-col justify-between">
          <div class="flex flex-col gap-4">
            <SectionHeading span1="Get In" span2="Touch" />
            <ul class="mt-10 space-y-6">
              <li class="flex items-center gap-4">
                <img
                  src="../../../assets/img/icons/mail.svg"
                  alt="Email"
                  class="h-11 w-11 rounded-lg bg-[#56BEB7] p-3"
                />
                <span
                  class="font-inter font-normal text-[22px] leading-[26px] tracking-[0] text-black"
                >
                  admin@connectnation.com.au
                </span>
              </li>

              <li class="flex items-center gap-4">
                <img
                  src="../../../assets/img/icons/phone.svg"
                  alt="Phone"
                  class="h-11 w-11 rounded-lg bg-[#56BEB7] p-3"
                />
                <span
                  class="font-inter font-normal text-[22px] leading-[26px] tracking-[0] text-black"
                >
                  0451 244 441
                </span>
              </li>

              <li class="flex items-center gap-4">
                <img
                  src="../../../assets/img/icons/location.svg"
                  alt="Address"
                  class="h-11 w-11 rounded-lg bg-[#56BEB7] p-3"
                />
                <span
                  class="font-inter font-normal text-[22px] leading-[26px] tracking-[0]"
                >
                  23 Kent Road, Macdonald Park SA 5121
                </span>
              </li>

              <li class="flex items-center gap-4">
                <img
                  src="../../../assets/img/icons/clock.svg"
                  alt="Response time"
                  class="h-11 w-11 rounded-lg bg-[#56BEB7] p-3"
                />
                <span
                  class="font-inter font-normal text-[22px] leading-[26px] tracking-[0]"
                >
                  Response within 24 hours
                </span>
              </li>
            </ul>
          </div>

          <div class="flex flex-col gap-6">
            <h3
              class="text-[#0C111D] font-outfit font-bold text-[48px] leading-[66px] tracking-[0]"
            >
              Have a project in mind?
            </h3>
            <p
              class="text-[#0C111D] font-caveat font-normal text-[40px] leading-[100%] tracking-[0]"
            >
              Get in touch and let’s build something impactful together.
            </p>
          </div>
        </div>

        <!-- RIGHT COLUMN (FORM) -->
        <div
          style="box-shadow: 0px 0px 64px -12px #10182824"
          class="bg-white/10 rounded-lg shadow-lg p-8 flex flex-col gap-12"
        >
          <div class="flex flex-col gap-3">
            <h3
              class="font-outfit font-semibold text-[22px] leading-[100%] tracking-[-0.01em] uppercase text-[#2B317F]"
            >
              SEND US A MESSAGE
            </h3>
            <p class="paragraph-18 paragraph-dark">
              Got an idea or need support? Drop us a message and let’s start the
              conversation. We’d love to hear from you.
            </p>
          </div>

          <form class="flex flex-col gap-8">
            <!-- Name -->
            <div class="flex flex-col gap-2">
              <label class="form-label">Name *</label>
              <input
                v-model="form.name"
                type="text"
                placeholder="Your full name"
                class="w-full h-[40px] bg-white border border-[#56BEB7] rounded-[8px] shadow-[0_1px_2px_0_#1018280D] px-[12px] py-[8px] flex items-center gap-[8px] opacity-100"
                required
              />
            </div>

            <!-- Email -->
            <div class="flex flex-col gap-2">
              <label class="form-label">Email *</label>
              <input
                v-model="form.email"
                type="email"
                placeholder="you@example.com"
                class="w-full h-[40px] bg-white border border-[#56BEB7] rounded-[8px] shadow-[0_1px_2px_0_#1018280D] px-[12px] py-[8px] flex items-center gap-[8px] opacity-100"
                required
              />
            </div>

            <!-- Subject -->
            <div class="flex flex-col gap-2">
              <label class="form-label">Subject</label>
              <input
                v-model="form.subject"
                type="text"
                placeholder="What can we help you with?"
                class="w-full h-[40px] bg-white border border-[#56BEB7] rounded-[8px] shadow-[0_1px_2px_0_#1018280D] px-[12px] py-[8px] flex items-center gap-[8px] opacity-100"
              />
            </div>

            <!-- Message -->
            <div class="flex flex-col gap-2">
              <label class="form-label">Message *</label>
              <textarea
                v-model="form.message"
                rows="4"
                placeholder="Tell us about your project or ask any questions..."
                class="w-full bg-white border border-[#56BEB7] rounded-[8px] shadow-[0_1px_2px_0_#1018280D] px-[12px] py-[8px] flex items-center gap-[8px] opacity-100 resize-none"
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
import SectionHeading from "../../../components/SectionHeading.vue";
import ButtonPrimaryLight from "../../../components/ButtonPrimaryLight.vue";

const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const submitForm = () => {
  // Replace with API integration
  console.log("Form submitted:", form);
};
</script>
