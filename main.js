console.log("dom");

document.querySelectorAll("p");
const pragraph = document.querySelector("p");
pragraph.class = "text";
pragraph.style.color = "royalblue";
console.log(pragraph);

const items = document.querySelectorAll("li");
items.forEach((element) => {
  element.style.display = "inline-block";
});
