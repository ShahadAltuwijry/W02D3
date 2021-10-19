//btn1
hdBtn = document.getElementById("headingBtn");
hdBtn.addEventListener("click", function () {
  //button function
});

//btn2
pBtn = document.getElementById("pBtn");
pBtn.addEventListener("click", function () {
  //button function
});

//btn3
bgBtn = document.getElementById("bgHBtn");
bgBtn.addEventListener("click", function () {
  //button function
});

//btn4
imgBtn = document.getElementById("imgBtn");
imgBtn.addEventListener("click", function () {
  //button function
});

//btn5
altBtn = document.getElementById("alterBtn");
altBtn.addEventListener("click", function () {
  //button function
});

//-----------------------------

// hideImg

image = document.getElementById("img1");

image.addEventListener("mouseover", function () {
  image.src = "./icon2.png";
});
image.addEventListener("mouseout", function () {
  image.src = "./icon.png";
});

//----------------------------------

const input = document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("change", function () {
    alert("you entered Data");
  });
});

//--------------------------------

window.onload = function () {
  alert("page has loaded ");
};

//----------------------------------

let p = document.querySelectorAll("p").forEach((p) => {
  p.addEventListener("mouseover", function () {
    p.style.backgroundColor = "lightblue";
  });

  p.addEventListener("mouseout", function () {
    p.style.backgroundColor = "white";
  });
});
// paraghraph.addEventListener("mouseover", function () {
//   paraghraph.style.Color = "lightblue";
// });
// paraghraph.addEventListener("mouseout", function () {
//   paraghraph.style.Color = "none";
// });
