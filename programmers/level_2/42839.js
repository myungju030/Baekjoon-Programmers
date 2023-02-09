// 소수 찾기
function solution(numbers) {
    let set = new Set();
    // 소수찾기
    const isPrime = (num) => {
        if (num < 2) { return false; }
        else if (num === 2) { return true; }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    // 순열
    const recursion = (arr, fixed) => {
        if (arr.length > 0) {
            for (let i = 0; i < arr.length; i++) {
                const newNum = fixed + arr[i];
                const newArr = arr.slice();
                newArr.splice(i, 1);

                if (isPrime(Number(newNum))) set.add(Number(newNum));
                recursion(newArr, newNum);
            }
        }
    }

    recursion(numbers.split(''), '');

    return set.size;
}