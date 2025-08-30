//setTimeout(()=> {
    //console.log('비동기');
   // console.log('종료');
//}, 3000);


//const work = (callback) =>{
    //setTimeout(() => {
    // console.log('비동기');
    //callback();
   // }, 3000);
//};


// work 라는 함수 실행 후 콜백 함수 전달 
// work(() => {
    //console.log('종료')
//});


const workA = () =>{
    setTimeout(()=>{
        console.log('workA');
    },9000)
};

const workB = () =>{
    setTimeout(()=>{
        console.log('workB');
    },8000)
};


const workC = () =>{
    setTimeout(()=>{
        console.log('workC');
    },12000)
};

const workD = () => {
    console.log('workD');
    console.log('동기코드종료')
};


//비동기코드
workA();
workB();
workC();

//동기코드 
workD();