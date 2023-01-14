<template>
  <div>
    <h1 class="center">Регистрация</h1>
    <form @submit.prevent class="form">
      <input type="text" v-model="login" placeholder="Введите логин"/>
      <input type="password" v-model="password" placeholder="Введите пароль" autocomplete="off"/>
      <input type="password" v-model="password2" placeholder="Введите пароль еще раз" autocomplete="off"/>
      <input @click="validate" type="submit" value="Отправить">
      <error-message :visible="visibility" :message="errorMessage"></error-message>
    </form>
  </div>
</template>

<script>
import router from "@/router/router";
import ErrorMessage from "@/components/UI/ErrorMessage";
import {mapActions} from "vuex";
import store from "@/vuex/vuex";

export default {
  name: "userRegistration",
  components: {ErrorMessage},
  data() {
    return {
      login: '',
      password: '',
      password2: '',
      visibility: "hidden",
      errorMessage: '',
    }
  },
  computed:{
    answerRegistration(){
      return store.state.registrationAnswer
    }
  },
  watch:{
    answerRegistration(){
      if(this.answerRegistration.status >= 200 && this.answerRegistration.status < 300){
        router.replace('/main')
      } else{
        this.setError(this.answerRegistration.message)
      }
    }
  },
  methods: {
    ...mapActions([
        'registration'
    ]),
    validate() {
      if (this.login.length >= 5 && this.password.length >= 5 && this.password2.length > 5) {
        if (this.password === this.password2) {
          const login = this.login
          const password= this.password
          store.dispatch('registration', {login: login, password: password})
        } else {
          this.visibility = 'visible'
          this.setError('Поля с паролями не совпадают!')
        }
      } else {
        this.setError('Поле ввода логина и пароля должны быть заполнены и содержать не менее 5 символов!')
      }
    },

    setError(message){
      this.visibility = 'visible'
      this.errorMessage = message
    }
  }
}
</script>

<style scoped>
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

*, *:before, *:after {
  box-sizing: border-box;
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