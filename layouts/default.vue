<template>
  <div class="min-h-screen wv-kondolar wv-b5 wv-ibmplex">
    <WvCookieConsent
      policy-url="https://punchup.world"
      :cookie-options="cookieOptions"
      :on-accept="onCookieAccept"
    />
    <WvNavbar class="z-20" :dark="true" homeHref="/bangkok-budgeting-v3">
      <NuxtLink v-for="{ label, path } in routes" :key="path" :to="path">
        <WvNavButton :active="path === $route.path" :dark="true">{{
          label
        }}</WvNavButton>
      </NuxtLink>
      <a
        href="http://bangkokbudgeting61-67.wevis.info/"
        target="_blank"
        class="wv-b7"
      >
        <WvNavButton :dark="true"> สำรวจงบประมาณ กทม. 2561-2567</WvNavButton>
      </a>
    </WvNavbar>
    <Nuxt />
    <div
      class="bg-black text-white justify-center items-start text-center space-x-10 py-5 hidden md:flex"
    >
      <div
        v-for="(item, index) in footerNav"
        :key="index"
        class="flex flex-col text-start"
      >
        <div class="wv-b7">
          <NuxtLink :to="item.path">
            <WvNavButton :dark="true">
              {{ item.title }}
            </WvNavButton>
          </NuxtLink>
          <div v-for="(item, i) in item.des" :key="i" class="opacity-50">
            <NuxtLink :to="item.path">
              <WvNavButton :dark="true">
                {{ item.title }}
              </WvNavButton>
            </NuxtLink>
          </div>
        </div>
      </div>
      <a
        href="http://bangkokbudgeting61-67.wevis.info/"
        target="_blank"
        class="wv-b7"
      >
        <WvNavButton :dark="true">
          สำรวจงบประมาณ<br />กทม. 2561-2567</WvNavButton
        >
      </a>
    </div>
    <div
      class="bg-black text-white justify-center items-start wv-b7 py-5 flex md:hidden px-2"
    >
      <div class="text-start flex flex-col space-y-2 mr-2">
        <NuxtLink to="/"> หน้าแรก </NuxtLink>
        <NuxtLink to="/about"> About us </NuxtLink>
        <a
          href="http://bangkokbudgeting61-67.wevis.info/"
          target="_blank"
          class="wv-b7"
        >
          สำรวจงบ<br />ประมาณ กทม.<br />
          2561-2567
        </a>
      </div>
      <div class="text-start flex flex-col mr-3">
        <NuxtLink :to="bkkbudget.path" class="mb-2">
          {{ bkkbudget.title }}
        </NuxtLink>
        <NuxtLink
          v-for="(item, index) in bkkbudget.des"
          :to="item.path"
          :key="index"
          class="opacity-50 space-y-1 w-max"
        >
          {{ item.title }}
        </NuxtLink>
      </div>
      <div class="text-start flex flex-col">
        <NuxtLink :to="community.path" class="mb-2">
          {{ community.title }}
        </NuxtLink>
        <NuxtLink
          v-for="(item, index) in community.des"
          :to="item.path"
          :key="index"
          class="opacity-50 space-y-1"
        >
          {{ item.title }}
        </NuxtLink>
      </div>
    </div>
    <WvFooter v-if="!isAboutFooter()" :dark="true" />
    <AboutFooter v-if="isAboutFooter()" />
  </div>
</template>

<script>
import Vue from "vue";
import { uuid } from "vue-uuid";

/* @ts-ignore */
import WvNavbar from "@wevisdemo/ui/vue2/navbar";
/* @ts-ignore */
import WvFooter from "@wevisdemo/ui/vue2/footer";
/* @ts-ignore */
import WvNavButton from "@wevisdemo/ui/vue2/nav-button";
/* @ts-ignore */
import WvCookieConsent from "@wevisdemo/ui/vue2/cookie-consent";
import AboutFooter from "~/components/AboutFooter.vue";

