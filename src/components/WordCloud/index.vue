<template>
    <!-- <ve-wordcloud :data="chartData" height="100%" :settings="chartSetting"></ve-wordcloud> -->
    <div id="container">11111</div>
</template>

<script>
import 'echarts-wordcloud'
import commonDataMixin from '../../mixins/commonDataMixin'
export default {
    name: 'WordCloud',
    mixins: [commonDataMixin],
    mounted () {
        // const data = [
        //     {
        //         name: '慕课网',
        //         value: 100
        //     },
        //     {
        //         name: '数据可视化',
        //         value: 50
        //     },
        //     {
        //         name: '嗨嗨嗨',
        //         value: 25
        //     }
        // ]
        const chart = this.$echarts.init(document.getElementById('container'))
        chart.setOptions({
            series: [
                {
                    type: 'wordcloud',
                    data: 1
                }
            ]
        })
    },
    data () {
        return {
            chartData: {},
            chartSetting: {
                color: ['rgba(97,216,0,.7)', 'rgba(204,178,26,.7)', 'rgba(245,166,35,.7)', 'rgba(156,13,113,.7)']
            }
        }
    },
    watch: {
        // 转换为合适的词云数据
        wordcloud () {
            const data = []
            this.wordcloud.forEach(item => {
                data.push({
                    name: item.word,
                    value: item.count
                })
            })
            // 词云显示所需的数据
            this.chartData = {
                columns: ['name', 'value'],
                rows: data
            }
        }
    }
}

</script>

<style lang='scss' scoped>
</style>
