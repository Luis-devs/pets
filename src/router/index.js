import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

//rutas de elementos del sidebar
const routes = [{
        path: '/',
        name: 'Login',
        component: () =>
            import ('../views/iniciarSesion.vue')
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () =>
            import ('../views/dashboard'),
        children: [{
                name: 'DashboardWelcome',
                path: '/dashboard/welcome',
                component: () =>
                    import ('../views/welcome.vue'),
            },
            {
                name: 'SearchBox',
                path: '/dashboard/buscar',
                component: () =>
                    import ('../components/core/SearchBox.vue')
            },
            {
                name: 'Resultados',
                path: '/dashboard/resultado',
                component: () =>
                    import ('../components/core/Resultados.vue')
            },
            {
                name: 'Descripcion',
                path: '/dashboard/descripcion',
                component: () =>
                    import ('../components/core/Descripcion.vue')
            },
            {
                name: 'Favoritos',
                path: '/dashboard/favoritos',
                component: () =>
                    import ('../components/core/Favoritos.vue')
            },
            {
                name: 'Productos',
                path: '/dashboard/productos',
                component: () =>
                    import ('../components/core/Productos.vue')
            },
            {
                name: 'Servicios',
                path: '/dashboard/servicios',
                component: () =>
                    import ('../components/core/Servicios.vue')
            },
            {
                name: 'ServiciosDetalle',
                path: '/dashboard/serviciosDetalle',
                component: () =>
                    import ('../components/core/ServiciosDetalles.vue')
            }, {
                name: 'EntrenadorDetalle',
                path: '/dashboard/entrenadorDetalle',
                component: () =>
                    import ('../components/core/EntrenadorDetalle.vue')
            }
        ],
    },


]

const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router