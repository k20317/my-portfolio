const display = document.getElementById("TMIdisplay");
const button = document.getElementById("TMIbutton");

const display0 = document.getElementById("TMI_display");
const button0 = document.getElementById("TMI_button");

const display2 = document.getElementById("fromdisplay");
const button2 = document.getElementById("frombutton");

const display3 = document.getElementById("agedisplay");
const button3 = document.getElementById("agebutton");

//TMIButtonを押した後の処理
TMIbutton.onclick = function () {
  TMIdisplay.textContent = "最近、けん玉をはじめました！";
};

//TMI_Buttonを押した後の処理
TMI_button.onclick = function () {
  TMI_display.textContent = "オリンピック全力応援♪";
};

//fromButtonを押した後の処理
frombutton.onclick = function () {
  fromdisplay.textContent = "Fukuoka";
};

//nameButtonを押した後の処理
agebutton.onclick = function () {
  agedisplay.textContent = "21";
};
