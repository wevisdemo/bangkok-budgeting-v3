<template>
  <BoxContainer>
    <div
      id="sections-strategy-plan"
      class="bg-white rounded-[10px] shadow-md py-[30px] px-[10px] text-center"
    >
      <p class="wv-h5 font-black">
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
      <p class="wv-b3 font-bold mt-3 md:mt-6">คุณกำลังสำรวจแผนนโยบาย</p>
      <p class="wv-h5 wv-bold mt-2" :class="`text-${pointerStrategy.color}`">
        “{{ pointerStrategy?.strategy }}”
      </p>
      <p class="wv-b5">ของแผนงานพัฒนา 9 ด้าน(ดี)</p>
      <p class="wv-b7 opacity-50">กดเลือกดด้านดีอื่นๆ</p>
      <div
        class="flex gap-2 sm:gap-3 mt-5 grid-cols-7 relative justify-center w-full mb-3"
      >
        <div
          v-for="(item, planIndex) in plans"
          :key="`${item.strategy}-problemsIndex`"
          class="flex flex-col justify-between items-center cursor-pointer z-30"
          @click="handleStrategy(item.strategy)"
        >
          <div v-if="item.strategy !== 'N/A'" class="relative">
            <img
              v-show="onHoverImg === item.img"
              :id="planIndex.toString()"
              class="w-20 h-28"
              :src="`/bangkok-budgeting-v3/images/strategies/${item.img}_hover.svg`"
              :alt="item.strategy"
            />
            <img
              v-show="onHoverImg !== item.img"
              :id="planIndex.toString()"
              class="w-20 h-28"
              :src="`/bangkok-budgeting-v3/images/strategies/${item.img}.svg`"
              :alt="item.strategy"
            />
            <div
              v-show="onHoverImg === item.img"
              class="point-up border-wv-cream left-[50%] translate-x-[-50%] translate-y-[10px]"
            />
          </div>
        </div>
      </div>
      <!-- strategy -->
      <div
        class="bg-wv-cream flex flex-col items-center justify-center p-4 w-full"
      >
        <div class="text-center pb-4">
          <p class="wv-b6">ยุทธศาสตร์ด้าน</p>

          <div class="wv-b6 flex md:block space-x-2 md:space-x-0">
            <p v-if="pointerStrategy">
              ประกอบด้วย
              {{ pointerStrategy?.strategies?.length }}
              มิติย่อย
            </p>
            <span class="text-wv-gray-1 block sm:hidden"
              >(กด + เพื่ออ่านคำอธิบาย)</span
            >
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
      <button
        class="border border-black mt-5 px-[20px] py-[10px] rounded-[5px] wv-b6"
      >
        ตรวจสอบความคืบหน้านโยบายเพิ่มเติม
      </button>
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
