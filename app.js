const currentYear = new Date().getFullYear();

document.getElementById("watermark").innerHTML =
  "Copyright © " +
  currentYear +
  " " +
  "<a class='small-text' style='font-weight: 450' href='https://leondev1.github.io/portfolio'/>Leondev</a>";
