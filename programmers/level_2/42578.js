// 위장
function solution(clothes) {
    let answer = 1;
    let type = {};
    // 의상의 종류에 맞춰 의상의 이름을 정렬한다.
    clothes.forEach(x =>
        type[x[1]] === undefined ? type[x[1]] = [x[0]] : type[x[1]].push(x[0]));

    for (const key in type) {
        answer *= (type[key].length + 1);
    }

    return answer - 1;
}