let p = new Promise((resolve, reject)=> {

   // let a = 1+2+1 // failed
   let a = 1+2 // success
    if( a=== 3)
    {
        resolve("success")
    }
    else
    {
        reject("failed")
    }
});

p.then((message)=> {
    console.log("in promise then", message);

}).catch ((message)=> {
    console.log("in catch ", message);
});