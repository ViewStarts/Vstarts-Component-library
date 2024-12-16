<template>
  <div v-for="(item, index) in replaceData" :key="index" v-html="item" @click="handclick">
  </div>

</template>
<script setup lang="ts">
import { computed } from 'vue';

//接收父组件的传值
const props = defineProps({
  data: {
    type: Array,
    default: []
  }
})

// 子传父
const emits = defineEmits(['handclick'])

//计算:替换调data
const replaceData = computed(() => {
  return props.data.map((item: any) =>
    item.replace(/\[download\]/g, '<button class="download" >下载模板</button>')
  )
})

// 事件:触发点击事件,暴露给父组件
const handclick = (event: any) => {
  if (event.target.className == 'download') {
    emits('handclick')
  }
}
</script>
<style scoped>
.download {
  font-size: 12px;
}
</style>
