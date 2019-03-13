import Vue from 'vue'
import VueRouter from 'vue-router'
// import TopLayout from "@/components/TopLayout.vue"
import FooPage from "@/components/FooPage.vue";
import BarPage from "@/components/BarPage.vue";
import TopLayout from "../components/TopLayout";

Vue.use( VueRouter )

export const routes = [
    {
        path: '/',
        name: 'topLayout',
        component: TopLayout,
        children: [

            {
                path: 'foo',
                name: 'foo',
                component: FooPage
            },
            {
                path: 'bar',
                name: 'bar',
                component: BarPage
            }
        ]
    }
]

export const router = new VueRouter({
    routes
});
