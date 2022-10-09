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

function getCurrentFileHtmlName() {
  const path = document.location.pathname;
  return path.split("/").pop();
}

function handleWhenScrollPage() {
  window.addEventListener("scroll", function (evt) {
    if (window.scrollY >= 12) {
      $One("#navbar").classList.add("displayBackground");
    } else {
      $One("#navbar").classList.remove("displayBackground");
    }

    animationHomePage();
  });
}

function animationHomePage() {
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

function dateTimePicker() {
  flatpickr("#filter-date", {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    disableMobile: "true",
  });
}

function slickCarousel() {
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
}

function tooltips() {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
}

function forModal(
  btnToggle,
  modalID,
  type,
  title,
  content,
  timeClose = 0,
  redirectPath
) {
  // Show modal
  const $btnToggle = $(btnToggle);
  $btnToggle.click();

  const $modalID = $(modalID);
  // Header
  const $modalHeader = $($modalID).find(".modal-header");
  $($modalHeader).find("i").css({ display: "none" });
  $($modalHeader).find(type).css({ display: "block" });
  $($modalHeader).find(".title").text(title);

  // Content
  const $modalBody = $($modalID).find(".modal-body");
  $($modalBody).text(content);

  // Click to close
  const $btnClose = $($modalID).find(".btn-confirm");
  $btnClose.on("click", function () {
    if (redirectPath) {
      document.location.href = redirectPath;
    }
  });

  // Auto close
  if (timeClose > 0) {
    setTimeout(() => {
      $btnToggle.click();
      if (redirectPath) {
        document.location.href = redirectPath;
      }
    }, timeClose);
  }
}

function signin() {
  const $btnSignin = $("#btnSignin");
  const $spinner = $("#btnSignin i");

  let inputArr = ["#txtUsername", "#txtPassword"];

  inputArr.forEach((item) => {
    const itemEle = $(item);

    itemEle.on("click", function () {
      itemEle.next().css({ display: "none" });
    });
  });

  $btnSignin.on("click", function (e) {
    e.preventDefault();

    let isValid = true;

    inputArr.forEach((item) => {
      const itemEle = $(item);

      if (itemEle.val().trim() === "") {
        itemEle.next().css({ display: "block" });
        isValid = false;
      }
    });

    if (isValid) {
      const $username = $("#txtUsername").val().trim();
      const $password = $("#txtPassword").val().trim();

      $($btnSignin).prop("disabled", true);
      $spinner.removeClass("d-none");

      axios
        .post(
          "https://todo-api-with-auth.herokuapp.com/api/auth/signin",
          {
            username: String($username),
            password: String($password),
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (res) {
          if (res.status === 200) {
            localStorage.setItem(
              "HEROKUAPP_TOKEN",
              JSON.stringify(res.headers.authorization)
            );

            document.location.href = "./";
          }
        })
        .catch(function (error) {
          const message = error.response.data.error;

          forModal(
            "#btnToggleModal",
            "#myModal",
            ".error",
            "Error!",
            message,
            0
          );
        })
        .finally(() => {
          $($btnSignin).prop("disabled", false);
          $spinner.addClass("d-none");
        });
    }
  });
}

function signup() {
  const $btnSignup = $("#btnSignup");
  const $spinner = $("#btnSignup i");
  const $ckbAgree = $("#ckbAgree");

  if ($ckbAgree.is(":checked")) {
    $($btnSignup).prop("disabled", false);
    $($btnSignup).removeClass("disabled");
  } else {
    $($btnSignup).prop("disabled", true);
    $($btnSignup).addClass("disabled");
  }

  $ckbAgree.change(function () {
    if ($(this).is(":checked")) {
      $($btnSignup).prop("disabled", false);
      $($btnSignup).removeClass("disabled");
    } else {
      $($btnSignup).prop("disabled", true);
      $($btnSignup).addClass("disabled");
    }
  });

  let inputArr = [
    "#txtFirstname",
    "#txtLastname",
    "#txtUsername",
    "#txtPassword",
  ];

  inputArr.forEach((item) => {
    const itemEle = $(item);

    itemEle.on("input", function () {
      $(".tooltip").removeClass("show");
    });

    itemEle.on("click", function () {
      $(".tooltip").removeClass("show");
      itemEle.next().css({ display: "none" });
    });
  });

  $btnSignup.on("click", function (e) {
    e.preventDefault();

    let isValid = true;

    inputArr.forEach((item) => {
      const itemEle = $(item);

      if (itemEle.val().trim() === "") {
        itemEle.next().css({ display: "block" });
        isValid = false;
      }
    });

    if (isValid) {
      const $firstname = $("#txtFirstname").val().trim();
      const $lastname = $("#txtLastname").val().trim();
      const $username = $("#txtUsername").val().trim();
      const $password = $("#txtPassword").val().trim();

      $($btnSignup).prop("disabled", true);
      $spinner.removeClass("d-none");

      axios
        .post(
          "https://todo-api-with-auth.herokuapp.com/api/auth/signup",
          {
            username: String($username),
            password: String($password),
            firstname: String($firstname),
            lastname: String($lastname),
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (res) {
          if (res.status === 201) {
            localStorage.setItem(
              "HEROKUAPP_TOKEN",
              JSON.stringify(res.headers.authorization)
            );

            forModal(
              "#btnToggleModal",
              "#myModal",
              ".info",
              "Success!",
              "Đăng ký thành công. Đang chuyển hướng đến trang chủ...",
              3000,
              "./"
            );
          }
        })
        .catch(function (error) {
          const message = error.response.data.error;

          forModal(
            "#btnToggleModal",
            "#myModal",
            ".error",
            "Error!",
            message,
            0
          );
        })
        .finally(() => {
          $($btnSignup).prop("disabled", false);
          $spinner.addClass("d-none");
        });
    }
  });
}

function isUserSignin() {
  return axios
    .get("https://todo-api-with-auth.herokuapp.com/api/auth/user", {
      headers: {
        Authorization: JSON.parse(localStorage.getItem("HEROKUAPP_TOKEN")),
      },
    })
    .then(function (res) {
      if (res.status === 200) {
        localStorage.setItem(
          "HEROKUAPP_USER_INFO",
          JSON.stringify(res.data.data)
        );
        return true;
      }
    })
    .catch(function (error) {
      window.localStorage.removeItem("HEROKUAPP_TOKEN");
      return false;
    });
}

async function showHideUser() {
  const isSignin = await isUserSignin().then(function (isSignin) {
    return isSignin;
  });

  const $navBtn = $("#navbar .nav-btn");
  const $navUser = $("#navbar .nav-user");

  if (isSignin) {
    $navBtn.addClass("d-none");
    $navUser.removeClass("d-none");

    const userInfo = JSON.parse(localStorage.getItem("HEROKUAPP_USER_INFO"));

    $navUser
      .find(".user-avatar img")
      .attr(
        "src",
        "https://todo-api-with-auth.herokuapp.com" + userInfo.avatar
      );

    $navUser
      .find(".fullname")
      .text(`${userInfo.firstname} ${userInfo.lastname}`);

    $navUser.find(".btn-signout").on("click", function () {
      window.localStorage.removeItem("HEROKUAPP_TOKEN");
      document.location.href = "./signin.html";
    });
  } else {
    $navUser.addClass("d-none");
    $navBtn.removeClass("d-none");
  }
}

function calendar() {
  const newMonth = document.getElementById("cal__month");
  const dateDisplay = document.getElementById("cal__date");
  const allDates = document.getElementById("cal__days");
  const prevBtn = document.getElementById("back__arrow");
  const nxtBtn = document.getElementById("next__arrow");
  const timeDisplay = document.getElementById("cal__time");

  const date = new Date();

  // Current Date Display
  const currentDate = () => {
    const twelveMonths = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const sevenDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date__weekDay = sevenDays[date.getDay()];
    const date__day = date.getDate();
    const date__year = date.getFullYear();

    newMonth.innerHTML = twelveMonths[date.getMonth()];
    dateDisplay.innerHTML = `${date__weekDay} ${date__day}, ${date__year}`;
  };
  currentDate();

  // Current Time Display
  const showTime = () => {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let am_pm = "AM";
    if (hour > 12) {
      hour -= 12;
      am_pm = "PM";
    }
    if (hour == 0) {
      hour = 12;
      am_pm = "AM";
    }
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    let currentTime = `${hour}:${min} ${am_pm}`;
    timeDisplay.innerHTML = currentTime;
  };
  setInterval(showTime(), 1000);

  // Generating Dates per Month
  const glassCalendar = () => {
    currentDate();

    let days = "";
    let lastDay =
      32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate();
    const emptyDates = date.getDay();

    // For lopp to iterates empty spot where there's no date.
    for (let x = emptyDates; x > 0; x--) {
      days += `<span></span>`;
    }

    // For lopp to iterates through month to generate days & today's date.
    for (let i = 1; i <= lastDay; i++) {
      if (
        i === new Date().getDate() &&
        date.getMonth() === new Date().getMonth()
      ) {
        days += `<span class="today">${i}</span>`;
      } else {
        days += `<span>${i}</span>`;
      }

      allDates.innerHTML = days;
    }
  };
  glassCalendar();

  // Added event listener to buttons for
  prevBtn.addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    glassCalendar();
  });

  nxtBtn.addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    glassCalendar();
  });
}

