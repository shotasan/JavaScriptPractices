document.addEventListener("DOMContentLoaded", function () {
  var data = {
    title: "java",
    price: 2600,
    show: function () {
      console.log(`${this.title}/${this.price}円`);
    }
  };

  document.getElementById("btn").addEventListener("click", data.show.bind(data));
})
