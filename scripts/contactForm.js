$(document).ready(function() {
  $(".formgroup").on("click", function() {
    $(this).keyup(function() {
      $(".formgroup").removeClass("focus");
      $(".formgroup *:focus")
        .parent()
        .addClass("focus");
      if (
        $(this)
          .children()
          .val() == ""
      ) {
        $(".formgroup").removeClass("focus");
      }
    });
  });
});
