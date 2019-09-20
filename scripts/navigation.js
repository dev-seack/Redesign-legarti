$(document).ready(function() {
  let docHeight = $(document).height(); // 100%
  let winHeight = $(window).height(); // offset
  let scrollDest = docHeight - winHeight; // real destination to scroll to

  $(document).on("scroll", function() {
    var scrollProgress = Math.floor(
      ($(document).scrollTop() / scrollDest) * 100
    );

    $("#customScrollbar").css({ height: scrollProgress + "vh" });
  });

  $("#menuToggleContainer").on("click", function() {
    if (!$(this).hasClass("open")) {
      $(this).addClass("open").$;
      $("nav.navContainer").addClass("open");
      $("#menuContainer").addClass("open");
    }
  });

  $("#closeContainer").on("click", function() {
    if ($("#menuContainer").hasClass("open")) {
      $("#menuContainer").removeClass("open");
      $("#menuToggleContainer").removeClass("open");
      $("nav.navContainer").removeClass("open");
    }
  });
});
