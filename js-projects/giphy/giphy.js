const searchBar = document.querySelector('#input');
const searchBtn = document.querySelector('#search');
const deleteBtn = document.querySelector('#delete');
const container = document.querySelector('#gifBox');
const form = document.querySelector('form');

// our Variables

async function searchMeme(query) {
    const rng = Math.floor(Math.random() * 10)
    const response = await axios.get(`https://api.giphy.com/v1/gifs/search?`, {params : { api_key : '44GQuQH3BsnqLBFl9asNfZ6m573xdHtJ', q : query, limit : 10 }})
    return response.data.data[rng].images.original.url;
}; 

//searches for term, and returns a random GIF from the 10 closest matches for variety.

function VaildQuery(){
    if(searchBar.value.trim() !== ''){
        return true
    }
    else{
        return false
    }
};

//logic to ensure the search is not empty

class GIF{
    constructor(query){
        const gifImg = document.createElement('img')
        gifImg.src = query
        container.append(gifImg);
    }
};

// our gif obj

async function makeGif(query){
    const link = await searchMeme(query)
    new GIF(link)
}
//puts the logic together to actually create the gif

searchBtn.addEventListener('click', (event) => {
   event.preventDefault();
  VaildQuery();
  if(!VaildQuery()){
    throw new Error('Please provide a vaild search term');
  }
  else{ makeGif(searchBar.value);
  }
});

//The Search button's function

deleteBtn.addEventListener('click', (event) =>{
    event.preventDefault();
    container.innerHTML = '';
});

//The "DELETE EVERYTHING" button