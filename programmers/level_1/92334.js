// 신고 결과 받기
function solution(id_list, report, k) {
  let obj = {}; // {유저 ID: [유저가 신고한 ID],~~}
  let reportObj = {}; // {유저가 신고한 ID: 신고받은 횟수,~~}
  let reportArr = report.map((x) => x.split(" ")); // [[유저ID, 유저가 신고한 ID],~~]
  let stop = []; // 정지 ID

  // [유저ID:[],~~]
  id_list.forEach((x) => {
    obj[x] = Array(0);
  });

  reportArr.forEach((x) => {
    if (!obj[x[0]].includes(x[1])) {
      // 유저가 신고한 ID가 중복되지않을 때
      obj[x[0]].push(x[1]); // 유저가 신고한 ID 배열에 추가
      reportObj[x[1]] = reportObj[x[1]] + 1 || 1; // 신고한 ID의 신고받은 횟수 추가
      // k번 이상 신고된 유저 중복되지않게 stop배열에 추가
      if (reportObj[x[1]] >= k && !stop.includes(reportObj[x[1]]))
        stop.push(x[1]);
    }
  });

  // 각각 유저가 신고한 ID에서 k번 이상 신고된 유저만 남기기
  for (const key in obj) {
    obj[key] = obj[key].filter((x) => stop.includes(x));
  }

  // 각각 유저가 신고한 ID에서 k번 이상 신고된 유저만 남겨진 배열의 길이 출력
  return Object.values(obj).map((x) => x.length);
}
