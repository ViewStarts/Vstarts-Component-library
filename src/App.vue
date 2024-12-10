<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" @select="onSelect" />
  <router-view></router-view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { MenuProps } from 'ant-design-vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const current = ref<string[]>(['lijun']); //默认是第一个

// 导航栏
const items = ref<MenuProps['items']>([
  {
    key: 'lijun',
    label: '李骏开发中',
    title: '李骏开发中',
  },
  {
    key: 'test',
    label: '测试中',
    title: '测试中',
  },
])

// 处理菜单选择变化
const onSelect: MenuProps['onSelect'] = ({ key }) => {
  switch (key) {
    case 'lijun':
      router.push({ name: 'Lijun' }); // 使用路由名称进行跳转
      break;
    case 'test':
      router.push({ name: 'Test' });
      break;
  }
};
</script>

<style></style>
