<template>
  <div id="doctorInfo">
    <x-header :left-options="{showBack: true,backText:''}">个人信息</x-header>
    <group>
      <!--头像-->
      <CellBox title="头像" link="/mine/doctorInfo" is-link class="headImg">

        <div>
          <span>头像</span>
          <img style="float: right;" :src="headimgurl">
        </div>

      </CellBox>

      <cell title="姓名" :value="name"></cell>
      <cell title="电话" :value="mobile"></cell>
      <cell title="医院" :value="hospitalName"></cell>
      <cell title="科室" :value="departmentName"></cell>
      <cell title="职称" :value="jobTitle"></cell>
      <cell title="擅长" :value="advantage"></cell>
      <cell title="个人简介" :value="intro"></cell>

    </group>
  </div>
</template>

<script>
  import {XHeader, Group, Cell,CellBox} from 'vux'
  import Vue from 'vue'
  export default {
    data(){
      return {
        headimgurl:'',
        name:'',
        mobile:'',
        hospitalName:'',
        departmentName:'',
        jobTitle:'',
        advantage:'',
        intro:''
      }
    },
    components: {
      XHeader, Group, Cell,CellBox
    },
    beforeRouteEnter(to, from, next){
//      console.log(Vue.prototype.api.getDoctorInfo);
//      console.log(Vue.prototype.api.checkDoctorStatus);
      var openid = window.localStorage.getItem('openid');
      var code = Vue.prototype.getQueryString('code');
      Vue.prototype.api.getDoctorInfo(openid)
//      Vue.http.get('/api/doctor/v1/getDoctorInfo.json', {params: {"openid": openid, "code": code}})
        .then(response => {
          console.log(response);
          next(vm => {
            vm.headimgurl = response.doctor.headimgurl
            vm.name = response.doctor.name
            vm.mobile = response.doctor.mobile
            vm.hospitalName = response.doctor.hospitalName
            vm.departmentName = response.doctor.departmentName
            vm.jobTitle = response.doctor.jobTitle
            vm.advantage = response.doctor.advantage
            vm.intro = response.doctor.intro
          })
        },error => {
          console.log(error);
          Vue.$vux.toast.show({text: '网络异常', type: 'text', time: 1000});
          next()
        })

    }
  }
</script>

<style lang="less">
  .headImg{
    padding: 36/40rem 30/40rem;
    line-height: 110/40rem;
    height: 182/40rem;

    img{
      width: 110/40rem;
      margin-right: 20/40rem;
    }
  }

  .vux-cell-box > div{
    width: 100%;
  }
</style>
