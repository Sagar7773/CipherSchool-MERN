/* Object literal and method */
let person = {
    fname: "Sagar",
    lname: "Pandey",

    getFullName() {
        return `The person's full name is ${this.fname} ${this.lname}`;
    },

    phoneNo: {
        mobileNo: "12345",
        landline: "67890",
    }
};

console.log(person.getFullName());
console.log(person.phoneNo.mobileNo);
console.log(person.phoneNo.landline);


/* Object constructor */

function Student(fname, lname) {
    this.fname = fname;
    this.lname = lname;
}

let student1 = new Student("Sagar", "Pandey");
let student2 = new Student("Shreya", "Mishra");

console.log(`Student first is ${student1.fname} ${student1.lname}`);
console.log(`Student second is ${student2.fname} ${student2.lname}`);


/* Object.create() */

const coder = {
    isStudying: false,
    printIntroduction: function() {
        console.log(`My name is: ${this.name}. Am I studying: ${this.isStudying}`);
    },
};

const me = Object.create(coder);

me.name = "Sagar Kumar Pandey";
me.isStudying = true;

me.printIntroduction();


/* Class */
class Vehicle {
    constructor(name, maker, engine) {
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }

    getDetails() {
        return `The name of the vehicle is ${this.name}`;
    }
}

let v1 = new Vehicle("Creta", "Hyundai", "2200cc");
let v2 = new Vehicle("Q5", "Audi", "3000cc");

console.log(v1.name);
console.log(v2.maker);
console.log(v1.getDetails());


class Employee {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;

        let getDetails_NoAccess = function() {
            console.log(`Name is: ${this.fname}, and address is: ${this.lname}`);
        };

        this.getDetails_Access = () => {
            console.log(`Name is: ${this.fname}, and address is: ${this.lname}`);
        };
    }
}

const emp1 = new Employee("Vaibhav", "Sharma");
console.log(emp1.fname);
// emp1.getDetails_NoAccess(); // This will throw an error because `this` inside getDetails_NoAccess does not refer to the instance.
emp1.getDetails_Access();


class Person {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }

    getDetails() {
        return `Name is: ${this.fname}, and last name is: ${this.lname}`;
    }
}

class StudentExt extends Person {
    constructor(fname, lname, rollNo) {
        super(fname, lname);
        this.rollNo = rollNo;
    }

    getDetails() {
        return `${super.getDetails()}, and rollNo is: ${this.rollNo}`;
    }
}

const stu1 = new StudentExt("Vaibhav", "Sharma", 1);
console.log(stu1.fname);
console.log(stu1.getDetails());
