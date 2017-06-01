<template>
  <div class="enter">
    杏缘医生
  </div>
</template>

<script>
//import {XButton,XHeader} from 'vux'
import './index.less'
import Vue from 'vue'
//import axios from 'config/http'
/*import Wechat from 'config/wx.config'
Wechat()*/
export default {
  components: {
  },
  data () {
    return {
    }
  },
  beforeRouteEnter(to, from, next){
    var openid = window.localStorage.getItem('openid');
    var code = Vue.prototype.getQueryString('code');
    next(vm => {
      Vue.prototype.api.checkDoctorStatus(openid,code)
      //Vue.http.get('/api/doctor/v1/check.json', {params: {"openid": openid, "code": code}})
        .then(response => {
          console.log(response);
          switch (response.code) {
            case '998'://参数错误
              Vue.$vux.toast.show({text: response.msg, type: 'text', time: 1000})
              next()
              break;
            case '100'://已认证
              Vue.$vux.toast.show({text: response.msg, type: 'text', time: 1000})
              vm.$router.replace('/home')
              break;
            case '101'://未注册
              Vue.$vux.toast.show({text: response.msg, type: 'text', time: 1000})
              vm.$router.replace('/login')
              break;
            case '102'://认证不通过
              Vue.$vux.toast.show({text: response.msg, type: 'text', time: 1000});
              next()
              break;
            case '103'://未注册
              Vue.$vux.toast.show({text: response.msg, type: 'text', time: 1000})
              next()
              break;
          }
        },error => {
          console.log(error);
          Vue.$vux.toast.show({text: '网络异常', type: 'text', time: 1000});
        })
    })


  },/*
  created(){
    var openid = window.localStorage.getItem('openid');
    var code = this.getQueryString('code');
    this.checkDoctorStatus(openid,code)
  },*/
  methods:{
    checkDoctorStatus(openid,code){
      this.$http.get('/api/doctor/v1/check.json', {params: {"openid": openid, "code": code}})
        .then(function (response) {
          console.log(response.body);
          switch (response.body.code) {
            case '100'://已认证
              Vue.$vux.toast.show({text: response.body.msg, type: 'text', time: 2000})
              this.$router.replace('/home')
              break;
            case '101'://未注册
              Vue.$vux.toast.show({text: response.body.msg, type: 'text', time: 2000})
              this.$router.replace('/login')
              break;
            case '102'://认证不通过
              Vue.$vux.toast.show({text: response.body.msg, type: 'text', time: 2000});
              break;
            case '103'://未注册
              Vue.$vux.toast.show({text: response.body.msg, type: 'text', time: 2000})
              break;
          }
        })
        .catch(function (error) {
          console.log(error);
          Vue.$vux.toast.show({text: '网络异常', type: 'text', time: 1000});
        })
    }
  }
}
</script>
