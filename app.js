//object in typescript
//object store multiple type of data
//Example1
var student_data = {
    name: "ashir",
    age: 17,
    class: 9,
    subject: "science"
};
console.log(student_data);
console.log(student_data.age); //Dot notation is used to get a individual key value
console.log(student_data["subject"]); //square bracket notation is used dynamically to find the key value
//assignment question
//create the array of object represent the different student data individualy in loops.
var StudentData = [
    {
        name: "huzaifa",
        age: 7,
        class: 1,
        subject: "math"
    },
    {
        name: "maheen",
        age: 8,
        class: 3,
        subject: "english"
    },
    {
        name: "alishba",
        age: 10,
        class: 4,
        subject: "urdu"
    },
    {
        name: "hooriya",
        age: 11,
        class: 6,
        subject: "science"
    },
    {
        name: "waniya",
        age: 9,
        class: 4,
        subject: "s.st"
    }
];
console.log(StudentData); //simply console it
//use a loops method
for (var i = 0; i < StudentData.length; i++) {
    console.log("StudentData ".concat(i + 1));
    console.log("Name: ".concat(StudentData[i].name));
    console.log("Age: ".concat(StudentData[i].age));
    console.log("Class: ".concat(StudentData[i].class));
    console.log("Subject: ".concat(StudentData[i].subject));
}
