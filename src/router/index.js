import { createRouter, createWebHistory } from "vue-router";
const routes = [
    // {
    //     path: "/",
    //     component: () => import("@includes/layouts/main.vue"),
    //     redirect: {name: 'dashboard'},
    //     children: [
    //         {
    //             path: "/dashboard",
    //             name: 'dashboard',
    //             component: () => import("@pages/dashboard/dashboard.vue"),
    //         }
    //     ]
    // },
    {
        path: "/",
        name: 'login',
        component: () => import("@pages/login/login.vue"),
    },
];
const router= createRouter({
    history: createWebHistory(),
    routes:[...routes]
})
export default router