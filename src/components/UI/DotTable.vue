<template>
  <div>
    <table class="dot_table">
      <thead class="header">
      <tr>
        <th>X</th>
        <th>Y</th>
        <th>R</th>
        <th>Выполнение</th>
        <th>Время выполнения</th>
      </tr>
      </thead>
      <tbody class="data">
      <tr v-for="(dot, i) in tableDots" :key="i">
        <td>{{ dot.x }}</td>
        <td>{{ dot.y }}</td>
        <td>{{ dot.r }}</td>
        <td> {{ dot.hitResult }}</td>
        <td>{{ dot.executeTime }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import store from "@/vuex/vuex";
import {toRaw} from "vue";

export default {
  name: "DotTable",
  data() {
    return {
      tableDots: [],
    }
  },
  mounted(){
    alert('mounted')
      store.dispatch('getDotsFromServer')
  },
  computed:{
    dots(){
      alert("computed")
      alert(store.state.dots.length)
      return store.state.dots.length
    }
  },
  watch: {
    dots(){
      alert("watch")
      this.tableDots = toRaw(store.state.dots)
    }
  }
}
</script>

<style scoped>
.dot_table {
  width: 50%;
  height: 100px;
  text-align: center;
  margin: 3% auto;
  border-radius: 10px;
  border-spacing: 0;
  border-style: solid;
  border-color: white;
  overflow: hidden;
}

.header {
  background-color: #1E90FF;
}

.data {
  background-color: white;
}
</style>