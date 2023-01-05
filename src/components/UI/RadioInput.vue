<template>
  <div>
    <div class="block_description">{{ description }}</div>
    <span v-for="(value, i) in values" :key="i">
      <span>{{ value }}</span>
      <input type="radio" :name="name" :value="value" :key="i" :class="validateBy" @click="validate(value)">
    </span>
  </div>

</template>

<script>
export default {
  name: "RadioInput",
  props: ['description', 'values', 'validateBy', 'name'],
  methods: {
    validate(value) {
      if (this.validateBy === 'validateX') {
        console.log('radio x =', value)
        this.$emit('validateX', value)
      } else {
        console.log('radio r =', value)
        this.$emit('validateR', value)
      }
    }
  }
}
</script>

<style scoped>
.block_description {
  padding: 1%;
  font-weight: bold;
}
</style>