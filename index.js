import Loading from './components/Loading.vue'
import Error from './components/Error.vue'

/**
 * @param Options 选项
 * @param Options.Component Component 包裹组件
 * @param Options.Loading Component 加载中组件
 * @param Options.Error AsyncComponent 加载超时错误组件 import('@/views/Home.vue')
 * @param Options.delay Int 延迟加载时间 - 毫秒
 * @param Options.timeout Int 超时判定时间 - 毫秒
 * @return Promise
 */
const loadingRouter = ({ Component, Loading = Loading, Error = Error, delay, timeout }) {
  const Instance = new Vue({
    render (h) {
      return h(Loading)
    }
  })
  const el = Instance.$mount().$el
  document.body.appendChild(el)
  return () => {
    return new Promise(resolve => {
      // 设置延迟
      setTimeout(() => {
        let passed = false
        let checkTimeout = setTimeout(() => {
          passed = true
          document.body.removeChild(el)
          resolve(Error)
        }, timeout || Infinity)
        Component.then(res => {
          if (passed) {
            return
          }
          clearTimeout(checkTimeout)
          el && document.body.removeChild(el)
          resolve(Component)
        })
      }, delay || 0)
    })
  }
}

export default loadingRouter
