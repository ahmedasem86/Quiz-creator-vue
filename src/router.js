import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AllQuestions from './components/AllQuestions'
import QuestionPage from './components/QuestionPage'
import RenderHTML from './components/RenderHTML'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'AllQuestions',
      component: AllQuestions
    },
    {
      path: '/question/:id',
      name: 'QuestionPage',
      component: QuestionPage
    },
    {
      path: '/static/:answer_id',
      name: 'RenderHTML',
      component: RenderHTML
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
