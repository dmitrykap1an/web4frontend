<template>
  <div>
    <h1 class="center">Аутентификация</h1>
    <form @submit.prevent class="form">
      <input type="text" v-model="login" placeholder="Введите логин"/>
      <input type="text" v-model="password" placeholder="Введите пароль"/>
      <input @click="validate" type="submit" value="Отправить">
      <error-message :visible="visibility" :message="errorMessage"></error-message>
    </form>
  </div>
</template>

<script>
import router from "@/router/router";
import axios from 'axios'
import ErrorMessage from "@/components/UI/ErrorMessage";
export default {
  name: "userAuthentication",
  components: {ErrorMessage},
  data(){
    return{
      login: '',
      password: '',
      visibility: "hidden",
      errorMessage: '',
    }
  },
  methods:{
    validate(){
      if(this.login !== "" && this.password !== ""){
        this.sendDataToServer()
      }
      else{
        this.visibility = 'visible'
        this.errorMessage = 'Поле ввода логина и пароля должны быть заполнены!'
      }
    },
    async sendDataToServer(){
      try{
        const response = await axios.get('/https://tomcat.kaplaan.ru/app')
        if(response.data === true){
          await router.replace('/main')
        }
      }
      catch (e){
        this.visibility = 'visible'
        this.errorMessage = 'Ошибка отправки данных'
        this.login = ''
        this.password = ''
      }
    }
  }
}
</script>

<style scoped>
.center{
  margin: auto;
  padding-top: 100px;
}
.form{
  margin-top: 10%;
  align-items: center;
  margin-left: auto;
  display: flex;
  flex-direction: column;
}
*, *:before, *:after {
  box-sizing: border-box;
}
input[type=text] {
  margin: 8px;
  padding:10px;
  border-radius:10px;
  width: 25%;
}
input[type=submit]{
  margin-top: 10px;
  width: 10%;
  border-radius: 10px;
  box-shadow: none;
}
</style>