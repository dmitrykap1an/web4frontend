<template>
<div>

</div>
</template>

<script>
import router from "@/router/router";

export default {
  name: "isRegistered",
  mounted() {
    if(document.cookie !== ''){
      router.replace('/main')
    } else {
      router.replace('/greeting')
    }
  }
}
</script>
<style scoped>

</style>