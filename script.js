document.querySelector('button').addEventListener('click', onSearch);
function onSearch(){ 
  let search = "";
  search = document.getElementById('searchImg').value;
  fetch('https://api.giphy.com/v1/gifs/search?api_key=5iLsO1eSCVx2skaCT3sxYAWc9l5XyTDc&q=' + search + '&limit=5&offset=0&rating=g&lang=en')
  .then(response => response.json()) 
  .then(data => {
    let dataArr = "";
    dataArr = data.data;

    for(let img in dataArr){
      console.log(dataArr);
      let imgSrc = dataArr[img].url;
      let container = "";
      
      container = document.createElement('div');
      
      img = document.createElement('img');
      img.src = `${imgSrc}`;
      img.alt = `${search}`;
      container.append(img);
      
      document.body.append(container);
    }
  })
  .catch(error => console.log(error));
}