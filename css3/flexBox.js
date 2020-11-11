document.getElementById("colum").addEventListener("click", () => {
  let sonuc = document.getElementById("sonuc");
  sonuc.style.flexDirection = "Column";

  let kodlar2 = document.getElementById("kod2");
  kodlar2.innerHTML =
    ".flex-direct { \ndisplay:flex; \nflex-direction:column; }";
});

document.getElementById("rw").addEventListener("click", () => {
  let sonuc = document.getElementById("sonuc");
  sonuc.style.flexDirection = "Row";

  let kodlar2 = document.getElementById("kod2");
  kodlar2.innerHTML =
    "\n.flex-direct { \ndisplay:flex; \nflex-direction:row; }";
});

document.getElementById("col-reverse").addEventListener("click", () => {
  let sonuc = document.getElementById("sonuc");
  sonuc.style.flexDirection = "column-reverse";

  let kodlar2 = document.getElementById("kod2");
  kodlar2.innerHTML =
    ".flex-direct { \ndisplay:flex; \nflex-direction:column-reverse; }";
});
