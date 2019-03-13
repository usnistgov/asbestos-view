import Vue from 'vue'
import VueRouter from 'vue-router'
// import TopLayout from "@/components/TopLayout.vue"
import FooPage from "@/components/FooPage.vue";
import BarPage from "@/components/BarPage.vue";
import TopLayout from "../components/TopLayout";
import TestPanel from '@/components/TestPanel.vue'


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
            },
            {
                path: 'test/:id',
                component: TestPanel
            }
        ]
    }
]

export const router = new VueRouter({
    routes
});
