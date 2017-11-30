var myArray = [];
function addTask(task) {
    myArray.push(task);
    return task;
}
function listAllTasks() {
    console.log(myArray);
}
function deleteTask(task) {
    var toBeDeleted = myArray.indexOf(task);
    if (toBeDeleted === -1) {
        console.log("That is not a valid task, please check your spelling!");
    }
    else {
        myArray.splice(toBeDeleted, 1);
        console.log("You've deleted \"" + task + "\" from your To Do List!");
    }
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
