document.addEventListener('DOMContentLoaded', function() {
const bContainer = document.getElementById("box-container");
const btn = document.getElementById("new-box-button");
const form = document.getElementById("color-form");
const input = document.getElementById("color-input");


let bCount = 1;
let bColor = "";

function makeBox(color){
  let newBox = document.createElement('h2');
  newBox.setAttribute("id", bCount);
  newBox.style.backgroundColor = color;
   newBox.className = "box";
   newBox.textContent = bCount;
   bContainer.appendChild(newBox);
   bCount ++;
}

form.addEventListener("submit", function(event){
  event.preventDefault();
  bColor = input.value;
 document.querySelectorAll(".box").forEach(el => {
  el.style.backgroundColor = bColor;
});

input.value ="";
});

btn.addEventListener("click", function(event){
  makeBox(bColor)
})

bContainer.addEventListener("dblclick", (event) => {
    if (event.target.classList.contains("box")) {
      event.target.remove();
    }
  });
bContainer.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("box")) {
      const rect = event.target.getBoundingClientRect();
    const pageX = window.scrollX + rect.left;
    const pageY = window.scrollY + rect.top;

    event.target.textContent = `X: ${pageX}, Y: ${pageY}`;
    }
  });
bContainer.addEventListener("mouseout", (event) => {
    if (event.target.classList.contains("box")) {
        event.target.textContent = event.target.id;
    }
  });

  document.addEventListener("keydown", function(event){
   if (document.activeElement === input) {
    return;
  };
    if (event.key === "n" || event.key === "N"){
    makeBox(bColor)
    console.log("pressed")
    };
  });
});
