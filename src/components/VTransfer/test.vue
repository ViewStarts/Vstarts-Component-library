<template>
  <VTransfer :data="data" right-title="已选择机型"></VTransfer>
</template>

<script setup lang="ts">
import VTransfer from './index.vue'

// 模拟数据，暂时写死
const data = [
  {
    title: '华为',
    data: [
      {
        id: 1001,
        phone_name: 'Mate 40 Pro',
        disabled: false,
      },
      {
        id: 1002,
        phone_name: 'P40 Pro',
        disabled: true,
      },
      {
        id: 1003,
        phone_name: 'nova 9',
        disabled: false,
      },
      {
        id: 1004,
        phone_name: 'Mate X2',
        disabled: false,
      },
    ],
  },
  {
    title: '小米',
    data: [
      {
        id: 2001,
        phone_name: 'Mi 12 Pro',
        disabled: false,
      },
      {
        id: 2002,
        phone_name: 'Redmi K50 Ultra',
        disabled: true,
      },
      {
        id: 2003,
        phone_name: 'Xiaomi 13T Pro',
        disabled: false,
      },
      {
        id: 2004,
        phone_name: 'Redmi Note 12 Pro',
        disabled: false,
      },
    ],
  },
  {
    title: 'iPhone',
    data: [
      {
        id: 3001,
        phone_name: 'iPhone 11',
        disabled: false,
      },
      {
        id: 3002,
        phone_name: 'iPhone 12 Pro',
        disabled: true,
      },
      {
        id: 3003,
        phone_name: 'iPhone 13',
        disabled: false,
      },
      {
        id: 3004,
        phone_name: 'iPhone 14 Pro',
        disabled: false,
      },
    ],
  },
]
</script>

<style></style>
