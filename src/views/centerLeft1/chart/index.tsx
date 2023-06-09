import { defineComponent, onUnmounted, reactive } from 'vue'
import Draw from './draw'

export default defineComponent({
  components: {
    Draw,
  },
  setup() {
    let intervalInstance = null
    const cdata = reactive({
      xData: ['粉面粥店', '便当', '汉堡披萨', '香锅冒菜', '炸串', '地方菜系'],
      seriesData: [
        { value: 10, name: '粉面粥店' },
        { value: 5, name: '便当' },
        { value: 15, name: '汉堡披萨' },
        { value: 25, name: '香锅冒菜' },
        { value: 20, name: '炸串' },
        { value: 35, name: '地方菜系' },
      ],
    })
    intervalInstance = setInterval(() => {
      const data = cdata.seriesData
      cdata.seriesData = data.map((e) => {
        return { value: e.value + 10, name: e.name }
      })
    }, 1000)

    onUnmounted(() => {
      clearInterval(intervalInstance)
    })
    return () => {
      return (
        <div>
          <Draw cdata={cdata} />
        </div>
      )
    }
  },
})
