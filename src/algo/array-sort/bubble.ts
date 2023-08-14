/**
 * 冒泡排序
 * 核心思想：比较相邻元素，将较大元素交换到最右
 * O(n) best
 * O(n^2) worst
 */
function bubbleSort(arr: number[]): number[] {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    let swapped = false
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        swapped = true
      }
    }
    if (!swapped) break
  }
  return arr
}

console.log(bubbleSort([6, 3, 7, 4, 2, 8, 4]))