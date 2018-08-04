// document.addEventListener('DOMContentLoaded', function() {
//   document.getElementById("click-this").addEventListener("click", handler);
// });
//
// // The handler also must go in a .js file
// function handler() {
//   /* ... */
//   console.log("this is sumanth");
// }
$(document).ready(function() {
  $("#click-this").click(function () {
    $("#todo_list").append("<li class='todo-rouding'>sumnth</li>");
  });
});
