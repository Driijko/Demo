const nlts = document.getElementsByClassName("nav-layer-trigger");
for (const nlt of nlts) {
  function iterateToNavLayer () {
    let test = nlt.nextElementSibling;
    while (test) {
      if (test.className === "nav-layer") {
        break;
      }
      else {
        test = test.nextElementSibling;
      }
    }
    return test;
  }
  nlt.addEventListener("pointerdown", ()=> {
    iterateToNavLayer().style.visibility = "visible";
  });
  nlt.addEventListener("pointerout", ()=> {
    iterateToNavLayer().style.visibility = "hidden";
  });
  
}