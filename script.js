let clock = document.getElementById("clock");

console.log(clock.offsetHeight);

setInterval(() => {
  const time = new Date();

  clock.innerHTML = "";

  let radius = 150;

  for (let index = 0; index < radius; index += 15) {
    let number = document.createElement("span");
    number.innerHTML = time.getSeconds();
    number.style.top =
      clock.offsetHeight / 2 -
      index * Math.sin(toRadians(6 * time.getSeconds() + 90)) +
      "px";
    number.style.left =
      clock.offsetWidth / 2 -
      index * Math.cos(toRadians(6 * time.getSeconds() + 90)) +
      "px";
    number.classList.add("second");
    clock.appendChild(number);
  }

  radius = 130;

  for (let index = 0; index < radius; index += 15) {
    let number = document.createElement("span");
    number.innerHTML = time.getMinutes();
    number.style.top =
      clock.offsetHeight / 2 -
      index * Math.sin(toRadians(6 * time.getMinutes() + 90)) +
      "px";
    number.style.left =
      clock.offsetWidth / 2 -
      index * Math.cos(toRadians(6 * time.getMinutes() + 90)) +
      "px";
    number.classList.add("minute");

    clock.appendChild(number);
  }

  radius = 100;

  for (let index = 0; index < radius; index += 15) {
    let number = document.createElement("span");
    number.innerHTML = time.getHours();
    number.style.top =
      clock.offsetHeight / 2 -
      index * Math.sin(toRadians(30 * time.getHours() + 90)) +
      "px";
    number.style.left =
      clock.offsetWidth / 2 -
      index * Math.cos(toRadians(30 * time.getHours() + 90)) +
      "px";
    number.classList.add("hour");

    clock.appendChild(number);
  }
  document.title = `${
    time.getHours() < 10 ? "0" + time.getHours() : time.getHours()
  }:${time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()}:${
    time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds()
  }`;
}, 1000);

function toRadians(angle) {
  return angle * (Math.PI / 180);
}
