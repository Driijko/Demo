const nlts = document.getElementsByClassName("nav-layer-trigger");
let released = false;
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
    released = false;
    const timerId = setTimeout(()=> {
      if (released === false) {
        iterateToNavLayer().style.visibility = "visible";
      }
      clearTimeout(timerId);
    }, 100);
  });
  nlt.addEventListener("pointerout", ()=> {
    if (released === false) {
      iterateToNavLayer().style.visibility = "hidden";
    }
    released = true;
  });
  
}