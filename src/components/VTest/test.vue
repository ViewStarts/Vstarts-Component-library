<template>
  <VTest :data="data" @handclick="handclick"></VTest>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import VTest from './index.vue'
const data = ref(['第一步，点击右侧[download]，并进行填写', '第二步上传已填写好的模板'])

// 事件:触发点击事件,下载模板
const handclick = () => {
  console.log('下载模板事件触发');
}
</script>
<style></style>
