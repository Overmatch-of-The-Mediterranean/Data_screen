import { defineComponent, reactive } from 'vue'
import Draw from './draw'

export default defineComponent({
  components: {
    Draw
  },
  setup() {
    const cdata = reactive([
      {
        // 名字需要与 “common/map/fujian.js” 地图数据文件里面定义的一一对应，不能是 “福州” 或者 “闽” 之类的缩写
        name: '郑州市',
        value: 51,
        elseData: {
          // 这里放置地图 tooltip 里想显示的数据
        }
      },
      {
        name: '开封市',
        value: 24,
      },
      {
        name: '洛阳市',
        value: 82,
      },
      {
        name: '平顶山市',
        value: 60,
      },
      {
        name: '安阳市',
        value: 22,
      },
      {
        name: '鹤壁市',
        value: 23,
      },
      {
        name: '新乡市',
        value: 19,
      },
      {
        name: '焦作市',
        value: 41,
      },
      {
        name: '濮阳市',
        value: 27,
      },
      {
        name: '许昌市',
        value: 34,
      },
      {
        name: '漯河市',
        value: 15,
      },
      {
        name: '三门峡市',
        value: 20,
      },
      {
        name: '南阳市',
        value: 51,
      },
      {
        name: '商丘市',
        value: 27,
      },
      {
        name: '信阳市',
        value: 52,
      },
      {
        name: '周口市',
        value: 37,
      },
      {
        name: '驻马店市',
        value: 30,
      },
      {
        name: '济源市',
        value: 13,
      }
    ])

    return () => {
      return <div>
        <Draw cdata={cdata} />
      </div>
    }
  }
})