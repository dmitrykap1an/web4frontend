<template>
  <h1 class="title">Лабораторная работа №4</h1>
  <div class="student_info">
    <p class="margin_text"><b>Работу выполнил</b>: Каплан Дмитрий Денисович</p>
    <p class="margin_text"><b>Группа</b>: 32131</p>
    <p class="margin_text"><b>Вариант</b>: 1303</p>
  </div>
</template>

<script>
export default {
  name: "InfoAbout"
}
</script>

<style scoped>
.title{
  text-align: center;
  background-color: white;
  margin: 1%;
  line-height: 80px;
  font-size: 50px;
  border-radius: 24px;
}
.margin_text{
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 2em;
}
.student_info{
  text-align: left;
  font-size: 18px;
  border-radius: 24px;
  line-height: 30px;
  margin: 1%;
}
</style>