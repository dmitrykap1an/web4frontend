<template>
  <div>
    <table class="dot_table">
      <thead class="header">
      <tr>
        <th>X</th>
        <th>Y</th>
        <th>R</th>
        <th>Выполнение</th>
        <th>Время на сервере</th>
        <th>Время выполнения</th>
      </tr>
      </thead>
      <tbody class="data">
      <tr v-for="(dot,i) in dots" :key="i">
        <td>{{ dot.x }}</td>
        <td>{{ dot.y }}</td>
        <td>{{ dot.r }}</td>
        <td> {{dot.hitResult }}</td>
        <td>{{ dot.serverTime }}</td>
        <td>{{ dot.executeTime }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "DotTable",
  data(){
    return{
      dots: [{
        x: 1,
        y: 2,
        r: 3,
        hitResult: true,
        serverTime: 'Чт, 5 января, 3:00',
        executeTime: '344 нс'
      }]
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
.header{
  background-color: #1E90FF;
}
.data{
  background-color: white;
}
</style>