//promise
const executor = (resolve, reject) => {

    setTimeout(() => {
        resolve('성공');
        reject('실패');
    }, 3000);
};

// resolve, reject 함수에 전달된 단어 출력하는 코드
//  콜백 함수에 전달된 값은 프로미스 객체의 then 메서드를 사용하여 출력가능
const promise = new Promise(executor);
promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });



    const workA = (value, callback)=>{
        setTimeout(() => {
            callback(value + 5);
        }, 5000);
    };

    const workB = (value, callback)=>{
        setTimeout(() => {
            callback(value -3);
        }, 3000);
    };
    
    const workC = (value, callback)=>{
        setTimeout(() => {
            callback(value +10);
        }, 10000);
    };

    // 비동기로 함수호출시 단순히 workB -> workA -> workC 호출될것
    // 비동기지만 코드 작성 순서대로 출력할때
    
    //workA(10, (resA)=>{
        //console.log(`workA: ${resA}`);
        //workB(resA, (resB)=> {
                //console.log(`workB : ${resB}`);
                //workC(resB, (resC) => {
                    //console.log(`workB : ${resC}`);
                    //workC();
               // });
           // }
        //);
    //});

    // 콜백지옥
    // JS에서 비동기 함수의 결과 값을 이용해 또 다른 비동기 함수에서 사용하기 위해서는콜백 함수 안에 다시 콜백 함수를 전달하는 방식으로 작성해야함 
    // 비동기 함수를 이러한 방식으로 처리하면 함수의 실행순서 알기 쉽고 유연한 프로그래밍 하는데 좋음 그러나   코드가 매우 복잡해지고 가독성이 떨어짐 




    //이러한 콜백지옥을 해결하기위해 사용되는 것이 프로미스 객체 사용
    const worKa = (value)=>{
        const promise = new Promise((resolve)=>{
            setTimeout(() => {
                resolve(value + 5);
            }, 5000);
        });
        return promise;
    };    
        

    const worKb = (value)=>{
        const promise = new Promise((resolve) =>{
            setTimeout(() => {
                resolve(value -3);
            }, 3000);
            
        });
        return promise;
    };    

    const worKc = (value)=>{
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(value +10);
            }, 10000);
        });
        return promise;
    };



//worKa(10).then((resA) =>{
    //console.log(`worKa:${resA}`);
    //worKb(resA).then((resB)=> {
        //console.log(`worKb: ${resB}`);
        //worKc(resB).then((resC)=> {
            //console.log(`worKc : ${resC}`);
        //});
    //});
//});


//then 메서드를 조금 다른 방식으로 사용하여 더 코드를 깔끔하게 수정
worKa(10).then((resA) =>{
    console.log(`worKa : ${resA}`);
    return worKb(resA); 
    //return문 사용해서 'worKb' 호출한 결과값을 반환 
    // worKb 또한 promise 객체여서 then 메서드 사용가능 

}).then((resB)=>{
    console.log(`worKb : ${resB}`);
    return worKc(resB);
}).then((resC)=>{
    console.log(`worKC : ${resC}`);
});

// 이런식으로 계속해서 프로미스 객체를 반환해서 then 메서드를 연속으로 사용하는 방식을 
// 프로미스 체이닝 이라고 함 
// 프로미스 체이닝을 사용하면 작성된 코드 아래쪽으로 계속해서 작성가능하다
// 훨씬 직관적으로 코드 해석가능하며 보다 깔끔하게 정리해서 작성 할 수 있다