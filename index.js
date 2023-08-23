
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0;



function increment(){
  count += 100;
  countEl.textContent = count;
}


function save(){
  let entry = `${count} -`;
  saveEl.textContent += entry;
  console.log(count);
  reset();
}

function reset (){
  countEl.textContent = 0;
  count = 0;
}

console.log("Let's count people on the subway!")