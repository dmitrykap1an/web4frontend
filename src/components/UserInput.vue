<template>
  <div class="container">
    <div class="input-data">
      <radio-input description="Выбор X" :values="xValues"></radio-input>

      <radio-input description="Выбор R" :values="rValues"></radio-input>
    </div>
  </div>


</template>

<script>
import RadioInput from "@/components/UI/RadioInput";
export default {
  name: "UserInput",
  components: {RadioInput},
  data(){
    return{
      xValues: [-3, -2, -1, 0, 1, 2, 3, 4, 5],
      rValues: [1, 1.5, 2, 2.5, 3]
    }
  }
}
</script>

<style scoped>
.container{
  display: flex;
  justify-content: left;
}

.input-data {
  margin-left: 13%;
  text-align: center;
  line-height: 270%;
  border-radius: 24px;
  width: 30%;
  height: 100%;
}
</style>