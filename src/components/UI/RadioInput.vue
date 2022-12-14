<template>
  <div class="block_description">{{description}}</div>
  <span v-for="(value, i) in values" :key="i">
    <span>{{value}}</span>
    <input type="radio" name="r" :value="value" :key="i">
  </span>

</template>

<script>
export default {
  name: "RadioInput",
  props: ['description', 'values'],
  data(){
    return{

    }
  },
}
</script>

<style scoped>
.block_description{
  padding: 1%;
  font-weight: bold;
}

</style>