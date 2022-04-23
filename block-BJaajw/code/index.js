let option=document.querySelector("option");
let select=document.querySelector("select")
let root=document.querySelector("ul")
let allNews=[];

function displayUi(newsInfo){
    root.innerHTML="";
    // console.log(newsInfo)
    newsInfo.forEach(element => {
     let li=document.createElement("li");
     li.classList="list"
     let img=document.createElement("img");
     img.src=element.imageUrl
    img.classList="full-width"
     let div1=document.createElement("div");
     div1.classList="bg-box"
     let h2=document.createElement("h2")
     h2.innerText=element.newsSite
     let p=document.createElement("p")
     p.innerText=element.title;
     let div=document.createElement("div");
     div.classList.add("box")
     let a=document.createElement("a")
     a.href=element.url;
     a.innerText="Read More"
     div.append(a);
     div1.append(h2,p,div)
     li.append(img,div1)
     root.append(li)
    });
   
}


function displayOption(news){
news.forEach(element => {
    let option=document.createElement("option");
    option.innerText=element;
    option.value=element;
    select.append(option)
});
    
}

let url=`https://api.spaceflightnewsapi.net/v3/articles?_limit=30`;
let data=fetch(url).then(res=>res.json()).then(newsList=>{
allNews=newsList;
displayUi(newsList)
let alldata=Array.from(new Set(newsList.map((n)=>n.newsSite)))
displayOption(alldata)
})
.catch((error)=>{
    console.log(error)
})

function handle(e){
  let value=e.target.value;
  let filterNews
  if(value==="Select a news source "){
      filterNews=allNews;
      displayUi(filterNews)
  }else{
    filterNews= allNews.filter((news)=> news.newsSite=== value);
    displayUi(filterNews);
  }
}

select.addEventListener("change",handle)
  
