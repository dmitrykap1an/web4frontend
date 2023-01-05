<template>
  <span class="center link" @click="goTo">{{title}}</span>
</template>

<script>
import router from "@/router/router";

export default {
  name: "NavLink",
  props: ['link', 'title', 'visibility'],
  methods:{
    goTo(){
      router.push(this.link)
    }
  }
}
</script>
<style scoped>
.link{
  color: #1E90FF;
  font-size: 14px;
  visibility: v-bind(visibility);
}
.link:hover{
  text-decoration: none;
  color: #00BFFF;
  cursor: pointer;
}
</style>