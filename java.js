let allSpan = document.querySelectorAll(".buttons span");
let result = document.querySelector(".results > span");
let theInput = document.getElementById("the-input");

allSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (e.target.classList.contains("check")) {
      check();
    }

    if (e.target.classList.contains("add")) {
      add();
    }

    if (e.target.classList.contains("delete")) {
      deleteItem();
    }

    if (e.target.classList.contains("show")) {
      show();
    }
  });
});

function checkInput() {
  if (theInput.value === "") {
    result.innerHTML = " input cant be empty";
  }
}

function check() {
  if (theInput.value !== "") {
    if (localStorage.getItem(theInput.value)) {
      result.innerHTML = `found local storage item called <span>${theInput.value}</span>`;
    } else {
      result.innerHTML = `no local storage item with the name <span>${theInput.value}</span>`;
    }
  } else {
    checkInput();
  }
  theInput.value=""
}


function add() {
  if (theInput.value !== "") {
   localStorage.setItem(theInput.value,"test")
   result.innerHTML=`local storage item <span>${theInput.value}</span> add`
    
  theInput.value=""
  } else {
    checkInput();
  }
}

function deleteItem() {
 if(theInput.value !=="") {
  if(localStorage .getItem(theInput.value)){
    localStorage.removeItem(theInput.value)
    result.innerHTML=` local storage item  <span>${theInput.value}  is remove</span>`
  }
  else{
    result.innerHTML = `no local storage item with the name <span>${theInput.value}</span>`;
  }

 }else{
  checkInput();
 }
}

function show() {
  if(localStorage.length){
for(let[k,v] of Object.entries(localStorage)){
result.innerHTML+=`<span class="kys"> ${k} </span>`
}
  }
  else{
    result.innerHTML=`local storage is empty`
  }
}
