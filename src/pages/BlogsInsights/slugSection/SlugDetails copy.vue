<template>
  <div
    v-if="details"
    class="flex flex-col xl:grid xl:grid-cols-6 xl:items-start gap-16"
  >
    <div class="flex flex-col gap-16 col-span-4">
      <div class="flex flex-col gap-4">
        <div
          class="flex flex-col md:flex-row md:justify-between justify-center items-center gap-6"
        >
          <div
            class="flex flex-col md:flex-row justify-center items-center gap-6"
          >
            <img
              :src="'/blogs/author/' + blog.author_image"
              alt="Author"
              class="w-[56px] h-[56px] rounded-full border border-[1.2px] object-cover"
            />
            <div
              class="flex flex-col justify-center md:items-start items-center gap-3"
            >
              <p
                class="font-outfit font-medium text-[20px] leading-[120%] text-[#3A3A3A]"
              >
                {{ blog.author }}
              </p>
              <ul
                class="flex flex-col md:flex-row justify-center items-center gap-3"
              >
                <li class="flex gap-2 items-center">
                  <img
                    :src="Clock"
                    alt="clock"
                    class="w-[14px] h-[14px] filter invert brightness-50"
                  />
                  <p
                    class="font-inter font-normal text-[14px] leading-[120%] text-[#667085]"
                  >
                    {{ blog.readTime }} Mins Read
                  </p>
                </li>
                <li class="flex gap-2 items-center">
                  <img
                    :src="Calender"
                    alt="calendar"
                    class="w-[14px] h-[14px] filter invert"
                  />
                  <p
                    class="font-inter font-normal text-[14px] leading-[120%] text-[#667085]"
                  >
                    Last updated: {{ blog.date }}
                  </p>
                </li>
                <li class="flex gap-2 items-center">
                  <img
                    :src="Views"
                    alt="views"
                    class="w-[14px] h-[14px] filter invert"
                  />
                  <p
                    class="font-inter font-normal text-[14px] leading-[120%] text-[#667085]"
                  >
                    {{ blog.views }}
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div
            class="flex items-center gap-2 py-2.5 px-4.5 border border-[#D0D5DD] rounded-full cursor-pointer transition-all duration-300 hover:bg-[#F2F4F7] hover:border-[#41468C] hover:text-[#41468C]"
          >
            <div
              class="flex items-center pr-4 border-r border-[#D0D5DD] group-hover:border-[#41468C]"
            >
              <img
                :src="Share"
                alt="share"
                class="w-5 h-5 transition-colors duration-300 group-hover:text-[#41468C]"
              />
            </div>
            <p
              class="font-inter font-normal text-[16px] leading-[100%] transition-colors duration-300"
            >
              Share
            </p>
          </div>
        </div>

        <div class="flex flex-col gap-6">
          <p
            v-for="(text, index) in details?.overview"
            :key="index"
            class="font-inter font-thin text-[18px] leading-[32px] tracking-[0.02em] text-[#101828]"
          >
            {{ text.p }}
          </p>
        </div>
      </div>

      <div
        v-if="details.details"
        v-for="(detail, index) in details.details"
        :key="index"
        class="flex flex-col gap-16"
      >

      </div>

      <div
        class="flex flex-col gap-8 rounded-[8px] border p-10"
        style="
          border: 1px solid #eaecf0;
          background: linear-gradient(
            270deg,
            rgba(116, 235, 213, 0.08) 0%,
            rgba(159, 172, 230, 0.08) 100%
          );
          backdrop-filter: blur(682.25146484375px);
        "
      >
        <div class="flex gap-4 items-center">
          <div
            class="rounded-full bg-[#EAEBF3] flex justify-center items-center w-[42px] h-[42px] p-3"
          >
            <img :src="Pin" class="w-[12px]" alt="pin" />
          </div>
          <p
            class="font-outfit font-normal text-[22px] leading-[100%] text-[#101828]"
          >
            Highlights
          </p>
        </div>

        <ul class="flex flex-col gap-[18px]">
          <li v-for="n in 4" :key="n" class="flex gap-[10px]">
            <div
              class="rounded-full bg-[#ECFDF3] w-[34px] h-[34px] p-2 flex justify-center items-center"
            >
              <img :src="Tick" alt="tick" class="w-[18px]" />
            </div>
            <p
              class="font-inter font-normal text-[18px] leading-[30px] tracking-[0.02em] text-[#101828]"
            >
              You can port a US number for free by signing up for VoIP providers
              like Google Voice, and Grasshopper, which include free number
              porting as part of their service.
            </p>
          </li>
        </ul>
      </div>

      <div class="flex flex-col gap-8">
        <h1
          class="font-outfit font-medium text-[36px] leading-[100%] text-[#101828]"
        >
          Is It Possible to Port a US Phone Number for Free?
        </h1>
        <p
          class="font-inter font-normal text-[18px] leading-[32px] tracking-[0.02em] text-[#101828]"
        >
          Yes, it is possible to port your US phone number for free, as many
          Voice over Internet Protocol (VoIP) and mobile carrier providers offer
          free port-in services to attract customers.
          <br /><br />
          You must also have the correct account details, such as your account
          number, port-out PIN, billing address, and a recent phone bill, ready
          to complete the free transfer without issues.
        </p>
      </div>

      <div class="flex flex-col gap-8">
        <h1
          class="font-outfit font-medium text-[36px] leading-[100%] text-[#101828]"
        >
          Requirements to Port a US Phone Number for Free
        </h1>
        <p
          class="font-inter font-normal text-[18px] leading-[32px] tracking-[0.02em] text-[#101828]"
        >
          Porting a US phone number requires meeting basic eligibility rules,
          such as keeping the number active, ensuring your account is in good
          standing, and confirming your new carrier supports number portability.
          <br /><br />
          You must also have the correct account details, such as your account
          number, port-out PIN, billing address, and a recent phone bill, ready
          to complete the free transfer without issues.
        </p>
      </div>

      <div class="flex flex-col gap-6">
        <h1
          class="font-outfit font-medium text-[36px] leading-[100%] text-[#101828]"
        >
          1. Number and Account Status Requirements
        </h1>
        <div
          class="font-inter font-normal text-[18px] leading-[32px] tracking-[0.02em] text-[#101828]"
        >
          To be eligible for number porting, your phone number must be active
          and accepted by the new carrier. You also need to ensure your account
          has no unpaid bills, your device is unlocked, and any account security
          restrictions are disabled so the transfer can be completed without
          issues.
          <br />
          <ol class="list-decimal list-outside pl-6 mt-4 flex flex-col gap-4">
            <li>
              Your New Carrier Must Support Porting Your Number: Before starting
              the transfer, check the
              <span class="underline text-[#4E5BA6]">portability status</span>
              with your new provider to confirm that your existing American
              phone number can be moved to their service. Since some providers
              cannot accept certain number types or area codes, verifying
              eligibility in advance helps avoid
              <a
                href="https://www.calilio.com/blogs/number-porting-issues"
                class="underline text-[#4E5BA6]"
                >porting issues.</a
              >
            </li>
            <li>
              The Phone Number Must Be Active: Your US phone number must be
              active at the time of porting. If the number is deactivated,
              expired, or suspended, you cannot transfer it. Always keep your
              current service running until the port is complete.
            </li>
            <li>
              The Device Must Be Unlocked: If you plan to use your existing
              mobile phone with a new carrier, the device must be unlocked. A
              locked phone is restricted to your current carrier and may not
              work with another provider. Before starting the number porting
              process, contact your current carrier to unlock the device if
              needed.
            </li>
            <li>
              The Account Lock Must Be Turned Off: Many carriers offer a
              security feature called an Account Lock that disables various
              account changes and transactions across all lines and devices. You
              must contact your current carrier or use their portal to disable
              this security lock before your new provider submits the porting
              request.
            </li>
            <li>
              The Account Must Be in Good Standing: Your account should have no
              unpaid balances, overdue bills, or unresolved disputes with your
              current provider. Clearing any pending charges helps prevent
              delays and ensures a smooth number porting process.
            </li>
          </ol>
        </div>
      </div>

      <div class="flex flex-col gap-6">
        <h1
          class="font-outfit font-medium text-[36px] leading-[100%] text-[#101828]"
        >
          2. Essential Account Information
        </h1>
        <div
          class="font-inter font-normal text-[18px] leading-[32px] tracking-[0.02em] text-[#101828]"
        >
          To transfer your number successfully, you’ll need to give your new
          carrier the phone number(s) being ported, details of your current
          provider, account number, and billing address with ZIP code.
          <br />
          <ol class="list-decimal list-outside pl-6 mt-4 flex flex-col gap-4">
            <li>
              Account Number from Your Current Carrier: You must provide the
              account number linked to your current phone service to confirm
              ownership of the phone number. You can usually find it on your
              billing statement or by logging into your provider’s online
              portal.
            </li>
            <li>
              Port-out PIN or Number Transfer PIN: A port-out PIN, also called a
              number transfer PIN, authorizes the release of your phone number.
              It adds an extra layer of security against unauthorized ports.
              Every carrier requires you to generate this PIN from your account
              dashboard or by contacting support. Without it, the port cannot
              move forward.
            </li>
            <li>
              Billing Address Including Zip Code: Provide the billing address
              and ZIP code associated with your current carrier account. This
              information is used to verify your identity and must match the
              details your carrier has on file.
            </li>
            <li>
              A Recent Phone Bill: An up-to-date phone bill for the last 30 days
              is required to provide necessary account details and prove your
              ownership.
            </li>
          </ol>
        </div>
      </div>
      <div class="block"><SlugBusiness /></div>

      <div class="flex flex-col gap-6">
        <h1
          class="font-outfit font-medium text-[36px] leading-[100%] text-[#101828]"
        >
          Port Your US Number with Calilio
        </h1>
        <div
          class="font-inter font-normal text-[18px] leading-[32px] tracking-[0.02em] text-[#101828]"
        >
          Calilio, a VoIP-powered business phone system, transfers your local,
          mobile, or toll-free number to a
          <span class="underline">virtual number</span>, allowing you to make
          and receive calls and messages online. You can access greater
          flexibility, including number sharing and multi-device syncing.
          <br /><br />
          It offers an easy way to port your existing American number. Follow
          the following steps to port your US number with Calilio.
          <br />
          <ol class="list-decimal list-outside pl-6 mt-4 flex flex-col gap-4">
            <li>Sign up with Calilio.</li>
            <li>Go to Settings > My Numbers > Port Existing.</li>
            <li>
              Contact the support team and verify if the number is eligible for
              porting.
            </li>
            <li>
              Submit the required documents. The porting team will handle the
              rest.
            </li>
            <li>Wait for the verification and confirmation.</li>
            <li>
              After receiving confirmation, request the removal of the former
              service provider.
            </li>
          </ol>
        </div>
      </div>

      <div class="flex flex-col gap-6">
        <h1
          class="font-outfit font-medium text-[36px] leading-[100%] text-[#101828]"
        >
          Conclusion
        </h1>
        <p
          class="font-inter font-normal text-[18px] leading-[32px] tracking-[0.02em] text-[#101828]"
        >
          Porting a US phone number is a straightforward process. You just need
          to choose a service provider that offers free number porting, provide
          them with your porting PIN and the required account details or
          documents, and they will handle the rest of the transfer for you.
          <br /><br />
          For those looking to upgrade their US number to a cloud-based VoIP
          solution for free, Calilio stands out as a reliable choice. It offers
          a fast and hassle-free porting process with no service interruptions,
          ensuring your communication remains uninterrupted.
          <br /><br />
          In addition to seamless number transfer, Calilio enhances your
          existing number with advanced communication features, improved call
          quality, and reliable service, making it a suitable solution for both
          individuals and businesses seeking a modern communication
          upgrade. Sign up to Calilio and port your local US number for free
        </p>
      </div>
    </div>

    <div
      class="flex flex-col w-full gap-8 col-span-2 max-w-[600px] xl:max-w-[1000px]"
    >
      <div class="flex flex-col gap-4">
        <p
          class="font-outfit font-semibold text-[18px] leading-[100%] text-[#41468C]"
        >
          Jump to section
        </p>
        <ul class="flex flex-col">
          <li
            class="p-4 cursor-pointer rounded-lg hover:bg-[#F2F4F7] font-inter font-normal text-[16px] leading-[100%] tracking-[0.02em] text-[#3A3A3A]"
          >
            What is email marketing?
          </li>
          <li
            class="p-4 cursor-pointer rounded-lg hover:bg-[#F2F4F7] font-inter font-normal text-[16px] leading-[100%] tracking-[0.02em] text-[#3A3A3A]"
          >
            Why is email marketing important for small businesses?
          </li>
          <li
            class="p-4 cursor-pointer rounded-lg hover:bg-[#F2F4F7] font-inter font-normal text-[16px] leading-[100%] tracking-[0.02em] text-[#3A3A3A]"
          >
            Benefits of small business email marketing campaigns
          </li>
          <li
            class="p-4 cursor-pointer rounded-lg hover:bg-[#F2F4F7] font-inter font-normal text-[16px] leading-[100%] tracking-[0.02em] text-[#3A3A3A]"
          >
            A step-by-step guide to small business email marketing
          </li>
          <li
            class="p-4 cursor-pointer rounded-lg hover:bg-[#F2F4F7] font-inter font-normal text-[16px] leading-[100%] tracking-[0.02em] text-[#3A3A3A]"
          >
            Wrapping up
          </li>
        </ul>
      </div>

      <div class="flex flex-col gap-4">
        <h1
          class="font-outfit font-semibold text-[18px] leading-[100%] text-[#41468C]"
        >
          Subscribe to our newsletter
        </h1>

        <div
          class="w-[331px] h-[44px] px-3 py-2 rounded-lg border border-[#D0D5DD] shadow-sm transition-all duration-200 focus-within:border-[#41468C] focus-within:ring-1 focus-within:ring-[#41468C]"
        >
          <input
            type="text"
            class="w-full h-full outline-none font-inter font-normal text-[16px] text-[#3A3A3A] placeholder:text-gray-400"
            placeholder="Enter your email"
          />
        </div>
        <div class="max-w-[330px]">
          <ButtonPackageDark
            label="Subscribe"
            to="/"
            class="w-full transition-transform duration-300 hover:scale-[1.02]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BlogWriter from "../../../assets/img/blog/john.png";
import Clock from "../../../assets/img/icons/clock.svg";
import Calender from "../../../assets/img/icons/Calender.svg";
import Share from "../../../assets/img/icons/share.svg";
import Pin from "../../../assets/img/icons/pin.svg";
import Tick from "../../../assets/img/icons/tick.svg";
import Views from "../../../assets/img/icons/eye.svg";
import BusinessSection from "../../Home/sections/BusinessSection.vue";
import ButtonPackageDark from "../../../components/buttons/ButtonPackageDark.vue";
import SlugBusiness from "./SlugBusiness.vue";

import { onMounted } from "vue";

const props = defineProps({
  details: Object,
  blog: Object,
});

onMounted(() => {
  console.log(props.details);
  console.log(props.blog);
});
</script>
