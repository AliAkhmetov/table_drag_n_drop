  var note1,note1t;
document.addEventListener("mousedown",
function(e){
  e = e || window.event;
  var target = e.target || e.srcElement;
//  document.getSelection().selectAllChildren(target);
 document.ondragstart = function() {
   return false;}
  target.ondragstart = function() {
    console.log(target.id);
  }
 note1 = document.getElementById(target.id);
 note1t = document.getElementById(target.id).textContent;
    console.log(note1);
});

document.addEventListener("mouseup",
function(e){
  e = e || window.event;
   var target = e.target || e.srcElement;
   console.log(target.id);
   var note2 = document.getElementById(target.id);
   var note2t = document.getElementById(target.id).textContent;
        console.log(note2);
     note2.innerHTML = note1t;
     note1.innerHTML = note2t;
});
//\

// .getElementById("table")
// let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
// let cDroppable = null;
//
// let cDroppableBelow = tNote.closest('.droppable');
// if (cDroppable != cDroppableBelow) {
//     if (cDroppable) { // null when we were not over a cDroppable1 before this event
//       leavecDroppable1(cDroppable);
//     }
//   cDroppable = cDroppableBelow;
//   if (cDroppable) { // null if we're not coming over a cDroppable now // (maybe just left the cDroppable)
//     entercDroppable(cDroppable);
//   }
// }
// function entercDroppable(elem) {
//      console.log("EEEEEEEEEEEEEEEEEEEEEE");;
//    }