function displayChart() {
  const arrData = [
    {
      id: 1,
      name: "Glucose",
      unit: "mmol/l",
      value: [5.2, 3.52, 6.55, 4.8, 4.5, 5.2, 4.1, 5.6, 4.5],
      time: [
        "2022-01-15",
        "2022-02-10",
        "2022-03-12",
        "2022-04-15",
        "2022-05-15",
        "2022-06-14",
        "2022-07-15",
        "2022-08-14",
        "2022-09-15",
      ],
      xAxesBeginAtZero: true,
      yAxesBeginAtZero: true,
    },
    {
      id: 2,
      name: "Cholesterol",
      unit: "mmol/l",
      value: [2.2, 4.8, 3.1, 2.8, 3.6, 3.6, 4.8, 4.3, 5],
      time: [
        "2022-01-15",
        "2022-02-10",
        "2022-03-12",
        "2022-04-15",
        "2022-05-15",
        "2022-06-14",
        "2022-07-15",
        "2022-08-14",
        "2022-09-15",
      ],
      xAxesBeginAtZero: true,
      yAxesBeginAtZero: true,
    },
    {
      id: 3,
      name: "Acid uric",
      unit: "umol/l",
      value: [450, 615, 518, 603, 495, 317, 402, 388, 360],
      time: [
        "2022-01-15",
        "2022-02-10",
        "2022-03-12",
        "2022-04-15",
        "2022-05-15",
        "2022-06-14",
        "2022-07-15",
        "2022-08-14",
        "2022-09-15",
      ],
      xAxesBeginAtZero: true,
      yAxesBeginAtZero: true,
    },
    {
      id: 4,
      name: "Hemoglobin",
      unit: "g/l",
      value: [160, 158, 158, 161, 155, 159, 160, 158, 156],
      time: [
        "2022-01-15",
        "2022-02-10",
        "2022-03-12",
        "2022-04-15",
        "2022-05-15",
        "2022-06-14",
        "2022-07-15",
        "2022-08-14",
        "2022-09-15",
      ],
      xAxesBeginAtZero: true,
      yAxesBeginAtZero: true,
    },
  ];

  function renderChart(dataObj = {}) {
    var data = {
      datasets: [
        {
          backgroundColor: "rgb(156, 39, 176)",
          borderColor: "rgb(156, 39, 176)",
          fill: false,
          data: dataObj.value,
          id: dataObj.id,
          label: `${dataObj.name} (${dataObj.unit})`,
          yAxisID: "left",
        },
      ],
      labels: dataObj.time,
    };
    var options = {
      elements: {
        rectangle: {
          borderWidth: 2,
        },
      },
      layout: {
        padding: 0,
      },
      legend: {
        display: false,
        labels: {
          boxWidth: 16,
        },
      },
      maintainAspectRatio: false,
      responsive: true,
      scales: {
        xAxes: [
          {
            gridLines: {
              display: true,
            },
            scaleLabel: {
              display: true,
              labelString: "Date",
            },
            stacked: false,
            ticks: {
              autoSkip: true,
              beginAtZero: true,
            },
            time: {
              // tooltipFormat: "[Q]Q - YYYY",
              tooltipFormat: "YYYY-MM-DD",
              // unit: "day",
            },
            type: "time",
          },
        ],
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: `${dataObj.name} (${dataObj.unit})`,
            },
            id: "left",
            stacked: false,
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
      title: {
        display: false,
      },
      tooltips: {
        intersect: false,
        mode: "index",
        position: "nearest",
        callbacks: {},
      },
    };
    var type = "line";

    var myChartEle = document.getElementById("myChart");

    myChartEle.removeAttribute("width");
    myChartEle.removeAttribute("height");

    var myChart = new Chart(myChartEle.getContext("2d"), {
      options,
      data,
      type,
    });
  }

  function handleSelect(selectValue) {
    // Reset canvas
    $("#myChart").remove(); // this is my <canvas> element
    $("#canvasParent").append('<canvas id="myChart"><canvas>');

    // Loop to render
    arrData.forEach(function (item, index) {
      if (item.id === selectValue) {
        renderChart(arrData[index]);
      }
    });
  }

  const $selectEle = $("#chart-value-select");
  let $selectValue = Number($selectEle.val());

  // First init
  handleSelect($selectValue);

  // Onchange
  $selectEle.on("change", function (e) {
    $selectValue = Number(e.target.value);
    handleSelect($selectValue);
  });
}

