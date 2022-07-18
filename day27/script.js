"use strict";

function onHomepage() {
  if (localStorage.getItem("HEROKUAPP_TOKEN") === null) {
    alert("Bạn chưa đăng nhập. Vui lòng đăng nhập trước!");
    document.location.href = "./signin.html";
  } else {
    fetch("https://todo-api-with-auth.herokuapp.com/api/auth/user", {
      method: "GET",
      headers: {
        Authorization: JSON.parse(localStorage.getItem("HEROKUAPP_TOKEN")),
        Accept: "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          res.json().then((data) => {
            const $imgAvatar = $(".avatar");
            const $fullname = $(".fullname");
            $($imgAvatar).attr("src", data.data.avatar);
            $($imgAvatar).attr(
              "alt",
              data.data.lastname + " " + data.data.firstname
            );

            $fullname.text(data.data.lastname + " " + data.data.firstname);
          });
        } else {
          const err = new Error("HTTP status code " + res.status);
          throw err;
        }
      })
      .catch((error) => {
        alert(error);
      });
  }
}

function signin() {
  // When click sign in
  const $btnLogin = $("#btn-signin");

  $btnLogin.on("click", function (e) {
    e.preventDefault();

    const $username = $("#username").val().trim();
    const $password = $("#password").val().trim();

    if (String($username) != "" && String($password) != "") {
      $($btnLogin).prop("disabled", true);

      fetch("https://todo-api-with-auth.herokuapp.com/api/auth/signin", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: $username,
          password: $password,
        }),
      })
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem(
              "HEROKUAPP_TOKEN",
              JSON.stringify(res.headers.get("Authorization"))
            );

            alert("Đăng nhập thành công. Đang chuyển đến Trang chủ.");

            document.location.href = "./index.html";
          } else {
            res.json().then((data) => {
              alert(data.error);
            });
          }
        })
        .finally(() => {
          $($btnLogin).prop("disabled", false);
        });
    } else {
      alert("Bạn phải nhập cả username và password!");
    }
  });

  // When redirect page
  const $btnHomepage = $("#btn-home-page");
  $btnHomepage.on("click", function (e) {
    e.preventDefault();
    document.location.href = "./index.html";
  });

  const $btnSignup = $("#btn-signup");
  $btnSignup.on("click", function (e) {
    e.preventDefault();
    document.location.href = "./signup.html";
  });
}

function signup() {
  // When click sign up
  const $btnSignup = $("#btn-signup");

  $btnSignup.on("click", function (e) {
    e.preventDefault();

    const $firstname = $("#firstname").val().trim();
    const $lastname = $("#lastname").val().trim();
    const $username = $("#username").val().trim();
    const $password = $("#password").val().trim();
    const $passConfirm = $("#password-confirm").val().trim();

    if (
      String($firstname) === "" ||
      String($lastname) === "" ||
      String($username) === "" ||
      String($password) === "" ||
      String($passConfirm) === ""
    ) {
      alert("Bạn phải nhập tất cả các trường!");
    } else if (String($password) != String($passConfirm)) {
      alert("Mật khẩu không khớp");
    } else {
      $($btnSignup).prop("disabled", true);

      fetch("https://todo-api-with-auth.herokuapp.com/api/auth/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: String($username),
          password: String($password),
          firstname: String($firstname),
          lastname: String($lastname),
        }),
      })
        .then((res) => {
          if (res.status === 201) {
            localStorage.setItem(
              "HEROKUAPP_TOKEN",
              JSON.stringify(res.headers.get("Authorization"))
            );
            alert("Đăng ký thành công. Đang chuyển đến Trang chủ.");
            document.location.href = "./index.html";
          } else {
            res.json().then((data) => {
              alert(data.error);
            });
          }
        })
        .finally(() => {
          $($btnSignup).prop("disabled", false);
        });
    }
  });

  // When redirect page
  const $btnHomepage = $("#btn-home-page");
  $btnHomepage.on("click", function (e) {
    e.preventDefault();
    document.location.href = "./index.html";
  });

  const $btnSignin = $("#btn-signin");
  $btnSignin.on("click", function (e) {
    e.preventDefault();
    document.location.href = "./signin.html";
  });
}

// Run code after load page
$(function () {
  const path = document.location.pathname;
  const page = path.split("/").pop();

  if (page === "" || page === "index.html") {
    onHomepage();
  } else if (page === "signin.html") {
    signin();
  } else if (page === "signup.html") {
    signup();
  }
});
