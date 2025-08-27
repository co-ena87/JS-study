//spread
const toy ={
    type: "bear",
    price: 15000
};

const blueToy = {
    type: "bear",
    color:"blue"
};

const yellowToy = {
    type: "bear",
    color:"yellow"
};

//  toy, blueToy , yellowToy 중복값들이 존재한다 (type)
// 중복값들이 존재하는것은 동일한 코드를 여러번 작성한다는것을 의미한다
// 그러므로 spred 문법을 사용한다 

//spred 문법
//점 3개의 기호로 표시하고 작성된 객체들의 반복되는 프로퍼티들을 
// 스프레드로 사용해 작성한다 

const car = {
    type: "car",
    price: 6000
};

const blueCar = {
    ...car,
    color:"blue"
};


const yellowCar = {
    ...car,
    color:"yellow"
};

console.log(blueCar);
console.log(yellowCar);


// 배열에서도 사용가능하다
const color1 = ["red","orange","yellow"];
const color2 = ["blue", "Navy", "purple"];

const rainbow = [...color1, "green", ...color2];
console.log(rainbow);