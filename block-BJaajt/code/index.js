let input = document.querySelector('input');
let root = document.querySelector('section');
let userName = document.querySelector('h3');
let userImg = document.querySelector('img');
let p = document.querySelector('p');
let p2 = document.querySelector('.p');
let divfolo = document.querySelector('.folo1');
let followingUser = document.querySelector('.folo');

function displayUi(data) {
  userName.innerText = data.name;
  userImg.src = data.avatar_url;
  p.innerText = `Followers  :${data.followers}`;
  p2.innerText = `Following  :${data.following}`;
  input.value = "";
}

function handleChange(e) {
  if (e.keyCode === 16) {
    input.innerText = '';
    divfolo.innerHTML = '';
    followingUser.innerHTML = '';
    let user = new XMLHttpRequest();
    user.open('GET', `https://api.github.com/users/${e.target.value}`);
    user.onload = function () {
      let userData = JSON.parse(user.response);
      // followers data
      let followers = new XMLHttpRequest();
      followers.open(
        'GET',
        `https://api.github.com/users/${e.target.value}/followers`
      );
      followers.onload = function () {
        let newData = JSON.parse(followers.response);
        for (let i = 0; 5 >= i; i++) {
          let li = document.createElement('li');
          li.classList.toggle('box');
          let h2 = document.createElement('h2');
          h2.style.fontSize = '1.6rem';
          h2.style.margin = '.8rem';
          h2.innerText = newData[i]['login'];
          let img1 = document.createElement('img');
          // img.classList.add("img2")
          img1.src = newData[i]['avatar_url'];
          li.append(h2, img1);
          divfolo.append(li);
        }
      };
      followers.send();
      //    following data

      let following = new XMLHttpRequest();
      following.open(
        'GET',
        `https://api.github.com/users/${e.target.value}/following`
      );
      following.onload = function () {
        let followingData = JSON.parse(following.response);
        for (let i = 0; 5 >= i; i++) {
          let li = document.createElement('li');
          let h2 = document.createElement('h2');
          h2.innerText = followingData[i]['login'];
          h2.style.fontSize = '1.6rem';
          h2.style.margin = '.8rem';
          let img = document.createElement('img');
          //  img.classList.add("img")
          img.src = followingData[i]['avatar_url'];
          li.append(h2, img);
          followingUser.append(li);
        }
      };
      following.send();

      displayUi(userData);
    };
    user.send();
  }
}
input.addEventListener('keyup', handleChange);

// cat image finder
let img=document.querySelector(".random-img")
// console.log(img)
let figure=document.querySelector("figure")
let btn=document.querySelector(".random-btn");
let li=document.createElement("li");
// let img3=document.createElement("img");
function handle(){
    li.innerHTML  = '';
    
    let xhr=new XMLHttpRequest()
    xhr.open("GET","https://api.thecatapi.com/v1/images/search?limit=1&size=full")
    console.log(xhr);
    xhr.onload=function(){
       let followingData= JSON.parse(xhr.response)
       img.src=followingData[0].url;
       li.append(img) 
       figure.append(img,btn)     
    }
    xhr.send()
}


btn.addEventListener("click",handle)
  

