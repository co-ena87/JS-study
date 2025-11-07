const delay = (ms) => {
  return new Promise((reslove) => {
    setTimeout(() => {
      reslove("3초가 지났습니다.");
    }, ms);
  });
};

//const start = async () => {
//  let result = await delay(3000);
//  delay(3000).then((res) => {
//    console.log(result);
//  });
//};

const start = async () => {
  let result = await delay(3000);
  console.log(result);
};

start();
