<template>
  <div class="input-image img">
    <p class="align_center">
      <canvas id="area" height="280" width="400"/>
    </p>
  </div>
</template>

<script>
export default {
  name: "DotArea",
  methods:{

  },
}
</script>

<style scoped>
.input-image{
  margin-top: 10%;
  background-color: white;
  border-radius: 24px;
  line-height: normal;
  margin-left: 13%;
  width: 30%;
}
.img {
  overflow: hidden;
  justify-content: center;
}
</style>