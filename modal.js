if (document.getElementById("btnModal")) {
  var modal = document.getElementById("verModal");
  var btn = document.getElementById("btnModal");
  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function () {
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  //salir con Esc , código 27
  window.addEventListener("keyup", function (e) {
    if (e.keyCode == 27) {
      document.getElementById("verModal").style.display = "none";
    }
  });
}
