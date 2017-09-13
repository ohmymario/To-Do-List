// Check off the "todos" by clicking on them

$("li").on("click", function () {
  $(this).toggleClass("completed")
});