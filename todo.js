let input = document.getElementById("input");
let text = document.querySelector(".text");

function Add() {
  if (inp.value == "") {
    alert("Please Enter Task");
  } else {
    let newEle = document.createElement("ul");
    newEle.innerHTML = `${inp.value} <i class="ri-delete-bin-6-line"></i>`;
    text.appendChild(newEle);
    inp.value = "";
    newEle.querySelector("i").addEventListener("click", remove);
    function remove() {
      newEle.remove();
    }
  }
}
