document.addEventListener("DOMContentLoaded", function (){
    const topInput = document.querySelector('#topText');
    const botInput = document.querySelector('#botText');
    const form = document.querySelector('form');
    const memeContainer = document.querySelector('#memeContainer');
    const img = document.querySelector('#imgLink')

    function fieldsFull(){
        if ( topInput.value.trim() !== "" && botInput.value.trim() !== "" && img.value.trim() !== ""){
            return true;    
        }
        else {
            return false;
        }
    };

    //checks if each text field has content

form.addEventListener('submit', (event) => {
    event.preventDefault();
    fieldsFull();
    if (!fieldsFull()){
        return;
    }
    else {
    createMeme();
    document.querySelectorAll('input[type="text"]').forEach(input => {
        input.value= "";
    });
    return;
    }
});

// prevents submission if "fieldsFull" fails, otherwise procceds

function createMeme(){
    const backImg = document.createElement('img');
    const topText = document.createElement('span');
    const botText = document.createElement('span')
   const meme = document.createElement('div');

   //all elements we need create

    const link = img.value;
    backImg.src = (link);
    topText.textContent = topInput.value;
    botText.textContent = botInput.value;

    //sets values

    topText.classList.add( 'top-text','vina-sans-regular');
    botText.classList.add ('bot-text','vina-sans-regular');
    backImg.className = 'back-img';
    meme.className = 'meme';

    //adding some classes so CSS can do it's thing

    meme.appendChild(backImg);
    meme.appendChild(topText);
    meme.appendChild(botText);

    memeContainer.appendChild(meme);

    //appending everything
};

memeContainer.addEventListener("dblclick", (event) =>{
    const meme = event.target.closest('.meme');
    if(meme){
        meme.remove();
    };
});
//double click to delete 
});

