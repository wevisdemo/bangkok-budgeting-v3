<template>
  <div class="fixed inset-0 z-[50]">
    <div
      v-if="isExpand"
      class="bg-black fixed inset-0 z-[60] p-5 h-screen bg-opacity-80 flex items-center"
    >
      <div
        class="absolute inset-0 top-0 left-0 cursor-pointer"
        @click.stop="isExpand = false"
      ></div>
      <div
        class="md:h-full w-full md:w-auto m-auto border border-black relative"
      >
        <img
          v-if="isExpand === 1"
          src="~/assets/images/manual01.jpeg"
          class="md:h-full w-full"
        />
        <img
          v-if="isExpand === 2"
          src="~/assets/images/manual02.jpeg"
          class="md:h-full w-full"
        />
        <img
          v-if="isExpand === 3"
          src="~/assets/images/manual03.jpeg"
          class="md:h-full w-full"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          class="absolute bottom-0 right-0 z-20 w-10 m-5 cursor-pointer"
          @click.stop="isExpand = false"
        >
          <path
            fill="black"
            d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896M288 512a38.4 38.4 0 0 0 38.4 38.4h371.2a38.4 38.4 0 0 0 0-76.8H326.4A38.4 38.4 0 0 0 288 512"
          ></path>
        </svg>
      </div>
    </div>
    <div
      class="fixed inset-0 bg-wv-gray-4 bg-opacity-70 z-40"
      @click="() => handleDesignDialog()"
    />
    <div
      class="lg:w-[850px] overflow-auto inset-0 lg:h-[600px] bg-white absolute z-50 lg:top-[50%] lg:translate-y-[-50%] lg:translate-x-[-50%] lg:left-[50%]"
    >
      <div
        class="bg-wv-yellow flex justify-end w-full items-center h-[50px] sticky top-0 z-10"
      >
        <i
          class="el-icon-close mr-4 cursor-pointer w-[15px]"
          @click="() => handleDesignDialog()"
        />
      </div>
      <p class="wv-b5 font-bold mt-6 mb-5">
        ขั้นตอนที่ 1: ดาวน์โหลดแบบฟอร์มโครงการ
      </p>
      <div class="mb-3">
        <a
          href="https://docs.google.com/document/d/1iOycCc-TOa6DO4g337sNnq4iycEpWHY8/edit?tab=t.0"
          target="_blank"
          class="wv-b7 text-wv-gray-80 underline flex items-center w-fit mx-auto bg-wv-gray-20 rounded-[3px] py-[5px] px-[10px]"
        >
          <img src="~/assets/images/download.svg" class="w-3 h-3 mr-2" />
          ดาวน์โหลดแบบฟอร์ม
        </a>
      </div>
      <div class="flex overflow-x-auto space-x-4 px-2 md:justify-center mb-3">
        <div class="relative min-w-max">
          <img
            @click="() => expandImgHandle(1)"
            src="~/assets/images/manual01.jpeg"
            class="max-h-[280px] min-w-max h-[280px] border border-black cursor-pointer"
          /><img
            src="~/assets/icons/expandIcon.svg"
            class="absolute bottom-0 right-0 w-10 m-3 cursor-pointer pointer-events-none"
            @click.stop="isExpand = false"
          />
        </div>
        <div class="relative min-w-max">
          <img
            @click="() => expandImgHandle(2)"
            src="~/assets/images/manual02.jpeg"
            class="max-h-[280px] min-w-max h-[280px] border border-black cursor-pointer"
          /><img
            src="~/assets/icons/expandIcon.svg"
            class="absolute bottom-0 right-0 w-10 m-3 cursor-pointer pointer-events-none"
            @click.stop="isExpand = false"
          />
        </div>
        <div class="relative min-w-max">
          <img
            @click="() => expandImgHandle(3)"
            src="~/assets/images/manual03.jpeg"
            class="max-h-[280px] min-w-max h-[280px] border border-black cursor-pointer"
          /><img
            src="~/assets/icons/expandIcon.svg"
            class="absolute bottom-0 pointer-events-none right-0 w-10 m-3 cursor-pointer"
            @click.stop="isExpand = false"
          />
        </div>
      </div>
      <p class="wv-b5 font-bold">ขั้นตอนที่ 2: กรอกข้อมูลโครงการในแบบฟอร์ม</p>
      <p class="wv-b6 my-3 opacity-50">สามารถอิงจากไฟล์ตัวอย่าง</p>
      <div class="mb-3">
        <a
          href="https://docs.google.com/document/d/1OOTGq3tvQt0GzfZ-AOFJl8odS_lRNabY/edit"
          target="_blank"
          class="wv-b7 text-wv-gray-80 flex items-center w-fit mx-auto underline bg-wv-gray-20 rounded-[3px] py-[5px] px-[10px]"
        >
          <img src="~/assets/images/download.svg" class="w-3 h-3 mr-2" />
          ตัวอย่างการเขียนแบบฟอร์มโครงการ
        </a>
      </div>
      <div class="mb-3">
        <a
          href="https://docs.google.com/document/d/1BHoi7-Eso3tR_v1HCyNbf-ULshQ00uAK/edit"
          target="_blank"
          class="wv-b7 text-wv-gray-80 flex items-center w-fit mx-auto underline bg-wv-gray-20 rounded-[3px] py-[5px] px-[10px]"
        >
          <img src="~/assets/images/download.svg" class="w-3 h-3 mr-2" />
          ตัวอย่างการเขียนเนื้อหาโครงการ
        </a>
      </div>
      <div class="text-left mx-10">
        <div class="wv-b6 font-bold">
          <p>ข้อ 1 หลักการและเหตุผล</p>
          <p>ข้อ 2 วัตถุประสงค์</p>
          <p>ข้อ 4 ลักษณะโครงการ</p>
        </div>
        <p class="wv-b7 opacity-70 mb-5">
          ทั้งข้อ 1,2 และ 4 ให้เติมข้อมูลตามความต้องการและบริบทของชุมชน ของคุณ
        </p>
        <div class="mb-5">
          <p class="wv-b6 font-bold">ข้อ 3 ‘เป้าหมาย’</p>
          <p class="wv-b7 opacity-70">
            เขียนให้ชัดเจนเพื่อแสดงให้เห็นผลงานหรือผลลัพธ์ที่ระบุคุณภาพหรือ
            ปริมาณงานที่คาดว่าจะเกิดขึ้น อาจกำหนดเป็นร้อยละหรือจำนวนหน่วย
            ที่แสดงปริมาณหรือคุณภาพต่าง ๆ
          </p>
        </div>
        <div class="mb-5">
          <p class="wv-b6 font-bold">ข้อ 5 ‘ระยะเวลาและสถานที่ดำเนินการ’</p>
          <p class="wv-b7 opacity-70">
            ระบุระยะเวลาตั้งแต่เริ่มต้นจนถึงวันสิ้นสุดโครงการ และสถานที่
            ที่ใช้จัด
            โครงการกรณีเป็นโครงการฝึกอบรมให้ระบุลักษณะว่าดำเนินการเป็นการฝึกอบรมแบบไป-กลับ
            หรือพักค้าง จำนวนกี่วัน
          </p>
        </div>
        <div class="mb-6">
          <p class="wv-b6 font-bold">ข้อ 6 ‘แผนปฏิบัติการ’</p>
          <p class="wv-b7 opacity-70">
            ให้ระบุกิจกรรมที่จะจัดขึ้นตามวัตถุประสงค์ของโครงการ โดยสามารถ
            แจกแจงเป็นกิจกรรมย่อยหลายกิจกรรมและเลือกช่วงเวลาที่แต่ละ
            กิจกรรมจะถูกจัดขึ้น
          </p>
        </div>
        <div class="mb-5">
          <p class="wv-b6 font-bold">ข้อ 7 ‘งบประมาณ’</p>
          <p class="mv-b7 opacity-70">
            กรอกรายละเอียดค่าใช้จ่ายสำหรับการดำเนินโครงการ จากลักษณะ โครงการ
            ได้แก่
          </p>
        </div>
        <div
          class="bg-wv-gray-20 rounded-[5px] py-[10px] px-[15px] text-center wv-b7 mb-5"
        >
          <p class="font-bold">การจัดซื้อ จัดจ้าง</p>
          <ul class="text-left">
            <li class="list-disc list-outside ml-4">
              ระเบียบกรุงเทพมหานครว่าด้วยการรับเงิน การเบิกจ่ายเงิน พ.ศ. 2555
              และแก้ไขเพิ่มเติม (ฉบับที่ 2) พ.ศ. 2560
            </li>
            <li class="list-disc list-outside ml-4">
              พ.ร.บ.การจัดซื้อจัดจ้างและการบริหารพัสดุภาครัฐ พ.ศ. 2560
            </li>
            <li class="list-disc list-outside ml-4">
              กฎกระทรวงตามพระราชบัญญัติการจัดซื้อ จัดจ้าง พ.ศ. 2560
            </li>
            <li class="list-disc list-outside ml-4">
              ระเบียบกระทรวงการคลัง ว่าด้วยการจัดซื้อ
              จัดจ้างและการบริหารพัสดุภาครัฐ พ.ศ. 2560
            </li>
          </ul>
        </div>
        <div
          class="bg-wv-gray-20 rounded-[5px] py-[10px] px-[15px] text-center wv-b7 mb-5"
        >
          <p class="font-bold">การฝึกอบรม จัดกิจกรรมการประชุม</p>
          <ul class="text-left">
            <li class="list-disc list-outside ml-4">
              หนังสือกรมบัญชีกลาง ที่ กค (กวจ) 0405.2/ว 395 ลงวันที่ 10 ตุลาคม
              2560 เรื่อง การจัดอาหารอาหารว่างและเครื่องดื่ม
              และค่าเช่าที่พักของหน่วยงานของรัฐตามระเบียบกระทรวงการคลังว่าด้วยค่าใช้จ่ายในการฝึกอบรม
              การจัดงาน และการประชุมระหว่างประเทศ พ.ศ. 2549
              ตามระเบียบกระทรวงการคลังว่าด้วยการเบิกจ่ายค่าใช้จ่ายในการบริหารงานของส่วนราชการ
              พ.ศ. 2553
            </li>
            <li class="list-disc list-outside ml-4">
              ระเบียบกรุงเทพมหานคร
              ว่าด้วยการเบิกจ่ายค่าใช้จ่ายในการจัดงานหรือกิจกรรมของหน่วยงานในสังกัดกรุงเทพมหานคร
              พ.ศ. 2554
            </li>
          </ul>
        </div>
        <div class="mb-5">
          <p class="wv-b6 font-bold">ข้อ 8 ประโยชน์ที่คาดว่าจะได้รับ</p>
          <ul class="wv-b7 opacity-70">
            <li class="list-disc list-outside ml-4">
              <b>ความเสี่ยง</b>
              คือเหตุการณ์ที่ไม่แน่นอนที่อาจเกิดขึ้นและอาจส่งผลกระทบต่อวัตถุประสงค์หรือสร้างความเสียหาย
            </li>
            <li class="list-disc list-outside ml-4">
              <b>การบริหารความเสี่ยง</b> คือการวัดความสามารถที่จะ
              ดำเนินการให้วัตถุประสงค์ของงานประสบความสำเร็จ
              และการคาดการณ์ถึงข้อจำกัด
              หรือปัจจัยที่ส่งผลกระทบให้โครงการไม่บรรลุวัตถุประสงค์
              พร้อมหาวิธในการจัดการความ เสี่ยงของโครงการภายใต้การตัดสินใจ
              งบประมาณ กำหนด เวลา และข้อจำกัดด้านเทคนิคที่เผชิญอยู่
              เพื่อให้ปัญหาของโครงการลดน้อยลง
              และสามารถดำเนินการให้ประสบความสำเร็จ ตามเป้าหมายที่ตั้งไว้
            </li>
            <li class="list-disc list-outside ml-4">
              <b>ให้ระบุความเสี่ยงที่อาจเกิดขึ้น</b> พร้อมกรอกตัวเลข
              ‘ระดับความเสี่ยง’ ในช่องการประเมิน ความเสี่ยง
              โดยอ้างอิงจากตารางข้อมูลข้างล่างนี้
            </li>
          </ul>
          <img src="~/assets/illustrations/design03.png" class="mx-auto my-5" />
        </div>
        <div class="mb-5">
          <p class="wv-b6 font-bold">
            ข้อ 9 ความเสี่ยงของโครงการและแนวทางการบริหาร ความเสี่ยง
          </p>
          <p class="wv-b7 opacity-70">
            ให้เติมข้อมูลตามความต้องการและบริบทของชุมชนของคุณ
          </p>
        </div>
        <div>
          <p class="wv-b6 font-bold">ข้อ 10 ‘การติดตามประเมินผล’</p>
          <ul class="wv-b7 opacity-70">
            <li class="list-disc list-outside ml-4">
              <b> ระบุ ‘ตัวชี้วัดความสำเร็จ’</b>
              <br />เพื่อประเมินความสำเร็จของโครงการประเภทต่างๆ
            </li>
            <li class="list-disc list-outside ml-4">
              <b>ระบุ ‘การติดตามความก้าวหน้า’</b><br />
              เช่น ระยะเวลาการรายงาน ความก้าวหน้าในการดำเนินโครงการ
              เป็นรายสัปดาห์ รายเดือน รายไตรมาส ฯลฯ ขึ้นอยู่กับความ
              เหมาะสมของระยะเวลาการดำเนินโครงการ ให้ระบุเนื้องาน
              ที่ดำเนินการแล้วเสร็จ ณ เวลาที่ รายงานความก้าวหน้า
              และคิดเป็นร้อยละของเนื้องานทั้งหมดของโครงการ
            </li>
            <li class="list-disc list-outside ml-4">
              <b>กรอก ‘การประเมินผลโครงการ’</b><br />
              ให้ระบุวิธีการประเมินผลสำเร็จของการดำเนินโครงการ
              ตั้งแต่เริ่มต้นจนสิ้นสุดโครงการ เช่น วิธีการเก็บ รวบรวมข้อมูล
              วิธีในการประมวลผล วิเคราะห์ผลการดำเนินงานตามเป้าหมาย
              และตัวชี้วัดที่กำหนด เป็นต้น
            </li>
          </ul>
        </div>
        <div
          class="text-center opacity-70 wv-b7 mt-7 mb-3 flex w-fit mx-auto items-center"
        >
          <svg
            class="mr-2"
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 0.713867C5 0.437725 4.77614 0.213867 4.5 0.213867C4.22386 0.213867 4 0.437725 4 0.713867H5ZM4.14645 8.06547C4.34171 8.26073 4.65829 8.26073 4.85355 8.06547L8.03553 4.88349C8.2308 4.68822 8.2308 4.37164 8.03553 4.17638C7.84027 3.98112 7.52369 3.98112 7.32843 4.17638L4.5 7.00481L1.67157 4.17638C1.47631 3.98112 1.15973 3.98112 0.964466 4.17638C0.769204 4.37164 0.769204 4.68822 0.964466 4.88349L4.14645 8.06547ZM4 0.713867V7.71191H5V0.713867H4Z"
              fill="black"
            />
          </svg>

          แนวทางการเขียนตัวชี้วัดความสำเร็จ
        </div>
        <img src="~/assets/illustrations/design02.png" class="mx-auto my-5" />
        <p class="wv-b5 text-center font-bold mt-5">
          ขั้นตอนที่ 3 : พิมพ์โครงการ และส่งต่อให้<br />
          คณะกรรมการอำนวยการจัดทำแผนพัฒนาชุมชน ระดับเขต<br />
          ที่สำนักงานเขตตามสังกัดของชุมชน
        </p>
        <img src="~/assets/illustrations/design01.png" class="mx-auto my-5" />
      </div>
      <div id="footer" class="flex flex-col items-center bg-wv-gray-20 py-4">
        <a
          href="https://docs.google.com/document/d/1iOycCc-TOa6DO4g337sNnq4iycEpWHY8/edit"
          target="_blank"
          class="wv-b7 underline rounded-[3px] flex items-center py-[5px] px-[10px] opacity-70 hover:bg-white"
        >
          <img src="~/assets/images/download.svg" class="w-3 h-3 mr-2" />
          ดาวน์โหลดแบบฟอร์ม
        </a>
        <a
          href="https://docs.google.com/document/d/1OOTGq3tvQt0GzfZ-AOFJl8odS_lRNabY/edit"
          target="_blank"
          class="wv-b7 underline flex items-center rounded-[3px] py-[5px] px-[10px] opacity-70 hover:bg-white"
        >
          <img src="~/assets/images/download.svg" class="w-3 h-3 mr-2" />
          ตัวอย่างการเขียนแบบฟอร์มโครงการ
        </a>

        <a
          href="https://docs.google.com/document/d/1BHoi7-Eso3tR_v1HCyNbf-ULshQ00uAK/edit"
          target="_blank"
          class="wv-b7 flex items-center underline rounded-[3px] py-[5px] px-[10px] opacity-70 hover:bg-white"
        >
          <img src="~/assets/images/download.svg" class="w-3 h-3 mr-2" />
          ตัวอย่างการเขียนเนื้อหาโครงการ
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["handleDesignDialog"],
  data() {
    return {
      isExpand: "",
    };
  },
  methods: {
    expandImgHandle(img) {
      if (this.isExpand === img) {
        this.isExpand = "";
      } else {
        this.isExpand = img;
      }
    },
  },
};
</script>
<style lang=""></style>
