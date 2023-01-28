import {
	createRouter,
	createRouterMatcher,
	createWebHashHistory
} from 'vue-router';

const routes = [
	{
		path: '/',
		component: ()=>import('./pages/Home/index.vue')
	},
	{
		path: '/login',
		component: ()=>import('./pages/Login/index.vue')
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
