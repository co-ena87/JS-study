function Pesron(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayHi = function () {
        console.log('안녕하세요!' + this.name + '입니다');
    };
}

const pesron1 = new Pesron ('홍길동', 30 ,'Manager');
const pesron2 = new Pesron ('김철수', 25 , 'Designer');

console.log(pesron1.name);
console.log(pesron2.age);

pesron1.sayHi();
pesron2.sayHi();