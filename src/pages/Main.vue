<template>
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

export default {
  name: "MainWindow",
  components: {DotArea, UserInput, DotTable}
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: left;
}
</style>