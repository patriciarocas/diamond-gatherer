class Person {
   constructor(name) {
      this.name = name;
   }


   drink() {
      return ` ${this.name} can drink `;
   }
   eat() {
      return ` ${this.name} can eat `;
   }

}

class Employee extends Person {
   constructor(name) {
      super(name)
      this.name = name;
   }
   details() {
      console.log(`${this.drink()} \n ${this.eat()} \n ${this.work()} \n ${this.read()} \n ${this.promote()}`);
   }

   work() {
      return ` ${this.name} can programming`;
   }
   read() {
      return ` ${this.name} can read books`;
   }
   promote() {
      return ` ${this.name} can be promoted `;
   }

}


let employee1 = new Employee('Raluca');
employee1.details();
let employee2 = new Employee('Raul');
employee2.details();