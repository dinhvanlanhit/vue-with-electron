import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {
        path: "/",
        name: 'login',
        component: () => import("@views/pages/login/login.vue"),
    },
    {
        path: "/dashboard",
        component: () => import("@includes/layouts/main.vue"),
        redirect: {name: 'dashboard'},
        children: [
            {
                path: "/dashboard",
                name: 'dashboard',
                component: () => import("@views/pages/dashboard/dashboard.vue"),
            }
        ]
    },
];
const router= createRouter({
    history: createWebHistory(),
    routes:[...routes]
})
export default router