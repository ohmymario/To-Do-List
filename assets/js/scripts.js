// Check off the "todos" by clicking on them

$("li").on("click", function() {
  $(this).toggleClass("completed");
});

// Click on X to delete the "todo"

$("span").on("click", function(e) {
  e.stopPropagation();
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  })
})