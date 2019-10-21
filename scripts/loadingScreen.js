$(window).on("load", () => {
  $(".loadingScreen .progressBar").animate({ width: "200px" });
  $(".loadingScreen")
    .delay(500)
    .fadeOut();
});
