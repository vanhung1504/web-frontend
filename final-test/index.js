function toggleModalImages(element) {
  var myElement = document.querySelector("#Images .modal-images");
  if (myElement.classList.contains("d-none")) {
    //   Hien modal
    myElement.classList.remove("d-none");

    // Set lai src Modal
    var currEleSelectSrc = element
      .querySelector(".img-img")
      .getAttribute("src");
    myElement
      .querySelector(".modal-images-img")
      .setAttribute("src", currEleSelectSrc);
  } else {
    myElement.classList.add("d-none");
  }
}

function controlSlider(element) {
  var myElement = document.querySelector("#Slider .slider-content");

  var eleSliderInfoStatus = myElement.querySelector(".slider-info-status");
  var eleSliderInfoTitle = myElement.querySelector(".slider-info-title");
  var eleSliderInfoLink = myElement.querySelector(".slider-info-link");

  var currBgImage = myElement.querySelector(".slider-main-box");
  var style = window.getComputedStyle(currBgImage);
  var bgImg = style.getPropertyValue("background-image");

  if (
    bgImg ===
    'url("https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd90a8aef82dc5918248baa_cushion.jpg")'
  ) {
    currBgImage.style.setProperty(
      "background-image",
      'url("https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8a753b7abc549d52f2255_noah-buscher-1118080-unsplash.jpg")'
    );

    eleSliderInfoStatus.innerHTML = "ABOUT ME";
    eleSliderInfoTitle.innerHTML = "I'm a trendy Cushion Designer";
    eleSliderInfoLink.innerHTML = "LEARN MORE";
    eleSliderInfoLink.setAttribute("href", "#About");
  } else {
    currBgImage.style.setProperty(
      "background-image",
      'url("https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd90a8aef82dc5918248baa_cushion.jpg")'
    );

    eleSliderInfoStatus.innerHTML = "NEW";
    eleSliderInfoTitle.innerHTML = "Spring Cushion Collection 2019";
    eleSliderInfoLink.innerHTML = "BUY NOW";
    eleSliderInfoLink.setAttribute("href", "#Before-products");
  }
}
