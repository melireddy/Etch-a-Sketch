const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    //cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

function ClickMe(){
  var num = prompt("Size of new grid:");
  alert(num);
  makeRows(num,num);
};

container.addEventListener("mouseover", function( event ) {   
  // highlight the mouseenter target
  event.target.style['background-color'] = "green";

  // reset the color after a short delay
 /* setTimeout(function() {
    event.target.style['background-color'] = "white";
  }, 1000);*/
}, false);
