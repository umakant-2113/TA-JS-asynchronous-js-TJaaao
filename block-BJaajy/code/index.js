

let first= new Promise((res,rej)=>{
    setTimeout(()=>res(1),1000)
})
let second=Promise((res,rej)=>{
    setTimeout(()=>res(1),2000)
});
let third=Promise((res,rej)=>{
    setTimeout(()=>res(2),3000)
});
let four=Promise((res,rej)=>{
    setTimeout(()=>res(3),4000)
})

let all=Promise.all([first,second,third,four]).then((res)=>console.log(res));



const one = new Promise((resolve, reject) =>
  setTimeout(() => resolve('Arya'), 1000)
);
const two = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error('Whoops!')), 2000)
);
const three = new Promise((resolve, reject) =>
  setTimeout(() => resolve('John'), 3000)
);
data=Promise.allSettled([one,two,three]).then(console.log)


Promise.all([
    new Promise((resolve, reject) => {
      setTimeout(() => resolve('Arya'), 1000);
    }),
    'Sam',
    { name: 'John' },
  ]).then(console.log);