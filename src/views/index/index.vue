<template>
    <div id="index" ref="report">
        <div class="bg">
            <!-- <dv-loading v-if="loading">Loading...</dv-loading> -->
            <div class="host-body">

                <div class="body-box">
                    <!-- 第三行数据 -->
                    <div class="content-box">
                        <div>
                            <dv-border-box-12>
                                <center-left1 />
                            </dv-border-box-12>
                        </div>
                        <div>
                            <dv-border-box-12>
                                <center-left2 />
                            </dv-border-box-12>
                        </div>
                        <!-- 中间 -->
                        <div>
                            <center />
                        </div>
                        <!-- 中间 -->
                        <div>
                            <center-right1 />
                        </div>
                        <div class="ml">
                            <dv-border-box-13>
                                <center-right2 />
                            </dv-border-box-13>
                        </div>
                    </div>

                    <!-- 第四行数据 -->
                    <div class="bototm-box">
                        <dv-border-box-13>
                            <bottom-left />
                        </dv-border-box-13>
                        <dv-border-box-12>
                            <bottom-right />
                        </dv-border-box-12>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted, onUnmounted } from 'vue'
import { formatTime } from '@/utils/index'
import { WEEK } from '@/constant/index'
import { title, subtitle, moduleInfo } from '@/constant/index'
import CenterLeft1 from '../centerLeft1/index.vue'
import CenterLeft2 from '../centerLeft2/index.vue'
import Center from '../center/index.vue'
import CenterRight1 from '../centerRight1/index.vue'
import CenterRight2 from '../centerRight2/index.vue'
import BottomLeft from '../bottomLeft/index.vue'
import BottomRight from '../bottomRight/index.vue'

export default defineComponent({
    components: {
        CenterLeft1,
        CenterLeft2,
        Center,
        CenterRight1,
        CenterRight2,
        BottomLeft,
        BottomRight
    },
    setup() {
        const report = ref(null)

        // * 颜色
        const decorationColors = ['#568aea', '#000000']
        // * 加载标识
        const loading = ref<boolean>(true)
        // * 时间内容
        const timeInfo = reactive({
            setInterval: 0,
            dateDay: '',
            dateYear: '',
            dateWeek: ''
        })

        onMounted(() => {
            cancelLoading()
            handleTime()

            console.log(report.value, '111')
            report.value.style.transform = `scale(2, 2) translate(-50%, -50%)`
        })

        onUnmounted(() => {
            clearInterval(timeInfo.setInterval)
        })

        // methods
        // todo 处理 loading 展示
        const cancelLoading = () => {
            setTimeout(() => {
                loading.value = false
            }, 500)
        }

        // todo 处理时间监听
        const handleTime = () => {
            timeInfo.setInterval = setInterval(() => {
                const date = new Date()
                timeInfo.dateDay = formatTime(date, 'HH: mm: ss')
                timeInfo.dateYear = formatTime(date, 'yyyy-MM-dd')
                timeInfo.dateWeek = WEEK[date.getDay()]
            }, 1000)
        }

        return {
            loading,
            timeInfo,
            title,
            subtitle,
            moduleInfo,
            decorationColors,
            report
        }
    }
})
</script>

<style lang="scss" scoped>
@import '../../assets/scss/index.scss';
</style>
