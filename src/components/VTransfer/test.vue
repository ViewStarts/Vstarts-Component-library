<template>
  <!-- 父传子，把数据传给组件内部 -->
  <Transfer :data="data" right-title="已选择机型"></Transfer>
</template>

<script setup lang="ts">
import Transfer from './index.vue'

// 模拟数据，暂时写死
const data = [
  {
    title: '华为',
    data: [
      {
        id: 1,
        phone_name: 'Mate 40 Pro',
        disabled: false,
      },
      {
        id: 2,
        phone_name: 'P40 Pro',
        disabled: true,
      },
      {
        id: 3,
        phone_name: 'nova 9',
        disabled: false,
      },
      {
        id: 4,
        phone_name: 'Mate X2',
        disabled: false,
      },
    ],
  },
  {
    title: '小米',
    data: [
      {
        id: 1,
        phone_name: 'Mi 12 Pro',
        disabled: false,
      },
      {
        id: 2,
        phone_name: 'Redmi K50 Ultra',
        disabled: true,
      },
      {
        id: 3,
        phone_name: 'Xiaomi 13T Pro',
        disabled: false,
      },
      {
        id: 4,
        phone_name: 'Redmi Note 12 Pro',
        disabled: false,
      },
    ],
  },
]
</script>

<style></style>
