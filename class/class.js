class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  saySomething() {
    console.log(`${this.name} : hello!`);
  }
}

const hong = new Person("hong", 30, "male");
console.log(hong);
hong.saySomething();

const dabin = new Person("dabin", 26, "female");
console.log(dabin);
dabin.saySomething();

class Student extends Person {
  constructor(name, age, gender, grade) {
    super(name, age, gender);
    this.grade = grade;
  }
  saySomething(){
    console.log(`${this.name} : I'm so tired`)
  }
  doStudy(){
    console.log(`${this.name} : studying...`)
  }
}

const dabinKwon = new Student('dabinKwon',26,'female',90)
console.log(dabinKwon)
dabinKwon.saySomething()
dabinKwon.doStudy()