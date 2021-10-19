// const clicked = (e) => {
//   console.log(e.target);
// };

// const sizeBtn = document.querySelector("#bgHighlightBtn");
// sizeBtn.forEach((element) => {
//   element.addEventListeners("click", clicked);
// });

//-----------------------------

// const hideImg = document.querySelector("img").addEventListener("mouseenter", c);

image = document.getElementById("img1");

image.addEventListener("mouseover", function () {
  image.src = "./icon2.png";
});
image.addEventListener("mouseout", function () {
  image.src = "./icon.png";
});

//----------------------------------

const input1 = document
  .getElementById("input1")
  .addEventListener("click", function () {
    alert("you entered Data");
  });

//--------------------------------

window.onload = function () {
  alert("page has loaded ");
};

//----------------------------------

praghraph = document.getElementById("p");
praghraph.addEventListener("mouseover", function () {
  praghraph.style.Color = "lightblue";
});
praghraph.addEventListener("mouseout", function () {
  praghraph.style.Color = "none";
});
