// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const good = document.querySelector("h1");

const superEventHandler = {
  enter: function () {
    good.innerText = "The mouse is here!";
    state = 0;
    good.style.color = colors[state];
  },

  leave: function () {
    good.innerText = "The mouse is gone!";
    state = 1;
    good.style.color = colors[state];
  },

  resize: function () {
    good.innerText = "You just resized!";
    state = 2;
    good.style.color = colors[state];
  },

  rClick: function () {
    good.innerText = "That was a right click!";
    state = 4;
    good.style.color = colors[state];
  }
};

let state = 0;

good.addEventListener("mouseenter", superEventHandler.enter);
good.addEventListener("mouseleave", superEventHandler.leave);
window.addEventListener("auxclick", superEventHandler.rClick);
window.addEventListener("resize", superEventHandler.resize);
