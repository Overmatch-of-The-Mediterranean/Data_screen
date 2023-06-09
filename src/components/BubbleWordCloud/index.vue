<template>
    <div class="paopao-container" :style="{height:'100%',width:'100%'}">
        <div :style="{height:'100%',width:'100%'}" class="paopao" ref="paopaoChart">
        </div>
    </div>
</template>

<script>
// import { ref } from 'vue'
import * as echarts from 'echarts';
export default {
    name: 'BubbleWordCloud',
    data () {
        return {
            paopaoChart: {},  //用于初始化chart
            paopaoOption: {
                //提示框
                tooltip: {
                    textStyle: {
                        fontSize: 30
                    }
                },
                animationDurationUpdate: function (idx) {
                    // 越往后的数据延迟越大
                    return idx * 100;
                },
                animationEasingUpdate: 'bounceIn',
                series: [{
                    type: 'graph',
                    layout: 'force',
                    force: {
                        repulsion: 800,
                        edgeLength: 800,
                    },
                    lineStyle: {
                        color: 'source'
                    },
                    label: {
                        show: true,
                        formatter: [
                            '{a|{c}}',
                            '{b|{b}}'
                        ].join('\n'),
                        fontWeight: '1000',
                        fontSize: '18',
                        align: 'center',
                        verticalAlign: 'center',
                        // itemStyle: {
                        //     borderColor: 'rgba(5,118,254,1)',
                        //     borderWidth: 2,
                        //     borderType: 'solid',
                        //     shadowColor: 'rgba(5,118,254,1)',
                        //     shadowBlur: 20
                        // },
                        rich: {
                            a: {
                                color: '#4a9ffe',
                                fontSize: 30,
                                lineHeight: 30,
                                textBorderColor: 'transparent',
                                textBorderWidth: 0,
                            },
                            b: {
                                color: '#4a9ffe',
                                fontSize: 18,
                                lineHeight: 30,
                                textBorderColor: 'transparent',
                                textBorderWidth: 0
                            },
                        },
                    },
                    data: [{
                        "name": "嵩山万山之祖\n登封功夫之都！",
                        "value": "嵩山少林寺",
                        "symbol": 'image://../../blue.png',
                        "symbolSize": 280,
                        "draggable": true,
                    }, {
                        "name": "太行之魂、中华风骨",
                        "value": '八里沟',
                        "symbol": 'image://red.png',
                        "symbolSize": 220,
                        "draggable": true,
                    }, {
                        "name": "真中",
                        "value": "河南烩面",
                        "symbol": 'image://blue.png',
                        "symbolSize": 180,
                        "draggable": true,
                    }, {
                        "name": "山水林瀑道圣巅\n中原唯览老君山",
                        "value": "老君山",
                        "symbol": 'image://red.png',
                        "symbolSize": 280,
                        "draggable": true,
                    }, {
                        "name": "云台风光遍口传\n至今已觉新鲜",
                        "value": "云台山",
                        "symbol": 'image://blue.png',
                        "symbolSize": 240,
                        "draggable": true,
                    }, {
                        "name": "一朝步入画卷\n一日梦回千年",
                        "value": "清明上河园",
                        "symbol": 'image://red.png',
                        "symbolSize": 220,
                        "draggable": true,
                    }, {
                        "name": "香嘞很啊",
                        "value": "胡辣汤",
                        "symbol": 'image://blue.png',
                        "symbolSize": 180,
                        "draggable": true,
                    }, {
                        "name": "义兴张",
                        "value": "道口烧鸡",
                        "symbol": 'image://red.png',
                        "symbolSize": 180,
                        "draggable": true,
                    }, {
                        "name": "石窟经典、唯我龙门",
                        "value": "龙门石窟",
                        "symbol": 'image://blue.png',
                        "symbolSize": 180,
                        "draggable": true,
                    }]
                }]
            }

        }
    },
    mounted () {
        /* eslint-disable */
        // fetch('https://www.fastmock.site/mock/7b79b1dbd67d9c01b8ba44861a79252f/screen/wordcloud')
        //     .then(res => res.json())
        let $this = this;
        $this.paopaoChart = echarts.init($this.$refs.paopaoChart);
        this.getpaopaoOptionData()
    },
    methods: {
        getpaopaoOptionData: function () {
            let $this = this;
            // setInterval(function () {
            //     let random = (Math.random() * 100).toFixed(1) - 0;
            //     $this.paopaoOption.series[0].data[0].value = random;
            //     $this.paopaoOption.series[0].data[1].value = random;
            //     $this.paopaoOption.series[0].data[2].value = random;
            //     $this.paopaoOption.series[0].data[3].value = random;
            //     $this.paopaoOption.series[0].data[4].value = random;
            //     $this.paopaoOption.series[0].data[5].value = random;
            //     $this.paopaoOption.series[0].data[6].value = random;
            //     $this.paopaoOption.series[0].data[7].value = random;
            //     $this.paopaoOption.series[0].data[8].value = random;
            //     $this.paopaoChart.setOption($this.paopaoOption);
            // }, 1000);
            $this.paopaoChart.setOption($this.paopaoOption);

        }
    },

}

</script>

<style lang='scss' scoped>
.paopao {
    margin-top: 12px;
    margin-bottom: 12px;
    border: 2px solid rgba(5, 118, 254, 1);
    box-shadow: inset 0 0 20px rgba(5, 118, 254, 1);
    background: url('../../assets/images/pageBg.png');
    background-size: contain;
}
</style>
