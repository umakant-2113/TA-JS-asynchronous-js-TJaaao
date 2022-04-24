let arr=[];
let root=document.querySelector(".flex-45")
let section=document.querySelector(".hero-section")
let btn=document.querySelector(".btn")


   let data= fetch(`https://www.anapioficeandfire.com/api/books`) .then(function(res) {
return res.json()
  }).then(function(value) {

value.forEach((element,i) => {
   let li=document.createElement("li")
   li.classList.add("list")
   let h2=document.createElement("h2")
   let p=document.createElement("p");
   p.innerText=element.authors[0]
   h2.innerText=element.name
   let div=document.createElement("div")
   div.classList.add("anchor-div")
   let anchor=document.createElement("a");
   let arr=element.characters;
   anchor.addEventListener("click",()=>{
       charactersData(arr)
       
   })
   anchor.innerText=` Show Characters ${element.characters.length}`;
   div.append(anchor)
   li.append(h2,p,div)
   root.append(li)
});
  })

  function charactersData(arr){
      arr.map((elm)=>
      fetch(elm).then(function(res){
          return res.json()
      }).then(function(value){
        let h2=document.createElement("h2")
        h2.innerText=" Characters List"
          let li=document.createElement("li");
          li.classList.add("list2")
          let span=document.createElement("span");
          span.innerText="Close"
          li.innerText=value.name;
          section.append(li)
          btn.addEventListener("click",()=>{  
        })
      }))
    
  }  
  

 
   
   
