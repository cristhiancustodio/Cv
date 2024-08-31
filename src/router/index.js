import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import("../views/Main.vue")
		},
		{
			path: '/resumen',
			name: 'resumen',
			component: () => import("../views/Resumen.vue")
		},
		{
			path: '/proyectos',
			name: 'proyectos',
			component: () => import("../views/Proyectos.vue")
		},
		{
			path: '/proyecto/:id_proyecto',
			name: 'proyecto',
			props: true,
			component: () => import("../views/Proyecto.vue")
		},
		{
			path: '/contacto',
			name: 'contacto',
			component: () => import("../views/Contacto.vue")
		},

	],
	scrollBehavior(to, from, savedPosition) {
		// Siempre regresa al top
		return { top: 0 };
	}
})

export default router
