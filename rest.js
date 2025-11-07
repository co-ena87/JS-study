//rest 
//나머지 매개변수

//const blueToy = {
    //type: "bear",
    //price:15000,
    //color: "blue"
//};

//const {type, price, color} =blueToy

//console.log(type);
//console.log(price);
//console.log(color);

//const [type, ...rest] = blueToy; 


//console.log(type);
//console.log(rest);

//const {...rest, type} = blueToy;
// 이 경우는 에러가 발생한다 왜냐하면  
// rest 문법은 spread와 다르게 순서가 중요
//  여러번 작성 불가능  항상 마지막에 작성해야함 

const color = ["red", "orange", "yellow", "green"];
const [c1, c2, ...rest] = color;

console.log(c1,c2);
console.log(rest);



// rest 문법 함수사용
const print = (a,b, ...rest) =>{
    console.log([a,b, rest]);
};

print(1,2,3,4,5,6);
// rest 매개변수는 함수의 매개변수가 매우 많거나 몇개가 될지 모를때 
// 함수에서 받아온 매개변수들을 배열로 나타태야 할때 유용하게 쓰임