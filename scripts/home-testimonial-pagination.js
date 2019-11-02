const testimonials = [
  {
    projectName: "gzk",
    name: "Johannes Koch",
    title: "Geschäftsführer - GZ Koch",
    quote:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Doloribus velit alias perspiciatis? Optio laboriosam alias remquasi consequatur quo quisquam, dignissimos delectus nam nemo,mollitia porro iusto blanditii"
  },
  {
    projectName: "gzk",
    name: "Leonie Langkabel",
    title: "Vorstand - UCS",
    quote:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Doloribus velit alias perspiciatis? Optio laboriosam alias remquasi consequatur quo quisquam, dignissimos delectus nam nemo,mollitia porro iusto blanditii"
  },
  {
    projectName: "gzk",
    name: "Mark Buchholz",
    title: "Geschäftsführer - Fight Lounge",
    quote:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Doloribus velit alias perspiciatis? Optio laboriosam alias remquasi consequatur quo quisquam, dignissimos delectus nam nemo,mollitia porro iusto blanditii"
  }
];

$(document).ready(function() {
  const pagiContainer = $(".pagiContainer .pagiInnerContainer");
  const testiContainer = $(
    ".contentContainer .testimonialContainer .testimonialItem"
  );

  setupPaginations(pagiContainer);
  setupTestimonial(testiContainer, 0);

  pagiContainer.children().click(function(item) {
    switchTestimonial(testiContainer, pagiContainer, $(this).data("index"));
  });
});

switchTestimonial = (testiContainer, pagiContainer, index) => {
  // animation
  testiContainer.animate({ opacity: "0" }, () => {
    // new setup
    setupTestimonial(testiContainer, index);
    // pagination update!
    pagiContainer.children().each(function(i, ele) {
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
setupPaginations = (pagiContainer) => {
  testimonials.forEach((ele, index) => {
    newPagiItem = $(`<div data-index="${index}" class="pagiItem"></div>`);

    if (index === 0) {
      newPagiItem.addClass("active");
    }
    pagiContainer.append(newPagiItem);
  });
};
