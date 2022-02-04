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


//input - number 일 경우 글자수 제한은 maxlength 대신 로직으로만
function handleOnInput(el, maxlength) {
  if (el.value.length > maxlength) {
    el.value = el.value.substr(0, maxlength);
  }
}

