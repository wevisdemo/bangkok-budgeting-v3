<template>
  <BoxContainer>
    <div
      id="sections-strategy-plan"
      class="bg-white rounded-[10px] wrapper-plan py-[30px] px-[10px] text-center"
    >
      <p class="wv-h5 font-black wv-kondolar mt-3">
        ทำความเข้าใจ
        <br class="md:hidden" />
        แผนการใช้งบ
      </p>
      <p class="wv-b3 mt-3 px-3 max-w-[544px] mx-auto">
        เริ่มต้นในปี 2568 กรุงเทพมหานคร ปรับแผนการทำงาน โดยมุ่ง
        วัดผลลัพธ์สำคัญตามวัตถุประสงค์ เปลี่ยนทิศทางการบริหารเมืองโดยใช้
        แผนงานพัฒนา<b>
          9 ด้าน (ดี) และ 28 ประเด็นการพัฒนาเพื่อเป้าหมาย ‘กรุงเทพฯ
          เมืองน่าอยู่สำหรับทุกคน’</b
        >
      </p>
      <div
        class="w-full border-t-[1.5px] border-t-wv-gray-50 my-5 border-dashed max-w-[260px] md:max-w-[500px] mx-auto"
      />
      <p class="wv-b3 font-bold mt-3 md:mt-6">คุณกำลังสำรวจแผนนโยบาย</p>
      <p class="wv-h5 wv-bold mt-2" :class="`text-${pointerStrategy.color}`">
        “{{ pointerStrategy?.strategy }}”
      </p>
      <p class="wv-b5">ของแผนงานพัฒนา 9 ด้าน(ดี)</p>

      <div
        class="flex gap-2 sm:gap-3 mt-5 grid-cols-7 relative justify-center w-full mb-3"
      >
        <div
          v-for="(item, planIndex) in plans"
          :key="`${item.strategy}-problemsIndex`"
          class="flex flex-col justify-between items-center cursor-pointer z-30"
          @click="handleStrategy(item.strategy)"
        >
          <div v-if="item.strategy !== 'ไม่พบข้อมูล'" class="relative">
            <img
              v-show="onHoverImg === item.img"
              :id="planIndex.toString()"
              class="w-20 md:h-28"
              :src="`/bangkok-budgeting-v3/images/strategies/${item.img}_hover.svg`"
              :alt="item.strategy"
            />
            <img
              v-show="onHoverImg !== item.img"
              :id="planIndex.toString()"
              class="w-20 md:h-28"
              :src="`/bangkok-budgeting-v3/images/strategies/${item.img}.svg`"
              :alt="item.strategy"
            />
            <div
              v-show="onHoverImg === item.img"
              class="point-up border-wv-cream left-[50%] translate-x-[-50%] translate-y-[40px]"
            />
          </div>
        </div>
      </div>
      <div class="wv-b7 opacity-50 mb-4 flex items-center w-fit mx-auto">
        <svg
          class="mr-2"
          width="8"
          height="9"
          viewBox="0 0 8 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M4.60355 0.534386C4.40829 0.339124 4.09171 0.339124 3.89645 0.534386L0.714466 3.71637C0.519204 3.91163 0.519204 4.22821 0.714466 4.42347C0.909728 4.61874 1.22631 4.61874 1.42157 4.42347L4.25 1.59505L7.07843 4.42347C7.27369 4.61874 7.59027 4.61874 7.78553 4.42347C7.9808 4.22821 7.9808 3.91163 7.78553 3.71637L4.60355 0.534386ZM4.75 8.88794L4.75 0.887939L3.75 0.887939L3.75 8.88794L4.75 8.88794Z"
            fill="black"
          />
        </svg>
        กดเลือกดด้านดีอื่นๆ
      </div>
      <!-- strategy -->
      <div
        class="bg-wv-cream flex flex-col items-center justify-center p-4 w-full"
      >
        <div class="text-center pb-4">
          <div class="wv-b6 flex flex-col md:block space-x-2 md:space-x-0">
            <p v-if="pointerStrategy">
              ประเด็นพัฒนาที่เกี่ยวข้อง
              {{ pointerStrategy?.strategies?.length }}
              ประเด็น
            </p>

            <p class="text-wv-gray-1 block sm:hidden">
              (กด + เพื่ออ่านคำอธิบาย)
            </p>
          </div>
        </div>
        <!-- desktop -->
        <div class="hidden sm:block">
          <div class="flex divide-x w-full">
            <div
              v-for="(strategy, strategyIndex) in pointerStrategy?.strategies"
              :key="strategyIndex"
              class="flex flex-col grid-rows-[repeat(2,_min-content)] gap-4 p-4 min-h-[200px] w-full bg-wv-cream"
              :class="
                strategyIndex !== 0
                  ? 'border-l border-l-wv-gray-50'
                  : 'border-l-0'
              "
            >
              <div
                class="flex flex-col items-center justify-center w-full gap-1"
              >
                <div
                  class="text-white w-[30px] h-[30px] rounded-full wv-b6 relative"
                  :class="bgColorSet(pointerStrategy?.color)"
                >
                  <span
                    class="absolute top-[50%] left-[50%] translate-x-[-51%] translate-y-[-50%]"
                    >{{ strategyIndex + 1 }}</span
                  >
                </div>
                <p class="wv-b5 wv-bold text-left mt-2">
                  {{ strategy.sub_strategy }}
                </p>
              </div>
              <ul>
                <li
                  v-for="(item, itemIndex) in strategy.sub_srategy_def"
                  :key="itemIndex"
                  class="wv-b6 text-left text-black list-disc list-inside"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="flex flex-col sm:hidden w-full divide-y">
          <div
            v-for="(strategy, strategyIndex) in pointerStrategy?.strategies"
            :key="strategyIndex"
            class="flex flex-col w-full bg-wv-cream py-2 gap-2"
            @click="selectHandle(strategy.sub_strategy)"
          >
            <div class="flex relative">
              <img
                v-if="selected != strategy.sub_strategy"
                src="~/assets/icons/expand.svg"
                class="absolute right-0 cursor-pointer"
              />
              <img
                v-else
                src="~/assets/icons/un-expand.svg"
                class="absolute right-0 cursor-pointer"
              />

              <div
                class="text-white min-w-[15px] w-[15px] h-[15px] rounded-full relative wv-b6"
                :class="bgColorSet(pointerStrategy?.color)"
              >
                <p
                  class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                >
                  {{ strategyIndex + 1 }}
                </p>
              </div>
              <p class="wv-b5 ml-3 wv-bold mr-4 text-left">
                {{ strategy.sub_strategy }}
              </p>
            </div>
            <ul class="ml-3" v-if="selected === strategy.sub_strategy">
              <li
                v-for="(item, itemIndex) in strategy.sub_srategy_def"
                :key="itemIndex"
                class="wv-b5 text-black list-disc list-inside text-left"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <a
        href="https://openpolicy.bangkok.go.th/"
        target="_blank"
        class="border flex items-center w-fit mx-auto border-black mt-5 px-[20px] py-[10px] rounded-[5px] wv-b6"
      >
        <svg
          class="mr-2"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="1" y="0.916748" width="14" height="14" stroke="black" />
          <line
            x1="3.83398"
            y1="4.91675"
            x2="12.1673"
            y2="4.91675"
            stroke="black"
          />
          <line
            x1="3.83398"
            y1="8.25012"
            x2="12.1673"
            y2="8.25012"
            stroke="black"
          />
          <line
            x1="3.83398"
            y1="11.5834"
            x2="8.83398"
            y2="11.5834"
            stroke="black"
          />
        </svg>

        ตรวจสอบความคืบหน้านโยบายเพิ่มเติม
      </a>
    </div>
  </BoxContainer>
</template>

<script>
import Vue from "vue";
import BoxContainer from "~/components/BoxContainer.vue";
import { planData } from "~/data/plan-data";
import { bgColorSet } from "./budget/utils";

export default Vue.extend({
  name: "StrategicPlans",
  components: { BoxContainer },
  data() {
    return {
      onHoverImg: null,
      selectedStrategy: 0,
      strategicIcon: "",
      selected: "",
      pointerStrategy: {},
    };
  },

  computed: {
    plans() {
      return planData;
    },
  },

  mounted() {
    this.pointerStrategy = this.plans[0];
    this.onHoverImg = this.pointerStrategy.img;
  },
  methods: {
    bgColorSet,
    selectHandle(index) {
      this.selected = index;
    },
    handleStrategy(strategy) {
      this.pointerStrategy = this.plans.find((s) => s.strategy === strategy);
      this.onHoverImg = this.pointerStrategy.img;
    },
  },
});
</script>

<style lang="scss">
.grid-cols-auto {
  grid-auto-columns: auto;
}

.arrow {
  height: 100%;
  @apply relative flex justify-center;
}

.wrapper-plan {
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.15);
}
.point-up {
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom-width: 22px;
  border-bottom-style: solid;
  @apply absolute -bottom-3;
}
</style>
