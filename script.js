// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

let aspectRatio = window.innerHeight / window.innerWidth;
// console.log(aspectRatio);
if (aspectRatio < 1.777) {
  let width = ((0.5625 * window.innerHeight) / window.innerWidth) * window.innerWidth;
  document.documentElement.style.setProperty("--w", `${width}px`);
}
else {
  document.documentElement.style.setProperty("--w", `${window.innerWidth}px`);
};