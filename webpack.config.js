const path = require('path'); //引入path 要用到他的resolve 方法
const resolve = dir => path.resolve(__dirname, dir);
module.exports = {
    resolve: {
        fallback:  {
            "crypto": require.resolve("crypto-browserify")
        },
        alias: {
            '@components': resolve('src/components')
        }
    }
}
