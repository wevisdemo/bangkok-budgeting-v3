<template>
  <div>
    <FormDialog>
      <form @submit.prevent="(e) => handleSubmit(e)">
        <div
          v-click-outside="closeDialog"
          class="py-10 px-8 bg-black max-w-lg mx-3 relative"
        >
          <button
            class="text-white absolute right-0 m-3 top-0"
            @click.stop="closeDialog"
          >
            <img src="~/assets/icons/close.svg" />
          </button>
          <div class="text-center">
            <div class="text-white">
              <div class="mb-2">
                <p class="wv-b3 wv-bold">
                  ขอสอบถามสั้นๆเกี่ยวกับคุณ <br />
                  ก่อนเข้าไปร่วมแสดงความคิดเห็น
                </p>
              </div>
              <div class="grid gap-2 mb-2">
                <p class="wv-b6 font-thin">
                  คำตอบของคุณจะใช้เพื่อการประมวลผลข้อมูลบนแพลตฟอร์มนี้และรวบรวมเพื่อ
                  ยื่นต่อผู้ว่าราชการจังหวัดกรุงเทพมหานครและหน่วยงานที่เกี่ยวข้องต่อไป
                </p>
                <p class="wv-b6 font-thin">
                  คุณใช้ชีวิตอยู่ในเขตไหนของกรุงเทพฯ
                  <span class="opacity-50"><br />(เรียน/ทำงาน/พักอาศัย)</span>
                </p>
              </div>
            </div>
            <DistrictDropdown
              :type="1"
              @change="(district) => setDistrict(district)"
            />
            <div class="text-white font-thin">
              <p class="wv-b6 mt-5">ระบุรายละเอียดเพิ่มเติม</p>
              <p class="wv-b7 opacity-50">
                เช่น ความต้องการ เหตุผลในการพัฒนาระบุตำแหน่ง, สถานที่
                หรือแนบลิงก์ URL เพื่อระบุพิกัดที่อยากให้พัฒนา
              </p>
            </div>
            <textarea
              class="h-[101px] rounded-[5px] w-full mt-3 p-2 wv-b6 font-thin"
              maxlength="1000"
              placeholder="พิมพ์รายละเอียดเพิ่มเติม..."
              v-model="idea"
            ></textarea>
            <p class="wv-b7 opacity-50 text-end text-white font-thin">
              {{ idea.length.toLocaleString("en-US", {}) }}/1,000
            </p>
            <div class="pt-6">
              <button
                class="bg-white text-black px-2 py-1 rounded-sm"
                :class="
                  selectedSurvey?.district !== 'กรุณาเลือกเขต'
                    ? `opacity-100`
                    : `opacity-50`
                "
                type="submit"
                :disabled="selectedSurvey.district === 'กรุณาเลือกเขต'"
              >
                ส่งคำตอบ
              </button>
            </div>
          </div>
        </div>
      </form>
    </FormDialog>
    <div
      v-if="isShowLoading"
      class="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-white z-[9999]"
    >
      <div
        class="flex flex-col gap-6 m-auto text-center h-full w-full justify-center items-center"
      >
        <h5 class="wv-h5 wv-bold">เรากำลังส่งข้อมูลของคุณ...</h5>
        <div class="lottie-img">
          <Lottie :options="defaultOptions" />
        </div>
        <p class="wv-b3">
          ข้อมูลนี้จะรวบรวมยื่นต่อผู้ว่าราชการจังหวัดกรุงเทพมหานคร
          <br />และหน่วยงานที่เกี่ยวข้องต่อไป
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import FormDialog from "~/components/dialog/FormDialog.vue";
import DistrictDropdown from "~/components/DistrictDropdown.vue";
import projectAnimation from "~/assets/lottie/project-loading.json";
import Lottie from "vue-lottie/src/lottie.vue";
import { mapActions, mapState } from "vuex";
export default {
  props: {
    selected: {
      type: Array,
    },
    closeDialog: {
      type: Function,
    },
    setStepSurvey: {
      type: Function,
    },
  },
  data() {
    return {
      idea: "",
      isShowLoading: false,
      cookieId: "",
      defaultOptions: {
        animationData: projectAnimation,
        loop: true,
        autoplay: true,
      },
    };
  },

  components: {
    FormDialog,
    DistrictDropdown,
    Lottie,
  },
  computed: {
    ...mapState(["selectedSurvey"]),
  },
  mounted() {
    this.updataSurvey({ ...this.selectedSurvey, district: "กรุณาเลือกเขต" });
  },
  methods: {
    ...mapActions({
      updataSurvey: "updataSurvey",
    }),
    async postTableRow(table, data) {
      await this.$nocoDb.dbTableRow.bulkCreate(
        "v1",
        "bangkok-budgeting",
        table,
        data
      );
    },
    async handleSubmit(e) {
      e.preventDefault();
      this.dialogOpen = false;
      this.isShowLoading = true;
      this.cookieId = this.$cookies.get("uuid");

      const data = await this.$nocoDb.dbTableRow.list(
        "v1",
        "bangkok-budgeting",
        "User-Data-2024"
      );
      const isUserVote = data.list.filter((u) => u.userId == this.cookieId)[0];

      if (!isUserVote) {
        await this.senduser();
      }
      await this.sendData();
    },

    setDistrict(district) {
      this.updataSurvey({ ...this.selectedSurvey, district: district.th_name });
    },
    async senduser() {
      try {
        await this.postTableRow("User-Data-2024", [
          {
            userId: this.cookieId,
            district: `เขต${this.selectedSurvey.district}1`,
          },
        ]);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    },
    async sendData() {
      try {
        await this.postTableRow("Survey-2024", [
          {
            userId: this.cookieId,
            policy: this.selectedSurvey.plan,
            sub_policy: this.selectedSurvey.sub_policy,
            district: `เขต${this.selectedSurvey.district}`,
            idea: this.idea,
          },
        ]).then(() => {
          setTimeout(() => {
            this.isShowLoading = false;
            this.setStepSurvey("next");
          }, 2000);
        });
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
