const input = document.getElementById('searchImg');


let container = document.createElement('div');
container.classList.add("container");

input.addEventListener('input', onSearch);

async function onSearch(){ 
  
  let search = input.value;
  try{
    let dataArr = "";
    container.innerHTML = "";

    let response = await fetch('https://api.giphy.com/v1/gifs/search?api_key=5iLsO1eSCVx2skaCT3sxYAWc9l5XyTDc&q=' + search + '&limit=5&offset=0&rating=g&lang=en');
    let data = await response.json();
    dataArr = data.data;

    if (dataArr.length !== 0) {

      for(let img of dataArr){
        let imgSrc = img.images.downsized.url;
      
        img = document.createElement('img');
        img.src = `${imgSrc}`;
        img.alt = `${search}`;
        container.append(img);
      
      }
      document.body.append(container);
    
    } else if(dataArr.length === 0){ 
      let errorMessage = document.createElement('p');
      errorMessage.classList.add("error");
      errorMessage.textContent = "Ничего не найдено"
      container.append(errorMessage);
    }
    
    
  }
  
  catch(err){
    alert(err);
  }
  
}
