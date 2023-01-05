import {createStore} from 'vuex'
import axios from "axios";

const store = createStore({
    state: {
        dots: [],
        login: '',
        password: '',
        loginAnswer: {status: 0, message: ''}
    },
    mutations: {
        SET_DOTS_TO_STATE(state, dots) {
            state.dots = dots
        },
        ADD_DOT_TO_STATE(state, dot) {
            state.dots.push(dot)
        },
        SET_LOGIN_ANSWER(state, answer) {
            state.loginAnswer = answer
        }
    },
    actions: {
        getDotsFromServer({commit}, state) {
            return axios('http://localhost:8080/dots/restore', {
                method: 'GET',
                body: JSON.stringify(state.login)
            }).then((dots) => {
                commit('SET_DOTS_TO_STATE', dots)
            })
        },
        sendDotToServer({commit}, state, dot) {
            return axios('http://localhost:8081/dots', {
                method: 'POST',
                body: JSON.stringify(dot)
            }).then((dot) => {
                commit('ADD_DOT_TO_STATE', dot)
            })
        },
        login({commit}, user) {
            axios.get(`http://localhost:8081/login?login=${user.login}&password=${user.password}`, {
                validateStatus: function (status) {
                    return status < 500;
                }
            })
                .then(response => {
                    const answer = {status: response.status, message: response.data.text}
                    commit('SET_LOGIN_ANSWER', answer)
                })
                .catch(err => {
                    console.log(err)
                })
        },
    },
    getters: {
        getDots(state) {
            return state.dots
        },
        getLastDot(state) {
            return state.dots.pop()
        },
        getLogin(state) {
            return state.login
        },
        getPassword(state) {
            return state.password
        },
        getLoginAnswer(state) {
            return state.loginAnswer
        }
    }
})

export default store