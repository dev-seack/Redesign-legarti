$(document).ready(function() {
  // information
  let cvContainer = $(".coreValueContainer");
  let nextBtn = $(".manageContainer .nextSlideToggle");
  let prevBtn = $(".manageContainer .prevSlideToggle");
  let overlayContainer = $(".coreValueContainer .overlayContainer");
  let contentContainer = $(".coreValueContainer .contentContainer");
  const progressBar = $(".progressbarContainer .progress");
  const curCounter = $(".counter .currentValue");
  const maxCounter = $(".counter .maxValue");
  const curCoreValue = $(".mainContentContainer .coreValue");
  const coreValues = [
    {
      value: "Gute Arbeit entsteht aus Überzeugung.",
      imageSrc: "/assets/team/friends-1.jpg"
    },
    {
      value: "Entwicklung selbst bestimmen.",
      imageSrc: "/assets/team/friends-2.jpg"
    },
    {
      value: "Im Ruhrpott hat man gelernt anzupacken.",
      imageSrc: "/assets/team/friends-3.jpg"
    }
  ];

  // Init
  let index = 0;
  maxCounter.text("/" + coreValues.length.pad(2));
  calculateInformation(index);

  // Clicked on next Button
  nextBtn.on("click", () => {
    index++;
    index = calculateInformation(index);
  });

  // Clicked on prev Button
  prevBtn.on("click", () => {
    index--;
    index = calculateInformation(index);
  });

  // calculate new information
  function calculateInformation(index) {
    // check for edge
    if (index >= coreValues.length || index <= 0) {
      if (index < 0) {
        index = coreValues.length - 1;
      } else if (index >= coreValues.length) {
        index = 0;
      }
    }

    // setup
    overlayContainer
      .animate({ opacity: "1" }, 500, () => {
        // background change
        cvContainer.css(
          "background-image",
          "url(" + coreValues[index].imageSrc + ")"
        );
      })
      .animate({ opacity: "0" }, 1000);

    contentContainer
      .animate({ opacity: "0" }, 500, () => {
        // counter text
        curCounter.text((index + 1).pad(2));
        // core vlaue text
        curCoreValue.text(coreValues[index].value);

        // progressbar
        progressPercent = Math.floor(
          ((index + 1) / coreValues.length) * 100
        ).toFixed(2);
      })
      .animate({ opacity: "1" }, () => {
        progressBar.animate({ width: progressPercent + "%" }, 1000);
      });

    return index;
  }
});

// Helper
Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {
    s = "0" + s;
  }
  return s;
};
