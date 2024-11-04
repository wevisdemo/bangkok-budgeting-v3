<template>
  <div id="section-get-to-know" class="py-5">
    <p class="wv-h5 py-5 font-bold">
      ทำความรู้จัก<br />
      ‘โครงการชุมชนเข้มแข็งฯ’
    </p>
    <div
      id="section-expand"
      class="md:max-w-[900px] mx-auto overflow-hidden px-3"
    >
      <button id="section-1" class="w-full">
        <div
          v-on:click="() => handleSelected(1)"
          class="bg-wv-yellow border border-wv-gray-60 flex justify-between wv-b3 font-bold py-[10px] px-[24px] text-left rounded-t-[5px]"
        >
          คืออะไร ?<img
            v-if="selected != 1"
            class="w-[20px]"
            src="~/assets/icons/selectedExpend.svg"
          />
          <img
            v-if="selected === 1"
            class="w-[20px]"
            src="~/assets/icons/unexpand.svg"
          />
        </div>
        <div
          v-show="selected === 1"
          class="bg-white text-center py-[20px] wv-b5 px-3 border border-wv-gray-60 border-y-0"
        >
          <p>
            โครงการชุมชนเข้มแข็งพัฒนาตนเองตามหลัก<br
              class="md:hidden"
            />ปรัชญาเศรษฐกิจพอเพียงเป็นหนึ่งในนโยบาย<br />
            ของกรุงเทพมหานครที่<b
              >ต้องการพัฒนาชุมชนให้น่าอยู่<br class="md:hidden" />
              โดยใช้หลักการ ‘การมีส่วนร่วมของประชาชน’<br />
              ในการบริหาร ที่ให้ประชาชนคิดและดำเนินการ<br
                class="md:hidden"
              />แก้ไขปัญหาในชุมชนตัวเอง</b
            >
            โดยรัฐให้การสนับสนุน<br />
            และภาคเอกชนให้ความช่วยเหลือ เพื่อให้แก้ไขปัญหา<br
              class="md:hidden"
            />ได้ตรงตามความต้องการของชุมชน<br class="hidden md:block" />
            เพื่อส่งเสริม<br
              class="md:hidden"
            />คุณภาพชีวิตและพัฒนาให้ชุมชนพึ่งพาตัวเองได้ 
          </p>
          <img
            src="~/assets/illustrations/toKnow01.svg"
            class="mx-auto md:w-[350px] my-4"
          />
          <p class="mt-2">
            โครงการชุมชนเข้มแข็งฯ เริ่มต้นขึ้น<br class="md:hidden" />
            ในปีงบประมาณ 2566 และจัดเป็นโครงการต่อเนื่อง<br />
            ที่<b
              >เปิดโอกาสให้ชุมชนที่จัดตั้งตามระเบียบของ กทม.<br
                class="md:hidden"
              />
              กว่า 2,009 ชุมชน (พฤษภาคม 2566)<br />
              เสนอโครงการเพื่อพัฒนาชุมชนในเรื่องที่ต้องการ<br
                class="md:hidden"
              />
              ผ่านงบประมาณชุมชนละ 200,000 บาท</b
            >
          </p>
        </div>
      </button>
      <button id="section-2" class="w-full">
        <div
          v-on:click="() => handleSelected(2)"
          class="bg-wv-yellow border border-wv-gray-60 flex justify-between wv-b3 font-bold py-[10px] px-[24px] text-left"
        >
          จุดเริ่มต้นของงบ มาจากไหน ?<img
            v-if="selected != 2"
            class="w-[20px]"
            src="~/assets/icons/selectedExpend.svg"
          />
          <img
            v-if="selected === 2"
            class="w-[20px]"
            src="~/assets/icons/unexpand.svg"
          />
        </div>
        <div
          class="bg-white text-center py-[20px] px-3 border border-wv-gray-60 border-y-0"
          v-show="selected === 2"
        >
          <img
            src="~/assets/illustrations/toKnow02.svg"
            class="mx-auto md:w-[350px] mb-4"
          />
          <p>
            <b>
              โครงการชุมชนเข้มแข็งฯ เกิดขึ้นจากการผลักดัน<br
                class="md:hidden"
              />นโยบาย<br class="hidden md:block" />
              ‘โครงการชุมชนเข้มแข็งฯ พัฒนาชุมชน<br class="md:hidden" />
              200,000 บาท’ ของพรรคเพื่อไทย<br
                class="hidden md:block"
              />จากแนวคิด<br class="md:hidden" />
              ‘ประชาชนคิด ประชาชนใช้ ประชาชนทำ และประชาชน<br
                class="md:hidden"
              />ตรวจสอบ’<br class="hidden md:block" />
              ซึ่งเป็นนโยบายกระจายอำนาจ<br class="md:hidden" />
              (decentralization) และกระจายทรัพยากรสู่ชุมชน</b
            ><br />
            เพื่อให้ตอบสนองต่อความต้องการของประชาชน<br
              class="md:hidden"
            />ได้อย่างเหมาะสมและทันท่วงที<br class="hidden md:block" />
            เปิดโอกาสให้ประชาชน<br
              class="md:hidden"
            />มีส่วนร่วมในการบริหารจัดการพื้นที่ของตัวเอง<br />
            ได้อย่างอิสระ เพื่อกำหนดโครงการ<br
              class="md:hidden"
            />หรือสิ่งที่ต้องการด้วยตัวเอง
          </p>
        </div>
      </button>
      <button id="section-3" class="w-full">
        <div
          v-on:click="() => handleSelected(3)"
          class="bg-wv-yellow border flex justify-between border-wv-gray-60 wv-b3 font-bold py-[10px] px-[24px] text-left"
        >
          ชุมชนได้รับงบประมาณเท่าไหร่ ?<img
            v-if="selected != 3"
            class="w-[20px]"
            src="~/assets/icons/selectedExpend.svg"
          />
          <img
            v-if="selected === 3"
            class="w-[20px]"
            src="~/assets/icons/unexpand.svg"
          />
        </div>
        <div
          v-show="selected === 3"
          class="bg-white text-center py-[20px] wv-b5 px-3 border border-wv-gray-60 border-y-0"
        >
          <img
            src="~/assets/illustrations/toKnow03.svg"
            class="mx-auto md:w-[350px] mb-4"
          />
          <p>
            <b>ชุมชนได้รับงบประมาณ 200,000 บาท<br class="md:hidden" /></b>
            ผ่านการจัดสรรโดยสำนักงานเขตที่ชุมชนสังกัดอยู่
          </p>
        </div>
      </button>
      <button id="section-4" class="w-full">
        <div
          v-on:click="() => handleSelected(4)"
          class="bg-wv-yellow border flex justify-between border-wv-gray-60 wv-b3 font-bold py-[10px] px-[24px] text-left"
        >
          งบประมาณ 200,000 บาท ชุมชนใช้ทำอะไรได้บ้าง ?<img
            v-if="selected != 4"
            class="w-[20px]"
            src="~/assets/icons/selectedExpend.svg"
          />
          <img
            v-if="selected === 4"
            class="w-[20px]"
            src="~/assets/icons/unexpand.svg"
          />
        </div>
        <div
          v-show="selected === 4"
          class="bg-white text-center py-[20px] wv-b5 px-3 border border-wv-gray-60 border-y-0"
        >
          <p class="font-bold">
            สามารถใช้ดำเนินโครงการตามหลักเกณฑ์การ<br />
            พิจารณาแผนพัฒนาชุมชนฯ 5 ด้าน คือ
          </p>
          <ul class="list-disc text-left w-max py-2 mx-auto list-inside">
            <li>ด้านเศรษฐกิจ</li>
            <li>ด้านกายภาพและสิ่งแวดล้อม</li>
            <li>ด้านสังคม</li>
            <li>ด้านอนามัย</li>
            <li>ด้านจิตใจ</li>
          </ul>
          <p>
            โดยการเสนอโครงการ<b
              >ต้องมีวัตถุประสงค์<br class="md:hidden" />
              อย่างน้อย 2 ด้าน</b
            >จากที่กล่าวมา
          </p>

          <a
            class="text-wv-gray-80 border border-wv-gray-80 py-[5px] px-[10px] rounded-[5px] mt-4 wv-b5 flex w-fit mx-auto items-center"
            href="https://drive.google.com/drive/folders/15AlfhaCDOiRQJs27O7QE58TXZqxDdgYf"
            target="_blank"
          >
            อ่านเอกสารระเบียบและคู่มือเพิ่มเติม
            <svg
              class="ml-1"
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="7.7832" cy="7.5" r="7.5" fill="#6E6E6E" />
              <path
                d="M5.15332 12.6182V10.9935H6.80752V7.28633H5.22717V5.66167H8.90481V10.9935H10.4113V12.6182H5.15332ZM7.75278 4.71641C7.40815 4.71641 7.11276 4.60318 6.8666 4.37671C6.63028 4.1404 6.51213 3.8647 6.51213 3.54961C6.51213 3.20499 6.62536 2.92437 6.85183 2.70774C7.08814 2.49112 7.38846 2.38281 7.75278 2.38281C8.07771 2.38281 8.36326 2.50097 8.60942 2.73728C8.86542 2.96375 8.99343 3.23453 8.99343 3.54961C8.99343 3.8647 8.86542 4.1404 8.60942 4.37671C8.36326 4.60318 8.07771 4.71641 7.75278 4.71641Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </button>
      <button id="section-5" class="w-full">
        <div
          v-on:click="() => handleSelected(5)"
          class="bg-wv-yellow border flex justify-between border-wv-gray-60 wv-b3 font-bold py-[10px] px-[24px] text-left"
        >
          เล่ากระบวนการของงบฯ ให้ฟังหน่อย ?<img
            v-if="selected != 5"
            class="w-[20px]"
            src="~/assets/icons/selectedExpend.svg"
          />
          <img
            v-if="selected === 5"
            class="w-[20px]"
            src="~/assets/icons/unexpand.svg"
          />
        </div>
        <div
          v-show="selected === 5"
          class="bg-white text-center py-[20px] wv-b5 px-3 border border-wv-gray-60 border-y-0"
        >
          <p>
            งบประมาณโครงการชุมชนเข้มแข็งฯ ใช้<br class="md:hidden" />
            ‘ปีงบประมาณ’<br class="hidden md:block" />
            ในการกำหนด ‘แผนปฏิบัติงาน’ <br /><b
              >เริ่มนับตั้งแต่วันที่ 1 ตุลาคม ของ ‘ปีก่อนหน้า’<br />
              ถึงวันที่ 30 กันยายนของ ‘ปีปัจจุบัน’ โดยปี พ.ศ.<br
                class="md:hidden"
              />
              ของ ‘ปัจจุบัน’ นั้น<br
                class="hidden md:block"
              />จะเป็นชื่อของปีงบประมาณนั้น ๆ </b
            >
          </p>
          <img
            src="~/assets/illustrations/toKnow05.svg"
            class="mx-auto md:w-[350px] my-4 md:hidden"
          />
          <img
            src="~/assets/illustrations/toKnow05_desktop.svg"
            class="mx-auto my-4 hidden md:block"
          />
        </div>
      </button>
      <button id="section-6" class="w-full">
        <div
          v-on:click="() => handleSelected(6)"
          class="bg-wv-yellow border flex justify-between border-wv-gray-60 wv-b3 font-bold py-[10px] px-[24px] text-left"
        >
          อยากมีส่วนร่วมกับงบโครงการฯ ต้องทำอะไรบ้าง ?<img
            v-if="selected != 6"
            class="w-[20px]"
            src="~/assets/icons/selectedExpend.svg"
          />
          <img
            v-if="selected === 6"
            class="w-[20px]"
            src="~/assets/icons/unexpand.svg"
          />
        </div>
        <div
          v-show="selected === 6"
          class="bg-white text-center py-[20px] wv-b5 px-3 border border-wv-gray-60 border-y-0"
        >
          <div
            class="bg-wv-cream rounded-[10px] p-[10px] m-[10px] max-w-[350px] mx-auto"
          >
            <p class="wv-b3 font-bold">เข้าร่วมเวทีชุมชน</p>
            <p class="wv-b6">
              เจ้าหน้าที่ฝ่ายพัฒนาชุมชนฯ จะนัดหมายชุมชน<br />
              เพื่อเปิดเวที ไม่น้อยกว่า 2 ครั้ง
            </p>
            <div class="mt-3 flex">
              <img
                src="~/assets/icons/circle_icon.svg"
                alt="coin"
                class="min-w-[30px] mr-2 -mt-[20px]"
              />

              <div class="text-left">
                <p class="wv-b3 font-bold">การเปิดเวทีครั้งที่ 1</p>
                <p class="wv-b6">
                  ฝ่ายพัฒนาชุมชนฯ จะชี้แจงหลักเกณฑ์<br />
                  ของโครงการฯ และสรรหา
                  <b
                    >‘คณะทำงาน<br />
                    จัดทำแผนพัฒนาชุมชนระดับชุมชน’ </b
                  ><br />
                  พร้อมทั้งประชาสัมพันธ์ให้คนในชุมชนทราบ
                </p>
              </div>
            </div>
            <div class="mt-3 flex">
              <img
                src="~/assets/icons/circle_icon.svg"
                alt="coin"
                class="min-w-[30px] mr-2 -mt-[20px]"
              />
              <div class="text-left">
                <p class="wv-b3 font-bold">การเปิดเวทีครั้งที่ 2</p>
                <p class="wv-b6">
                  คณะทำงานฯระดับชุมชนนำความคิดเห็น<br />
                  ของคนในชุมชนมาจัดลำดับความสำคัญ<br />
                  และเสนอเป็นโครงการ โดยขอมติจากชุมชน
                </p>
              </div>
            </div>
          </div>
          <img
            src="~/assets/icons/arrow_down.svg"
            alt="coin"
            class="my-3 mx-auto"
          />
          <div
            class="bg-wv-cream max-w-[350px] mx-auto rounded-[10px] p-[10px] m-[10px]"
          >
            <p class="wv-b3 font-bold">ชุมชนจัดทำโครงการ</p>
            <div class="flex">
              <img
                src="~/assets/icons/circle_icon.svg"
                alt="coin"
                class="min-w-[30px] mr-2 -mt-[20px]"
              />

              <p class="wv-b6 text-left">
                ชุมชนจัดทำโครงการและส่งให้สำนักงานเขต<br />
                เพื่อให้คณะกรรมการอำนวยการจัดทำแผน<br />
                พัฒนาชุมชน ระดับเขต พิจารณาว่า ‘อนุมัติ’<br />
                หรือ ‘ไม่อนุมัติ’ 
              </p>
            </div>
          </div>
          <img
            src="~/assets/icons/arrow_down.svg"
            alt="coin"
            class="my-3 mx-auto"
          />
          <div
            class="bg-wv-cream max-w-[350px] mx-auto rounded-[10px] p-[10px] m-[10px]"
          >
            <p class="wv-b3 font-bold">โครงการชุมชนได้รับ ‘อนุมัติ’</p>
            <div class="flex">
              <img
                src="~/assets/icons/circle_icon.svg"
                alt="coin"
                class="min-w-[30px] mr-2 -mt-[20px]"
              />
              <p class="wv-b6 text-left">
                สำนักงานเขตดำเนินการจัดซื้อจัดจ้าง ให้แก่<br />
                โครงการที่ได้รับอนุมัติตามระเบียบและ<br />
                หลักเกณฑ์ที่เกี่ยวข้อง
              </p>
            </div>
          </div>
        </div>
      </button>
      <button id="section-7" class="w-full">
        <div
          v-on:click="() => handleSelected(7)"
          class="bg-wv-yellow border border-wv-gray-60 flex justify-between wv-b3 font-bold py-[10px] px-[24px] text-left"
        >
          ทำความรู้จัก ‘คณะทำงานจัดทำ แผนพัฒนาชุมชนระดับชุมชน’ คือใคร
          ทำหน้าที่อะไรบ้าง ?
          <img
            v-if="selected != 7"
            class="w-[20px]"
            src="~/assets/icons/selectedExpend.svg"
          />
          <img
            v-if="selected === 7"
            class="w-[20px]"
            src="~/assets/icons/unexpand.svg"
          />
        </div>
        <div
          v-show="selected === 7"
          class="bg-white text-center py-[20px] wv-b5 px-3 border border-wv-gray-60 border-t-0 rounded-b-[5px]"
        >
          <p>
            เลือกจากคนที่มาเข้าร่วมการเปิดเวทีฯ<br />
            ครั้งแรก จำนวน 7 - 15 คน โดยแต่งตั้ง<br />
            ตำแหน่ง ประธาน รองประธาน เลขานุการ<br />
            ตามความเหมาะสม
          </p>
          <div
            class="bg-wv-cream max-w-[350px] mx-auto rounded-[10px] p-[10px] m-[10px]"
          >
            <p class="wv-b3 font-bold">หน้าที่</p>
            <ul class="list-outside wv-b6 list-disc pl-[30px] text-left">
              <li>
                สำรวจปัญหาของชุมชนเพื่อจัดทำโครงการฯ ร่วมกับฝ่ายพัฒนาชุมชนฯ
              </li>
              <li>
                จัดประชุม กำหนดระยะเวลา และวางแผนการ<br
                  class="hidden md:block"
                />ทำงาน
              </li>
              <li>เปิดเวทชุมชน เพื่อรับฟังความเห็นชุมชน</li>
              <li>
                นำเสนอโครงการต่อคณะกรรมการอำนวยการ<br
                  class="hidden md:block"
                />จัดทำแผนพัฒนาชุมชนระดับเขต
              </li>
            </ul>
          </div>
        </div>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: 0,
    };
  },
  methods: {
    handleSelected(select) {
      if (this.selected === select) {
        this.selected = 0;
      } else {
        this.selected = select;
      }
    },
  },
};
</script>
<style lang=""></style>
