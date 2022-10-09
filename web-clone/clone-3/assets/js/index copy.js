"use strict";
const $One = document.querySelector.bind(document);
const $All = document.querySelectorAll.bind(document);

// Functions
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= window.innerHeight || rect.bottom <= window.innerHeight
    // rect.top >= 0 &&
    // rect.left >= 0 &&
    // rect.bottom <=
    //   (window.innerHeight || document.documentElement.clientHeight) &&
    // rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleBanner() {
  const bannerLeft = $All("#banner .animation-left");
  bannerLeft.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add("fadeInAnimation");
    }
  });
  const bannerRight = $All("#banner .animation-right");
  bannerRight.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add("slideInRightAnimation");
    }
  });
}

// When scrool page
window.addEventListener("scroll", function (evt) {
  const path = document.location.pathname;
  const page = path.split("/").pop();
  // Event add/remove class in header
  if (page != "blog-item.html") {
    if (window.scrollY >= 12) {
      $One("#navbar").classList.add("displayBackground");
    } else {
      $One("#navbar").classList.remove("displayBackground");
    }
  }
  // Check banner is visible
  handleBanner();

  // Animation left
  const animationLeft = $All(".animation-left");
  animationLeft.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add("fadeInAnimation");
    }
  });

  // Animation right
  const animationRight = $All(".animation-right");
  animationRight.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add("slideInRightAnimation");
    }
  });

  // Animation In Up
  const solutionEle = $All(".animation-InUp");
  solutionEle.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add("fadeInUpAnimation");
    }
  });
});

// When page ready
document.onreadystatechange = function () {
  // banner
  if (document.readyState == "complete") {
    handleBanner();
  }
  // date time
  flatpickr("#filter-date", {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    disableMobile: "true",
  });
};

// handle links with @href started with '#' only
// $(document).on("click", 'a[href^="#"]', function (e) {
//   // target element id
//   var id = $(this).attr("href");

//   // target element
//   var $id = $(id);
//   if ($id.length === 0) {
//     return;
//   }

//   // prevent standard hash navigation (avoid blinking in IE)
//   e.preventDefault();

//   // top position relative to the document
//   var pos = $id.offset().top - 100;

//   // animated top scrolling
//   $("body, html").animate({ scrollTop: pos });
// });

// Slick
$("#related-blogs-slick").slick({
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
});

// SCRPIT IN EACH PAGE
const path = document.location.pathname;
const page = path.split("/").pop();
switch (page) {
  case "" || "index.html":
    // code block
    break;
  case y:
    // code block
    break;
  default:
  // code block
}
