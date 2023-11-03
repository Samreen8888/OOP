"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    constructor(name, age) {
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
    balance = 0;
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        }
        else {
            console.log('Insufficient funds.');
        }
    }
    getBalance() {
        return this.balance;
    }
}
class Student extends Person {
    school;
    constructor(name, age, school) {
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
function introduce(person) {
    person.sayHello();
}
introduce(person1);
introduce(student1);
class Shape {
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}
