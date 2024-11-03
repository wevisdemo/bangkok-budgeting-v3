<template>
  <VizChart>
    <div class="flex flex-col lg:flex-row">
      <div
        id="KeyWordBudget"
        class="max-w-[400px] flex flex-1 flex-col gap-4 justify-between"
      >
        <p class="wv-b3 flex-grow text-center sm:text-left">
          หากไม่รู้ว่าจะเริ่มสำรวจ<br />
          การใช้งบจากตรงไหน ลองค้นหา<br />
          ด้วย
          <span class="font-bold">“คีย์เวิร์ดที่พบบ่อย”</span>
          ในชื่อ<br />และคำอธิบายรายการใช้งบ
        </p>

        <p class="wv-b7 text-wv-gray-1 text-center sm:text-left">
          ขนาดคำ = จำนวนที่พบ
        </p>
      </div>
      <div
        class="w-full flex-1 flex flex-col justify-between gap-4 items-center lg:items-end"
      >
        <div
          id="wordCloundWrapper"
          class="rounded-full h-[260px] lg:w-[400px] w-[260px] lg:h-[400px] flex items-center justify-center bg-wv-cream-30"
        />
        <div class="flex justify-center sm:justify-end">
          <NuxtLink
            :to="{
              path: 'bkkbudget/explore',
              query: { select: 'KeyWordBudget' },
            }"
            class="flex items-center py-2 px-2 rounded bg-wv-green border-black h-min"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="7.05289"
                cy="6.56449"
                r="3.92676"
                transform="rotate(-30 7.05289 6.56449)"
                stroke="black"
                stroke-width="1.5"
              />
              <path
                d="M9.08948 10.3943L11.2794 14.1874"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>

            ค้นหางบด้วยคีย์เวิร์ด
            <i class="el-icon-right ml-1" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </VizChart>
</template>

<script>
import Vue from "vue";
import VizChart from "~/components/budget/charts/VizChartContainer.vue";
import * as d3 from "d3";
import * as cloud from "d3-cloud";
import { mainKeyWord } from "~/data/budgets/mainKeyword";

export default Vue.extend({
  name: "KeyWordBudget",
  components: { VizChart },
  data() {
    return {};
  },
  methods: {
    mainKeyWord,
    drawChart() {
      const getWidth =
        d3.select("#wordCloundWrapper").node().getBoundingClientRect()?.width ||
        0;
      const getHeight =
        d3.select("#wordCloundWrapper").node().getBoundingClientRect()
          ?.height || 0;
      const width = getWidth - 60;
      const height = getHeight - 60;
      var svg = d3
        .select("#wordCloundWrapper")
        .append("svg")
        .attr("width", width)
        .attr("height", height);
      var layout = cloud()
        .size([width, height])
        .words(
          mainKeyWord()
            .slice(0, 50)
            .map(function (d) {
              return { text: d.Word, size: d.Count };
            })
        )
        .padding(5)
        .rotate(function () {
          return ~~(Math.random() * 2);
        })
        .fontSize(function (d) {
          return getWidth == "260" ? d.size / 2.5 : d.size / 1.5;
        })
        .on("end", draw);
      layout.start();
      function draw(words) {
        svg
          .append("g")
          .attr(
            "transform",
            "translate(" +
              layout.size()[0] / 2 +
              "," +
              layout.size()[1] / 2 +
              ")"
          )
          .selectAll("text")
          .data(words)
          .enter()
          .append("text")
          .style("font-size", function (d) {
            return d.size;
          })
          .attr("text-anchor", "middle")
          .attr("transform", function (d) {
            return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
          })
          .text(function (d) {
            return d.text;
          });
      }
    },
  },
  mounted() {
    if (d3.select("#wordCloundWrapper")) this.drawChart();
  },
});
</script>

<style lang="scss"></style>
