console.log("Yo");
console.clear();

let $window = $(window);

$window.scroll(function() {
  let scrollTop = $window.scrollTop();
  if (scrollTop >= 0 && scrollTop < 1400) {
    // console.log(scrollTop);
    $(".intro-slide__text > p").css({
      "margin-top": -scrollTop / 2.5 + 300 + "px"
    });
  }
});

// Screens Sectoin //
let displaysYears = ["m-2002-active", "m-2007-active", "m-2015-active"];
let monitorsBtns = [
  "#monitor-1997",
  "#monitor-2002",
  "#monitor-2007",
  "#monitor-2015"
];

monitorsBtns.map((item) => {
  $(item).click(function() {
    monitorsBtns.map((item, i) => {
      $(item)
        .children(".screens__slider__item__btn")
        .removeClass("screens__slider__item__btn_active");
      $(".screen-sizeinfo span").text("800x600px");
      $(".screen-wrap").removeClass(displaysYears[i]);
    });
    $(this)
      .children(".screens__slider__item__btn")
      .addClass("screens__slider__item__btn_active");

    if (item === "#monitor-2002") {
      $(".screen-wrap").addClass("m-2002-active");
      $(".screen-sizeinfo span").text("1024x768px");
    } else if (item === "#monitor-2007") {
      $(".screen-wrap").addClass("m-2007-active");
      $(".screen-sizeinfo span").text("1280x1024px");
    } else if (item === "#monitor-2015") {
      $(".screen-wrap").addClass("m-2015-active");
      $(".screen-sizeinfo span").text("1920x1080px");
    }
  });
});

///////////////////////////////////////////////////////////
//// ----------------- NEXT SECTION ----------------- /////
///////////////////////////////////////////////////////////

$(".tb-l__btn").click(function() {
  $(".tb-l__table").toggleClass("tb-l-borders");
});

///////////////////////////////////////////////////////////
//// ----------------- NEXT SECTION ----------------- /////
///////////////////////////////////////////////////////////

$(".sm-btnbox__btn").click(function() {
  $(".sm-btnbox__btn").removeClass("sm-btnbox__btn_active");
  $(".sm-tagscloud", ".sm-stickers").removeClass("sm-box-itemhide");
  $(this).addClass("sm-btnbox__btn_active");

  if ($(this).hasClass("sm-btns-btn")) {
    $(".sm-box__item").addClass("sm-box-itemhide");
    $(".sm-box__btns").removeClass("sm-box-itemhide");
  }

  if ($(this).hasClass("sm-stck-btn")) {
    $(".sm-box__item").addClass("sm-box-itemhide");
    $(".sm-stickers").removeClass("sm-box-itemhide");
  }

  if ($(this).hasClass("sm-tags-btn")) {
    $(".sm-box__item").addClass("sm-box-itemhide");
    $(".sm-tagscloud").removeClass("sm-box-itemhide");
  }
});

///////////////////////////////////////////////////////////
//// ----------------- NEXT SECTION ----------------- /////
///////////////////////////////////////////////////////////

$(".fl__logo").mouseover(function() {
  $(".fl__logo-glitch").css("opacity", "1");
  $(".fl__logo-normal").css("opacity", "0");
});

$(".fl__logo").mouseout(function() {
  console.log("sd");
  $(".fl__logo-glitch").css("opacity", "0");
  $(".fl__logo-normal").css("opacity", "1");
});

///////////////////////////////////////////////////////////
//// ----------------- NEXT SECTION ----------------- /////
///////////////////////////////////////////////////////////

$(".hmb__content__gallery a").click(function() {
  $(".lightbox img").attr("src", $(this).data("bigimage"));
  $("body").css("overflow", "hidden");
  $(".lightbox").show();
});

$(".lightbox").click(function() {
  $("body").css("overflow", "auto");
  $(this).hide();
});

///////////////////////////////////////////////////////////
//// ----------------- NEXT SECTION ----------------- /////
///////////////////////////////////////////////////////////

// vars
let retroBtn = $(".btg__btn");

// functions
$("#flare").change(function() {
  if ($(this).is(":checked")) {
    retroBtn
      .addClass("btg__flare")
      .removeClass("btg__flare2")
      .removeClass("btg__flare3");
  }
});

$("#flare2").change(function() {
  if ($(this).is(":checked")) {
    retroBtn
      .addClass("btg__flare2")
      .removeClass("btg__flare")
      .removeClass("btg__flare3");
  }
});

$("#flare3").change(function() {
  if ($(this).is(":checked")) {
    retroBtn
      .addClass("btg__flare3")
      .removeClass("btg__flare")
      .removeClass("btg__flare2");
  }
});

$("#flare-none").change(function() {
  if ($(this).is(":checked")) {
    retroBtn
      .removeClass("btg__flare")
      .removeClass("btg__flare2")
      .removeClass("btg__flare3");
  }
});

//
$("#inn-glow").click(function() {
  retroBtn.toggleClass("btg__glow");
});

//
$("#btn-volume").change(function() {
  if ($(this).is(":checked")) {
    retroBtn.addClass("btg__volume").removeClass("btg__invert-volume");
  }
});

$("#btn-invert-vol").change(function() {
  if ($(this).is(":checked")) {
    retroBtn.addClass("btg__invert-volume").removeClass("btg__volume");
  }
});

$("#btn-volume-none").change(function() {
  if ($(this).is(":checked")) {
    retroBtn.removeClass("btg__invert-volume").removeClass("btg__volume");
  }
});

//
$("#clr-picker").change(function() {
  retroBtn.css("background", $(this).val());
});

///////////////////////////////////////////////////////////
//// ----------------- NEXT SECTION ----------------- /////
///////////////////////////////////////////////////////////
