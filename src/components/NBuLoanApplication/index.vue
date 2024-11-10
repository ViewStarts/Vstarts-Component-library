<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <a-row type="flex" justify="start" class="gutter">
        <a-col class="gutter-box" v-for="item in buttons" :key="item.method">
            <a-button type="link" :disabled="item.disabled"
                :style="{ color: item.disabled == true ? '#000000' : '#0070c0' }"
                @click="() => handleClick(item.method)">{{
                    item.title
                }}</a-button></a-col>
    </a-row>
</template>
<script setup lang="ts">
interface Buttons {
    title: string;
    method: string;
    disabled: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
    buttons: Buttons[];
}>();


const emit = defineEmits<{
    (event: 'button-click', method: string): void;
}>();

function handleClick(method: string) {
    emit('button-click', method);
}
</script>
<style scoped>
.gutter {
    width: 100%;
    background-color: #f2f2f2;
}

.gutter-box {
    margin: -5px -10px;
}
</style>
