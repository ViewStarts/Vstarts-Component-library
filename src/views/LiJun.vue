<template>
  <div v-for="(item, index) in components" :key="index" class="box">
    <component :is="item.component"></component>
  </div>
</template>
<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

// 引入组件
const components = [
  {
    component: defineAsyncComponent(() => import('@/components/VTransfer/test.vue')),
    description: 'VTransfer 穿梭框组件'
  },
  {
    component: defineAsyncComponent(() => import('@/components/VTest/test.vue')),
    description: 'VTest 测试组件',
  },
]

</script>
<style scoped>
.box {
  width: 100%;
  padding: 20px;
  border: 1px solid #cecece;
}
</style>
