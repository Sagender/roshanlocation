function switchSheet() {
    let theme = document.getElementById("theme");
  
    if (theme.getAttribute("href") == "mood.css") {
      theme.href = "modonoche.css";
    } else {
      theme.href = "mood.css";
    }
    }
