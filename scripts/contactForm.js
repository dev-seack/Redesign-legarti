$(document).ready(function() {
  $(".formgroup").on("click", function() {
    $(this).keypress(function() {
      $(".formgroup").removeClass("focus");
      $(".formgroup *:focus")
        .parent()
        .addClass("focus");
    });
  });
});
