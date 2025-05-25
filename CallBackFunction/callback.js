console.log("Task Start");
function asyncTask(cb) {
    console.log("Task Running")
   setTimeout(cb, 0);

}

//asyncTask(()=>console.log("Srinivas"));
asyncTask(()=>console.log(name));
console.log("Task End");

const name = "Srinivas";