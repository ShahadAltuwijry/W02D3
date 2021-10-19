class Cars {
  constructor(make, model, colour, image, registrationNumber, price) {
    this.make = make;
    this.model = model;
    this.colour = colour;
    this.image = image;
    this.registrationNumber = registrationNumber;
    this.price = price;
  }

  editPrice(newPrice) {
    this.price = newPrice;
  }
  showAll() {
    console.log(this);
  }
}

const car1 = new Cars("kr", "2022", "black", "img", 4673876, 300, 000);

const car2 = new Cars("us", "2022", "white", "img", 675212, 100, 000);

const car3 = new Cars(
  "german",
  "2022",
  "metalic blue",
  "img",
  256314,
  400,
  000
);

const car4 = new Cars("japan", "2022", "gray", "img", 625371, 250, 000);

const car5 = new Cars("uk", "2022", "sea blue", "img", 6215653, 20, 000);

// car1.editPrice(99999);
// console.log(car1.price);

car1.showAll();
