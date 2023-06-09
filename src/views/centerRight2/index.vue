<template>
    <div class="centerRight2">
        <div class="bg-color-black">
            <div class="d-flex pt-2 pl-2">
                <span>
                    <i class="iconfont icon-vector" />
                </span>
                <div class="d-flex">
                    <span class="fs-xl text mx-2">特产销售前十</span>
                </div>
            </div>
            <div class="d-flex mt-1 jc-center body-box">
                <dv-scroll-board class="dv-scr-board" :config="config" />
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
export default defineComponent({
    setup () {
        const config = reactive({
            header: ['特产', '销售量', '较昨日'],
            data: [
                ['黄河鲤鱼', '3719801', "<span  class='colorGrass'>↑3.5%</span>"],
                ['信阳毛尖', '3519801', "<span  class='colorRed'>↓1.4%</span>"],
                ['道口烧鸡', '3219801', "<span  class='colorGrass'>↑5%</span>"],
                ['尉氏青豆', '2719801', "<span  class='colorGrass'>↑2.3%</span>"],
                ['新郑莲藕', '2619801', "<span  class='colorGrass'>↑4.1%</span>"],
                ['汴绣', '2319801', "<span  class='colorGrass'>↑2.3%</span>"],
                ['唐三彩', '2119801', "<span  class='colorGrass'>↑2.3%</span>"],
                ['百子寿桃', '2019801', "<span  class='colorRed'>↓3.4%</span>"],
                ['新郑红枣', '1819801', "<span  class='colorRed'>↓1.3%</span>"],
                ['睢酒', '1719801', "<span  class='colorGrass'>↑1.9%</span>"]
            ],
            rowNum: 7, //表格行数
            headerHeight: 35,
            headerBGC: '#0f1325', //表头
            oddRowBGC: '#0f1325', //奇数行
            evenRowBGC: '#171c33', //偶数行
            index: true,
            columnWidth: [20],
            align: ['center']
        })
        return { config }
    }
})
</script>

<style lang="scss" scoped>
$box-height: 410px;
$box-width: 300px;
.centerRight2 {
    padding: 16px;
    padding-top: 20px;
    height: $box-height;
    //   width: $box-width;
    border-radius: 5px;
    .bg-color-black {
        height: $box-height - 30px;
        border-radius: 10px;
    }
    .text {
        color: #c3cbde;
    }
    .body-box {
        border-radius: 10px;
        overflow: hidden;
        .dv-scr-board {
            width: 100%;
            height: 340px;
        }
    }
}
</style>
