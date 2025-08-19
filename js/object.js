//새로운 객체 생성 방법 -> 생성자 함수 , 리터럴 총 2가지



//생성자 함수  new object 키워드 사용
let obj1 = new Object();  //-> let변수 obj1 선언 후 obj1에 새로운 객체 생성함
console.log(obj1);

// 리터럴 사용 {} 
// //new object 키워드 사용 안함
let obj2 = {}; //
console.log(obj2);


//객체 프로퍼티로 undefined 사용가능 
let book = {
    title:'자바스크립트',
    author:'김가루',
    category:'자바스크립트',
    year: undefined,
    color: function () {
        console.log('orange')
    },
};
console.log(book.year);


//리터럴 사용하여 car 객체 생성
let car = {
    name: '부릉',
    model: 'morning',
    color: 'black',
    owner: '햄스터'
};

// 점표기법
//car 속에 담긴 객체 값 꺼내기 -> 객체의 이름 뒤에 점 작성하고 객체 프로퍼티 이름
console.log(car.name); 
console.log(car.color);
console.log(car.model);

//괄호표기법 
// ['']
// 대괄호 안에 '' 사용하여 키 값이 문자열인것 반드시 명시하기
console.log(car['name']);
console.log(car['model']);
console.log(car['color']);


// 동일한 car  객체의 프로퍼티 값을 출력하는 getValue라는 함수 작성
// 매개변수는 key
const getValue = (key) => {
    console.log(car[key]);
}
getValue('owner');

//객체 프로퍼티 관련
let cat1 = {
    age:2,
    name:'야옹이',
    color:'white'
 };


cat1.name = '야옹이';
cat1['color'] ='white';


//객체 수정 
cat1.name = '애옹';
cat1['color'] = 'yellow';




//const 상수는 객체에서는 프로퍼티 값 수정이 가능함 
const cat2 = {
    age:2,
    name:'야옹이',
    color:'white',
};

cat2.name = '추르';
cat2['color'] = 'blue';
// 객체 고유의 id값을 변경하는것이 아니기 때문에
// 지금 코드는 cat2 라고 이미 존재 하는 객체 속 프로퍼티(속성)를 포커싱하고 수정하는것임



//객체 삭제
const cat3 = {
    age:2,
    name:'야옹이',
    color:'white',
};


delete cat3.age;
delete cat3['name'];
console.log(cat3);




// 객체 프로퍼티 값이 함수일 경우 
// 함수 작성 방법

const person1 = {
    name: '홍길동',
    age: 23,
    print: function(){
     console.log('hello world');
   },
};

//person 객체의 프로퍼티중 print는 함수인데 이처럼 프로퍼티 값에 함수가 들어가면 메서드(method) 라고 한다 
// 객체 안에 있는 메서드 (method)드는 객체안 다른 프로퍼티에 접근 가능한 특별한 기능이 있다 

const person2 = {
    name: '고길동',
    age: 48,
    print: function(){
        console.log(`제 이름은 ${this.name}입니다`);
    },
};
person2.print();
person2['print']();