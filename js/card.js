document.addEventListener("DOMContentLoaded", function () {
  var $scope = $(".tg-scope");
  var $carousel = $scope.find(".custom-carousel");

  if ($carousel.length) {
    $carousel.owlCarousel({
      autoWidth: true,
      loop: true,
      dots: true
    });

    $scope.on("click", ".item", function () {
      $scope.find(".item").not(this).removeClass("active");
      $(this).toggleClass("active");
    });
  }
});

