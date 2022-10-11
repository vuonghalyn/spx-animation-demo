function playAnimation() {
  var tl = anime.timeline({
    easing: "easeOutExpo",
    duration: 2000,
  });

  tl.add({
    targets: ".animation-container",
    translateX: 50,
    duration: 1000,
    loop: true,
  })
    .add(
      {
        targets: ".bar-wrapper",
        width: "50vw",
        duration: 2000,
        loop: true,
      },
      "-=600"
    )
    .add(
      {
        targets: ".bar",
        width: "98%",
        duration: 1000,
        delay: 400,
        loop: true,
      },
      400
    )
    .add(
      {
        targets: ".bar__text",
        opacity: "1",
        translateY: "30%",
        duration: 400,
        delay: 400,
        loop: true,
      },
      800
    );
}

function stopAnimation() {
  var tl = anime.timeline({
    easing: "easeOutExpo",
    duration: 2000,
  });

  tl.add({
    targets: ".bar",
    width: "90%",
    duration: 1400,
    loop: true,
  })
    .add(
      {
        targets: ".animation-container",
        translateX: 100,
        duration: 1600,
        loop: true,
      },
      0
    )
    .add(
      {
        targets: ".bar-conceal",
        width: "100%",
        duration: 1600,
        loop: true,
      },
      0
    );
}

var playBtn = document.querySelector(".start");

playBtn.addEventListener("click", () => {
  playAnimation();
});

var updateBtn = document.querySelector(".update");
var textEl = document.querySelector(".bar__text");

updateBtn.addEventListener("click", () => {
  textEl.textContent = "Updated";
});

var stopBtn = document.querySelector(".stop");

stopBtn.addEventListener("click", () => {
  document.querySelector(".animation-container").style.transformOrigin =
    "right";
  stopAnimation();
});
