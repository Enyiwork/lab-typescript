// Iteration 1
// 1. Create an array of strings
const myArray: string[] = [];

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask (task: string) {
  myArray.push(task);
  return task;
}
// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks () {
     console.log(myArray);
   }

// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask (task) {
const toBeDeleted = myArray.indexOf(task);
      if (toBeDeleted === -1) {
          console.log("That is not a valid task, please check your spelling!");
      }
      else {
          myArray.splice(toBeDeleted, 1);
          console.log("You've deleted \"" + task + "\" from your To Do List!");
      }
}
// Execution
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
