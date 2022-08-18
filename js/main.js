/// <reference path="../typings/globals/jquery/index.d.ts" />
// --------------- When Scroll
const offsetSection = $(".about").offset().top;
const statics = document.querySelector(".statics");
const counterElement = document.querySelectorAll("p[data-num]");
let isrun = true;
$(window).scroll(function () {
   const offsetTop = $(window).scrollTop();
   const allSection = $("section");
   if (offsetTop > offsetSection - 50) {
      $(".navbar").css("backgroundColor", "rgb(0 0 0 / 90%)"); // -------Nav Bar
      $("#btnUp").fadeIn(1000); // -------BtnUp
   } else {
      $(".navbar").css("backgroundColor", "transparent"); // -------Nav Bar
      $("#btnUp").fadeOut(1000); // -------BtnUp
   }
   // NavBar Chang When Scroll Change Color
   for (let i = 0; i < allSection.length; i++) {
      const curentOffset = allSection.eq(i).offset().top;
      let curentSection;
      if (
         offsetTop >= curentOffset - 200 &&
         allSection.eq(i).attr("id") != undefined
      ) {
         $(".nav-item .active").removeClass("active");
         curentSection = allSection.eq(i).attr("id");
         const curentNavHref = $(".nav-link").eq(i).attr("href");
         if (curentNavHref.includes(curentSection)) {
            $(".nav-link").eq(i).addClass("active");
         }
      }
   }
   // ----------- Circle
   if (offsetTop > $(".skils").offset().top - 200) {
      for (let i = 0; i < $(".progress-cir").length; i++) {
         $(".progress-cir")
            .eq(i)
            .circleProgress({
               max: 100,
               value: $(".progress-cir").eq(i).attr("data-value"),
               textFormat: "percent",
               animationDuration: 3000,
            });
      }
   }

   // ------------ scetion statics
   if (offsetTop > statics.offsetTop - 200) {
      if (isrun) {
         isrun = false;
         counterElement.forEach((item) => {
            const setCounterInter = setInterval(() => {
               item.innerHTML++;
               if (item.innerHTML > 3000) {
                  item.innerHTML = item.getAttribute("data-num");
               }
               if (item.innerHTML == item.getAttribute("data-num")) {
                  clearInterval(setCounterInter);
               }
            }, 5);
         });
      }
   }
});
// --------------- nav chang active and scroll to section when click
$(".nav-link").click(function () {
   // $(".nav-item .active").removeClass("active");
   // $(this).addClass("active");
   const curentHref = $(this).attr("href");
   const offsetSection = $(curentHref).offset()?.top;
   $("html,body").animate(
      {
         scrollTop: offsetSection,
      },
      1000
   );
});
// --------------- portfolio item active
$("menu button").click(function () {
   $("menu .active").removeClass("active");
   $(this).addClass("active");
});
// --------------- btnUP
$("#btnUp").on("click", function () {
   $("html,body").animate(
      {
         scrollTop: 0,
      },
      1000,
      "linear"
   );
});
/// ---------- go down
document.getElementById("goDown").addEventListener("click", function () {
   document.getElementById("about").scrollIntoView({
      behavior: "smooth",
   });
});
// -------------- date
const date = new Date();
document.getElementById("date").innerHTML = date.getFullYear();
// --------------- color Box
const optionsColor = $(".options li");
const color = [
   "#ff206e",
   "#f44336",
   "#e91e63",
   "#009688",
   "#ff9800",
   "#607d8b",
];
const options = $(".options");
for (let i = 0; i < optionsColor.length; i++) {
   optionsColor.eq(i).css("background-color", `${color[i]}`);
}
$("#showColor").click(function () {
   if (options.css("left") === "0px") {
      options.animate(
         {
            left: -239,
         },
         500
      );
   } else {
      options.animate(
         {
            left: 0,
         },
         500
      );
   }
});
optionsColor.click(function () {
   const curentColor = $(this).css("background-color");
   console.log(
      $(document.documentElement).css("--main-color", `${curentColor}`)
   );
});
let timeOut;
options.mouseleave(function () {
   timeOut = setTimeout(() => {
      options.animate(
         {
            left: -239,
         },
         500
      );
   }, 2000);
});
options.mouseenter(() => {
   clearTimeout(timeOut);
});
// --------------- Mixi Olugin
const containerEl = document.querySelector(".container-mix");
const mixer = mixitup(containerEl);
// --------------- Owl Carsour Plugin
$(document).ready(function () {
   $(".owl-1").owlCarousel({
      autoplay: true,
      autoplayTimeout: 4000,
      margin: 20,
      loop: true,

      responsive: {
         0: {
            items: 1,
         },
         768: {
            items: 2,
         },
         1000: {
            items: 3,
         },
      },
   });
   $(".owl-2").owlCarousel({
      loop: true,
      items: 1,
      margin: 20,
      autoplayTimeout: 4000,
   });
   $(".owl-3").owlCarousel({
      loop: true,
      margin: 20,
      autoplayTimeout: 4000,
      responsive: {
         0: {
            items: 1,
         },
         768: {
            items: 2,
         },
         1000: {
            items: 3,
         },
      },
   });
   $(".loader")
      .children()
      .fadeOut(1000, () => {
         $(".loader").slideUp(1000, () => {
            $("body").css("overflow-y", "visible");
         });
      });
});

// ----------- Circle
$(".progress-cir").circleProgress({
   max: 100,
   value: 0,
   textFormat: "percent",
   animationDuration: 2000,
});
