import Vue from 'vue'
import VueRouter from 'vue-router'
// import TopLayout from "@/components/TopLayout.vue"
import FooPage from "@/components/FooPage.vue";

Vue.use( VueRouter )

export const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'topLayout',
          //  component: TopLayout,
            children: [

                {
                    path: 'foo',
                    name: 'foo',
                    component: FooPage
                }
            ]
        }
        ]
});
