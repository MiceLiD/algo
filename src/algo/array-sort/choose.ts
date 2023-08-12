/**
 * 选择排序
 * 核心思想：逐渐将最小元素换到左侧
 * O(n^2) 在找出最小元素下标时，每次都得进行比较
 */
function chooseSort(arr: number[]): number[] {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    // 假设当前最小元素是i
    let min_i = i
    // 找到比当前元素还小的元素
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min_i]) {
        min_i = j
      }
    }
    // 找到后，交换元素
    if (min_i != i) {
      const tmp = arr[i]
      arr[i] = arr[min_i]
      arr[min_i] = tmp
    }
  }
  return arr
}

console.log(chooseSort([6, 3, 7, 4, 2, 8, 4]))