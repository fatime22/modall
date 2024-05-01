document.getElementById("btn").onclick = function() {
    document.getElementById("modal_2").style.display = "block";
  }
  
  
  document.getElementsByClassName("close")[0].onclick = function() {
    document.getElementById("modal_2").style.display = "none";
  }
  

  window.onclick = function(event) {
    if (event.target == document.getElementById("modal_2")) {
      document.getElementById("modal_2").style.display = "none";
    }
  }
  