

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
    console.log(result);
    return result+10;
}).then((result) => {
    console.log(result+100);
    return result+100;
}).then((value)=>{

    if(value>100){
throw new Error("value is greater than 100") 
    }
}).catch(
console.log
)


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
    return 2;
    
}).then((value)=>{
    console.log(value)
    return 3
    
}).then((value)=>{
    console.log(value)
    return 4;
    
})



let bFirst=new Promise((resolve,reject)=>{
    resolve(1)
});
bFirst.then((value)=>{
console.log(value)
return 2;
})
bFirst.then((value)=>{
    console.log(value)
    return 3;
})
bFirst.then((value)=>{
    console.log(value);
    return 4
});



let user=new Promise((resolve,reject)=>{
    resolve("john");
}).then((value)=>{
    return Promise.resolve("Arya")
}).then((v)=>{
    console.log(v)
    return new Promise((res)=>{
        setTimeout(()=> res("Bran"),2000)
    })
}).then(console.log)
