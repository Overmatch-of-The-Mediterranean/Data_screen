<template>
    <div :style="{width:'100%',height:'100%'}">
        <!-- <GdpTimelineChart></GdpTimelineChart> -->
        <OrderMap></OrderMap>
    </div>
</template>

<script>
// import { ref } from 'vue'
import OrderMap from './OrderMap/index.vue'
// import OrderMap from './OrderMap/index.vue'
export default {
    name: 'Test',
    components: { OrderMap }
}

</script>

<style lang='scss' scoped></style>
