const testimonials = [
  {
    projectName: "gzk",
    name: "Johannes Koch",
    title: "Geschäftsführer - GZ Koch",
    quote:
      "Ein großes Dankeschön geht an Legarti: Für die unkomplizierte und gute Zusammenarbeit und für das tolle Endergebnis! Wir bleiben in Kontakt für weitere Aufträge."
  },

  {
    projectName: "fl",
    name: "Mark Buchholz",
    title: "Geschäftsführer & Headcoach - Fight Lounge",
    quote:
      "Legarti hat uns mit den Videos begeistert! Die Zusammenarbeit war absolut stressfrei und reibungslos. Zusagen wurden eingehalten und die Videos habe alle durchweg positives Feedback von unseren Mitgliedern gebracht."
  },
  {
    projectName: "ucs",
    name: "Leonie Langkabel",
    title: "Vorstand - UCS",
    quote:
      "Kein langes warten auf Antworten oder Feedback. Unsere Vorstellungen wurden genau so umgesetzt, wie wir es haben wollten. Nur noch viel besser! Mittlerweile arbeiten wir in fester Kooperationen mit Legarti zusammen."
  }
];

// looping settings
const looping = true;
const loopDelay = 7500; // in ms
// global variables - do not change!
let testiCounter = 1;
const testiMaxCounter = testimonials.length;
let testiTimer = null;

$(document).ready(function() {
  const pagiContainer = $(".pagiContainer .pagiInnerContainer");
  const testiContainer = $(
    ".contentContainer .testimonialContainer .testimonialItem"
  );

  setupPaginations(pagiContainer);
  setupTestimonial(testiContainer, 0);

  if (looping) {
    startTestiTimer(testiContainer, pagiContainer);
  }

  pagiContainer.children().click(function(item) {
    switchTestimonial(testiContainer, pagiContainer, $(this).data("index"));
    if (looping) {
      startTestiTimer(testiContainer, pagiContainer);
    }
  });
});

startTestiTimer = (testiContainer, pagiContainer) => {
  clearInterval(testiTimer);
  testiTimer = setInterval(function() {
    switchTestimonial(
      testiContainer,
      pagiContainer,
      testiCounter % testiMaxCounter
    );
  }, loopDelay);
};

switchTestimonial = (testiContainer, pagiContainer, index) => {
  // animation
  testiContainer.animate({ opacity: "0" }, () => {
    // new setup
    setupTestimonial(testiContainer, index);
    // pagination update!
    pagiContainer.children().each(function(i, ele) {
      testiCounter = index + 1;

      $(ele).removeClass("active");
      if (i === index) {
        $(ele).addClass("active");
      }
    });

    // animate back
    testiContainer.animate({ opacity: "1" });
  });
};

// set testimonial-items dynamically
setupTestimonial = (testiContainer, index) => {
  // avatar
  let imageSrc = `/pages/portfolio/${testimonials[index].projectName}/assets/home-testimonial-avatar.png`;
  testiContainer
    .children(".profilInformation")
    .children(".avatar")
    .attr("src", imageSrc);
  // name/title
  testiContainer
    .children(".profilInformation")
    .children(".personDetails")
    .children(".name")
    .text(testimonials[index].name);
  testiContainer
    .children(".profilInformation")
    .children(".personDetails")
    .children(".title")
    .text(testimonials[index].title);
  // quote
  testiContainer.children(".quote").text(testimonials[index].quote);
};

// create pagination-items dynamically
setupPaginations = pagiContainer => {
  testimonials.forEach((ele, index) => {
    newPagiItem = $(`<div data-index="${index}" class="pagiItem"></div>`);

    if (index === 0) {
      newPagiItem.addClass("active");
    }
    pagiContainer.append(newPagiItem);
  });
};
