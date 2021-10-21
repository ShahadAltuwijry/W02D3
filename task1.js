// button functions

// let headingSize() = => ({
//   headingOne.forEach((index) => {
//     index.style.fontsize = "";
//   })
// });

//header size button

headingBtn.addEventListener("click", () => {
  document.getElementById("h1").style.fontSize = "500%";
});

//font style button
pBtn.addEventListener("click", () => {
  document.getElementById("paragraph").style.fontFamily = "fantasy";
});

//highlight button
bgHBtn.addEventListener("click", () => {
  document.getElementById("paragraph").style.backgroundColor = "gold";
});

//hiding the img button
imgBtn.addEventListener("click", function () {
  document.getElementById("img1").style.display = "none";
});

//altring the img button
// altBtn.addEventListener("onclick", function () {
//   document.getElementById("img2").style.display = "none";
//   document.getElementById("img3").style.display = "initial";
// });

//-----------------------------

// hideImg

image = document.getElementById("img1");

image.addEventListener("mouseover", function () {
  image.src = "./icons8-moon-and-stars-96.png";
});
image.addEventListener("mouseout", function (moon) {
  image.src = "./icons8-sun-96.png";
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
