export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city // 借助localStorage本地存储数据，防止页面刷新时城市出错
    } catch (e) {}
  }
}
