// H-Index
function solution(citations) {
    let index = 1; // 논문의 수 : 1편부터 시작

    // 내림차순으로 정렬
    citations.sort((a, b) => b - a);

    for (let el of citations) {
        if (el < index) { // 논문의 인용 횟수가 논문의 수보다 작으면 직전의 index가 최댓값
            return index - 1; // 직전 index 반환
        }
        index++; // 논문의 인용 횟수가 논문의 수보다 크면 논문의 수 증가
    }

    // 모든 논문의 인용 횟수가 논문의 수 이상일 때 논문의 수 반환
    return citations.length;
}