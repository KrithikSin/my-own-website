
const listItems = document.querySelectorAll("li");

listItems.forEach(item => {
  item.addEventListener("click", function() {
    this.classList.toggle("hover");
  });
});

console.log(listItems);
