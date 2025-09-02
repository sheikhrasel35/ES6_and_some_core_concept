// totally optional
class Student {
  constructor(name, roll, marks) {
    this.name = name;
    this.roll = roll;
    this.marks = marks;
  }
  getInfo() {
    console.log(`Name: ${this.name}, Roll: ${this.roll}, Marks: ${this.marks}`);
  }
}

// Four pillar of OOP: Abstraction, Encapsulation, Inheritance, Polymorphism

// Inheritance (উত্তরাধিকার সূত্রে পাওয়া)

class BestStudent extends Student {
  constructor(name, roll, marks, achievement) {
    super(name, roll, marks);
    this.achievement = achievement;
  }

  showAchievement() {
    console.log(`${this.name}'s achievement is ${this.achievement}`);
  }
}

const s1 = new Student("sheikh", 070, 80);
const s2 = new Student("shaid", 25, 40);
const s3 = new Student("Rasel", 42, 60);
const bestStd = new BestStudent("Rasel", 29, 90, "Black Belt");

// s1.getInfo();
// s2.getInfo();
// s3.getInfo();

bestStd.getInfo();
bestStd.showAchievement();
