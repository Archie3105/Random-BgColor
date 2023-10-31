var btn = document.querySelector("#next-btn");
var nextColorBtn = document.querySelector("#color-code");
const getColor = () => {
  const randomNumber = Math.floor(Math.random() * 1677215);
  const randomCode = "#" + randomNumber.toString(16);
  console.log(randomNumber, randomCode);
  document.body.style.background = randomCode;
  nextColorBtn.innerText = randomCode;

  navigator.clipboard.writeText(randomCode);
};

btn.addEventListener("click", getColor);

getColor();
