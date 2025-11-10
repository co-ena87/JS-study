const workA = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("workA");
    }, 5000);
  });
};

const workB = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("workB");
    }, 3000);
  });
};

const workC = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("workC");
    }, 10000);
  });
};
//  작성된 코드에 따르면 B -> A -> C

// const start = async () => {
// try {
/*  let resultA = await workA();
    let resultB = await workB();
    let resultC = await workC();
        console.log(resultA);
        console.log(resultB);
        console.log(resultC); */
// } catch (err) {
// console.log(err);
// };
// };

//  비동기지만 await 키워드 때문에 하나 작업이 완료 될떄까지 기다린다 총 18초

//await 키워드 사용해서 작업을 병렬적으로 실행 하기 위해서는 (시간 단축)
//Promise all 사용
const start = async () => {
  try {
    let results = await Promise.all([workA(), workB(), workC()]);
    results.forEach((res) => console.log(res));
  } catch (err) {
    console.log(err);
  }
};

start();
// 총10초 소요
