import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Study from '@/components/Study'
import Blog from '@/components/Blog'
import Work from '@/components/Work'
import List from '@/components/List'
import Personal from '@/components/Personal'
import Other from '@/components/Other'
import Mine from '@/components/Mine'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  scrollBehavior(to, from, position) {
    if (position) {
      return position;
    } else {
      return {x:0, y:0}
    }

    // if(to.hash) {
    //   return {
    //     selector: to.hash
    //   }
    // }
  },
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        login: false
      }
    },{
      path: '/about',
      component: About,
      children: [
        {
          path: '',
          name: 'Study',
          component: Study,
          meta: {
            login: false
          }   
        },{
          path: 'blog',
          name: 'Blog',
          component: Blog,
          meta: {
            login: false
          }
        },
        {
          path: '/work',
          name: 'Work',
          component: Work,
          meta: {
            login: false
          }
        }
      ]
    },{
      path: '/list/:userId?',
      name: 'List',
      component: List,
      meta: {
        login: false,
        title: "列表"
      }
    },{
      path: '/personal',
      name: 'Personal',
      components: {
        default: Personal,
        mine: Mine
      },
      meta: {
        login: true
      }
    }
  ]
})

router.beforeEach((to, from, next)=> {
  if (to.meta.login) {
    next('/other')
  } else {
    next();
  }
})

router.afterEach((to, from, next)=> {
  document.title = to.meta.title || '默认标题'
})


export default router;