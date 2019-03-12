import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let idCounter = 1

// TODO: When assigning id - check it doesnt already exist
export const baseStore = {
    state() {
        return {
            device: 'mouse',
            displayMainNavBar: true,
            tests: []
        }
    },
    mutations: {
        setDevice(state: any, theDevice: string) {
            state.device = theDevice
        },
        addTest(state:any, test: any) {
            if (!test.name) {
                let id = idCounter++
                let name = '#test' + id
                test.id = id
                test.name = name
            }
            state.tests.push(test)
        },
        toggleMainNavBar(state: any) {
            state.displayMainNavBar = !state.displayMainNavBar
        }
    },
    getters: {
        testIndexById: (state: any) =>  (id: string) => {
            return state.test.findIndex(function (test: any) {
                return test.id === id
            })
        },
        mainNavBarWidth: (state: any) => () => {
            return (state.displayMainNavBar) ? "10%" : "0%"
        }
    }
}
