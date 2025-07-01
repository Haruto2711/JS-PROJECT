let subjects = [
  { name: "Toán", grade: 8.5 },
  { name: "Văn", grade: 7 },
  { name: "Anh", grade: 9 },
];

//Add Subject
function addSubject(name, grade) {
  const newSubject = {
    name: name,
    grade: grade,
  };

  subjects.push(newSubject);
  return subjects;
}

const subject1 = addSubject("Lịch sử", 8);
console.log(subject1);

//Print all subject
function showSubject() {
  subjects.forEach((subject) => {
    console.log(subject.name + ": " + subject.grade);
  });
}
showSubject();

//calculate total and average of all subject
function calcTotalAndAverage() {
  let total = subjects.reduce((accumlator, currentValue) => {
    return accumlator + currentValue.grade;
  }, 0);

  let average = total / subjects.length;
  return "Average of all subject: " + average.toFixed(2);
}

console.log(calcTotalAndAverage());

//Delete subject follow name
function removeSubjectByName(name) {
  subjects = subjects.filter((subject) => {
    return subject.name !== name;
  });
  return subjects;
}

console.log(removeSubjectByName("Toán"));

function printSubjectRanks() {
  subjects.forEach((subject) => {
    let rank = "";
    if (subject.grade >= 8) {
      rank = "Giỏi";
    } else if (subject.grade >= 6.5) {
      rank = "Khá";
    } else if (subject.grade >= 5) {
      rank = "Trung bình";
    } else {
      rank = "Yếu";
    }

    console.log(`${subject.name} - ${subject.grade} điểm → Xếp loại: ${rank}`);
  });
}
  
printSubjectRanks();


