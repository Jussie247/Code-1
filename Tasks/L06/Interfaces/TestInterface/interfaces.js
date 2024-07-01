"use strict";
let student1 = {
    name: "Max Musterman",
    address: "Hauptstraße 5",
    matrikel: 123456,
    exmatriculated: false,
};
let student2 = { name: "Martina Musterfrau", address: "Musterstraße 42", matrikel: 654321, exmatriculated: true, };
student1.address = "Am Graben 6";
console.log(student1);
let students = [student1, student2];
function studentInfo(student) {
    console.log(student.name, "lives at", student.address, "and has matrikel number", student.matrikel);
}
for (let i = 0; i < students.length; i++) {
    studentInfo(students[i]);
}
