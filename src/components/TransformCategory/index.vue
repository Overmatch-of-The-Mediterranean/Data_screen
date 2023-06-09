<template>
    <div class="country-category">
        <!-- @click="onClick(index)" -->
        <div class="category" v-for="(item,index) in data" :key="item" @mouseenter="onMouseEnter(index)" @mouseleave="onMouseleave" @mousemove="onMouseEnter(index)">
            <div class="selected" v-if="index === selected" :style="{backgroundColor:color[0]}">{{item}}</div>
            <div class="selected" v-else-if="index === hovered" :style="{backgroundColor:color[1]}">{{item}}</div>
            <div v-else>{{item}}</div>

        </div>
    </div>
</template>
  
  <script>
import { ref, onMounted, onUnmounted } from 'vue'
export default {
    name: 'TransformCategory',
    props: {
        data: Array,
        color: {
            type: Array,
            default () {
                return ['rgb(140, 160, 173)', 'rgb(80, 80, 80)']
            }
        }
    },
    setup (props) {
        const selected = ref(0)
        const hovered = ref(-1)
        let task
        // const onClick = (index) => {
        //     selected.value = index
        // }
        const onMouseEnter = (index) => {
            hovered.value = index
        }
        const onMouseleave = () => {
            hovered.value = -1
        }
        const update = () => {
            clearInterval(task)
            setInterval(() => {
                if (selected.value + 1 > props.data.length - 1) {
                    selected.value = 0
                } else {
                    selected.value += 1
                }
            }, 2000)
        }


        onMounted(() => { update() })
        onUnmounted(() => { task && clearInterval(task) })
        return {
            selected,
            hovered,
            update,
            // onClick,
            onMouseleave,
            onMouseEnter
        }
    }
}
  </script>
  
  <style lang="scss" scoped>
.country-category {
    display: flex;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(7, 118, 181, 0.5);
    box-shadow: inset 0 0 10px rgba(7, 118, 181, 0.4);
    margin-bottom: 12px;
    position: relative;
    .category {
        flex: 1;
        // background: rgb(53, 57, 65);
        font-size: 24px;
        color: #fff;

        .hovered {
            background: rgb(80, 80, 80);
        }

        .selected {
            background: rgb(140, 160, 173);
            color: #fff;
        }

        div {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
        }
    }
}
</style>