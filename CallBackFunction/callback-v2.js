function asyncTask(cb) {
  
   setTimeout(()=> {
   // cb("Error"); // first argument is error and second is data
   cb(null, "this is data from Server"); // first argument is error and second is data
   }, 0);

}

function makeApiCall(cb) {
    setTimeout(()=> {
        console.log("This is a Async task execution")
    }, 0)
}


makeApiCall(()=> {
    makeApiCall(()=> {
        makeApiCall(()=> {
            makeApiCall(()=> {
                asyncTask(()=>{});
            })
        })
    })
})