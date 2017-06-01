

export default  {
  path: '/patient',
  redirect:'/patient/',
  component:resolve => require(['./pages/layout'], resolve),
  children: [
    {
      path: '/',
      component: resolve => require(['./pages/index'], resolve)
    },
    {
      path: 'cart/',
      component: resolve => require(['./pages/cart'], resolve)
    }
  ]
}

