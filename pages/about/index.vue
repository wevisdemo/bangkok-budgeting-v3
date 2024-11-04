<template>
  <BoxContainer>
    <div class="max-w-3xl m-auto flex flex-col px-5 gap-20">
      <div class="text-center mt-10 mb-5">
        <h1 class="wv-h4 font-black wv-kondolar">
          Bangkok<br class="md:hidden" />
          Budgeting
        </h1>
        <h1 class="wv-h5 wv-kondolar mt-3">
          เปิดเผย โปร่งใส<br class="md:hidden" />
          เข้าใจแผนการใช้งบ<br class="md:hidden" />
          กรุงเทพมหานคร
        </h1>
      </div>
      <!-- about -->
      <div class="grid gap-6">
        <h5 class="wv-h5 wv-bold">เกี่ยวกับโปรเจกต์นี้</h5>
        <div class="grid gap-4">
          <p>
            เมื่อพูดถึงกระบวนการจัดสรรงบประมาณในไทย การเปิดเผย เข้าถึง
            และการมีส่วนร่วมในการให้ความเห็นต่องบประมาณจากภาคประชาชนนั้นยังคงมีอยู่อย่างจำกัด
            ซึ่งอาจส่งผลโดยตรงต่อความโปร่งใสและความรับผิดชอบของภาครัฐได้
            โดยเฉพาะในกรุงเทพมหานครที่การจัดการโครงสร้างพื้นฐานและบริการสาธารณะของเมืองจำเป็นต้องมีการเปิดเผย
            แม้จะมีความพยายามในการเพิ่มความโปร่งใสและการมีส่วนร่วมของประชาชนผ่านการเข้าถึงข้อมูลงบประมาณที่ดีขึ้น
            แต่ชาวกรุงเทพฯ และประชาชนผู้จ่ายภาษี
            ยังคงต้องการแนวทางในการเข้าไปมีส่วนร่วมและมีบทบาทที่มากขึ้น
            เพื่อช่วยให้ กทม. ตัดสินใจใช้งบประมาณของเมืองได้อย่างตรงจุด
          </p>
          <p>
            ทีม WeVis และ HAND Social Enterprise
            จึงตั้งใจพัฒนาแพลตฟอร์มในรูปแบบเทคโนโลยีภาคประชาชน (Civic Tech)
            ภายใต้โครงการ Bangkok Budgeting
            เพื่อเปิดเผยข้อมูลให้ทุกคนในฐานะผู้เสียภาษี ได้เข้าถึง เข้าใจ
            และเป็นส่วนหนึ่งของการออกแบบงบประมาณของกรุงเทพฯ
            โดยเริ่มจากคำถามที่อาจจะคาใจหลายๆ คน ว่าตอนนี้กรุงเทพฯ
            วางแผนใช้งบประมาณเพื่อพัฒนาเมืองอย่างไร? ใช้งบประมาณเท่าไหร่?
            และประชาชนสามารถมีส่วนร่วมในการแสดงความคิดเห็นในเรื่องนี้ได้อย่างไรบ้าง?
            นอกจากนี้
            แพลตฟอร์มยังได้เปิดเผยรายละเอียดและกระบวนการของโครงการงบประมาณแบบมีส่วนร่วมใหม่ของกรุงเทพฯ
            ที่ชื่อว่า
            ‘โครงการชุมชนเข้มแข็งพัฒนาตนเองตามหลักปรัชญาเศรษฐกิจพอเพียง’
            ซึ่งถือเป็นหนึ่งในนโยบายของ กทม. ในการพัฒนาชุมชนผ่านหลักการ
            ‘การมีส่วนร่วมของประชาชน’ ในการบริหาร
            ที่ให้ประชาชนคิดและดำเนินการแก้ไขปัญหาในชุมชนของตัวเอง
          </p>
        </div>
      </div>
      <!-- data and restrictions -->
      <div class="grid gap-6">
        <h5 class="wv-h5 wv-bold">ที่มาของข้อมูล</h5>
        <div class="grid gap-4">
          <p>
            ทางทีมผู้พัฒนาได้ประสานขอใช้ข้อมูลจากสำนักงบประมาณกรุงเทพมหานครและสำนักงานการพัฒนาชุมชน
            โดยการสนับสนุนจากกรุงเทพมหานคร ประกอบไปด้วย
            แผนปฏิบัติราชการกรุงเทพมหานคร
            ข้อบัญญัติงบประมาณรายจ่ายกรุงเทพมหานครในแต่ละปี
            และข้อมูลการจัดซื้อจัดจ้างของโครงการชุมชนเข้มแข็งฯ
          </p>
        </div>
      </div>
      <!-- refs -->
      <div class="grid gap-6">
        <h5 class="wv-h5 wv-bold">อ้างอิงข้อมูลจาก</h5>
        <div class="grid gap-4">
          <ul class="list-disc list-inside">
            <li v-for="(ref, refIndex) in references" :key="refIndex">
              <a
                :href="ref.link"
                target="_blank"
                :class="ref.link ? 'underline cursor-pointer' : ''"
                >{{ ref.text }}</a
              >
            </li>
          </ul>
        </div>
      </div>
      <!-- policy -->
      <div class="grid gap-6">
        <h5 class="wv-h5 wv-bold">นโยบายการนำข้อมูลไปใช้ต่อ</h5>
        <div class="grid gap-4">
          <p>
            ทางทีมมีความตั้งใจที่พัฒนาทุกโปรเจกต์ให้เป็น Open Source
            และเปิดข้อมูลเป็น Open Data ภายใต้<a
              href="https://wevis.info/terms-of-use/"
              target="_blank"
              class="underline"
              >ข้อตกลงในการใช้งาน (Terms of Use)</a
            > หากมีข้อสงสัยต้องการสอบถามเพิ่มเติม
            ประสงค์แจ้งเปลี่ยนแปลงหรือเพิ่มเติมข้อมูลเพื่อความถูกต้อง
            หรือมีข้อเสนอแนะใดๆ สามารถติดต่อได้ที่ team@wevis.info
          </p>
        </div>
      </div>
      <!-- volunteers -->
      <div class="">
        <h5 class="wv-h5 wv-bold">ทีมงานร่วมพัฒนา</h5>
        <div class="">
          <div
            v-for="({ position, names, text }, volunteerIndex) in volunteers"
            :key="volunteerIndex"
          >
            <p class="wv-bold mb-2 mt-10">{{ position }}</p>
            <div class="flex flex-wrap">
              <template v-for="(name, nameIndex) in names">
                <span :key="nameIndex" class=""
                  ><div v-html="name" v-if="name"></div>
                </span>
              </template>
            </div>

            <div v-if="text" v-html="text"></div>
          </div>
        </div>
        <p class="py-4">
          ในปี 2024 โปรเจกต์ Bangkok Budgeting
          ได้รับการสนับสนุนทุนในการดำเนินงานจาก <a
            class="underline"
            href="https://www.ndi.org/"
            target="_blank"
            >National Democratic Institute: NDI</a
          >
          ซึ่งนำมาใช้เป็นต้นทุนในการรวมรวมข้อมูล ออกแบบ พัฒนาเว็บไซต์ ประสานงาน
          บริหารจัดการ ตลอดจนการจัดประชุมเพื่อดำเนินโครงการ
        </p>
      </div>

      <!-- partners -->
      <div class="grid gap-6">
        <h5 class="wv-h5 wv-bold">PARTNERS</h5>
        <div class="grid gap-4">
          <ul class="list-disc list-inside">
            <li
              v-for="({ name, link }, partnerNameIndex) in partners"
              :key="partnerNameIndex"
            >
              <a
                :href="link"
                target="_blank"
                :class="link ? 'cursor-pointer underline' : ''"
                >{{ name }}</a
              >
            </li>
          </ul>
        </div>
      </div>
      <!-- download -->
      <div class="flex justify-center">
        <WvButtonGroup center>
          <WvButton>
            <a
              href="https://docs.google.com/spreadsheets/d/15Xd-xM-Mi3qVRRyyqMxHrRgXYT3WNmWIzpvdUn9xWZo/edit?gid=1893592990#gid=1893592990"
              target="_blank"
              class="flex space-x-2 items-center"
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_314_173)">
                  <path
                    d="M7.03582 2.86356H1.17529V19.4081H19.8247V2.86356C19.8247 2.86356 15.306 2.86356 13.9642 2.86356"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M16.0317 8.65536L10.7284 13.9587L5.42513 8.65536"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                  <line
                    x1="10.667"
                    y1="0.5"
                    x2="10.667"
                    y2="13"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_314_173">
                    <rect
                      width="20.8333"
                      height="20"
                      fill="white"
                      transform="translate(0.0834961 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div>ดาวน์โหลดข้อมูล</div>
            </a>
          </WvButton>
          <WvButton>
            <a
              href="https://airtable.com/appsowPzCsRLmUvNx/shryu4errnlj1LWsM"
              target="_blank"
              class="flex space-x-2 items-center"
            >
              <img
                width="30"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAACa5JREFUaAXtWWtTVMkZfmaY4TbKTZTLBAQUxJV4qc2mSlNJ5T/kJ+Rz/tD+iXzLhyS1ycZsuVtRUNCIwjirKIW6pTAwl3Od1NP4HJrmDMVuspVya7rq+L793p+3+/TpQaA92h1od6DdgXYH2h1od6DdgXYH2h34n3QgY0cpl8vdU1NTOVv2E+LDTCbTSABvbLz6fSab/0Oh0NmbzSTinwTeOI5RqXqNKAw+N8i2trYK77e3l7p6+ma7OvModOeBjxRzs9lEJpOBTat1H/VGgOruuw1t30JvT0//5tZLnBspohlH6O3p/GhXl2A54mYTezUPvh/i5Ysyps5PFAQYuVwuMzTQj43nZfxscsoYFz6AVsf+2w6o63YcyUSpU8HKS+rK7RguL3+urBdEKK8/RXF8BPl8HlkZM2hvby+GBvvwbbkEP4hMd+jMd0CD8x/6MIbrK5ko9Rri5WPLJUujtOPKen6I0toTDA6cRn9/v3FPAHNG0FQM9BVQLq3BD2NUaz5YggIraRqlDYds0+a27vvyyqm4mosqntnGQYT1tSfo6cphZGTEYCO+ZEvLKZvN4syZM/B9H8/Wn2LmwiyaNQ/a3rJzKZMxoL0baNOqONf/JHM3ljtnDG5j7s7S+hoyzRDnz18EMWkccJIA6OjowOjoKDpzGTzjSgex2SIE4z5Mqoc68T82TctVre9v43JpHY1aBXNzc4fAEuIhwFwhPhwEPTExAcQBys/WzfauNQJYr5ixEzAzafEPbTRkL5nm0otKr3kalS8pV7bhR3j+7TO8f/cGCwsLBoONiTESwHKmUEYEPT09Db+xh+flZ/D8CLWGf2SV3VV354wtmfJIprn0otJrnkbly5p4QG28eI7NVy9w/fp1cyILh5pF+wSwhDbl3s/lcpidncVe5R02XpTN+1H3uNIHW9n2oVzD5m2ZfCUTte1tXnpR+bMJvFDUvRCvXm6gXHqCX3z6Kbq6upJFk618jxxaUogSNL9f8/PzWF5ZQSabRbE4YQB35TuMmV4D+djF2rz0omk6W2bz9HHn3HHcxltbm1h9vIJf3bqFnp6eBCx9VBt9ySeAKXAD0oAygu7s7MTClStYWloyjqNjRVaAznyHsVFggfkxqF0fLxQE+/b1a6zcv4dbt27i1KlT5r21c9s+lB8L2DYW6KtXr2JxcRGZTBYjI2PmEOvMZ480y05KvlVDmMPV2XndOJzzs1P3I7z77jss3r2DmzdvYmBgIAHrxlMMxk0AS3gc5SHW3d2Na9eu4d69RbPyw8PneGtFPre/vdP8WcBxIGwdedfe1gdhjIYX4f37d/jm69v45WefYWhoyNQiX9Zg+6gmxk0AR1F0pNMyJFURBM0r6LVrVw3oT35+wyRsxk3kculnIH1POtIKlW8Yxqh7MSqVbdz56kvcuHHd3KJYE3O4edJiHaqQBvbDU1BOogzK7c33hQlX7t/FzvZ71P0Y7L583Diu3J7bfJof9UEYoeZF2N2r4PY/vsDCwhUUi8XkW6umkNoxVDcp4ySAXSMZ2oEUjKDZVYI2K/2vr1Gp7KDuRYiiw02z4zKhHhXAuctrLt8wig3YanUPX37xF1yam8Xk5GRLsGk1S5YAlkCgRJXU1pMXaP7YYLfv/PPv2N2toOZHyUoLnEApVhq1bfl6GZ84xgHYKv765z9hevq8uQxpGzOWhvi0+NIlgG0jBrDn4hVYVNuboIvFcSzd/Qb1et2coCxUfqQ2oDRettRphHHT7Brf8/DV7b+hv++0AcvLEHNryJdz8a1ocmjR4LihAAoqygL39vbMvZv310f/fozpi/NAsxPdeR4kh6PahUrj5t7PBdSDJoIgwPL9u/jtb35teDaUh6btY/OMmZZD9SaAj0vOAPtF7DdFPLdepVIxV7lz586B8/lLc1h9soqZ2csA8ujKsQBFT/9cHGj3Ofa+ETQRhpE5FK98cjn5zr59+9bk5K5iXTxAVZ/isL400MbeNuJqCYwo9ZKTp5zzMAyxs7NjEvIHNgeTs/tzsxdRevoYfhCYwvm3JQ3FbUUZmye+AfvgHuYvzZrf5wLAxvL9ZaP1rqs+N6Yr5zz1HXYdWSxldOCjlaWcv5vtwcIKhQIuXpg2oFl4w28i+uBrx1E8m3JloyjGw+VFXJiZwvDwWbNaAkx//QVDoO16VQtlHLaO/CHAMrYpjViQHLmyfGcJmmAllw8L48NP1vTUJNbXHhsAns846Z+s/cL2t3EUA48ePsDExHgCTGCVgzkJmnURNGuym6aaSPdjH9AEsBS2sc0zIANXq1V4nofx8XHlPxKUBXJ79/X1YaI4htLaKqK4abY3V8+OS56r3whiEOzqo2WMnB3C+Nh4srKuvRKz4Wy8FsBeGPlQxiFdAlgCGZJKRsrAtVotAWvb2byKEWjec8dGz2J9bdV8U+sB4IcECdOEIOSnhzzw5PFDDPQXzKVCh5HikSqP6qKMoPn3Ny4Ea6RO+jT7Q6c0DezBuZz5OSBgraxsRW0/8QI9PDxsVmv10QMUJ6fNyoem8fvH995eBaX1VYyPjhy6VCgOqZtHc+YYGxvD5uamycHfw2wWHw7qNehjAHNLKACV5O2HYNlBBmYA21bBbCq9bHmqEjRP8FKphBfldXT39BqXanXX/NK6cnkeg4ODSaF2vON45RJo2hK0hgv8yAoLKB3INxoN844woJylU9BWlP4CTV+e3ryccAuyydw9hcKM+clJvVaDVLwAtcpBuewFmnP+jCVlDlLVkgCmQA+D0JCF7e7umhORBSm56HFFpOmYmHH4Nyc+GpTz4RD9PjlsW77TW1tbJg7/SsN89kgAUyhHguWVjhcLHv/cktKRsijN7WAn4W1wafY/NC5jKTYvJ2/evDFnhfn/JOs2lsBnIj42WN1qpFMxomkF/z9lqosLxNrtb7R0CWAWSiG/tdzG/O8W/ipxhxxd+XHzVj6t5K1i0f4kD/25lXlQCrT8EkT8hvEhWP5BjFshrSA56l1jcMrseVrBOjxcXVo82dhxxYsqr2xFWQdzcXCleQ/Y3t4225tzA5jXQH52+Jw+fdqAVYFMkDZcuTtnYhUnqkLceHaRrs6OK17UteXc1XGXEhO/Crz5GcBhGEa+70c8yrmyKsx1dhNQ32plqbP1iiXKWPKVTFR5pNec1Lax9bZcsSmjDTHx2+x5Xmze4WKxuJPNZp/yGKfRSR8V0Mo+TU+Zhusnuair59wett6Wk5etbD58op4n967l5eWZIAh+l81mx+zOuYE+trkF/HU2m/3jx1Z/u952B9odaHeg3YF2B9od+Ig78B9BXoZRBjVExQAAAABJRU5ErkJggg=="
                alt=""
              />
              <span>Feedback</span>
            </a>
          </WvButton>

          <WvButton>
            <a
              href="         https://github.com/wevisdemo/bangkok-budgeting-v3"
              target="_blank"
              class="flex space-x-2 items-center"
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5002 0.511719C7.83976 0.511719 0.00463867 8.34538 0.00463867 18.0073C0.00463867 25.7375 5.01713 32.2954 11.9702 34.6092C12.8435 34.771 13.1263 34.2287 13.1263 33.768V30.5109C8.25965 31.5693 7.24636 28.4464 7.24636 28.4464C6.45031 26.4242 5.30289 25.8862 5.30289 25.8862C3.71517 24.8 5.4239 24.8233 5.4239 24.8233C7.18075 24.9458 8.10511 26.6268 8.10511 26.6268C9.66513 29.3007 12.1976 28.528 13.1963 28.0804C13.3523 26.9505 13.8058 26.1778 14.3073 25.7418C10.4218 25.2972 6.33659 23.7969 6.33659 17.0946C6.33659 15.1832 7.02038 13.6232 8.13864 12.3985C7.95785 11.9568 7.35863 10.1766 8.30922 7.76802C8.30922 7.76802 9.77885 7.29856 13.122 9.56132C14.5172 9.1735 16.0131 8.97959 17.5002 8.9723C18.9874 8.97959 20.4847 9.1735 21.8829 9.56132C25.2231 7.29856 26.6898 7.76802 26.6898 7.76802C27.6419 10.178 27.0426 11.9582 26.8619 12.3985C27.9845 13.6232 28.6624 15.1847 28.6624 17.0946C28.6624 23.8144 24.5699 25.2942 20.6742 25.7273C21.3012 26.2696 21.8741 27.3339 21.8741 28.9669V33.768C21.8741 34.233 22.1541 34.7798 23.042 34.6077C29.9892 32.291 34.9959 25.7346 34.9959 18.0073C34.9959 8.34538 27.1622 0.511719 17.5002 0.511719Z"
                  fill="black"
                />
              </svg>

              <span>Github</span>
            </a>
          </WvButton>
        </WvButtonGroup>
      </div>
      <ShareLabel />
    </div>
  </BoxContainer>
