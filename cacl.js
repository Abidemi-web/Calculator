let results = document.querySelector(".input-text");

function calculator(bidemi) {
  results.value +=bidemi
}

function delt() {
  results.value = results.value.slice(0, -1)
  
}


function equals() {
  results.value = eval(results.value)
  
}

