// Redefine 'vh' in CSS based on what's actually available (excluding address bar).
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// Determine what orientation device has.
// let screenOrientation = null;
// if (window.innerWidth < window.innerHeight) {
//   screenOrientation = "portrait";
// }
// else {
//   screenOrientation = "landscape";
// }

// if (orientation === "portrait") {

// }
let aspectRatio = window.innerHeight / window.innerWidth;
if (aspectRatio < 1.777) {
  let width = ((0.5625 * window.innerHeight) / window.innerWidth) * window.innerWidth;
  document.documentElement.style.setProperty("--w", `${width}px`);
  document.documentElement.style.setProperty("--gh", `${window.innerHeight}px`);
  document.documentElement.style.setProperty("--gw", `${(window.innerWidth - width)/2}px`);
}
else {
  document.documentElement.style.setProperty("--w", `${window.innerWidth}px`);
  document.documentElement.style.setProperty("--gh", `${(window.innerHeight - (window.innerWidth * 1.777))/2}px`);
  document.documentElement.style.setProperty("--gw", `${window.innerWidth}px`);
};