<template>
  <div
    class="flex sm:flex-row flex-col gap-4 justify-between items-center py-16 border-y border-[#D0D5DD]"
  >
    <!-- Author Info -->
    <div class="flex gap-4 items-center">
      <img
        :src="BlogAuthor"
        alt="author image"
        class="w-14 h-14 rounded-full border border-[1.2px] object-cover"
      />
      <div class="flex flex-col gap-2">
        <p
          class="font-outfit font-medium text-[20px] leading-[120%] text-[#3A3A3A]"
        >
          by Ella Hodkiewicz
        </p>
        <div
          class="flex items-center gap-1 font-inter text-[14px] font-normal text-[#667085] leading-[120%]"
        >
          <img :src="Calender" alt="calendar" class="w-4 h-4" />
          <span>Published on 12 March 2025</span>
        </div>
      </div>
    </div>

    <!-- Share Button -->
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
        share
      </p>
    </div>
  </div>
</template>

<script setup>
import Calender from "../../../assets/img/icons/Calender.svg";
import BlogAuthor from "../../../assets/img/blog/john.png";
import Share from "../../../assets/img/icons/share.svg";
</script>
