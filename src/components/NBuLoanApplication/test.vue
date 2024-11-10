<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <NBuLoanApplication :buttons="buttons" @button-click="handleButtonClick"></NBuLoanApplication>
</template>

<script setup lang="ts">
import NBuLoanApplication from './index.vue'

const buttons = [
    { title: '新建', method: 'new', disabled: false },
    { title: '修改', method: 'edit', disabled: false },
    { title: '暂存', method: 'draft', disabled: false },
    { title: '保存', method: 'save', disabled: true },
    { title: '删除', method: 'delete', disabled: false },
    { title: '刷新', method: 'refresh', disabled: true },
    { title: '复制', method: 'copy', disabled: false },
    { title: '提交', method: 'submit', disabled: false },
    { title: '撤回', method: 'revoke', disabled: false },
    { title: '附件管理', method: 'attachment', disabled: true },
    { title: '查看流程', method: 'viewProcess', disabled: false },
    { title: '查看凭证', method: 'viewVoucher', disabled: false },
    { title: '上张', method: 'prev', disabled: true },
    { title: '下张', method: 'next', disabled: false },
    { title: '打印', method: 'print', disabled: false },
    { title: '废止', method: 'invalidate', disabled: true },
    { title: '导出', method: 'export', disabled: false },
    { title: '关闭', method: 'close', disabled: false }
]

function handleButtonClick(method: string) {
    console.log(`Button ${method} clicked`);
    // 在这里处理每个按钮的点击事件
}
</script>