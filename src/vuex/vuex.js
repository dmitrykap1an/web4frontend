import {createStore} from 'vuex'
import axios from "axios";
import defaultConfig from "@/axios/axios.config";

const store = createStore({
    state: {
        dots: [],
        login: '',
        password: '',
        r: 0,
        loginAnswer: {status: 0, message: ''},
        registrationAnswer: {status: 0, message: ''},
        logout: false,
    },
    mutations: {
        SET_DOTS_TO_STATE(state, dots) {
            state.dots = dots
        }, ADD_DOT_TO_STATE(state, dot) {
            state.dots.unshift(dot)
        }, SET_LOGIN_ANSWER(state, answer) {
            state.loginAnswer = answer
        }, SET_REGISTRATION_ANSWER(state, answer) {
            state.registrationAnswer = answer
        },
        SET_LOGOUT(state, bool){
            state.token = null
            state.logout = bool
        }
    }, actions: {
        getDotsFromServer({commit}) {
            axios.get('https://kaplaan.ru/backend/app/dots/restore', defaultConfig).
            then((dots) => {
                if(dots.status >= 200 && dots.status < 300 && dots.data.listOfDots !== undefined){
                    commit('SET_DOTS_TO_STATE', dots.data.listOfDots)
                }

            })
        },
        sendDot({commit}, dot) {
            axios.post('https://kaplaan.ru/backend/app/dots', dot, defaultConfig)
                .then(dot => {
                    const newDot = {
                        x: dot.data.x,
                        y: dot.data.y,
                        r: dot.data.r,
                        hitResult: dot.data.hitResult,
                        executeTime: dot.data.executeTime,
                        id: dot.data.id
                    }
                commit('ADD_DOT_TO_STATE', newDot)
            })
        },
        login({commit}, user) {
                axios.post(`https://kaplaan.ru/backend/app/login`, user, defaultConfig)
                .then(response => {
                    const answer = {status: response.status, message: response.data.text}
                    commit('SET_LOGIN_ANSWER', answer)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        registration({commit}, user) {
            axios.post(`https://kaplaan.ru/backend/app/reg`, user, defaultConfig)
                .then(response => {
                    const answer = {status: response.status, message: response.data.text}
                    commit('SET_REGISTRATION_ANSWER', answer)
                })
                .catch(err => {
                    console.log(err)
                })
        }, logout({commit}, state) {
            axios.post('https://kaplaan.ru/backend/app/logout', state.token, defaultConfig)
                .then(response => {
                    if(response.status >= 200 && response.status < 300){
                        commit('SET_LOGOUT', true)
                        //TODO

                    }
                })
        }
    }, getters: {
        getDots(state) {
            return state.dots
        }, getLastDot(state) {
            return state.dots.pop()
        }, getLogin(state) {
            return state.login
        }, getPassword(state) {
            return state.password
        }, getLoginAnswer(state) {
            return state.loginAnswer
        }
    }
})

export default store