<template>
  <div id="section-get-to-know" class="py-5">
    <p class="wv-h5 py-5 font-bold">
      ทำความรู้จัก<br />
      ‘โครงการชุมชนเข้มแข็งฯ’
    </p>
    <div id="section-expand">
      <div id="section-1" class="mx-3">
        <div
          v-on:click="() => handleSelected(1)"
          class="bg-wv-yello border border-wv-gray-60 wv-b3 font-bold py-[10px] px-[24px] text-left rounded-t-[5px]"
        >
          คืออะไร ?
        </div>
        <div
          v-show="selected === 1"
          class="bg-white text-center py-[20px] wv-b5 px-3 border border-wv-gray-60 border-y-0"
        >
          <p>
            โครงการชุมชนเข้มแข็งพัฒนาตนเองตามหลัก
            ปรัชญาเศรษฐกิจพอเพียงเป็นหนึ่งในนโยบาย ของกรุงเทพมหานครที่<b
              >ต้องการพัฒนาชุมชนให้น่าอยู่ โดยใช้หลักการ
              ‘การมีส่วนร่วมของประชาชน’ ในการบริหาร ที่ให้ประชาชนคิดและดำเนินการ
              แก้ไขปัญหาในชุมชนตัวเอง</b
            >
            โดยรัฐให้การสนับสนุน และภาคเอกชนให้ความช่วยเหลือ เพื่อให้แก้ไขปัญหา
            ได้ตรงตามความต้องการของชุมชน เพื่อส่งเสริม
            คุณภาพชีวิตและพัฒนาให้ชุมชนพึ่งพาตัวเองได้ 
          </p>
          <p class="mt-2">
            โครงการชุมชนเข้มแข็งฯ เริ่มต้นขึ้น ในปีงบประมาณ 2566
            และจัดเป็นโครงการต่อเนื่อง ที่<b
              >เปิดโอกาสให้ชุมชนที่จัดตั้งตามระเบียบของ กทม. กว่า 2,009 ชุมชน
              (พฤษภาคม 2566) เสนอโครงการเพื่อพัฒนาชุมชนในเรื่องที่ต้องการ
              ผ่านงบประมาณชุมชนละ 200,000 บาท</b
            >
          </p>
        </div>
      </div>
      <div id="section-2" class="mx-3">
        <div
          v-on:click="() => handleSelected(2)"
          class="bg-wv-yello border border-wv-gray-60 wv-b3 font-bold py-[10px] px-[24px] text-left"
        >
          จุดเริ่มต้นของงบ มาจากไหน ?
        </div>
        <div
          class="bg-white text-center py-[20px] px-3 border border-wv-gray-60 border-y-0"
          v-show="selected === 2"
        >
          <p>
            <b>
              โครงการชุมชนเข้มแข็งฯ เกิดขึ้นจากการผลักดัน นโยบาย
              ‘โครงการชุมชนเข้มแข็งฯ พัฒนาชุมชน 200,000 บาท’
              ของพรรคเพื่อไทยจากแนวคิด ‘ประชาชนคิด ประชาชนใช้ ประชาชนทำ
              และประชาชน ตรวจสอบ’ ซึ่งเป็นนโยบายกระจายอำนาจ (decentralization)
              และกระจายทรัพยากรสู่ชุมชน</b
            >
            เพื่อให้ตอบสนองต่อความต้องการ ของประชาชน ได้อย่างเหมาะสมและทันท่วงที
            เปิดโอกาสให้ประชาชน มีส่วนร่วมในการบริหารจัดการพื้นที่ของตัวเอง
            ได้อย่างอิสระ เพื่อกำหนดโครงการ หรือสิ่งที่ต้องการด้วยตัวเอง
          </p>
        </div>
      </div>
      <div id="section-3" class="mx-3">
        <div
          v-on:click="() => handleSelected(3)"
          class="bg-wv-yello border border-wv-gray-60 wv-b3 font-bold py-[10px] px-[24px] text-left"
        >
          คืออะไร ?
        </div>
        <div
          v-show="selected === 3"
          class="bg-white text-center py-[20px] wv-b5 px-3 border border-wv-gray-60 border-y-0"
        >
          <p>
            ชุมชนได้รับงบประมาณ 200,000 บาท
            ผ่านการจัดสรรโดยสำนักงานเขตที่ชุมชนสังกัดอยู่
          </p>
        </div>
      </div>
      <div id="section-4" class="mx-3">
        <div
          v-on:click="() => handleSelected(4)"
          class="bg-wv-yello border border-wv-gray-60 wv-b3 font-bold py-[10px] px-[24px] text-left"
        >
          ชุมชนได้รับงบประมาณเท่าไหร่ ?
        </div>
        <div
          v-show="selected === 4"
          class="bg-white text-center py-[20px] wv-b5 px-3 border border-wv-gray-60 border-y-0"
        >
          <p class="font-bold">
            สามารถใช้ดำเนินโครงการตามหลักเกณฑ์การ พิจารณาแผนพัฒนาชุมชนฯ 5 ด้าน
            คือ
          </p>
          <ul class="list-disc text-left w-max py-2 mx-auto list-inside">
            <li>ด้านเศรษฐกิจ</li>
            <li>ด้านกายภาพและสิ่งแวดล้อม</li>
            <li>ด้านสังคม</li>
            <li>ด้านอนามัย</li>
            <li>ด้านจิตใจ</li>
          </ul>
          <p>
            โดยการเสนอโครงการ<b>ต้องมีวัตถุประสงค์ อย่างน้อย 2 ด้าน</b
            >จากที่กล่าวมา
          </p>

          <button
            class="text-wv-gray-80 border border-wv-gray-80 py-[5px] px-[10px] rounded-[5px] mt-4 wv-b5"
          >
            อ่านเอกสารระเบียบและคู่มือเพิ่มเติม
          </button>
        </div>
      </div>
      <div id="section-5" class="mx-3">
        <div
          v-on:click="() => handleSelected(5)"
          class="bg-wv-yello border border-wv-gray-60 wv-b3 font-bold py-[10px] px-[24px] text-left"
        >
          เล่ากระบวนการของงบฯ ให้ฟังหน่อย ?
        </div>
        <div
          v-show="selected === 5"
          class="bg-white text-center py-[20px] wv-b5 px-3 border border-wv-gray-60 border-y-0"
        >
          <p>
            งบประมาณโครงการชุมชนเข้มแข็งฯ ใช้ ‘ปีงบประมาณ’ ในการกำหนด
            ‘แผนปฏิบัติงาน’
            <br /><b
              >เริ่มนับตั้งแต่วันที่ 1 ตุลาคม ของ ‘ปีก่อนหน้า’ ถึงวันที่ 30
              กันยายนของ ‘ปีปัจจุบัน’ โดยปี พ.ศ. ของ ‘ปัจจุบัน’
              นั้นจะเป็นชื่อของงบประมาณนั้น ๆ </b
            >
          </p>
        </div>
      </div>
      <div id="section-6" class="mx-3">
        <div
          v-on:click="() => handleSelected(6)"
          class="bg-wv-yello border border-wv-gray-60 wv-b3 font-bold py-[10px] px-[24px] text-left"
        >
          อยากมีส่วนร่วมกับงบโครงการฯ ต้องทำอะไรบ้าง ?
        </div>
        <div
          v-show="selected === 6"
          class="bg-white text-center py-[20px] wv-b5 px-3 border border-wv-gray-60 border-y-0"
        >
          <div class="bg-wv-cream rounded-[10px] p-[10px] m-[10px]">
            <p class="wv-b3 font-bold">หน้าที่</p>
            <p class="wv-b6">
              เจ้าหน้าที่ฝ่ายพัฒนาชุมชนฯ จะนัดหมายชุมชน เพื่อเปิดเวที
              ไม่น้อยกว่า 2 ครั้ง
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
                  ฝ่ายพัฒนาชุมชนฯ จะชี้แจงหลักเกณฑ์ ของโครงการฯ และสรรหา
                  <b>‘คณะทำงาน จัดทำแผนพัฒนาชุมชนระดับชุมชน’ </b>
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
                  คณะทำงานฯระดับชุมชนนำความคิดเห็น
                  ของคนในชุมชนมาจัดลำดับความสำคัญ และเสนอเป็นโครงการ
                  โดยขอมติจากชุมชน
                </p>
              </div>
            </div>
          </div>
          <img
            src="~/assets/icons/arrow_down.svg"
            alt="coin"
            class="my-3 mx-auto"
          />
          <div class="bg-wv-cream rounded-[10px] p-[10px] m-[10px]">
            <p class="wv-b3 font-bold">ชุมชนจัดทำโครงการ</p>
            <div class="flex">
              <img
                src="~/assets/icons/circle_icon.svg"
                alt="coin"
                class="min-w-[30px] mr-2 -mt-[20px]"
              />

              <p class="wv-b6 text-left">
                ชุมชนจัดทำโครงการและส่งให้สำนักงานเขต
                เพื่อให้คณะกรรมการอำนวยการจัดทำแผน พัฒนาชุมชน ระดับเขต
                พิจารณาว่า ‘อนุมัติ’ หรือ ‘ไม่อนุมัติ’ 
              </p>
            </div>
          </div>
          <img
            src="~/assets/icons/arrow_down.svg"
            alt="coin"
            class="my-3 mx-auto"
          />
          <div class="bg-wv-cream rounded-[10px] p-[10px] m-[10px]">
            <p class="wv-b3 font-bold">โครงการชุมชนได้รับ ‘อนุมัติ’</p>
            <div class="flex">
              <img
                src="~/assets/icons/circle_icon.svg"
                alt="coin"
                class="min-w-[30px] mr-2 -mt-[20px]"
              />
              <p class="wv-b6 text-left">
                สำนักงานเขตดำเนินการจัดซื้อจัดจ้าง ให้แก่
                โครงการที่ได้รับอนุมัติตามระเบียบและ หลักเกณฑ์ที่เกี่ยวข้อง
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="section-7" class="mx-3">
        <div
          v-on:click="() => handleSelected(7)"
          class="bg-wv-yello border border-wv-gray-60 wv-b3 font-bold py-[10px] px-[24px] text-left"
        >
          ทำความรู้จัก ‘คณะทำงานจัดทำ แผนพัฒนาชุมชนระดับชุมชน’ คือใคร
          ทำหน้าที่อะไรบ้าง ?
        </div>
        <div
          v-show="selected === 7"
          class="bg-white text-center py-[20px] wv-b5 px-3 border border-wv-gray-60 border-t-0 rounded-b-[5px]"
        >
          <p>
            เลือกจากคนที่มาเข้าร่วมการเปิดเวทีฯ ครั้งแรก จำนวน 7 - 15 คน
            โดยแต่งตั้ง ตำแหน่ง ประธาน รองประธาน เลขานุการ ตามความเหมาะสม
          </p>
          <div class="bg-wv-cream rounded-[10px] p-[10px] m-[10px]">
            <p class="wv-b3 font-bold">หน้าที่</p>
            <ul class="list-outside wv-b6 list-disc pl-[30px] text-left">
              <li>
                สำรวจปัญหาของชุมชนเพื่อจัดทำโครงการฯ ร่วมกับฝ่ายพัฒนาชุมชนฯ
              </li>
              <li>จัดประชุม กำหนดระยะเวลา และวางแผนการทำงาน</li>
              <li>เปิดเวทชุมชน เพื่อรับฟังความเห็นชุมชน</li>
              <li>
                นำเสนอโครงการต่อคณะกรรมการอำนวยการจัดทำแผนพัฒนาชุมชนระดับเขต
              </li>
            </ul>
          </div>
        </div>
      </div>
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
