<template>
  <div>
    <h1 class="center">Аутентификация</h1>
    <form @submit.prevent class="form">
      <input type="text" v-model="login" placeholder="Введите логин"/>
      <input type="password" v-model="password" placeholder="Введите пароль">
      <input @click="validate" type="submit" value="Отправить">
      <error-message :visible="visibility" :message="errorMessage"></error-message>
      <nav-link link="/registration" title="Перейти к регистрации" :visibility="visibility"></nav-link>
    </form>

  </div>
</template>

<script>
import ErrorMessage from "@/components/UI/ErrorMessage";
import NavLink from "@/components/UI/NavLink";
import {mapActions} from "vuex"
import store from "@/vuex/vuex";
import router from "@/router/router";


export default {
  name: "userAuthentication",
  components: {NavLink, ErrorMessage},
  data() {
    return {
      login: '',
      password: '',
      visibility: "hidden",
      errorMessage: '',
      serverAnswer: ''
    }
  },
  computed: {
    answerLogin() {
      return store.state.loginAnswer
    }
  },
  watch: {
    answerLogin() {
      if (this.answerLogin.status >= 200 && this.answerLogin.status < 300) {
        router.replace('/main')
      } else {
        this.setError(this.answerLogin.message)
      }
    }
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    validate() {
      if (this.login !== "" && this.password !== "" && this.login.length >= 5 && this.password.length >= 5) {
        this.loginUser()
      } else {
        if (this.login === "" || this.password === "") {
          this.setError('Поле ввода логина и пароля должны быть заполнены!')
        } else {
          this.setError('Поле ввода логина и пароля должны быть заполнены и содержать не менее 5 символов!')
        }
      }
    },
    loginUser() {
      const login = this.login
      const password = this.password
      store.dispatch('login', {login:login, password: password})
    },
    setError(errorMessage) {
      this.visibility = 'visible'
      this.errorMessage = errorMessage
    },
  }
}
</script>

<style scoped>
nav-link {
  margin: 0;
  padding: 0;
}

.center {
  display: flex;
  justify-content: center;
  margin: 100px;
}

.form {
  margin-top: 10%;
  align-items: center;
  margin-left: auto;
  display: flex;
  flex-direction: column;
}

input[type=text], input[type=password] {
  margin: 8px;
  padding: 10px;
  border-radius: 10px;
  width: 25%;
}

input[type=text]:hover, input[type=password]:hover {
  border-color: #1E90FF;
}

input[type=submit]:hover {
  background-color: #1E90FF;;
}

input[type=submit] {
  margin-top: 10px;
  width: 10%;
  border-radius: 10px;
  box-shadow: none;
}
</style>