//object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};



const students = [bob, sally, paul]


function getAverageGrade(student,course_code) {
  for (let record of student.transcript){

  
if (record.course === course_code){
  let sum=0;
  for ( let grade of record.grades){
    sum+= grade;
  }
  return sum / record.grades.length;
}
  }
  return-1
}

function getAssignmentMark(student, course, num) {
  for ( let record of student.transcript){
    if (record.course === course) {
      if (num >= 0 && num < record.grades.length) {
        return record.grades[num];
      }
    }
  }
  return -1;
}
function averageAssessment(students, courseName, assignment){
  let total = 0;
    let count = 0;
    for (let student of students) { 
        let mark = getAssignmentMark(student, courseName, assignment);
        if (mark !== -1) {  
            total += mark;
            count++;
        }
    }
    let average= total / count;
    return average;  
}


console.log(getAverageGrade(bob, "INFO 1603")); 
console.log(getAssignmentMark(sally, "INFO 1601", 1)); 
console.log(averageAssessment(students, "INFO 1601", 0));