function toggleUserSidebar() {
  const $btnOpen = $("#btn-open-left-box");
  const $btnClose = $("#btn-close-left-box");
  const $sidebar = $(".user-box .left-box");

  function showOrHide(isShow) {
    if (isShow) {
      $btnClose.addClass("show");
      $sidebar.addClass("show");
    } else {
      $btnClose.removeClass("show");
      $sidebar.removeClass("show");
    }
  }

  $btnOpen.on("click", function () {
    const isShowed = $sidebar.hasClass("show");
    if (isShowed) {
      showOrHide(false);
    } else {
      showOrHide(true);
    }
  });

  $btnClose.on("click", function () {
    showOrHide(false);
  });
}

// When page ready
document.onreadystatechange = function () {
  // SCRPIT IN EACH PAGE
  const page = getCurrentFileHtmlName();
  switch (page) {
    case "":
    case "index.html":
      showHideUser();
      handleWhenScrollPage();
      handleBanner();
      dateTimePicker();
      break;
    case "blogs.html":
      showHideUser();
      handleWhenScrollPage();
      break;
    case "blog-item.html":
      showHideUser();
      slickCarousel();
      break;
    case "signup.html":
      tooltips();
      signup();
      break;
    case "signin.html":
      signin();
      break;
    case "user.html":
      showHideUser();
      calendar();
      handleWhenScrollPage();
      displayChart();
      toggleUserSidebar();
      break;
    default:
    // Do nothing
  }
};
