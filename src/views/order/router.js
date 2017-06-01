
export default  {
  path: '/order',
  component:resolve => require(['./pages/layout'], resolve),
  children: [
    {path: '', redirect: '/order/askOrders'},
    {
      path: 'askOrders',//咨询订单
      component: resolve => require(['./pages/askOrders'], resolve)
    },
    {
      path: 'medicalCard',//功能管理
      component: resolve => require(['./pages/medicalCard'], resolve)
    }
  ]
}

