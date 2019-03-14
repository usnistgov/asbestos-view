import Vue from 'vue'
import VueRouter from 'vue-router'
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
                path: 'test/:id',
                components: {
                    testPanel: TestPanel
                }
            }
        ]
    }
]

export const router = new VueRouter({
    mode: 'history',
    routes
});
