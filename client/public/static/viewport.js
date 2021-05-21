function displaySize() {
  $("#js-width").text(window.innerWidth);
  $("#js-height").text(window.innerHeight);
}

$(function () {
  displaySize();

  $(window).resize(function () {
    displaySize();
  });
});
