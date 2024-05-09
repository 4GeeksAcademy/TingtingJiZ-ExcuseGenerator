/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  function randomIndex(items) {
    return Math.floor(Math.random() * items.length);
  }

  let indexwho = randomIndex(who);
  let indexaction = randomIndex(action);
  let indexwhat = randomIndex(what);
  let indexwhen = randomIndex(when);

  let excuse =
    who[indexwho] +
    " " +
    action[indexaction] +
    " " +
    what[indexwhat] +
    " " +
    when[indexwhen];

  document.getElementById("excuse").innerHTML = excuse;
};
