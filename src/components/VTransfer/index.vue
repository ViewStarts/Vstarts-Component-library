<template>
  <div>
    <div>
      <select @change="setTargetIndex(($event.target as HTMLSelectElement).value)">
        <option v-for="(title, index) in options" :key="index" :value="index">{{ title }}</option>
      </select>
    </div>
    <div class="transfer">
      <div class="box left-list">
        <h1 class="list-title">{{ leftTitle }}</h1>
        <div>
          <div
            v-for="item in leftListData"
            :key="item.id"
            :class="['list-item', item.disabled ? 'disabled' : '']"
          >
            <input type="checkbox" :disabled="item.disabled" :id="'_checkbox_' + item.id" />
            <label :for="'_checkbox_' + item.id">{{ item.phone_name }}</label>
          </div>
        </div>
      </div>
      <div class="box button-group">
        <button>&lt;</button>
        <button>&gt;</button>
      </div>
      <div class="box right-list">
        <h1 class="list-title">{{ rightTitle }}</h1>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTargetIndex, useComputedData, userightListData } from './module/hooks'

// 父传子
const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
  rightTitle: {
    type: String,
    default: '已选择',
  },
})

// 标题
const options = props.data.map(({ title }: any) => title)

// 解构事件
const [targetIndex, setTargetIndex] = useTargetIndex(0)

const [rightListData, addRightListData, removeRightListData] = userightListData([])

const { leftTitle, leftListData } = useComputedData(props.data, targetIndex, rightListData)
</script>

<style scoped lang="scss">
.transfer {
  display: flex;
  flex-direction: row;
  width: 360px;
  height: 300px;
  border: 1px solid #ddd;

  .box {
    width: 120px;
    height: 100%;

    .list-title {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 38px;
      font-weight: normal;
      margin: 0;
      color: #666;
      border-bottom: 1px solid #ddd;
      background-color: #efefef;
      font-size: 14px;
    }

    .list-item {
      display: flex;
      align-items: center;
      height: 30px;
      font-size: 12px;
      color: #666;

      &:disabled {
        opacity: 0.6;
      }
    }

    &.button-group {
      display: flex;
      justify-content: center;
      align-items: center;
      border-left: 1px solid #ddd;
      border-right: 1px solid #ddd;

      button {
        border: none;
        outline: none;
        width: 38px;
        height: 38px;
        background-color: #1055ff;
        color: #fff;
        border-radius: 5px;

        &:disabled {
          opacity: 0.6;
        }

        &:nth-child(2) {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
