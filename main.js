const $input1 = document.getElementById("coffee");
$input1.focus();
$input1.value = "16";


//coffee ratio calculator
let ratio = document.querySelector("#ratio");

ratio.addEventListener('keyup', function () {
  const coffee = document.querySelector("#coffee").value;
  const ratio = document.querySelector("#ratio").value;
  document.querySelector('#water').value = ratio * coffee;
});

//로스팅 선택시 온도 조절
const roasting = document.querySelectorAll(".roastingcolor");
const touchTemp = document.querySelector("#temp")
const temperature = touchTemp.querySelector("value");
console.log(temperature)
console.log(roasting);
roasting.forEach(function(label) {
  label.addEventListener("click", function() {

    const roastingId = label.getAttribute("id")

    if (roastingId === "roastingcolor1") {
      touchTemp.setAttribute('value', '92');
    }else if (roastingId === "roastingcolor2") {
      touchTemp.setAttribute('value', '88');
    }else if (roastingId === "roastingcolor3") {
      touchTemp.setAttribute('value', '84');
    }
  });
})

//input - number 일 경우 글자수 제한은 maxlength 대신 로직으로만
function handleOnInput(el, maxlength) {
  if (el.value.length > maxlength) {
    el.value = el.value.substr(0, maxlength);
  }
}

