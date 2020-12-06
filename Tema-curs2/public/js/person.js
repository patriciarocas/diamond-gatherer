export class Person {
    constructor(name, age, height, weight, eyecolor) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.eyecolor = eyecolor;

    }

    walk() {
        return this.name + " " + "can walk";
    }
    read() {
        return this.name + " " + "can read";
    }
    write() {
        return this.name + " " + "can write";
    }


}

