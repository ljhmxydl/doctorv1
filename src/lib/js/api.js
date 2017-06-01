/**
* 此文件是接口js文件，暴露出去给根组件Vue的原型
*/

// import http from 'vue-resource'
import Vue from 'vue'

const root = `/api/doctor/v1`

const api = {}

export default api

/*
* 检验医生权限状态
* */
api.checkDoctorStatus = (openid,code) => {
  return Vue.http.get(`${root}/check.json`, {params: {"openid": openid, "code": code}}).then(response => response.body)
}

/*
*获取医生个人信息
**/
api.getDoctorInfo = (openid) => {
  return Vue.http.get(`${root}/getDoctorInfo.json`, {params: {"openid": openid}}).then(response => response.body)
}
