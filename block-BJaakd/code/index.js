

let newPromise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("umakant rajput")
    },1000)
}).then(value=>console.log(value))


let rejPromise=new Promise((resolve,reject)=>{
    reject("umakant rajput")
}).catch(value=>console.log(value))




let promiseSeteld= new Promise((resolv,reject)=>{
    reject("Rejected Promise!")
}).catch(value=>console.log(value)).finally(value=>console.log("Promise Settled!"))

console.log('A');
setTimeout(() => console.log('B'), 0);
Promise.resolve().then(() => console.log('C'));
console.log('D');


function wait(sec){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("umakant rajput")
        },sec)
    })
}
let data=wait(3000).then(value=>console.log(value))




let resolvePromise= new Promise((resolve,reject)=>{
    resolve(21);
    reject("something went worng")
}).then((result) => {
    console.log(result);
    return result;
}).then((result) => {
    console.log(result+10);
    return result+10;
}).then((result) => {
    console.log(result+100);
    return result+100;
}).then((value)=>{
    if(value>100){
        return "value is greater than 100"
    }
})
resolvePromise.catch((value)=>{
console.log(value)
})


let objPromise=new Promise((resolve,reject)=>{
    resolve(["A"])
}).then((value)=>{

return value
}).then((value)=>{
    return value.concat(["B"])
}).then((value)=>{
   return  value.reduce((acc,cv,i)=>{
        acc[i]=cv;
        return acc;
    },{})
}).then((value)=>{
    console.log(value)
})



let first= new Promise((resolve,reject)=>{
    resolve(1)
});
first.then((value)=>{
    console.log(value)
    return value+1
    
}).then((value)=>{
    console.log(value)
    return value+1
    
}).then((value)=>{
    console.log(value)
    return value+1
    
}).then((value)=>{
    console.log(value)
    return value+1
    
})



let bFirst=new Promise((resolve,reject)=>{
    resolve(1)
});
bFirst.then((value)=>{
console.log(value)
return value+1;
})
bFirst.then((value)=>{
    console.log(value)
    return value+1;
})
bFirst.then((value)=>{
    console.log(value);
    return value+1
});



let lastPromise=new Promise((resolve,reject)=>{
    resolve("John")
}).then((value)=>{
    console.log(value)
    return value+"Arya"
}).then((value)=>{
   console.log(value)
    setTimeout(()=>{
   console.log(value+"Bran")
    },2000)
}).then((value)=>{
    console.log(value)
    return value
})
