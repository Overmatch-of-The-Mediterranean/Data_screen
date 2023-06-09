<template>
    <div class="line-chart">
        <div class="title-wrapper">
            <div class="title">河南游客量概况</div>
            <div class="sub-title">Visitor Growth rate</div>
        </div>
        <div class="title-dis">
            <span>
                平均接待次数(小时):
                <span class="title-dis-keyword">15000次</span>
            </span>
            <span>
                流量峰值:
                <span class="title-dis-keyword">300M</span>
            </span>
        </div>
        <div id="total-rider-chart">
            <vue-echarts :options="options"></vue-echarts>
        </div>
    </div>
</template>
  
  <script>
import { watch, onMounted, onUnmounted, ref } from 'vue'
import * as echarts from 'echarts';

const colors = ['rgb(209,248,139)', 'rgb(115,201,245)', 'rgb(124,136,146)']

export default {
    name: 'TotalRider',
    props: {
        data: Object
    },
    setup (props) {
        let task
        let currentChart = 0
        const options = ref(null)
        const update = () => {
            function createOption () {
                // axisX,
                const { orderData, rateData } = props.data
                // const axisData = axisX
                let legendData = []
                let data1 = []
                let data2 = []
                if (currentChart === 0) {
                    legendData = [orderData.legend1, orderData.legend2]
                    data1 = orderData.data1
                    data2 = orderData.data2
                } else {
                    legendData = [rateData.legend1, rateData.legend2]
                    data1 = rateData.data1
                    data2 = rateData.data2
                }
                return {
                    color: colors,
                    tooltip: {
                        trigger: 'none',
                        axisPointer: {
                            type: 'cross',
                            // crossStyle: {
                            //     color: 'rgba(150,150,150,.1)'
                            // },

                            // type: 'shadow',
                            // shadowColor: 'rgba(150,150,150,.1)'
                            label: {
                                fontSize: 25,
                                backgroundColor: 'rgba(0,0,0,.6)',
                            }
                        },
                        // backgroundColor: 'red',
                    },
                    legend: {
                        top: 0,
                        right: 40,
                        icon: 'rect',
                        textStyle: {
                            fontSize: 25,
                            color: colors[2]
                        },
                        data: legendData
                    },
                    grid: {
                        top: 50,
                        bottom: 30,
                        left: 80,
                        right: 40
                    },
                    xAxis: {
                        type: 'category',
                        axisLine: {
                            show: true,
                        },
                        splitArea: {
                            color: '#f00',
                            lineStyle: {
                                color: '#f00',
                            },
                        },
                        axisLabel: {
                            color: '#BCDCF0',
                            fontSize: 20
                        },
                        splitLine: {
                            show: false,
                        },
                        boundaryGap: false,
                    },
                    yAxis: {
                        type: 'value',
                        min: 0,
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgba(255,255,255,0.1)',
                            },
                        },
                        axisLine: {
                            show: true,
                        },
                        axisLabel: {
                            show: true,
                            margin: 10,
                            fontSize: 20,
                            color: '#d1e6eb',
                        },
                        axisTick: {
                            show: false,
                        },
                    },
                    series: [{
                        name: legendData[0],
                        type: 'line',
                        smooth: true, //是否平滑
                        lineStyle: {

                            color: '#00b3f4',
                            shadowColor: 'rgba(0, 0, 0, .3)',
                            shadowBlur: 0,
                            shadowOffsetY: 5,
                            shadowOffsetX: 5,
                        },
                        label: {
                            show: false,
                            position: 'top',
                            color: '#00b3f4',
                        },
                        // 去除点标记
                        symbolSize: 0,
                        // 鼠标放上去还是要有颜色的
                        itemStyle: {
                            color: '#00b3f4',
                        },
                        // 设置渐变色
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    {
                                        offset: 0,
                                        color: 'rgba(0,179,244,0.3)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(0,179,244,0)',
                                    },
                                ],
                                false
                            ),
                            shadowColor: 'rgba(0,179,244, 0.9)',
                            shadowBlur: 20,
                        },
                        data: data1
                    }, {
                        name: legendData[1],
                        type: 'line',
                        smooth: true, //是否平滑
                        // 阴影
                        lineStyle: {

                            color: '#00ca95',
                            shadowColor: 'rgba(0, 0, 0, .3)',
                            shadowBlur: 0,
                            shadowOffsetY: 5,
                            shadowOffsetX: 5,
                        },
                        label: {
                            show: false,
                            position: 'top',
                            color: '#00ca95',
                        },
                        // 去除点标记
                        symbolSize: 0,
                        itemStyle: {
                            color: '#00ca95',
                        },
                        // 设置渐变色
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    {
                                        offset: 0,
                                        color: 'rgba(0,202,149,0.3)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(0,202,149,0)',
                                    },
                                ],
                                false
                            ),
                            shadowColor: 'rgba(0,202,149, 0.9)',
                            shadowBlur: 20,

                        },
                        data: data2
                    }]
                }
            }
            options.value = createOption()
            if (currentChart === 0) {
                currentChart = 1
            } else {
                currentChart = 0
            }
        }
        const stop = watch(() => props.data, () => {
            update()
            task = setInterval(() => {
                update()
            }, 5000)
            stop()
        })
        onMounted(() => {
            update()
        })
        onUnmounted(() => task && clearInterval(task))
        return {
            options
        }
    }
}
  </script>
  
  <style lang="scss" scoped>
.line-chart {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    // background: rgb(43, 44, 46);
    border: 1px solid rgba(7, 118, 181, 0.5);
    box-shadow: inset 0 0 10px rgba(7, 118, 181, 0.4);
    margin-bottom: 12px;
    position: relative;

    .title-dis {
        height: 25%;
        margin-top: 15.75px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 28px;
        color: #c0c9d2;
        &-keyword {
            padding-left: 13px;
            color: #47dae8;
        }
    }

    .title-wrapper {
        margin: 20px 0 10px 0;
        padding: 20px 40px 0;
        box-sizing: border-box;

        .title {
            font-size: 32px;
        }
        .title:before {
            position: absolute;
            content: '';
            width: 15px;
            height: 15px;
            background: rgba(22, 214, 255, 0.9);
            box-shadow: 0 0 5px rgb(22 214 255 / 90%);
            border-radius: 10px;
            left: 15px;
            top: 40px;
        }
        .sub-title {
            font-size: 16px;
            margin-top: 10px;
        }
    }

    #total-rider-chart {
        width: 100%;
        height: 100%;
    }
}
</style>