$(document).ready(function () {
  $(".card").click(function () {
    event.preventDefault();
    $(this).children("div:first").toggle();
  });
});