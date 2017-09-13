// Check off the "todos" by clicking on them

$("li").on("click", function () {
  if ($(this).css("color") === "rgb(128, 128, 128)") {
    $(this).css({
      "color": "black",
      "text-decoration": "none"
    });
    console.log("are you getting here")
  } else {
    $(this).css({
      "color": "gray",
      "text-decoration": "line-through"
    });
  }
});