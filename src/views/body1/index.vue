<template>
    <div class="container">
        <div class="separator">
        </div>
        <div class="center">
            <div class="left">
                <div class="left1">
                    <total-user :total-user="totalUser" :growth-last-day="growthLastDay" :growth-last-month="growthLastMonth" />
                </div>
                <div class="left2">
                    <average-age :data="ageData" :avgAge="averageAge" />
                </div>
                <div class="left3">
                    <TotalDevice :data="deviceData" />
                </div>
                <div class="left5">
                    <TotalRider :data="riderData" />
                </div>
            </div>
            <div class="right">
                <div class="right-top1">
                    <CenterHeader :data="headerMockData" />
                </div>
                <div class="right-top2">
                </div>
                <div class="right-bottom">
                    <div class="right-left">
                        <div class="right-left1">
                            <OrderMap></OrderMap>
                        </div>
                        <div class="right-left2">
                            <imooc-fly-box duration="2">
                                <TransformCategory :data="['郑州', '焦作', '洛阳', '开封', '商丘', '信阳']" :color="['rgba(2,37,101,.8)', 'rgba(2,37,101,.5)']" />
                            </imooc-fly-box>
                        </div>
                        <div class="right-left3">
                            <TopLines></TopLines>
                        </div>
                    </div>
                    <div class="right-right">
                        <div class="right-right1">
                            <SalesList :data="salesListData" />
                        </div>
                        <div class="right-right2">
                            <BubbleWordCloud></BubbleWordCloud>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import useScreenData from '../../hooks/useScreenData'
import TotalUser from '../../components/TotalUser/TotalUser.vue'
import AverageAge from '../../components/AverageAge/index.vue'
import TotalDevice from '../../components/TotalDevice/index.vue'
import TotalRider from '../../components/TotalRider/index.vue'
import CenterHeader from '../../components/CenterHeader/index.vue'
import TransformCategory from '../../components/TransformCategory/index.vue'
import SalesList from '../../components/SalesList/index.vue'
import OrderMap from '../../components/OrderMap/index.vue'

import BubbleWordCloud from '../../components/BubbleWordCloud/index.vue'
import TopLines from '../../components/TopLines/index.vue'
export default {
    name: 'body1',
    components: {
        TotalUser,
        AverageAge,
        TotalDevice,
        TotalRider,
        CenterHeader,
        TransformCategory,
        SalesList,
        OrderMap,
        BubbleWordCloud,
        TopLines
    },
    setup () {
        const options = ref(null)
        options.value = {
            xAxis: {
                type: 'category',
                data: ['一季度', '二季度', '三季度']
            },
            yAxis: {},
            series: {
                type: 'bar',
                data: [40, 80, 60]
            }
        }
        const screenData = useScreenData()
        return {
            ...screenData,
            options
        }
    }
}

</script>

<style lang='scss' scoped>
.container {
    margin-top: 70px;
    .separator {
        width: 100%;
        height: 10px;
        // background: #000;
    }
    .center {
        display: flex;
        width: 100%;
        flex: 1;
        .left {
            display: flex;
            flex-direction: column;
            flex: 0 0 860px;
            justify-content: space-between;
            width: 860px;
            height: 100%;
            margin: 0 10px;
            // background: rgb(60, 61, 64);

            box-sizing: border-box;
            .left1,
            .left2,
            .left3,
            .left4,
            .left5,
            .left6 {
                padding-bottom: 20px;
            }
            .left1 {
                height: 372px;
            }
            .left1:before,
            .left2:before,
            .left3:before,
            .left4:before,
            .left5:before {
                display: block;
                width: 100%;
                height: 1px;
                content: '';
                position: relative;
                left: 0;
                bottom: -1px;
                background: linear-gradient(to right, #076ead, #4ba6e0, #076ead);
                box-shadow: 0 0 5px rgb(131 189 227);
                opacity: 0.6;
            }

            .left2 {
                height: 392px;
            }
            .left3 {
                height: 352px;
            }
            .left4 {
                height: 302px;
            }
            .left5 {
                height: 734px;
            }
            // .left6 {
            //     height: 360px;
            // }
        }
        .right {
            display: flex;
            flex-direction: column;
            flex: 1;
            margin-left: 10px;
            .right-top1 {
                height: 206px;
                width: 100%;
            }
            .right-top2 {
                height: 0px;
                width: 100%;
                margin: 10px 0;
            }
            .right-bottom {
                flex: 1;
                display: flex;
                padding-bottom: 20px;
                .right-left {
                    flex: 0 0 1917px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    width: 1917px;
                    .right-left1 {
                        height: 999px;
                    }
                    .right-left2 {
                        height: 80px;
                    }
                    .right-left3 {
                        height: 570px;
                    }
                    // .right-left4 {
                    //     height: 220px;
                    // }
                }
                .right-right {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    margin-left: 20px;
                    margin-right: 20px;
                    .right-right1 {
                        width: 100%;
                        height: 999px;
                    }
                    .right-right1:before {
                        display: block;
                        width: 100%;
                        height: 1px;
                        content: '';
                        position: relative;
                        left: 0;
                        bottom: -1px;
                        background: linear-gradient(to right, #076ead, #4ba6e0, #076ead);
                        box-shadow: 0 0 5px rgb(131 189 227);
                        opacity: 0.6;
                    }
                    .right-right2 {
                        flex: 1;
                        width: 100%;
                        height: 650px;
                        margin-top: 20px;
                        .bubble-header {
                            height: 50px;
                            border: 1px solid rgba(7, 118, 181, 0.5);
                            box-shadow: inset 0 0 10px rgba(7, 118, 181, 0.4);
                            margin-bottom: 12px;
                        }
                    }
                }
            }
        }
    }
}
</style>
