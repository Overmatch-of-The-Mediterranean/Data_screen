<template>
    <router-view></router-view>
</template>

<script>
export default {
    name: 'App',
}
</script>

<style>
html,
body,
ul,
#app {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
}
a {
    color: #d3d6dd !important;
    text-decoration: none;
}
body {
    color: #fff !important;
    font-size: 16px !important;
    /* background: #033c76 !important; */
    /* background: -webkit-radial-gradient(
        50% 35%,
        farthest-corner,
        #034f8e,
        #034987,
        #02366d,
        #002353
    ) !important; */
    width: 100%;
    height: 100%;
    /* padding: 16px 16px 0 16px; */
    background-image: url('./assets/images/pageBg.png');
    background-size: cover;
    background-position: center center;
}
</style>
