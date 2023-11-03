class Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
  }
  
  const person1 = new Person('Alice', 30);
  person1.sayHello();

  class BankAccount {
    private balance: number = 0;
  
    deposit(amount: number) {
      this.balance += amount;
    }
  
    withdraw(amount: number) {
      if (this.balance >= amount) {
        this.balance -= amount;
      } else {
        console.log('Insufficient funds.');
      }
    }
  
    getBalance() {
      return this.balance;
    }
  }

  class Student extends Person {
    school: string;
  
    constructor(name: string, age: number, school: string) {
      super(name, age);
      this.school = school;
    }
  
    study() {
      console.log(`${this.name} is studying at ${this.school}.`);
    }
  }
  
  const student1 = new Student('Bob', 20, 'XYZ School');
  student1.sayHello();
  student1.study();

  function introduce(person: Person) {
    person.sayHello();
  }
  
  introduce(person1);
  introduce(student1);
  abstract class Shape {
    abstract calculateArea(): number;
  }
  
  class Circle extends Shape {
    radius: number;
  
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
  
    calculateArea(): number {
      return Math.PI * this.radius ** 2;
    }
  }
    