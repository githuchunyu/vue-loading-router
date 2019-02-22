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
const loadingRouter = ({ Component, Loading = Loading, Error = Error, timeout }) {
  // 挂载loading到body
  const LoadingInstance = new Vue({
    render (h) {
      return h(Loading)
    }
  })
  const el = LoadingInstance.$mount().$el
  document.body.appendChild(el)

  // 生成组件所需的promise对象
  const waitLoading = new Promise(resolve => {
    // 超时判断
    let out = false, checkTimeout = null
    if (timeout > 0) {
      checkTimeout = setTimeout(() => {
        out = true
        if (Error) {
          document.body.removeChild(el)
          resolve(Error)
        }
      }, timeout)
    }
    // 加载组件及加载完成后续处理
    Component.then(res => {
      if (out) { return }
      checkTimeout && clearTimeout(checkTimeout)
      document.body.removeChild(el)
      resolve(Component)
    })
  })

  return () => {
    return waitLoading
  }
}

export default loadingRouter
