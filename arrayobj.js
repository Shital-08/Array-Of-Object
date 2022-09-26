/* "let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] "
*/

//"Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.

//['JOHN', 'BABA', 'YAGA', 'WICK']"

let studentRecords = [ {name: 'John', id: 123, marks : 98 },
                       {name: 'Baba', id: 101, marks : 23 },
                       {name: 'yaga', id: 200, marks : 45 },
                       {name: 'Wick', id: 115, marks : 75 } ]
let uppercase = studentRecords.map(names=> names. name.toUpperCase());
console.log(uppercase);

//"Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.
//[{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]

let studentRecords1 = [ {name: 'John', id: 123, marks : 98 },
                       {name: 'Baba', id: 101, marks : 23 },
                       {name: 'yaga', id: 200, marks : 45 },
                       {name: 'Wick', id: 115, marks : 75 } ]
let maxmark = studentRecords1.filter(student => student.marks > 50);
console.log(maxmark);


//Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.

let studentRecords2 = [ {name: 'John', id: 123, marks : 98 },
                       {name: 'Baba', id: 101, marks : 23 },
                       {name: 'yaga', id: 200, marks : 45 },
                       {name: 'Wick', id: 115, marks : 75 } ]
let marks = studentRecords2.filter(student => student.marks > 50 && student.id >120);
console.log(marks);

//Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.

let studentRecords3 = [ {name: 'John', id: 123, marks : 98 },
                       {name: 'Baba', id: 101, marks : 23 },
                       {name: 'yaga', id: 200, marks : 45 },
                       {name: 'Wick', id: 115, marks : 75 } ]
let sumall = studentRecords3.map(student => student.marks).reduce((a, b) => a + b, 0);
console.log(sumall);

//Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

let studentRecords4 = [ {name: 'John', id: 123, marks : 98 },
           {name: 'Baba', id: 101, marks : 23 },
           {name: 'yaga', id: 200, marks : 45 },
           {name: 'Wick', id: 115, marks : 75 } ]
let names = studentRecords4.filter(student => student.marks > 50).map(student => student.name)
console.log(names);

// Question 6: This time we are required to print the sum of marks of the students with id > 120.

let studentRecords5 = [ {name: 'John', id: 123, marks : 98 },
           {name: 'Baba', id: 101, marks : 23 },
           {name: 'yaga', id: 200, marks : 45 },
           {name: 'Wick', id: 115, marks : 75 } ]
let Sum_marks = studentRecords5.filter(student => student.id > 120).reduce((x, y) => x + y.marks ,0)
console.log(Sum_marks);

//Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.

let studentRecords6 = [ {name: 'John', id: 123, marks : 98 },
           {name: 'Baba', id: 101, marks : 23 },
           {name: 'yaga', id: 200, marks : 45 },
           {name: 'Wick', id: 115, marks : 75 } ]
let totalmarks = studentRecords6.map(function(student){ 
        if(student.marks <=50){
        student.marks += 15;
        }
        return student;
        }).filter(student => student.marks > 50).reduce((a, b) => a+b.marks, 0);
        console.log(totalmarks);

//>Question 8:Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects.

let studentinfo = [
    { name : "Kriti",    class : 11,  rollNo : 1 },
    { name : "Sunil",    class : 5,   rollNo : 8 },
    { name : "Shital",   class : 6,   rollNo : 22 },
    { name : "Dhiraj",   class : 9,   rollNo : 50 },
    { name : "sysha",    class : 8,   rollNo : 35 },
    { name : "Vidit",    class : 12,  rollNo : 80 },
  ]
  console.log (studentinfo);