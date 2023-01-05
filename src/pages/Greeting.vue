<template>
  <div>
    <info-about/>
    <div class="center">
      <my-button class="button" title="Регистрация" @click="goToRegistration"/>
      <my-button class="button" title="Войти в аккаунт" @click="goToAuthentication"/>
    </div>
  </div>
</template>

<script>
import InfoAbout from "@/components/InfoAbout";
import MyButton from "@/components/UI/MyButton";
import router from "@/router/router";
export default {
  components: {InfoAbout, MyButton},
  name: 'greeting-window',
  data(){
    return{
      show: false
    }
  },
  methods:{
    goToAuthentication(){
      router.push('/authentication')
    },
    goToRegistration(){
      router.push('/registration')
    }
  }
}
</script>

<style scoped>
.center {
  display: flex;
  justify-content: center;
}

.button {
  margin-top: 40px;
  margin-left: 20px;
  margin-right: 20px;
  background-color: cornflowerblue;
  height: 30px;
  width: 150px;
  border-radius: 10px;
}
</style>