import Vue from 'vue'
import Router from 'vue-router'
// import store from './store'
//过渡页面
import index from './router/index'
//路由开始
import login from './views/login/router'
import home from './views/home/router'
import order from './views/order/router'
import patient from './views/patient/router'
import mine from './views/mine/router'


Vue.use(Router)

let router = new Router({
  mode: 'hash',
  routes: [
    ...index,
    login,
    home,
    mine,
    patient,
    order
  ]
})


//是否有OPENID若没有则跳到授权
router.beforeEach((to, from, next) => {

  var openid = window.localStorage.getItem('openid');
  var code = Vue.prototype.getQueryString('code');
  // console.log(Vue.prototype.api.checkDoctorStatus);
  console.log(Vue.$route);
  Vue.$vux.toast.show({text: 'openid:'+window.localStorage.getItem('openid'), type: 'success', time: 1000})
  //alert(window.localStorage)
  //alert('openid:'+window.localStorage.getItem('openid'))

  if (Boolean(openid) == false) {
    Vue.$vux.toast.show({text: "code:"+code, type: 'warn', time: 1000})
    if (Boolean(code) == false) {
      Vue.$vux.toast.show({text: "应该要跳转了", type: 'warn', time: 1000})
      window.location.href = Vue.prototype.redirect_uri;
      //next()
    } else {
      console.log(Vue.api);
      Vue.prototype.api.checkDoctorStatus(openid,code)
      //Vue.http.get('/api/doctor/v1/check.json', {params: {"openid": openid, "code": code}})
        .then(function (response) {
          console.log(response);
          switch (response.code) {
            case '998'://参数错误
              Vue.$vux.toast.show({text: response.msg, type: 'text', time: 2000})
              break;
            case '100'://已认证
              window.localStorage.setItem('openid', response.openid)
              Vue.$vux.toast.show({text: response.msg, type: 'text', time: 2000})
              router.replace('/home')
              break;
            case '101'://未注册
              console.log(1);
              window.localStorage.setItem('openid', response.openid)
              Vue.$vux.toast.show({text: response.msg, type: 'text', time: 2000})
              router.replace('/login')
              break;
            case '102'://认证不通过
              window.localStorage.setItem('openid', response.openid)
              Vue.$vux.toast.show({text: response.msg, type: 'text', time: 2000})
              next()
              break;
            case '103'://未注册
              window.localStorage.setItem('openid', response.openid)
              Vue.$vux.toast.show({text: response.msg, type: 'text', time: 2000})
              next()
              break;
          }
        })
        .catch(function (error) {
          console.log(error);
          Vue.$vux.toast.show({text: '网络异常', type: 'text', time: 1000});
          next()
        })
    }
  } else {
    Vue.$vux.toast.show({text: "有openid:"+openid+",有权限访问这个页面", type: 'success', time: 1000})
    //alert("有openid:"+openid)
    next()
  }
})

export default router = router
