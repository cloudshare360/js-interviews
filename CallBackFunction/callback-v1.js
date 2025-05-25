function asyncTask(cb) {
  
   setTimeout(()=> {
   // cb("Error"); // first argument is error and second is data
   cb(null, "this is data from Server"); // first argument is error and second is data
   }, 0);

}

//asyncTask(()=>console.log("Srinivas"));
asyncTask((err, data )=>
{
    if(err)
    {
        throw err;
    }
    else
    {
        console.log(data);
    }
 });
