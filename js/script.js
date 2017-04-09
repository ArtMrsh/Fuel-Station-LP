// MENU
var handleBtn = document.querySelector(".handle");
var menu = document.querySelector(".menu");

handleBtn.onclick = function () {
   menu.classList.toggle("show-menu")
}

// WATCH

function digitalWatch() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    document.getElementById("digital_watch").innerHTML = hours + ":" + minutes + ":" + seconds;
    setTimeout("digitalWatch()", 1000);
  }

// CALC INITIALIZE

var discountCheck = document.querySelector("#discount");
discountCheck.addEventListener("change", rangeMove)
discountCheck.addEventListener("change", rangeMoveSecond)
discountCheck.addEventListener("change", rangeMoveThird)

function rangeMove() {
   var r1 = document.querySelector('#r1');
   var val1 = document.querySelector('.firstval');
   var res1 = document.querySelector('.firstRes');
   var valDis1 = document.querySelector('.firstResDis');

   val1.innerHTML = r1.value;
   res1.innerHTML = Math.round((r1.value * 36.80)*100)/100;
   if(discountCheck.checked) {
      valDis1.innerHTML = Math.round((r1.value * 31.21)*10)/10;
   } else {
      valDis1.innerHTML = Math.round((r1.value * 36.21)*10)/10;
   }
};

function rangeMoveSecond() {
   var r2 = document.querySelector('#r2');
   var val2 = document.querySelector('.secondval');
   var res2 = document.querySelector('.secondRes');
   var valDis2 = document.querySelector('.secondResDis');

   val2.innerHTML = r2.value;
   res2.innerHTML = Math.round((r2.value * 34.10)*10)/10;
   if(discountCheck.checked) {
      valDis2.innerHTML = Math.round((r2.value * 30.36)*10)/10;
   } else {
      valDis2.innerHTML = Math.round((r2.value * 35.36)*10)/10;
   }
};

function rangeMoveThird() {
   var r3 = document.querySelector('#r3');
   var val3 = document.querySelector('.thirdval');
   var res3 = document.querySelector('.thirdRes');
   var valDis3 = document.querySelector('.thirdResDis');

   val3.innerHTML = r3.value;
   res3.innerHTML = Math.round((r3.value * 34.80)*10)/10;
   if(discountCheck.checked) {
      valDis3.innerHTML = Math.round((r3.value * 29.36)*10)/10;
   } else {
      valDis3.innerHTML = Math.round((r3.value * 34.36)*10)/10;
   }
};


// SWITCHER INITIALIZE

var leftSwitcher = document.querySelector(".left-switcher"),
    middleSwitcher = document.querySelector(".middle-switcher"),
    rightSwitcher = document.querySelector(".right-switcher");

var leftContent = document.querySelector(".switch__content-left"),
    middleContent = document.querySelector(".switch__content-middle"),
    rightContent = document.querySelector(".switch__content-right");

leftSwitcher.onclick = function() {
    this.classList.add("active");
    middleSwitcher.classList.remove("active");
    rightSwitcher.classList.remove("active");

    leftContent.style.display = "flex";
    middleContent.style.display = "none";
    rightContent.style.display = "none";
}

middleSwitcher.onclick = function() {
    this.classList.add("active");
    leftSwitcher.classList.remove("active");
    rightSwitcher.classList.remove("active");

    leftContent.style.display = "none";
    middleContent.style.display = "flex";
    rightContent.style.display = "none";
}

rightSwitcher.onclick = function() {
    this.classList.add("active")
    leftSwitcher.classList.remove("active");
    middleSwitcher.classList.remove("active");

    leftContent.style.display = "none";
    middleContent.style.display = "none";
    rightContent.style.display = "flex";
}
