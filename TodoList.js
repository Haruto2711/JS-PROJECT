let tasks = [
  { id: 1, name: "Làm bài tập", done: false },
  { id: 2, name: "Rửa bát", done: true },
];

//Add Task
function addTask(name) {
  let nextID = tasks.length + 1;
  let defaultTask = {
    id: nextID,
    name: name,
    done: false,
  };
  tasks.push(defaultTask);
  return tasks;
}

const addTask1 = addTask("Đá bóng");
console.log(addTask1);

//Show Task
function showTask() {
  tasks.forEach((task) => {
    if (task.done === true) {
      console.log("Id: " + task.id);
      console.log("Name: " + task.name);
      console.log("Đã hoàn thành");
    } else {
      console.log("Id: " + task.id);
      console.log("Name: " + task.name);
      console.log("Chưa hoàn thành");
    }
  });
}

showTask();

//Note Task
function markDone(id) {
  let found = tasks.find((item) => item.id === id);
  if (found) {
    found.done = true;
    console.log(`Đã đánh dấu công việc "${found.name}" là hoàn thành.`);
  } else {
    console.log(`Không tìm thấy công việc với ID: ${id}`);
  }
}

markDone(2);

//Remove Task By ID
function removeTask(id) {
  tasks = tasks.filter((task) => {
    return task.id !== id;
  });
  return tasks;
}

const remove = removeTask(1);
console.log(remove);


function taskSummary() {
  let total = tasks.length;
  let completed = tasks.filter((task) => task.done).length;
  console.log(`Tổng số công việc: ${total}`);
  console.log(`Hoàn thành: ${completed}`);
  console.log(`Chưa hoàn thành: ${total - completed}`);
}

taskSummary();