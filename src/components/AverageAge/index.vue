<template>
    <div class="average-age">
        <div class="title-wrapper">
            <div class="left">
                <div class="title">
                    河南景区用户年龄分布&平均年龄
                </div>
                <div class="sub-title">
                    Distribution of Age
                </div>
            </div>
            <div class="right">
                <div class="age">
                    <count-to :start-val="startAge" :end-val="avgAge" :duration="1000" :decimals="2" />
                    <span class="age-unit">岁</span>
                </div>
            </div>
        </div>
        <div id="average-age-chart">
            <vue-echarts :options="options"></vue-echarts>
        </div>
        <div class="average-data-wrapper">
            <div class="average-data" v-for="(item,index) in data" :key="index">
                <div class="average-data-value">
                    <count-to :start-val="item.startValue" :end-val="item.value" :duration="1000"></count-to>
                </div>
                <div class="average-data-axis">
                    <div class="point" :style="{background: item.color}" />
                    <div class="text">{{item.axis}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue'
export default {
    name: 'AverageAge',
    props: {
        data: Array,
        avgAge: Number
    },
    setup (props) {
        const options = ref(null)
        // /* eslint-disable */
        const updateChart = () => {
            const data = ['指标']
            const color = []
            const axis = ['指标']
            let max
            props.data.forEach(item => {
                data.push(+item.value)
                color.push(item.color)
                axis.push(item.axis)
                max += +item.value
            })
            // console.log(data, color, axis);
            options.value = {
                tooltip: {
                    // trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    },
                    textStyle: {
                        fontSize: 28
                    },
                    padding: 10
                },
                grid: {
                    left: 40,
                    right: 40,
                    top: 70
                },
                color,
                dataset: {
                    source: [
                        axis,
                        data
                    ]
                },
                xAxis: {
                    type: 'value',
                    max,
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        // show: true,
                        lineStyle: {
                            color: 'rgb(50,51,53)',
                            width: 3
                        }
                    },
                    axisLabel: {
                        show: true,
                        color: 'rgb(98,105,113)',
                        fontSize: 18,
                    }
                },
                yAxis: {
                    type: 'category',
                    show: false
                },
                series: [
                    { type: 'bar', stack: 'total', barWidth: 15 },
                    { type: 'bar', stack: 'total' },
                    { type: 'bar', stack: 'total' },
                    { type: 'bar', stack: 'total' }
                ]
            }
            // console.log('axis', axis, 'data', data);
        }

        const startAge = ref(0)
        watch(() => props.avgAge, (newValue, preValue) => {
            startAge.value = preValue
        })
        watch(() => props.data, () => {
            updateChart()
        })
        onMounted(() => {
            // update()
        })
        return {
            startAge,
            options
        }
    }
}

</script>

<style lang='scss' scoped>
.average-age {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    // background: rgb(43, 44, 46);
    padding: 20px 40px;
    box-sizing: border-box;
    border: 1px solid rgba(7, 118, 181, 0.5);
    box-shadow: inset 0 0 10px rgba(7, 118, 181, 0.4);
    margin-bottom: 12px;
    position: relative;
    .title-wrapper {
        display: flex;
        align-items: center;
        .left {
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
                top: 20px;
            }
            .sub-title {
                font-size: 16px;
                margin-top: 10px;
            }
        }
        .right {
            flex: 1;
            margin-left: 40px;
            font-weight: bold;

            .age {
                font-size: 68px;
                font-family: DIN;

                .age-unit {
                    font-size: 20px;
                }
            }
        }
    }
    #average-age-chart {
        height: 120px;
    }

    .average-data-wrapper {
        display: flex;

        .average-data {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 30px;
            font-weight: bolder;

            .average-data-value {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
            }

            .average-data-axis {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                margin-top: 5px;

                .point {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                }

                .text {
                    margin-left: 10px;
                    font-size: 16px;
                }
            }
        }
    }
}
</style>
