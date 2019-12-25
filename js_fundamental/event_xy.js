document.addEventListener("DOMContentLoaded", function () {
  let main = document.getElementById("main");

  main.addEventListener("mousemove", function (e) {
    main.innerHTML = `
      screen:${e.screenX}/${e.screenY}
      page:${e.pageX}/${e.pageY}
      client:${e.clientX}/${e.clientY}
      offset:${e.offsetX}/${e.offsetY}
    `;
  })
})