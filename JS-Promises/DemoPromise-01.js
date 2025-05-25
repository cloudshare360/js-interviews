let p = new Promise((resolve, reject)=> {

    let a = 1 + 1
    if(a == 2){

        resolve('success')
    }
    else
    {
        reject('Failed')
    }

});

p.then((message) => {
    console.log('This in in then ' + message);
}).catch((message) => {
    console.log('This in catch ' + message);
});