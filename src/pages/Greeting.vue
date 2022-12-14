<template>
  <div>
    <greeting-window
        v-if="!currentRoute.length"
        @redirect="changeRoute"
    />
    <user-authentication v-else-if="currentRoute === 'authentication'"/>
    <user-registration v-else-if="currentRoute === 'registration'"/>

  </div>
</template>

<style>

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
<script>
import userAuthentication from "@/components/userAuthentication";
import GreetingWindow from "@/components/GreetingWindow";
import UserRegistration from "@/components/userRegistration";

export default {
  name: 'greeting-page',
  components: {UserRegistration, GreetingWindow, userAuthentication},
  data(){
    return{
      currentRoute: ''
    }
  },
  methods:{
    changeRoute(route){
      this.currentRoute = route
    }
  }
}
</script>