let url =
  'https://api.unsplash.com/search/photos?query=office;client_id=eYGlYfvnlTqKVPJ_jw11ESmHIOQDN1gdHDb5DummLEU';

let root = document.querySelector('ul');
let input = document.querySelector('input');
console.log(input);
function fetch(val) {
  return new Promise((resolve, reject) => {
    let user = new XMLHttpRequest();
    user.open('GET', val);
    user.onload = () => {
      let value = resolve(JSON.parse(user.response));
    };
    user.onerror = () => reject('something went worng');
    user.send();
  });
}
function displayunicode(e) {
  if (e.keyCode == 13) {
    url = `https://api.unsplash.com/search/photos?query=${e.target.value};client_id=eYGlYfvnlTqKVPJ_jw11ESmHIOQDN1gdHDb5DummLEU`;

    let data = fetch(url).then((value) =>
      value.results.forEach((val) => {
        let li = document.createElement('li');
        let img = document.createElement('img');
        img.src = val.urls.thumb;
        li.append(img);
        root.append(li);
      })
    );
    e.target.value = '';
    root.innerHTML = '';
  }
}
input.addEventListener('keyup', displayunicode);
