// Hero Animation
/*
Wenn der Benutzer ueber eins der Kategorien (Branding, Webdesign, Video)
hovered, wird eine Animation getriggered. Diese Animation laesst alle
Unterkategorien, der jeweiligen Ueberkategorie, schnell wechseln.

Folgende Informationen koennen angepasst werden:
- Kategorien
- Unterkategorien
- Schnelligkeit des Uebergangs
- Delay nach dem Hovertrigger
(- Loop An/Aus)
*/

// Elemente
let topCategory = $("#topCategory");
let middleCategory = $("#middleCategory");
let bottomCategory = $("#bottomCategory");
// Kategorien
const categoryPool = [
  {
    id: "topCategory",
    main: "Branding",
    subcategories: ["Strategy", "Idenitiät", "Coporate", "Erfahrung"]
  },
  {
    id: "middleCategory",
    main: "Webdesign",
    subcategories: ["UX Design", "Showcase", "UI Design", "Content"]
  },
  {
    id: "bottomCategory",
    main: "Video",
    subcategories: ["Slowmo", "Transition", "B-Roll", "Produktion"]
  }
];

const speed = 500; // in ms
const delay = 1000; // after hover-trigger
const isLooping = false; // loop on hover or not
let timerID; // deklaration, um ihn ausserhalb der mouseenter-funkiton zu benutzen
let index = 0; // gloabl, damit er nicht bei jedem mousleave resetet bzw. bei mouseenter von vorne startet, sondern seine aktuelle position behaelt
let counter = 0;
const maxCounter = 3;
let firstPlay = true;

// Functionalitaet
$(document).ready(function() {
  // start animation once the page was load
  // Init
  setup();

  setTimeout(() => {
    switchAnimation($(".heroCategory:eq(" + counter + ")"));
  }, delay);

  // trigger
  $(".heroCategory")
    .mouseenter(function() {
      // start animation
      if (!firstPlay) {
        switchAnimation($(this));
      }
    })
    .mouseleave(function() {
      if (!firstPlay) {
        // stop animation = stop timer and set value back to initial state
        abortTimer(timerID);
        setup();
      }
    });
});

function setup() {
  topCategory.text(categoryPool[0].main);
  middleCategory.text(categoryPool[1].main);
  bottomCategory.text(categoryPool[2].main);
  index = 0;
  counter = 0;
}

function switchAnimation(element) {
  let currentCategoryObj = categoryPool.find(cat => {
    return element.attr("id") === cat.id;
  });
  let currentCategoryEle = $("#" + currentCategoryObj.id);
  // get all categories together
  const allCategories = [...currentCategoryObj.subcategories];
  allCategories.push(currentCategoryObj.main);
  const maxLength = allCategories.length;

  // start switching categories = animation
  timerID = setInterval(function() {
    currentCategoryEle.text(allCategories[index]);
    if (index == maxLength - 1) {
      index = 0;
      if (!isLooping) {
        counter++;
        abortTimer(timerID);
      }
    } else {
      index++;
    }
  }, speed);
}

function abortTimer(tid) {
  // to be called when you want to stop the timer
  clearInterval(tid);
  if (counter !== maxCounter && firstPlay) {
    switchAnimation($(".heroCategory:eq(" + counter + ")"));
  } else {
    firstPlay = false;
  }
}
