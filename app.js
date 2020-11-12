function buy() {
  document.getElementById("buy-now").style.display = "none";
  document.getElementById("thanks").style.display = "inherit";
}

const check = document.getElementById("check");
const mobile = document.getElementById("mobile");
const result = document.getElementById("result");
check.onclick = () => {
  if (mobile.value.length === 10) {
    result.innerHTML = "Valid Mobile number";
  } else {
    result.innerHTML = "Invalid Mobile Number";
  }
};
