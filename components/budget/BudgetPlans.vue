<template>
  <div class="max-w-7xl px-3 md:px-6 py-6 m-auto">
    <div
      id="budget-plans"
      class="flex flex-col gap-16 relative -mx-14 sm:mx-4 scroll-mt-8"
    >
      <div class="flex justify-center items-center w-full text-center">
        <img
          src="~/assets/illustrations/budgetplans.svg"
          alt="Budget plan"
          width="100%"
          height="auto"
          class="max-w-[600px]"
        />
        <div class="absolute max-w-lg p-16 sm:p-8">
          <h4 class="wv-h5 wv-bold wv-kondolar">
            สำรวจการใช้<br />
            งบประมาณ
          </h4>
          <p class="wv-b3">
            เพื่อ ‘เมืองน่าอยู่ สำหรับทุกคน’<br />
            กทม. ใช้งบประมาณส่วนนี้อย่างไร ?
          </p>
          <svg
            class="mx-auto mt-3"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_6177_11610)">
              <path
                d="M7.25024 1.98474C7.25024 1.43246 7.69796 0.984741 8.25024 0.984741C8.80253 0.984741 9.25024 1.43246 9.25024 1.98474L7.25024 1.98474ZM8.95735 15.9981C8.56683 16.3887 7.93366 16.3887 7.54314 15.9981L1.17918 9.63418C0.788652 9.24365 0.788652 8.61049 1.17918 8.21996C1.5697 7.82944 2.20287 7.82944 2.59339 8.21996L8.25024 13.8768L13.9071 8.21996C14.2976 7.82944 14.9308 7.82944 15.3213 8.21996C15.7118 8.61049 15.7118 9.24365 15.3213 9.63418L8.95735 15.9981ZM9.25024 1.98474L9.25024 15.291L7.25024 15.291L7.25024 1.98474L9.25024 1.98474Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_6177_11610">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(0.250244 16.6379) rotate(-90)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
    <div
      class="bg-wv-cream-30 mx-auto py-[10px] flex mt-[60px] flex-col max-w-[761px] items-center gap-2 text-center mb-10 px-4 rounded-[5px]"
    >
      <div class="flex space-x-1">
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_6177_14463)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.34271 2.95044C7.96817 1.86711 9.53183 1.86711 10.1573 2.95044L15.7865 12.7004C16.4119 13.7838 15.6301 15.1379 14.3792 15.1379L3.12083 15.1379C1.86991 15.1379 1.08808 13.7838 1.71354 12.7004L7.34271 2.95044ZM9.2191 3.49211C9.01061 3.13099 8.48939 3.131 8.2809 3.49211L2.65174 13.2421C2.44325 13.6032 2.70386 14.0546 3.12083 14.0546L14.3792 14.0546C14.7961 14.0546 15.0567 13.6032 14.8483 13.2421L9.2191 3.49211Z"
              fill="black"
            />
            <path
              d="M8.45328 10.8731L7.98844 8.06424V6.14551H9.53133V8.06424L9.07638 10.8731H8.45328ZM8.74999 13.1677C8.4335 13.1677 8.20602 13.0951 8.06756 12.9501C7.93569 12.805 7.86975 12.627 7.86975 12.416V12.1786C7.86975 11.9676 7.93569 11.7896 8.06756 11.6446C8.20602 11.4995 8.4335 11.427 8.74999 11.427C9.06649 11.427 9.29067 11.4995 9.42254 11.6446C9.561 11.7896 9.63024 11.9676 9.63024 12.1786L9.63024 12.416C9.63024 12.627 9.561 12.805 9.42254 12.9501C9.29067 13.0951 9.06649 13.1677 8.74999 13.1677Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_6177_14463">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(0.75 0.637939)"
              />
            </clipPath>
          </defs>
        </svg>
        <span class="wv-b5 font-bold">Disclaimer</span>
      </div>
      <div
        class="w-full border-t-[1.5px] border-t-wv-gray-50 border-dashed max-w-[192px] md:max-w-[500px] mx-auto"
      />
      <p class="wv-b6 font-bold">
        งบที่ใช้ตามแผนงานพัฒนา 9 ด้าน (ดี)<br class="md:hidden" />
        ไม่ใช่งบทั้งหมดของกรุงเทพฯ
      </p>
      <p class="wv-b7">
        แต่เป็นงบประมาณส่วนสำคัญที่เกี่ยวข้องกับการให้บริการประชาชน
        และประชาชนมีส่วนร่วมได้มากที่สุด
        ข้อมูลในส่วนนี้เป็นข้อมูลงบประมาณตามแผนงานพัฒนา 9 ด้าน (ดี)
        ที่ระบุในข้อบัญญัติงบประมาณรายจ่ายกรุงเทพมหานคร
        ไม่ใช่งบประมาณรายจ่ายที่เกิดขึ้นจริง
      </p>
    </div>
    <div class="flex flex-col space-y-[20px]">
      <YearlyBudgetVue />
      <BudgetUsage />
      <BudgetExplorer />
    </div>
    <div class="mt-8 flex w-full mx-auto items-center">
      <a
        href="https://docs.google.com/spreadsheets/d/15Xd-xM-Mi3qVRRyyqMxHrRgXYT3WNmWIzpvdUn9xWZo/edit?gid=1915709666#gid=1915709666"
        target="_blank"
        class="border space-x-2 items-center mx-auto border-black flex w-fit px-[20px] py-[10px] rounded-[5px]"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_6188_10175)">
            <path
              d="M5.75 2.13794H1.25V14.6379H15.25V2.13794C15.25 2.13794 11.7803 2.13794 10.75 2.13794"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M12.75 6.97388L8.2941 11.4298L3.83819 6.97388"
              stroke="black"
              stroke-miterlimit="10"
            />
            <line
              x1="8.25"
              y1="0.137939"
              x2="8.25"
              y2="11.1379"
              stroke="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_6188_10175">
              <rect
                width="15"
                height="15"
                fill="white"
                transform="translate(0.75 0.137939)"
              />
            </clipPath>
          </defs>
        </svg>
        <div class="flex flex-col md:flex-row md:items-end items-start">
          <p class="wv-b6">ดาวน์โหลดข้อมูลงบประมาณรายจ่าย</p>
          <p class="wv-b7 opacity-50 md:ml-2">ตามแผนนโยบาย 9 ด้าน (ดี)</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BoxContainer from "~/components/BoxContainer.vue";
import BudgetExplorer from "~/components/budget/charts/BudgetExplorer.vue";
import BudgetUsage from "~/components/budget/charts/BudgetUsage.vue";
import YearlyBudgetVue from "~/components/budget/charts/YearlyBudget.vue";

export default Vue.extend({
  name: "BudgetPlans",
  components: {
    BoxContainer,
    YearlyBudgetVue,
    BudgetUsage,
    BudgetExplorer,
  },
  data() {
    return {};
  },
});
</script>

<style lang="scss"></style>
