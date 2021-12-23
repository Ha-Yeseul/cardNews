$(document).ready(function () {
  var swiper = new Swiper(".Card", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });

  $("i").click(function (e) { 
    e.preventDefault();
    var attrI = $(this).attr("class");
    var idxI = attrI.indexOf("on");
    console.log("attr" + attrI);
    if (idxI == -1) {
      $(this).addClass("on");
      $(this).removeClass("off");
      console.log("on붙이기");
    }
    else{
      $(this).removeClass("on");
      $(this).siblings().addClass("on");
      $(this).addClass("off");
    }
  });
});