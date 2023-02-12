var riceElement = document.querySelector('.rice');
var pestyElement = document.querySelector(".pesty");
var chocolateElement = document.querySelector(".chocolate");
var infoTextElement = document.querySelector(".info-text-rice");
var background_1 = document.querySelector(".background-1");
var background_2 = document.querySelector(".background-2");
var background_3 = document.querySelector(".background-3");

riceElement.addEventListener('mouseover', function () {
    background_1.style.backgroundImage = 'url(images/food/rice-3.png)';

});
pestyElement.addEventListener("mouseover", function () {
  background_1.style.backgroundImage = 'url(images/food/pesty.png)';
});
chocolateElement.addEventListener("mouseover", function () {
  background_1.style.backgroundImage = 'url(images/food/chocolate.png)';
});
riceElement.addEventListener('mouseleave', function () {
    background_1.style.backgroundImage =null;
});