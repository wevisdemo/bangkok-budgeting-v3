<template>
  <div class="bg-white md:bg-wv-cream pt-28 -mt-24 pb-9 px-3">
    <div v-if="!isSuccess">
      <div class="max-w-[600px] mx-auto">
        <p class="wv-h5 font-bold">
          เสนอความคิดเห็นหรือ<br />
          แจ้งปัญหาการเข้าถึงข้อมูล <br />งบประมาณในโครงการ
        </p>
        <textarea
          class="h-[200px] bg-wv-gray-20 md:bg-white rounded-[5px] w-full mt-3 p-2 wv-b6 font-thin"
          maxlength="1000"
          placeholder="พิมพ์ความคิดเห็น เช่น ระเบียบที่เป็นอุปสรรค 
การไม่ได้รับข้อมูลข่าวสาร ความซับซ้อนของการ
เสนอขอโครงการ..."
          v-model="idea"
        ></textarea>
        <p class="text-right wv-b7 opacity-70">({{ idea.length }}/1,000)</p>
      </div>
      <button
        class="wv-b5 py-[5px] px-[10px] border bg-white border-black rounded-[5px]"
        @click="() => sendData()"
        :class="idea.length > 0 ? `opacity-100` : `opacity-20`"
        :disabled="idea.length === 0"
      >
        ส่งความคิดเห็น
      </button>
    </div>
    <div v-else>
      <p class="wv-h5 mb-3 font-bold">เราได้รับความคิดเห็น<br />ของคุณแล้ว</p>
      <p class="wv-b3">ขอบคุณที่ร่วมแสดงความคิดเห็น</p>
      <img
        src="~/assets/icons/commuSuccess.png"
        alt="coin"
        class="my-5 mx-auto"
      />
      <p class="wv-b5 mb-5">
        ข้อมูลส่วนนี้จะถูกนำมาสะท้อน<br />
        การปรับปรุง การดำเนินการ
      </p>
      <button
        @click="() => reset()"
        class="border border-black flex items-center justify-center mx-auto opacity-70 wv-b5 py-[5px] px-[10px] rounded-[5px]"
      >
        เสนอความคิดเห็นอีกรอบ
        <img src="~/assets/icons/againIcon.png" alt="coin" class="ml-2" />
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      idea: "",
      isSuccess: false,
    };
  },
  methods: {
    async postTableRow(table, data) {
      await this.$nocoDb.dbTableRow.bulkCreate(
        "v1",
        "bangkok-budgeting",
        table,
        data
      );
    },
    async sendData() {
      this.cookieId = this.$cookies.get("uuid");
      try {
        await this.postTableRow("2024-PlatformSuggestion", [
          {
            userId: this.cookieId,
            Suggestion: this.idea,
          },
        ]).then(() => {
          this.isSuccess = true;
        });
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    },
    reset() {
      this.isSuccess = false;
      this.idea = "";
    },
  },
};
</script>
<style lang=""></style>
