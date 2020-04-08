let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

// store是一个公用的数据池
// 向组件提供city属性
export default {
  city: defaultCity
}
