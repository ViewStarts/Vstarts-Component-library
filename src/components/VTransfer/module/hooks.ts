import { computed, ref } from 'vue'

// 事件:获取当前select的dom对象
export function useTargetIndex(initialIndex: any) {
  const targetIndex = ref(initialIndex)

  // 事件:下标
  const setTargetIndex = (newIndex: any) => {
    targetIndex.value = Number(newIndex)
  }

  return [targetIndex, setTargetIndex]
}

export function userightListData(initialData: any) {
  const rightListData = ref(initialData)
  function addRightListData(newData: any) {
    rightListData.value = [...rightListData.value, ...newData]
  }

  function removeRightListData(newData: any[]) {
    newData.forEach((newItem) => {
      rightListData.value = rightListData.value.filter((item: any) => item.id !== newItem.id)
    })
  }

  return [rightListData, addRightListData, removeRightListData]
}

// 计算属性:
export function useComputedData(data: any, targetIndex: any, rightListData: any) {
  // 获取当前选择的标题
  const leftTitle = computed(() => data[targetIndex.value].title)

  // 获取左侧的列表
  const leftListData = computed(() => {
    // 给data一个别名currentData
    const { data: currentData } = data[targetIndex.value]

    return currentData.filter((item: { id: any }) => {
      if (!rightListData.value.find(({ id }: any) => item.id === id)) {
        return item
      }
    })
  })

  return {
    leftTitle,
    leftListData,
  }
}
