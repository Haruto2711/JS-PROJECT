let students = [
  { id: 1, name: "An", grade: 8 },
  { id: 2, name: "Binh", grade: 9 },
  { id: 3, name: "Chi", grade: 7 },
];

//Add Student
function addStudent(name, grade) {
  let nextID = students.length + 1;
  const newStudents = {
    id: nextID,
    name: name,
    grade: grade,
  };
  students.push(newStudents);
  return students;
}
const addFirstStudent = addStudent("Thành", 9);
console.log(addFirstStudent);

//Print Student
function showsStudents() {
  students.forEach((student) => {
    console.log(student.name + "-" + student.grade + " point");
  });
}

showsStudents();

//Delete
function removeStudentByID(id) {
  const initialLength = students.length;
  students = students.filter((student) => {
    return student.id !== id;
  });
  if (students.length < initialLength) {
    console.log(`\n--- Successfully removed student with ID: ${id} ---`);
    console.log(students)
  } else {
    console.log(`\n--- No student found with ID: ${id} ---`);
  }
}

removeStudentByID(1);
showsStudents();

//Calculate average grade 
function getAverageGrade(){
    const total = students.reduce((accumlator,currentValue) => {
        return accumlator + currentValue.grade
    },0);
    const avg = total / students.length;
    console.log("Average of class: " + avg.toFixed(2));
}

getAverageGrade();
