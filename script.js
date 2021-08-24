const clock = document.querySelector(".clock");

const tick = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  function addZero(param) {
    if (param < 10) {
      return `0${param}`;
    } else {
      return param;
    }
  }

  const html = `
    <span>${addZero(hours)}</span> :
    <span>${addZero(minutes)}</span> :
    <span>${addZero(seconds)}</span>
  `;

  clock.innerHTML = html;
};

setInterval(tick, 1000);
