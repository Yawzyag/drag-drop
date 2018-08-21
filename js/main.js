const fill = document.querySelector(".fill"),
  empties = document.querySelectorAll(".empty");

//fill listeners
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

//loop empties and drga events
empties.forEach(empty => {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
});

//drag functions
//cuando se agarra el elemento
function dragStart() {
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
}

//cuando se suelta el elemento arrastrado
function dragEnd() {
  this.className = "fill";
  //   console.log("nd");
}

function dragOver(e) {
  e.preventDefault();
  //   console.log("dragover");
}
function dragEnter(e) {
  e.preventDefault();
  this.className += " hover";
  //   console.log("dragEnter");
}
function dragLeave() {
  this.className = "empty";
  //   console.log("dragLeave");
}
function dragDrop() {
  this.className = "empty";
  this.append(fill);
  //   console.log("dragDrop");
}
