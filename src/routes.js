import {
	createRouter,
	createRouterMatcher,
	createWebHashHistory
} from 'vue-router';
const redirectPath = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator.userAgent) ? '/m_login' : 'p_login';
const routes = [
	{
		path: '/',
		component: ()=>import('./pages/Home/index.vue')
	},
	{
		path: '/login',
		redirect: redirectPath,
	},
	{
		path: '/p_login',
		component: ()=>import('./pages/Login/pc.vue')
	},
	{
		path: '/m_login',
		component: ()=>import('./pages/Login/mobile.vue')
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
