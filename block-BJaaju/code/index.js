let input = document.querySelector('input');
let figure = document.querySelector('figure');

function handle(event) {

  event.preventDefault()
   
  if (event.keyCode === 16) {
    
    let user = new XMLHttpRequest();
    user.open(
      'GET',
      `https://api.unsplash.com/search/photos?&query=${event.target.value};client_id=lUwDTtlX5SkXWf3tda4Ql_dMoiPY-mTixVqN5ZT89xM`
    );
    user.onload = function () {  
      let data = JSON.parse(user.response);
      let value=data.results;
      console.log(data.results[0].urls)
      value.forEach(element => {
        let li=document.createElement("li");
          let img=document.createElement("img");
          img.src=element.urls.thumb;
          figure.append(img)
          
      }); 
      event.target.value="";
     
    };

    user.send();
    figure.innerHTML=""; 
  }
}
input.addEventListener('keyup', handle);

