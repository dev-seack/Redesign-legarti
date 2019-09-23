$(document).ready(function() {
  let docHeight = $(document).height(); // 100%
  let winHeight = $(window).height(); // offset
  let scrollDest = docHeight - winHeight; // real destination to scroll to

  // custom scrollbar functionality
  var scrollProgress = Math.floor(($(document).scrollTop() / scrollDest) * 100);

  $("#customScrollbar").css({ height: scrollProgress + "vh" });

  $(document).on("scroll", function() {
    var scrollProgress = Math.floor(
      ($(document).scrollTop() / scrollDest) * 100
    );

    $("#customScrollbar").css({ height: scrollProgress + "vh" });
  });

  // open menu
  $("#menuToggleContainer").on("click", function() {
    openMenu();
  });

  // close menu
  $("#closeContainer").on("click", function() {
    closeMenu();
  });

  // close menu - alternative UX
  $(".toggleMenuOverlay").on("click", function() {
    closeMenu();
  });
});

function openMenu() {
  if (!$(this).hasClass("open")) {
    $(this).addClass("open").$;
    $("nav.navContainer").addClass("open");
    $(".toggleMenuOverlay").addClass("open");
    $("#menuContainer").addClass("open");
  }
}

function closeMenu() {
  if ($("#menuContainer").hasClass("open")) {
    $("#menuContainer").removeClass("open");
    $("#menuToggleContainer").removeClass("open");
    $(".toggleMenuOverlay").removeClass("open");
    $("nav.navContainer").removeClass("open");
  }
}
