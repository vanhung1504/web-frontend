var $messages = $(".messages-content"),
  d,
  h,
  m,
  i = 0;

var messagesHeight;
var mCSB_containerHeight;

$(window).load(function () {
  showHideChatbox();
});

function showHideChatbox() {
  const $chatbox = $("#chatbox");
  const $cbIcon = $($chatbox).find(".cb-icon");
  const $cbBtnClose = $($chatbox).find(".btn-close");
  const $avenueMessenger = $($chatbox).find(".avenue-messenger");
  // Event close chatbox
  $cbBtnClose.on("click", function () {
    hideChatbox();
  });
  // Event click icon chatbox
  $cbIcon.on("click", function (e) {
    //  scroll to bottom
    if (mCSB_containerHeight > messagesHeight) {
      $($chatbox)
        .find(".mCSB_container")
        .css("top", messagesHeight - mCSB_containerHeight);
    }
    // Show/Hide chat box
    let currCSSDisplay = $avenueMessenger.css("display");
    if (currCSSDisplay === "none") {
      showChatbox();
    } else {
      hideChatbox();
    }
  });

  function showChatbox() {
    $messNew = $($avenueMessenger).find(".message.new");
    if ($messNew.length === 0) {
      $messages.mCustomScrollbar();
      setTimeout(function () {
        fakeMessage();
      }, 100);
    }
    $avenueMessenger.css("display", "block");
    $($avenueMessenger).find(".message-input").focus();
  }

  function hideChatbox() {
    messagesHeight = $messages.height();
    mCSB_containerHeight = $($chatbox).find(".mCSB_container").height();
    $avenueMessenger.css("display", "none");
  }
}

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar("scrollTo", "bottom", {
    scrollInertia: 10,
    timeout: 0,
  });
}

function setDate() {
  d = new Date();
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ":" + m + "</div>").appendTo(
      $(".message:last")
    );
    $('<div class="checkmark-sent-delivered">&check;</div>').appendTo(
      $(".message:last")
    );
    $('<div class="checkmark-read">&check;</div>').appendTo($(".message:last"));
  }
}

function insertMessage() {
  msg = $(".message-input").val();
  if ($.trim(msg) == "") {
    return false;
  }
  $('<div class="message message-personal">' + msg + "</div>")
    .appendTo($(".mCSB_container"))
    .addClass("new");
  setDate();
  $(".message-input").val(null);
  $(".message-input").focus();
  updateScrollbar();
  setTimeout(function () {
    fakeMessage();
  }, 1000 + Math.random() * 20 * 100);
}

$(".message-submit").click(function () {
  insertMessage();
});

$(window).on("keydown", function (e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
});

var Fake = [
  "Hi there, I'm Hùng and you?",
  "Nice to meet you",
  "How are you?",
  "Not too bad, thanks",
  "What do you do?",
  "That's awesome",
  "Doccure is a nice place to stay",
  "I think you're a nice person",
  "Why do you think that?",
  "Can you explain?",
  "Anyway I've gotta go now",
  "It was a pleasure chat with you",
  "Time to make a new codepen",
  "Bye",
  ":)",
];

function fakeMessage() {
  if ($(".message-input").val() != "") {
    return false;
  }
  $(
    '<div class="message loading new"><figure class="avatar"><img src="./assets/images/banner/doctor.png" /></figure><span></span></div>'
  ).appendTo($(".mCSB_container"));
  updateScrollbar();

  setTimeout(function () {
    $(".message.loading").remove();
    $(
      '<div class="message new"><figure class="avatar"><img src="./assets/images/banner/doctor.png" /></figure>' +
        Fake[i] +
        "</div>"
    )
      .appendTo($(".mCSB_container"))
      .addClass("new");
    setDate();
    updateScrollbar();
    i++;
  }, 1000 + Math.random() * 20 * 100);
}

$(".button").click(function () {
  $(".menu .items span").toggleClass("active");
  $(".menu .button").toggleClass("active");
});
