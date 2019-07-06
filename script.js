$(document).ready(function() {
  var lenghtOfItems = $(".slideWrapper > ul > li").length - 1;
  var slideCounter = 0;
  var slideDuration = 5000;
  for (var i = 0; i < lenghtOfItems + 1; i++) {
    if (i == 0) {
      $(".dot_wrapper").append(
        "<div class='dot active_dot' item='" + i + "'></div>"
      );
    } else {
      $(".dot_wrapper").append("<div class='dot' item='" + i + "'></div>");
    }
  }

  $(".prevSlideButton").on("click", function() {
    prevSlide();
  });
  $(".nextSlideButton").on("click", function() {
    nextSlide();
  });

  function prevSlide() {
    slideCounter--;
    if (slideCounter < 0) {
      slideCounter = lenghtOfItems;
    }

    displaySlideItem(slideCounter);
  }
  function nextSlide() {
    slideCounter++;
    if (slideCounter > lenghtOfItems) {
      slideCounter = 0;
    }

    displaySlideItem(slideCounter);
  }

  function displaySlideItem(n) {
    $(".slideWrapper > ul > li").css({ display: "none" });
    $(".slideWrapper > ul > li")
      .eq(n)
      .fadeIn("fast");
  }

  $(".dot").each(function() {
    $(this).on("click", function() {
      var itemNumber = $(this).attr("item");
      slideCounter = itemNumber;
      displaySlideItem(itemNumber);
    });
  });

});
