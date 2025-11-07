//배열 수정 

//새로운 값을 추가하여 수정하기 

let animal  = ["cat", "dog", "hamster"];

animal = ["cat", "rabbit", "hamster"];
animal[2] ="parrot";

console.log(animal);


// 객체는 const로 선언 후에도 프로퍼티 값이 수정 가능했다 
//베열도 수정 가능할까? 

const ani = ['cat','dog','hamster'];

//ani= ['cat', 'rabbit', 'hamster']; // 애러 코드 발생 
ani[2] ='parrot'; // 정상작동

console.log(ani);