export default Vue.extend({
  components: { WvNavbar, WvFooter, WvNavButton, WvCookieConsent, AboutFooter },

  data() {
    return {
      routes: [
        { label: "สำรวจการใช้งบประมาณ", path: "/bkkbudget" },
        { label: "พัฒนาชุมชนเมืองให้เข้มแข็ง", path: "/communityfund" },
        { label: "เกี่ยวกับโครงการ", path: "/about" },
      ],
      footerComponent: "AboutFooter",
      cookieOptions: ["Functionality"],
      uuid: uuid.v1(),
      bkkbudget: {
        title: "สำรวจการใช้งบประมาณ",
        path: "/bkkbudget",
        des: [
          {
            title: "ทำความเข้าใจแผนการใช้งบ",
            path: "/bkkbudget#sections-strategy-plan",
          },
          { title: "สำรวจการใช้งบประมาณ", path: "/bkkbudget#budget-plans" },
          {
            title: "อยากให้ใช้งบทำอะไร",
            path: "/bkkbudget#allocate-question",
          },
        ],
      },
      community: {
        title: "พัฒนาชุมชนเมืองให้เข้มแข็ง",
        path: "/communityfund",
        des: [
          {
            title: "ทำความรู้จักโครงการชุมชนเข้มแข็ง",
            path: "/communityfund#section-get-to-know",
          },
          {
            title: "สำรวจโครงการของชุมชนตามเขตที่คุณสนใจ",
            path: "/communityfund#community-survey",
          },
          {
            title: "อยากให้ชุมชนของคุณพัฒนาโครงการอะไร",
            path: "/communityfund#community-plans",
          },
        ],
      },
      footerNav: [
        {
          title: "หน้าแรก",
          path: "/",
        },
        {
          title: "About us",
          path: "/about",
        },
        {
          title: "สำรวจการใช้งบประมาณ",
          path: "/bkkbudget/explore?select=YearlyBudget",
          des: [
            {
              title: "ทำความเข้าใจแผนการใช้งบ",
              path: "/bkkbudget#sections-strategy-plan",
            },
            { title: "สำรวจการใช้งบประมาณ", path: "/bkkbudget#budget-plans" },
            {
              title: "อยากให้ใช้งบทำอะไร",
              path: "/bkkbudget#allocate-question",
            },
          ],
        },
        {
          title: "พัฒนาชุมชนเมืองให้เข้มแข็ง",
          path: "/communityfund/explore?select=YearlyBudget",
          des: [
            {
              title: "ทำความรู้จักโครงการชุมชนเข้มแข็ง",
              path: "/communityfund#section-get-to-know",
            },
            {
              title: "สำรวจโครงการของชุมชนตามเขตที่คุณสนใจ",
              path: "/communityfund#community-survey",
            },
            {
              title: "อยากให้ชุมชนของคุณพัฒนาโครงการอะไร",
              path: "/communityfund#community-plans",
            },
          ],
        },
      ],
    };
  },

  mounted() {
    if (this.$cookies.get("uuid")) {
      this.$store.commit("setCookieState", true);
    }
  },
  methods: {
    isAboutFooter() {
      const routeName = this.$route.name;
      return routeName === "about";
    },
    async onCookieAccept(option) {
      if (option.Functionality) {
        // Initialize or enable analytics
      }
      if (!this.$cookies.get("uuid")) {
        this.$cookies.set("uuid", this.uuid);
        this.$store.commit("setCookieState", true);
        const messageRef = this.$fire.database.ref("user");
        const userSeq = this.$fire.database
          .ref("sequence")
          .child("user_sequence");
        try {
          const a = await userSeq.once("value");
          let r = a.val();
          await messageRef.child((++r).toString()).set({
            isInBkk: "",
            hasHouseReg: "",
            district: "",
            province: "",
            userid: this.$cookies.get("uuid"),
          });
          userSeq.set(r);
        } catch (e) {
          alert(e);
          return;
        }
        // eslint-disable-next-line no-console
      }
      this.$cookies.set("isVoted", "true");
    },
  },
});
</script>
