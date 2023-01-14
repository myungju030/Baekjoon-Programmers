// 영어 끝말잇기
function solution(n, words) {
  let index = -1;
  let arr = [words[0]];

  for (let i = 1; i < words.length; i++) {
    if (
      words[i - 1][words[i - 1].length - 1] !== words[i][0] ||
      arr.includes(words[i])
    ) {
      index = i;
      return [
        (index + 1) % n === 0 ? n : (index + 1) % n,
        Math.ceil((index + 1) / n),
      ];
    }
    arr.push(words[i]);
  }

  return [0, 0];

  return index;
}
