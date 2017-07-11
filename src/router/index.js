import Vue from 'vue'
import Router from 'vue-router'
import Store from 'store'

Vue.use(Router)

var router = new Router({
	linkActiveClass: 'active',
  	routes: [{
      	path: '/login',
      	name: 'login',
      	component: resolve => require(['@/components/login'], resolve)
    },{
      	path: '/',
      	name: 'Main',
      	component: resolve => require(['@/components/main'], resolve),
      	redirect:'/home',
      	children:[{
      		path:"/home",
      		name:"home",
      		component:resolve => require(['@/components/home'], resolve)
      	},{
      		path:"/message",
      		name:"message",
      		component:resolve => require(['@/components/message'], resolve)
      	},{
      		path:"/rss",
      		name:"rss",
      		component:resolve => require(['@/components/rss'], resolve)
      	}]
    }]
})

router.beforeEach(function(to, from, next){
  if (to.path.startsWith('/login')) {
    Store.remove('user')
    next()
  }else{
    var user = Store.get('user');
    if (!user) {
      next({path: '/login'})
    } else {
      var path = to.path.split("/");
      Store.set("path",path);
      next()
    }
  }
});

export default router; 