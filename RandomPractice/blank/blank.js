
var classList = ["Jimmy Y", "Fernando A", "Hannah C", "Jesse C", "Anthony E", "Andrew F", "Cynthia F", "Mohamed Galal", "Rick G"];
classList.sort();

function createNameBox(array, div){

  
  for(let i = 0; i<array.length; i++){
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode(array[i]);
    const input = document.createElement("input");
    input.type = "checkbox";
    newDiv.appendChild(newContent);
    newDiv.appendChild(input);

    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
  };
};



let div = document.querySelector('.list');

// div.textContent = 'hello';

createNameBox(classList, div);

// start with list of name
// display list of names