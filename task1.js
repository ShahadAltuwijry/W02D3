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

const input1 = document
  .getElementById("input1")
  .addEventListener("change", function () {
    alert("you entered Data");
  });

//--------------------------------

window.onload = function () {
  alert("page has loaded ");
};

//----------------------------------

paraghraph = document.getElementsByClassName(".praghraph");
paraghraph.addEventListener("mouseover", function () {
  paraghraph.style.Color = "lightblue";
});
paraghraph.addEventListener("mouseout", function () {
  paraghraph.style.Color = "none";
});
