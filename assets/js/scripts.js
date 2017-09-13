// Check off the "todos" by clicking on them

$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// Click on X to delete the "todo"

$("li").on("click", "span", function(e) {
  e.stopPropagation();
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  })
});

$("input[type=text]").on("keypress", function(e) {
  if(e.which === 13){
    //grabbing user input for new todo list item
    var todoText = $(this).val();
    //clear to allow for additional input
    $(this).val("");
    // create a new li "todoText" and append to ul
    $("ul").append("<li><span>X</span> " + todoText + "</li>");
  }
});