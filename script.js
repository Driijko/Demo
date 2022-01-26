function layout () {
  // Redefine 'vh' in CSS based on what's actually available (excluding address bar).
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  // Determine what orientation device has.
  if (window.innerWidth < window.innerHeight) {
    let aspectRatio = window.innerHeight / window.innerWidth;
    if (aspectRatio < 1.777) {
      let width = ((0.5625 * window.innerHeight) / window.innerWidth) * window.innerWidth;
      console.log(width);
      document.documentElement.style.setProperty("--w", `${width}px`);
      document.documentElement.style.setProperty("--h", `${window.innerHeight}px`);
      document.documentElement.style.setProperty("--gh", `${window.innerHeight + 1}px`);
      document.documentElement.style.setProperty("--gw", `${((window.innerWidth - width)/2) + 1}px`);
    }
    else {
      console.log("hi");
      document.documentElement.style.setProperty("--h", `${window.innerWidth * 1.777}px`);
      document.documentElement.style.setProperty("--w", `${window.innerWidth}px`);
      document.documentElement.style.setProperty("--gh", `${((window.innerHeight - (window.innerWidth * 1.777))/2) + 1}px`);
      document.documentElement.style.setProperty("--gw", `${window.innerWidth + 1}px`);
    };
  }
  else {
    let width = vh * 100 * 1.6;
    document.documentElement.style.setProperty("--h", `${window.innerHeight}px`);
    document.documentElement.style.setProperty("--w", `${width}px`);
    document.documentElement.style.setProperty("--gh", `${window.innerHeight + 1}px`);
    document.documentElement.style.setProperty("--gw", `${((window.innerWidth - width)/2) + 1}px`);
  }
}

layout();

window.addEventListener("resize", ()=> {
  setTimeout(layout, 2000);
});




