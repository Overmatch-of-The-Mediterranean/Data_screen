<template>
    <div class="home">
        <imooc-loading v-if="loading" inside-color="#02bcfe" outside-color="#3be6cb">
            <div class="loading-text">
                数据大屏加载中......
            </div>
        </imooc-loading>
        <imooc-container v-else :options="{width:3840,height:2160}">
            <div class="header">
                <!-- 第一行 -->
                <div class="d-flex jc-center pdt-10">
                    <div class="time">{{ time }} - {{ weekday }} - {{  date  }} </div>
                    <dv-decoration-10 class="dv-dec-10" />
                    <div class="d-flex jc-center">
                        <dv-decoration-8 class="dv-dec-8" :color="decorationColors" />
                        <div class="title">
                            <span class="title-text">河南景区数据可视化平台</span>
                            <DvDecoration6 class="dv-dec-6" :color="['#50e3c2', '#67a1e5']" :reverse="true" />
                        </div>
                        <dv-decoration-8 class="dv-dec-8" :reverse="true" :color="decorationColors" />
                    </div>
                    <dv-decoration-10 class="dv-dec-10-s" />
                </div>
                <!-- 第二行 -->
                <div class="d-flex jc-between px-2">
                    <div class="d-flex aside-width">
                        <div :class="['react-left', 'ml-4','react-l-s',activeIndex===1 ? 'bg-color-blue':'']" @click="handleActiveClass(1)">
                            <span :class="['react-before',activeIndex===1 ? 'bg-color-blue':'']"></span>
                            <router-link :to="{name:'body1'}">
                                <span :class="['text', activeIndex===1 ?'fw-b':'']">景区大屏统计</span>
                            </router-link>
                        </div>
                        <div :class="['react-left','ml-3',activeIndex===2 ? 'bg-color-blue':'']" @click="handleActiveClass(2)">
                            <router-link :to="{name:'report'}">
                                <span :class="['text',  activeIndex===2 ?'fw-b':'']">景区数据报表</span>
                            </router-link>
                        </div>
                    </div>
                    <div class="d-flex aside-width">
                        <div class="react-right bg-color-blue mr-3">
                            <span :class="['text',  'fw-b']">后台管理</span>
                        </div>
                        <div :class="['react-right', 'mr-3','react-l-s',activeIndex===3 ? 'bg-color-blue':'']" @click="handleActiveClass(3)">
                            <router-link :to="{name:'wordCloud'}">
                                <span :class="['text',  activeIndex===3 ?'fw-b':'']">词云图</span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <router-view></router-view>
        </imooc-container>
    </div>
</template>

<script>
import useClock from '../hooks/useClock'
import { mapScatter, wordcloud, screenData } from '@/api'
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
    name: 'Home',
    data () {
        return {
            mapScatter: null,
            wordcloud: null,
            screenData: null
        }
    },
    methods: {
        getwordcloud () {
            return this.wordcloud
        }
    },
    provide () {
        return {
            getscreenData: this.getscreenData,
            getwordcloud: this.getwordcloud,
            getmapScatter: this.getmapScatter
        }
    },
    mounted () {
        mapScatter().then(res => { this.mapScatter = res.data })
        wordcloud().then(res => { this.wordcloud = res.data })
        screenData().then(res => { this.screenData = res.data })
    },
    setup () {
        const decorationColors = ['#568aea', '#000000']
        const decorationColors2 = ['#50e3c2', '#67a1e5']
        let weekday = ref('')
        const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
        /* eslint-disable */
        let time1 = new Date().getDay()
        weekday = weekdays[time1]
        const { time, date } = useClock()
        const loading = ref(true)
        const activeIndex = ref(1)
        const handleActiveClass = (index) => {
            activeIndex.value = index
        }
        const route = useRoute()
        console.log(route);
        switch (route.name) {
            case "body1":
                activeIndex.value = 1
                break;
            case "report":
                activeIndex.value = 2
                break;
            case 'backtage':
                activeIndex.value = 4
                break;
            case 'wordCloud':
                activeIndex.value = 3
                break;
            default:
                break
        }
        // console.log('router', router);
        // console.log('route', route.name);
        onMounted(() => {
            setTimeout(() => {
                loading.value = false
            }, 200)
        })
        return {
            loading,
            time,
            date,
            weekday,
            activeIndex,
            decorationColors,
            decorationColors2,
            handleActiveClass
        }
    }
}

</script>

