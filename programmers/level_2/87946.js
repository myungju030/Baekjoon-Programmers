// 피로도
function solution(k, dungeons) {
  let max = [];

  const Permutations = (k, arr, count) => {
    max.push(count);
    for (let i = 0; i < arr.length; i++) {
      let newArr = [...arr];
      newArr.splice(i, 1);

      if (k >= arr[i][0]) {
        Permutations(k - arr[i][1], newArr, count + 1);
      }
    }
  };

  Permutations(k, dungeons, 0);

  return Math.max(...max);
}
