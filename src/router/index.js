import Vue from 'vue'
import Router from 'vue-router'
import HisyoImagechange from '@/components/Hisyo_Imagechange'
import HelloWorld from '@/components/HelloWorld'
import LP from '@/components/LP'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HisyoImagechange',
      component: HisyoImagechange
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/lp',
      name: 'LP',
      component: LP
    }
  ]
})
