<template>
    <div class="center-header">
        <div class="center-header-wrapper">
            <div class="center-header-item" v-for="(item, index) in headerData" :key="index">
                <div class="center-header-left">
                    <div class="bg">
                        <div class="img">
                            <Icon :name="iconData[index]" :ttyle="{color:'white'}" />
                        </div>
                    </div>
                </div>
                <div class="center-header-right">
                    <div class="title">{{item.title}}</div>
                    <div class="sub-title">{{item.subTitle}}</div>
                    <div class="total">
                        <count-to :start-val="item.startVal" :end-val="item.endVal" :duration="1000" separator="," autoplay />
                    </div>
                </div>
            </div>
        </div>
        <div class="project-wrapper">
            <div class="project" v-for="(item, index) in project" :key="index">
                <div class="project-img">
                    <Icon :name="iconData2[index]" :style="{color:'white'}" />
                </div>
                <div class="project-text-container" :class="[index===0?'green':'red']">
                    <div class="project-text">{{item.title}}</div>
                    <div class="project-value">{{item.value}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
  
  <script>
import { ref, watch, onMounted } from 'vue'

export default {
    name: 'centerHeader',
    props: {
        data: Object
    },
    setup (props) {
        const project = ref([])
        const headerData = ref([])
        const iconData = ref(['-laugh', '-money', '-user1', '-zu-copy'])
        const iconData2 = ref(['-haoping1', '-chaping'])
        const update = () => {
            project.value = [...props.data.project]
            headerData.value = [...props.data.headerData]
        }
        onMounted(() => {
            update()
            // console.log(props.data.project, '11111');
        })
        watch(() => props.data, () => {
            update()
        })
        return {
            project,
            headerData,
            iconData,
            iconData2
        }
    }
}
  </script>
  
  <style lang="scss" scoped>
.center-header {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    // background: rgb(66, 68, 70);
    padding: 0 40px;
    box-sizing: border-box;

    .center-header-wrapper {
        width: 1917px;
        display: flex;

        .center-header-item {
            flex: 1;
            display: flex;
            justify-content: space-between;
            background: url('../../assets/images/bg1.png') no-repeat;
            background-size: 100% auto;
            margin-right: 40px;
            .center-header-left {
                .bg {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    // width: 180px;
                    height: 185px;
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    // background-color: rgb(131, 167, 72);
                    border-radius: 50%;

                    .img {
                        width: 60%;
                        border-radius: 50%;
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                    }
                }
            }

            .center-header-right {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-right: 43px;
                // width: 215px;

                .title {
                    font-size: 30px;
                }

                .sub-title {
                    font-size: 12px;
                    letter-spacing: 1px;
                    margin-top: 10px;
                }

                .total {
                    font-family: DIN;
                    font-size: 36px;
                    font-weight: bolder;
                    letter-spacing: 2px;
                    margin-top: 10px;
                    color: rgba(14, 253, 255, 1);
                }
            }
        }
    }

    .project-wrapper {
        flex: 1;
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 100%;
        .project {
            width: 50%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            // flex-direction: column;
            align-items: center;
            background: url('../../assets/images/main_middle.png');
            background-size: 100% 100%;
            margin-left: 40px;

            .project-img {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100px;
                height: 100px;
            }

            img {
                width: 100%;
                height: 100%;
            }

            .project-text {
                font-size: 36px;
                margin-top: 10px;
                margin-bottom: 20px;
            }

            .project-value {
                font-size: 40px;
                font-weight: 700;
                margin-top: 5px;
            }
        }
    }
    .red {
        color: rgb(216, 30, 6);
    }
    .green {
        color: rgb(26, 250, 41);
    }
}
</style>