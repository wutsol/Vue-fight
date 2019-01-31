let defaultCity = '城市'
try { // 防止某些用户关闭本地数据存储引起的页面无法加载
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
