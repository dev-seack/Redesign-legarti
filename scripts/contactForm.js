$(document).ready(function() {
  $(".formgroup").on("click", function() {
    $(".formgroup").removeClass("focus");
    $(".formgroup *:focus")
      .parent()
      .addClass("focus");
  });
});
