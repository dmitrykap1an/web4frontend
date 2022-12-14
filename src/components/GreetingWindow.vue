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
export default {
  name: "GreetingWindow",
  components: {InfoAbout, MyButton},

  data(){
    return{
      show: false
    }
  },
  methods:{
    goToAuthentication(){
      this.$emit('redirect', 'authentication')
    },
    goToRegistration(){
      this.$emit('redirect', 'registration')
    }
  }
}
</script>

<style scoped>

</style>