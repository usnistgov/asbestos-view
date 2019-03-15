import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let idCounter = 1

// TODO: When assigning id - check it doesnt already exist
export const baseStore = {
    state() {
        return {
            tests: [],
            testIds: []
        }
    },
    mutations: {
        addTest(state, test) {
            if (!test.name) {
                let id = idCounter++
                let name = '#test' + id
                test.id = id
                test.name = name
            }
            state.tests.push(test)
        },
        installTestIds(state, testIds) {
            state.testIds.length = 0
            for (let i in testIds) {
                state.testIds.push(testIds[i])
            }
        },
        installTest(state, test) {
            state.tests.push(test)
        }
    },
    getters: {
        testIndexById: (state) =>  (id) => {
            return state.tests.findIndex(function (test) {
                return test.id === id
            })
        },
        testIndexByName: (state) =>  (name) => {
            return state.tests.findIndex(function (test) {
                return test.name === name
            })
        }
    }
}
