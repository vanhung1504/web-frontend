function createElement(tagName, attributes, ...child) {
  const tag = document.createElement(tagName);
  Object.assign(tag, attributes);
  tag.append(...child);

  return tag;
}

const createClock = () => {
  const $clock = $(".clock-box");

  for (let i = 1; i <= 60; ++i) {
    let line = createElement("div", {
      className: "line",
      style: `transform: rotate(${i * 6 - 6}deg) skewY(-84deg);`,
    });

    if (i % 5 === 0) {
      let hours = createElement(
        "div",
        {
          className: "hours-box",
        },
        createElement("span", { className: "hours-value" }, i / 5)
      );

      line.append(hours);
    }

    if (i % 5 === 1) {
      line.classList.add("border-none");
    }

    $clock.append(line);
  }
};

const changeSecond = () => {
  const $secondHand = $(".hand.second-hand");
  const d = new Date();
  const currSecond = d.getSeconds();
  $secondHand.css("transform", `rotate(${currSecond * 6}deg) translateX(-50%)`);
};

const changeMinute = () => {
  const $minHand = $(".hand.min-hand");
  const d = new Date();
  const currMinute = d.getMinutes() + d.getSeconds() / 60;
  $minHand.css("transform", `rotate(${currMinute * 6}deg) translateX(-50%)`);
};

const changeHour = () => {
  const $hourHand = $(".hand.hour-hand");
  const d = new Date();
  const currHour = d.getHours() + d.getMinutes() / 60 + d.getSeconds() / 3600;
  $hourHand.css("transform", `rotate(${currHour * 30}deg) translateX(-50%)`);
};

const digitalClock = () => {
  const d = new Date();
  let hour = d.getHours();
  hour = hour < 10 ? "0" + hour : hour;
  let min = d.getMinutes();
  min = min < 10 ? "0" + min : min;
  const $digitalClock = $(".digital-clock");
  $digitalClock.html(`${hour}<span class="separator">:</span>${min}`);
};

const runClockRuntime = () => {
  setInterval(() => {
    changeSecond();
    changeMinute();
    changeHour();
    digitalClock();
  }, 1000);
};

// Run code after load page
$(function () {
  createClock();
  changeSecond();
  changeMinute();
  changeHour();
  digitalClock();
  runClockRuntime();
});
