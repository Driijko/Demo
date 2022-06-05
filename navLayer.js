const vps = document.getElementsByClassName("vp");
for (const vp of vps) {
  vp.addEventListener("pointerdown", ()=> {
    vp.querySelector(".nav-layer").style.visibility = "visible";
  });
  vp.addEventListener("pointerup", ()=> {
    vp.querySelector(".nav-layer").style.visibility ="hidden";
  });
}