</template>

<script lang="ts">
import Vue from "vue";
// @ts-ignore
import VueSharer from "vue-sharer";
// @ts-ignore
import WvButton from "@wevisdemo/ui/vue2/button";
// @ts-ignore
import WvButtonGroup from "@wevisdemo/ui/vue2/button-group";

import BoxContainer from "~/components/BoxContainer.vue";
import { createMetadata } from "~/utils/metadata";
import ShareLabel from "~/components/budget/ShareLabel.vue";

export default Vue.extend({
  name: "AboutPage",
  components: { BoxContainer, WvButton, WvButtonGroup, ShareLabel },
  directives: {
    sharer: VueSharer,
  },

  data() {
    return {
      shareUrl: `https://wevisdemo.github.io/bkk-budgeting/images/og_default.jpg`,
      isDownloadReady: false,
      download: require("~/assets/icons/download.svg"),
      icon_fb: require("~/assets/logo/facebook.svg"),
      icon_line: require("~/assets/logo/line.svg"),
      icon_twitter: require("~/assets/logo/twitter.svg"),
      references: [
        {
          text: "ระบบการบริหารจัดการ แผนพัฒนากรุงเทพมหานคร",
          link: "https://policy.bangkok.go.th/tracking/frontend/web/index.php?r=site%2Fvwdkrs672&ID=1",
        },
        {
          text: "แผนปฏิบัติราชการกรุงเทพมหานคร",
          link: "https://webportal.bangkok.go.th/pipd/page/sub/15272/%E0%B9%81%E0%B8%9C%E0%B8%99%E0%B8%9B%E0%B8%8F%E0%B8%B4%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%B4%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3-%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%B3%E0%B8%9B%E0%B8%B5",
        },
        {
          text: "Bangkok Open Policy",
          link: "https://openpolicy.bangkok.go.th/index.html",
        },
        { text: "ข้อบัญญัติงบประมาณรายจ่าย กรุงเทพมหานคร" },
        {
          text: "ข้อมูลจัดซื้อจัดจ้าง โครงการชุมชนเข้มแข็งพัฒนาตนเองตามหลักปรัชญาเศรษฐกิจพอเพียง",
        },
      ],
      volunteers: [
        {
          position: "เขียนโปรแกรม",
          names: [
            "<a href='https://github.com/MEEP00H' target='_blank'>โสภณ จำปาซ่อนกลิ่น</a>,&nbsp",
            "<a href='https://github.com/Th1nkK1D' target='_blank'>วิถี ภูษิตาศัย</a>",
          ],
        },
        {
          position: "ออกแบบ",
          names: ["นัฐพล ไก่แก้ว"],
        },
        {
          position: "วิเคราะห์ข้อมูล",
          names: ["ปฏิภาณ ศรีชัย"],
        },
        {
          position: "สืบค้นและเรียบเรียงข้อมูล",
          names: [
            "<a href='https://www.linkedin.com/in/alawee-wamae-113a7a1b3' target='_blank'>อาลาวีย์ วาแม</a>",
          ],
        },
        {
          position: "บรรณาธิการ",
          names: [
            "<a href=https://www.linkedin.com/in/thanisara-r/' target='_blank'>ธนิสรา เรืองเดช</a>",
          ],
        },
        {
          position: "ประสานงานและจัดการอื่นๆ",
          text: "ศุทธิรัตน์ พัชรวุฒิพันธุ์",
        },
      ],
      partners: [
        {
          name: "Hand Social Enterprise",
          img: "hand",
          link: "https://hand.co.th/",
        },
        {
          name: "กรุงเทพมหานคร",
        },
        {
          name: "National Democratic Institute",
          img: "siam_lab",
          link: "https://www.ndi.org/",
        },
      ],
    };
  },
  head: createMetadata({ pageName: "เกี่ยวกับโครงการ" }),
  methods: {
    async handleDownloadData() {
      try {
        // const result = await this.$nocoDb.dbTableRow.csvExport(
        //   "v1",
        //   "bangkok-budgeting",
        //   "Survey",
        //   "csv",
        // );
        // const blob = new Blob([result.data], { type: "text/csv;charset=utf-8;" });
        // const url = URL.createObjectURL(blob);
        // const link = document.createElement("a");
        // link.setAttribute("href", url);
        // link.setAttribute("download", "bangkok_budget_data.csv");
        // link.click();
        // return result;
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    },
  },
});
</script>
