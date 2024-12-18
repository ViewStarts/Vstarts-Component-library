import { computed, reactive, ref } from 'vue'

// 事件:获取当前select的dom对象
export function useTargetIndex(initialIndex: any) {
  const targetIndex = ref(initialIndex)

  // 事件:下标
  const setTargetIndex = (newIndex: any) => {
    targetIndex.value = Number(newIndex)
  }

  return [targetIndex, setTargetIndex]
}

export function userightListData(initialData: any, CheckedData: any) {
  const rightListData = ref(initialData)

  function addRightListData(newData: any) { // [checkbox,checkbox]
    rightListData.value = [...rightListData.value, ...newData]

    CheckedData.left = [];
  }


  function removeRightListData(newData: any[]) { // [checkbox,checkbox]
    newData.forEach((newItem) => {
      rightListData.value = rightListData.value.filter((item: any) => item.id !== newItem.id)
    })

    CheckedData.right = [];
  }

  return [rightListData, addRightListData, removeRightListData]
}

export function useCheckedData() {
  const CheckedData: any = reactive({
    left: [],
    right: []
  })

  function addCheckedData(leftOrRight: any, item: any) {
    switch (leftOrRight) {
      case 'left':
        CheckedData.left.push(item);
        break;
      case 'right':
        CheckedData.right.push(item);
        break;
      default:
        break;
    }
  }

  function removeCheckedData(leftOrRight: any, id: any) {
    switch (leftOrRight) {
      case 'left':
        CheckedData.left = CheckedData.left.filter((item: any) => item.id !== id)
        break;
      case 'right':
        CheckedData.right = CheckedData.right.filter((item: any) => item.id !== id)
        break;
      default:
        break;
    }
  }

  return [
    CheckedData,
    addCheckedData,
    removeCheckedData
  ]
}

// 计算属性:
export function useComputedData(data: any, targetIndex: any, rightListData: any, CheckedData: any) {
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

  const transferButtonDisabled = computed(() => (
    {
      left: CheckedData.right.length === 0,
      right: CheckedData.left.length === 0
    }
  ))


  return {
    leftTitle,
    leftListData,
    transferButtonDisabled
  }
}
