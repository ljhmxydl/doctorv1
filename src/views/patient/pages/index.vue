<template>
  <div id="patient">
    患者界面
  </div>
</template>

<script>
import {XButton,XHeader,Flexbox,FlexboxItem,Tabbar, ViewBox,TabbarItem,Picker,GroupTitle,Group,Cell,Selector,XNumber} from 'vux'


let num = []
for (var i = 0; i <= 60; i++) {
  num.push({
    name: i ,
    value: i + ''
  })
}

export default {
  components: {
    XButton,XHeader,Flexbox,FlexboxItem,Picker,GroupTitle,Group,Cell,Selector,XNumber,Tabbar, TabbarItem,ViewBox
  },
  beforeRouteEnter(to, from, next){
    next(vm => {
      let self = vm

    })
  },
  methods: {

  },
  computed:{

	},
  data () {
    return {

    }
  },
   watch: {

  }
}
</script>

