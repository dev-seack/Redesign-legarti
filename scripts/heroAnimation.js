// Hero Animation
/*
Wenn der Benutzer ueber eines der Kategorien (Branding, Webdesign, Video)
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
    subcategories: ["Strategy", "Idenität", "Coporate", "Erfahrung"]
  },
  {
    id: "middleCategory",
    main: "Webdesign",
    subcategories: ["UX Design", "Showcase", "UI Design", "Content"]
  },
  {
    id: "bottomCategory",
    main: "Video",
    subcategories: ["Slowmotion", "Transition", "B-Roll", "Produktion"]
  }
];

const speed = 250; // in ms
const delay = 0; // after hover-trigger
const isLooping = true; // loop on hover or not
let timerID; // deklaration, um ihn ausserhalb der mouseenter-funkiton zu benutzen
let index = 0; // gloabl, damit er nicht bei jedem mousleave resetet bzw. bei mouseenter von vorne startet, sondern seine aktuelle position behaelt

// Functionalitaet
$(document).ready(function() {
  // Init
  setup();

  // trigger
  $(".heroCategory")
    .mouseenter(function() {
      // start animation
      // get right element
      let currentCategoryObj = categoryPool.find((cat) => {
        return $(this).attr("id") === cat.id;
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
            abortTimer(timerID);
          }
        } else {
          index++;
        }
      }, speed);
    })
    .mouseleave(function() {
      // stop animation = stop timer
      abortTimer(timerID);
    });
});

function setup() {
  topCategory.text(categoryPool[0].main);
  middleCategory.text(categoryPool[1].main);
  bottomCategory.text(categoryPool[2].main);
}

function abortTimer(tid) {
  // to be called when you want to stop the timer
  clearInterval(tid);
}

/*
// set interval
var tid = setInterval(mycode, 2000);
function mycode() {
  // do some stuff...
  // no need to recall the function (it's an interval, it'll loop forever)
}
function abortTimer() { // to be called when you want to stop the timer
  clearInterval(tid);
}
*/
