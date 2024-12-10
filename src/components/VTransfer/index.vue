<template>
  <div>
    <div>
      <select>
        <option v-for="(title, index) of options" :key="index" :value="index">{{ title }}</option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  data: {
    type: Array,
    default: () => []
  },
  rightTitle: {
    type: String,
    default: '已选择'
  }
})

const options = props.data.map(({ title }: any) => title);

</script>

<style></style>
