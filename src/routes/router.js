import Vue from 'vue'
import VueRouter from 'vue-router'
import TopLayout from "../components/TopLayout";
import TestPanel from '@/components/TestPanel.vue'
import VariableEdit from '@/components/VariableEdit.vue'


Vue.use( VueRouter )

export const routes = [
    {
        path: '/', component: TopLayout,
        children: [
            {  // panel ties component to router-view name in ToolBody
                path: 'test/:testId', components: { panel: TestPanel },
                children: [
                    {
                        path: 'variable/:variableId',
                        components:
                            {
                                panel: VariableEdit,
                            },

                    }
                ]
            }
        ]
    }
    // {
    //     path: '/',
    //     name: 'topLayout',
    //     component: TopLayout,
    //     children: [
    //         {
    //             path: 'test/:testId',
    //             components: {
    //                 testPanel: TestPanel,
    //                 children: [
    //                     {
    //                         path: '/variable/:variableId',
    //                         components: {
    //                             VariableEdit
    //                         }
    //                     }
    //                 ]
    //             }
    //         }
    //     ]
    // }
]

export const router = new VueRouter({
    mode: 'history',
    routes
});
