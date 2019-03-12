import Vue from 'vue'
import Vuex from 'vuex'
import {newTest} from '../types/test'


Vue.use(Vuex)

let idCounter = 1
// TODO: When assigning id - check it doesnt already exist

export const testEditorStore =
    {
        state() {
            return newTest()
        },
        mutations: {
            addTestVariable(state: any, variable: any) {

                if (!variable.name) {
                    let id = idCounter++
                    let name = '#variable' + id
                    variable.id = id
                    variable.name = name
                }

                state.variables.push(variable)
            },
            delTestVariable(state: any, id: string) {
                state.variables = state.variables.filter( function (variable: any) {
                    return variable.id !== id
                })
            }
        },

        getters: {
            variableIndexById: (state: any) =>  (id: string) => {
                return state.variables.findIndex(function (variable: any) {
                    return variable.id === id
                })
            }
        }
    }




