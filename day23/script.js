function createElement(tagName, attributes, ...child) {
  const tag = document.createElement(tagName);
  Object.assign(tag, attributes);
  tag.append(...child);

  return tag;
}

// Run code after load page
$(function () {
  createrCarousel(0);
  createImageBox();
  // resize box
  const $boxResize = $(".box-resize");
  let resizeObserver = new ResizeObserver(() => {
    resizeBox($boxResize.width());
  });
  resizeObserver.observe($boxResize[0]);
});

// Carousel
const images = [
  {
    title: "Whiteside Mountain",
    link: "https://www.w3schools.com/howto/img_nature_wide.jpg",
  },
  {
    title: "Anpơ Mountain",
    link: "https://www.w3schools.com/howto/img_snow_wide.jpg",
  },
  {
    title: "Northern Lights",
    link: "https://www.w3schools.com/howto/img_lights_wide.jpg",
  },
  {
    title: "Lake Baikal",
    link: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
  },
  {
    title: "The Woods",
    link: "https://www.w3schools.com/howto/img_woods_wide.jpg",
  },
  {
    title: "Cinque Terre",
    link: "https://www.w3schools.com/howto/img_5terre_wide.jpg",
  },
];

function createrCarousel(index) {
  const $carousel = $("#carousel");
  $carousel.html("");
  $carousel.data("currIndex", index);

  $carousel.append([
    createElement("img", {
      className: "carousel-img",
      src: images[index].link,
      alt: images[index].title,
    }),
    createElement("h2", { className: "caption" }, images[index].title),
    `<div class="nav-carousel"></div>`,
    `<div class="prev-next slprev" onclick="controlCarousel(-1)">❮</div>
      <div class="prev-next slnext" onclick="controlCarousel(1)">❯</div>`,
  ]);

  for (let i = 0; i < images.length; ++i) {
    $(".nav-carousel").append(
      createElement("div", {
        className: "carousel-link",
        onclick: function () {
          createrCarousel(i);
        },
      })
    );
  }

  $(".carousel-link").each(function (itemIndex) {
    if (itemIndex === index) $(this).addClass("active");
  });
}

function controlCarousel(step) {
  const $carousel = $("#carousel");
  const currIndex = $carousel.data("currIndex");
  if (currIndex + step > images.length - 1) {
    createrCarousel(0);
  } else if (currIndex + step < 0) {
    createrCarousel(images.length - 1);
  } else {
    createrCarousel(currIndex + step);
  }
}

// Images galery
function createImageBox() {
  const $imagesBox = $("#images-galley");

  for (let i = 0; i < images.length; ++i) {
    $imagesBox.append(
      createElement("img", {
        className: "img-galley-item",
        src: images[i].link,
        alt: images[i].title,
        onclick: function () {
          createrCarousel(i);
        },
      })
    );
  }
}

// Sidebar Menu
function resizeBox(width) {
  const $nav = $(".nav");
  const $navLink = $(".nav-link");
  if (width >= 768) {
    // Desktop
    $nav.removeClass();
    $nav.addClass("nav desktop");
    $navLink.removeClass("text-center");
  } else if (width >= 600) {
    // tablet
    $nav.removeClass();
    $nav.addClass("nav tablet");
    $navLink.addClass("text-center");
  } else {
    // mobile
    $nav.removeClass();
    $nav.addClass("nav mobile");
    $navLink.addClass("text-center");
  }
}
