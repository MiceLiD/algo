/**
 * 插入排序
 * 核心思想：
 * 
 */
function insertSort(arr: number[]): number[] {
  const len = arr.length
  for (let i = 1; i < len + 1; i++) {
    for (let j = i; j >= 0; j--) {
      if (arr[j] < arr[j - 1]) {
        const tmp = arr[j]
        arr[j] = arr[j - 1]
        arr[j - 1] = tmp
      }
    }
  }
  return arr
}

console.log(insertSort([3, 6, 4, 7, 2, 8, 4]))