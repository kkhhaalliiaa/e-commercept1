// Js for the focus in css
const inputs = document.querySelectorAll(".input");
//when the input gets focus , the parent (.input-container) needs to add a focus class
function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}
inputs.forEach((input) =>{
    input.addEventListener("focus", focusFunc);
});