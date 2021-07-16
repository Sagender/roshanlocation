function switchSheet() {
    let theme = document.getElementById("theme");
  
    if (theme.getAttribute("href") == "stylestrucosguias.css") {
      theme.href = "noche.css";
    } else {
      theme.href = "stylestrucosguias.css";
    }
    }