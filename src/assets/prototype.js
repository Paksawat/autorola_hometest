// rotating star on favorite
jQuery(document).ready(function () {
  // Favorite icon
  $(function () {
    "use strict";
    $(".favorite").click(function () {
      $(this).toggleClass("checked fa-rotate-90");
    });
  });
});