<style lang="scss" scoped>
@import '../assets/scss/_variables.scss';
.home {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    // background-color: rgb(29, 29, 29);
    font-size: 48px;
    color: #fff;
    .time {
        position: absolute;
        top: 0;
        right: 0;
        width: 20%;
        height: 100%;
        text-align: right;
        line-height: 147px;
        font-size: 40px;
        padding-right: 30px;
    }
    #imooc-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .top-header {
            position: relative;
            display: flex;
            align-items: center;
            width: 100%;
            height: 100%;
            // background: rgb(36, 31, 32);
            padding: 0 64px;
            box-sizing: border-box;
            .dv-dec-10 {
                position: absolute;
                left: 0%;
                bottom: 0;
                width: 50%;
                height: 5px;
            }
            .dv-dec-10-s {
                position: absolute;
                bottom: 0;
                right: 0%;
                width: 50%;
                height: 5px;
            }
            .dv-dec-10-s {
                transform: rotateY(180deg);
            }
            .logo {
                width: 130px;
                height: 130px;
                background-color: rgb(242, 23, 13);
                border-radius: 50%;
                font-size: 70px;
                text-align: center;
                line-height: 120px;
                color: rgb(2, 52, 106);
            }
            .logo-text {
                margin-left: 40px;

                .cn-text {
                    color: rgb(255, 255, 255);
                    font-weight: bold;
                    font-size: 65px;
                    letter-spacing: 2px;
                }
                .en-text {
                    color: rgb(255, 255, 255);
                    font-size: 35px;
                    letter-spacing: 1px;
                }
            }
            .tabs {
                width: 1500px;
                height: 100%;
                transform: translateX(22%);
                .tabs-ul {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: space-between;

                    .tabs-li {
                        position: relative;
                        height: 100%;
                        align-self: center;
                        list-style: none;
                        .activeClass {
                            color: red !important;
                        }
                        .tabs-a {
                            line-height: 147px;
                            height: 100%;
                            font-size: 40px;
                            display: block;
                            color: #fff;
                            text-decoration: none;
                            padding: 0 15px;
                        }
                        .tabs-a:hover {
                            color: #f4e925;
                            opacity: 1;
                        }
                        .tabs-a:before,
                        .tabs-a:after {
                            position: absolute;
                            width: 30px;
                            height: 20px;
                            opacity: 0.4;
                            content: '';
                            border-radius: 2px;
                        }
                        .tabs-a:before {
                            bottom: 25px;
                            left: -20px;
                            border-left: 7px solid #02a6b5;
                            border-bottom: 7px solid #02a6b5;
                        }
                        .tabs-a:after {
                            bottom: 25px;
                            right: -20px;
                            border-right: 7px solid #02a6b5;
                            border-bottom: 7px solid #02a6b5;
                        }
                    }
                    .tabs-li:before {
                        position: absolute;
                        width: 30px;
                        height: 20px;
                        opacity: 0.4;
                        content: '';
                        border-top: 7px solid #02a6b5;
                        border-left: 7px solid #02a6b5;
                        top: 25px;
                        left: -20px;
                        border-radius: 2px;
                    }
                    .tabs-li:after {
                        position: absolute;
                        width: 30px;
                        height: 20px;
                        opacity: 0.4;
                        content: '';
                        border-top: 7px solid #02a6b5;
                        border-right: 7px solid #02a6b5;
                        top: 25px;
                        right: -20px;
                        border-radius: 2px;
                    }
                    .tabs-a:hover:before,
                    .tabs-a:hover:after,
                    .tabs-li:hover:before,
                    .tabs-li:hover:after {
                        border-color: #f4e925;
                        opacity: 1;
                    }
                }
            }
        }
        .header {
            width: 100%;
            height: 147px;
            // background: yellow;
            .dv-dec-10,
            .dv-dec-10-s {
                width: 100%;
                height: 10px;
            }
            .dv-dec-10-s {
                transform: rotateY(180deg);
            }
            .dv-dec-8 {
                width: 400px;
                height: 100px;
            }
            .title {
                position: relative;
                width: 1000px;
                text-align: center;
                background-size: cover;
                background-repeat: no-repeat;

                .title-text {
                    display: block;
                    color: #d3d6dd;
                    width: 100%;
                    font-size: 48px;
                    position: absolute;
                    bottom: 10%;
                    left: 50%;
                    transform: translate(-50%);
                }

                .dv-dec-6 {
                    position: absolute;
                    bottom: -30px;
                    left: 50%;
                    width: 250px;
                    height: 8px;
                    transform: translate(-50%);
                }
            }

            // 第二行
            .aside-width {
                margin-left: 30px;
                width: 40%;
            }
            .react-r-s,
            .react-l-s {
                background-color: #0f1325;
            }

            // 平行四边形
            .react-right {
                &.react-l-s {
                    text-align: right;
                    width: 1000px;
                }
                font-size: 36px;
                width: 600px;
                line-height: 100px;
                text-align: center;
                transform: skewX(-45deg);

                .react-after {
                    position: absolute;
                    right: -25px;
                    top: 0;
                    height: 100px;
                    width: 100px;
                    background-color: #0f1325;
                    transform: skewX(45deg);
                }

                .text {
                    display: inline-block;
                    color: #d3d6dd;
                    width: 100%;
                    height: 100%;
                    transform: skewX(45deg);
                }
            }

            .react-left {
                &.react-l-s {
                    width: 1000px;
                    text-align: left;
                }
                font-size: 36px;
                width: 600px;
                height: 100px;
                line-height: 100px;
                text-align: center;
                transform: skewX(45deg);
                background-color: #0f1325;

                .react-before {
                    position: absolute;
                    left: -55px;
                    top: 0;
                    height: 100px;
                    width: 100px;
                    background-color: #0f1325;
                    transform: skewX(-45deg);
                }

                .text {
                    width: 100%;
                    height: 100%;
                    display: inline-block;
                    transform: skewX(-45deg);
                }
            }
            .ml-3 {
                padding-left: 32px;
            }
            .mr-3 {
                padding-right: 32px;
            }
        }
    }
}
.loading-text {
    font-size: 20px;
}
</style>
