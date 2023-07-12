import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/pages/PageHome'
import PageThreadShow from '@/pages/PageThreadShow'
import PageNotFound from '@/pages/PageNotFound'
import PageForum from '@/pages/PageForum'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageHome',
      component: PageHome
    },
    {
      path: '/forum/:id',
      name: 'PageForum',
      component: PageForum,
      props: true
    },
    {
      path: '/thread/:id', // : is a dynamic path, which allows the id to be added later
      name: 'PageThreadShow',
      component: PageThreadShow,
      props: true
    },
    {
      path: '*', // * refers to uknown pages?
      name: 'NotFound',
      component: PageNotFound
      // redirect: {name: 'PageHome'} <- alternatively, you can redirect user
    }
  ],
  mode: 'history'
})
