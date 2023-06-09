<template>
    <!-- <ve-wordcloud :data="chartData" height="100%" :settings="chartSetting"></ve-wordcloud> -->
    <div class="wordCloud">
        <div class="wordCloud-left">
            <div class="search">热门搜索词</div>
            <div :style="{width:'100%',height:'83%'}" id="hotSearch"></div>
        </div>
        <div class="wordCloud-right">
            <div class="comments">河南旅游热门评论</div>
            <div :style="{width:'100%',height:'83%'}" id="comments"></div>
        </div>
    </div>

</template>

<script>
import * as echarts from 'echarts';
import 'echarts-wordcloud'
import commonDataMixin from '../../mixins/commonDataMixin'
export default {
    name: 'WordCloud',
    mixins: [commonDataMixin],
    data () {
        return {
            data1: [
                {
                    name: '云台山',
                    value: 100
                },
                {
                    name: '老君山',
                    value: 50
                },
                {
                    name: '郑州',
                    value: 35
                },
                {
                    name: '河南的美景',
                    value: 110
                },
                {
                    name: '河南有那些特产',
                    value: 110
                },
                {
                    name: '三天速成河南话',
                    value: 130
                },
                {
                    name: '河南旅游攻略',
                    value: 130
                },
                {
                    name: '河南的美食',
                    value: 120
                },
                {
                    name: '河南理工可以可以参观吗',
                    value: 120
                },
                {
                    name: '云台山好玩吗',
                    value: 140
                },
                {
                    name: '河南是农业大省',
                    value: 30
                },
                {
                    name: '郑州地铁线路',
                    value: 70
                },
                {
                    name: '河南的漂亮小姐姐多吗',
                    value: 70
                },
                {
                    name: '河南旅游网',
                    value: 80
                },
                {
                    name: '大熊猫',
                    value: 80
                },
                {
                    name: '河南十大美景',
                    value: 90
                },
                {
                    name: '河南评分最高的景区',
                    value: 90
                },
                {
                    name: '大玉米楼',
                    value: 140
                },
                {
                    name: '二七塔',
                    value: 115
                },
                {
                    name: '中原福塔',
                    value: 115
                },
                {
                    name: '洛邑古城',
                    value: 130
                },
                {
                    name: '河南省非物质文化遗产',
                    value: 90
                },
                {
                    name: '河南的特产有哪些',
                    value: 100
                },
                {
                    name: '河南旅游路线',
                    value: 100
                },
                {
                    name: '评分最高的景区',
                    value: 40
                },
                {
                    name: '太极拳',
                    value: 60
                },
                {
                    name: '龙源湖',
                    value: 60
                },
                {
                    name: '郑州方特梦幻王国',
                    value: 70
                }
            ],
            data2: [
                {
                    name: '河南真中',
                    value: 100
                },
                {
                    name: '河南人真热情',
                    value: 50
                },
                {
                    name: '这次旅游很值得',
                    value: 110
                },
                {
                    name: '文化多元',
                    value: 35
                },
                {
                    name: '好吃的太多了',
                    value: 110
                },
                {
                    name: '好多靓仔靓妹',
                    value: 130
                },
                {
                    name: '大玉米楼灯光秀真好看',
                    value: 130
                },
                {
                    name: '各个景点的交通都很方便',
                    value: 120
                },
                {
                    name: '河南理工大学真不错',
                    value: 120
                },
                {
                    name: '云台山真好玩',
                    value: 140
                },
                {
                    name: '总体感觉还可以',
                    value: 30
                },
                {
                    name: '洛邑古城真热闹',
                    value: 70
                },
                {
                    name: '河南的漂亮小姐姐好多',
                    value: 70
                },
                {
                    name: '超好喝的胡辣汤',
                    value: 80
                },
                {
                    name: '赞赞赞',
                    value: 80
                },
                {
                    name: '到此一游',
                    value: 90
                },
                {
                    name: '河南评分最高的景区',
                    value: 90
                },
                {
                    name: '大玉米楼',
                    value: 140
                },
                {
                    name: '二七塔',
                    value: 115
                },
                {
                    name: '中原福塔',
                    value: 115
                },
                {
                    name: '洛邑古城',
                    value: 130
                },
                {
                    name: '爬山之旅很好',
                    value: 90
                },
                {
                    name: '度假的惬意',
                    value: 100
                },
                {
                    name: '旅游资源丰富',
                    value: 100
                },
                {
                    name: '交通便利',
                    value: 40
                },
                {
                    name: '太极拳真棒',
                    value: 60
                },
                {
                    name: '河南也是一个很时尚的省份',
                    value: 60
                },
                {
                    name: '郑州方特梦幻王国真好玩',
                    value: 70
                }
            ]
        }
    },
    mounted () {
        this.data1 = [
            {
                name: '云台山',
                value: 100
            },
            {
                name: '老君山',
                value: 50
            },
            {
                name: '郑州',
                value: 35
            },
            {
                name: '河南的美景',
                value: 110
            },
            {
                name: '河南有那些特产',
                value: 110
            },
            {
                name: '三天速成河南话',
                value: 130
            },
            {
                name: '河南旅游攻略',
                value: 130
            },
            {
                name: '河南的美食',
                value: 120
            },
            {
                name: '河南理工可以可以参观吗',
                value: 120
            },
            {
                name: '云台山好玩吗',
                value: 140
            },
            {
                name: '河南是农业大省',
                value: 30
            },
            {
                name: '郑州地铁线路',
                value: 70
            },
            {
                name: '河南的漂亮小姐姐多吗',
                value: 70
            },
            {
                name: '河南旅游网',
                value: 80
            },
            {
                name: '大熊猫',
                value: 80
            },
            {
                name: '河南十大美景',
                value: 90
            },
            {
                name: '河南评分最高的景区',
                value: 90
            },
            {
                name: '大玉米楼',
                value: 140
            },
            {
                name: '二七塔',
                value: 115
            },
            {
                name: '中原福塔',
                value: 115
            },
            {
                name: '洛邑古城',
                value: 130
            },
            {
                name: '河南省非物质文化遗产',
                value: 90
            },
            {
                name: '河南的特产有哪些',
                value: 100
            },
            {
                name: '河南旅游路线',
                value: 100
            },
            {
                name: '评分最高的景区',
                value: 40
            },
            {
                name: '太极拳',
                value: 60
            },
            {
                name: '龙源湖',
                value: 60
            },
            {
                name: '郑州方特梦幻王国',
                value: 70
            }
        ]
        this.data2 = [
            {
                name: '河南真中',
                value: 100
            },
            {
                name: '河南人真热情',
                value: 50
            },
            {
                name: '这次旅游很值得',
                value: 110
            },
            {
                name: '文化多元',
                value: 35
            },
            {
                name: '好吃的太多了',
                value: 110
            },
            {
                name: '好多靓仔靓妹',
                value: 130
            },
            {
                name: '大玉米楼灯光秀真好看',
                value: 130
            },
            {
                name: '各个景点的交通都很方便',
                value: 120
            },
            {
                name: '河南理工大学真不错',
                value: 120
            },
            {
                name: '云台山真好玩',
                value: 140
            },
            {
                name: '总体感觉还可以',
                value: 30
            },
            {
                name: '洛邑古城真热闹',
                value: 70
            },
            {
                name: '河南的漂亮小姐姐好多',
                value: 70
            },
            {
                name: '超好喝的胡辣汤',
                value: 80
            },
            {
                name: '赞赞赞',
                value: 80
            },
            {
                name: '到此一游',
                value: 90
            },
            {
                name: '河南评分最高的景区',
                value: 90
            },
            {
                name: '大玉米楼',
                value: 140
            },
            {
                name: '二七塔',
                value: 115
            },
            {
                name: '中原福塔',
                value: 115
            },
            {
                name: '洛邑古城',
                value: 130
            },
            {
                name: '爬山之旅很好',
                value: 90
            },
            {
                name: '度假的惬意',
                value: 100
            },
            {
                name: '旅游资源丰富',
                value: 100
            },
            {
                name: '交通便利',
                value: 40
            },
            {
                name: '太极拳真棒',
                value: 60
            },
            {
                name: '河南也是一个很时尚的省份',
                value: 60
            },
            {
                name: '郑州方特梦幻王国真好玩',
                value: 70
            }
        ]
        // console.log('this', this.$echarts);
        if (chart) {
            chart.dispose()
        }
        if (chart2) {
            chart2.dispose()
        }
        var chart = echarts.init(document.getElementById('hotSearch'))
        var chart2 = echarts.init(document.getElementById('comments'))
        chart.setOption({
            // title: {
            //     text: '热门搜索',
            //     textStyle: {
            //         color: 'rgb(14, 253, 255)',
            //         fontSize: 50,

            //     },
            //     top: 50,
            //     left: 80
            // },
            series: [
                {
                    type: 'wordCloud',
                    sizeRange: [30, 150],
                    // rotationRange: [0, 0],
                    // rotationStep: 45,
                    gridSize: 60,
                    // shape: 'diamond',
                    width: '100%',
                    height: '100%',
                    textStyle: {
                        color: function () {
                            return 'rgb(' + [
                                Math.round(Math.random() * 255),
                                Math.round(Math.random() * 255),
                                Math.round(Math.random() * 255)
                            ].join(',') + ')';
                        },
                        fontFamily: 'sans-serif',
                        fontWeight: 'normal'
                        // emphasis: {
                        //     shadowBlur: 10,
                        //     shadowColor: '#333'
                        // }
                    },
                    data: this.data1
                }
            ]
        })
        chart2.setOption({
            // title: {
            //     text: '河南景区热门评论',
            //     textStyle: {
            //         color: 'rgb(14, 253, 255)',
            //         fontSize: 50,

            //     },
            //     top: 50,
            //     left: 80
            // },
            series: [
                {
                    type: 'wordCloud',
                    sizeRange: [30, 150],
                    // rotationRange: [0, 0],
                    // rotationStep: 45,
                    gridSize: 50,
                    // shape: 'diamond',
                    width: '100%',
                    height: '100%',
                    textStyle: {
                        color: function () {
                            return 'rgb(' + [
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160)
                            ].join(',') + ')';
                        },
                        fontFamily: 'sans-serif',
                        fontWeight: 'normal'
                        // emphasis: {
                        //     shadowBlur: 10,
                        //     shadowColor: '#333'
                        // }
                    },
                    data: this.data2

                }
            ]
        })
    }
}

</script>

<style lang='scss' scoped>
.wordCloud {
    height: 100%;
    display: flex;
    padding-top: 100px;

    .wordCloud-left {
        width: 50%;
        height: 100%;
        .search {
            color: rgb(14, 253, 255);
            font-size: 50px;
            padding: 20px 0 0 80px;
        }
    }
    .wordCloud-right {
        width: 50%;
        height: 100%;
        .comments {
            color: rgb(14, 253, 255);
            font-size: 50px;
            padding: 50px 0 0 80px;
        }
    }
}
</style>