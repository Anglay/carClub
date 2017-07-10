import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'

import Home from '@/components/home'

Vue.use(Router)

export default new Router({
	linkActiveClass: 'active',
  	routes: [{
      	path: '/login',
      	name: 'login',
      	component: {
      		template:"<p>login</p>"
      	}
    },{
      	path: '/',
      	name: 'Main',
      	component: Main,
      	redirect:'/home',
      	children:[{
      		path:"/home",
      		name:"home",
      		component:Home
      	}]
    }]
})
