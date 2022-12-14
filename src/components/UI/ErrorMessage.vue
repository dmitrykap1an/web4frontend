<template>
  <h6 class="error">{{message}}</h6>
</template>

<script>
export default {
  name: "ErrorMessage",
  props:['message', 'visibility']
}
</script>

<style scoped>
.error{
  padding-top: 10px;
  color: red;
  margin: auto;
  visibility: v-bind(visibility);
}
</style>