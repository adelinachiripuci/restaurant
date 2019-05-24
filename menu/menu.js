let list = [];
let mealType = ["sweet", "salty"]
function getProd() {
  fetch("https://restaurant-ad933.firebaseio.com/products.json")
  .then(response => response.json())
  .then(data => {
    list = data;
    draw();
  })
}


function draw() {
  let str = ``;
  for(var i = 0; i<list.length; i++) {
    str += `
    <div style="display:flex;flex-wrap:nowrap" class=" product">
      <div class="img-container"><img src="../pictures/${list[i].image}" alt=""></div>
      <div>
        <div class="">${list[i].name}</div>
        <div class="">${list[i].ingredients}</div>
        <div class="" style="display:flex;;">
          <div class="">${mealType[list[i].type]}</div>
          <div class="">${list[i].price} lei</div>
        </div>
      </div>
    </div>
    `
  }
  document.querySelector(".products-container").innerHTML = str;
}
