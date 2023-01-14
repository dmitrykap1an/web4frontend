<template>
  <div>
    <my-button title="Logout" @click="logout"></my-button>
  </div>
  <div>
    <div class="container">
      <user-input></user-input>
      <dot-area></dot-area>
    </div>
    <div>
      <dot-table></dot-table>
    </div>

  </div>
</template>

<script>
import UserInput from "@/components/UserInput";
import DotArea from "@/components/UI/Area";
import DotTable from "@/components/UI/DotTable";
import MyButton from "@/components/UI/MyButton";
import router from "@/router/router";
import store from "@/vuex/vuex";

export default {
  name: "MainWindow",
  components: {DotArea, UserInput, DotTable, MyButton},
  methods:{
    logout(){
      const name = "USERSESSION"
      document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      store.state.dots = []
      router.replace('/')
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: left;
}
</style>