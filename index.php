<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="./styling/all.css" />
    <link
      rel="stylesheet"
      href="./fontawesome/fontawesome-free-5.10.2-web/css/all.min.css"
    />
    <link rel="shortcut icon" href="./assets/fav.ico" type="image/x-icon" />
    <title>Legarti | Startseite</title>
  </head>
  <body>
    <div id="customScrollbar"></div>
    <!-- Menu -->
    <div class="toggleMenuOverlay "></div>
    <div id="menuContainer" class="menuContainer">
      <div id="closeContainer" class="closeContainer pointer">
        <i class="fas fa-times icon"></i>
      </div>
      <div class="menuItemContainer">
        <a href="/" class="menuItem active">
          <span class="number">I. </span>
          <span class="text" data-menulabel="Startseite">Startseite</span>
        </a>
        <a href="/pages/portfolio/overview.html" class="menuItem">
          <span class="number">II. </span
          ><span class="text" data-menulabel="Portfolio">Portfolio</span>
        </a>
        <a href="/pages/team.html" class="menuItem">
          <span class="number">III. </span>
          <span class="text" data-menulabel="Team">Team</span>
        </a>
        <a href="/pages/kontakt.html" class="menuItem">
          <span class="number">IV. </span
          ><span class="text" data-menulabel="Kontakt">Kontakt</span>
        </a>
      </div>
      <div class="contactDetailsContainer">
        <p class="heading">Einfach mal Hallo Sagen</p>
        <p class="emailadress">info@legarti.agency</p>
      </div>
    </div>
    <!-- Navigation -->
    <nav class="navContainer mlrauto maxContainer">
      <a href="/" class="logoContainer">
        <img
          src="./assets/logoWhite.svg"
          alt="Legarti Agency - Digital Marketing Agentur aus Dortmund, Bergkamen, Unna, Hamm"
        />
      </a>
      <div id="menuToggleContainer" class="menuToggleContainer pointer">
        <p class="menuLabel">MEN&Uuml;</p>
        <div class="hamburgerMenu">
          <div class="topLine toggleLine"></div>
          <div class="middleLine toggleLine"></div>
          <div class="bottomLine toggleLine"></div>
        </div>
      </div>
    </nav>

    <!-- Herosection -->
    <div id="heroSection">
      <div class="contentContainer maxContainer">
        <div class="linkItemContainer">
          <div class="linkItem textCenter">
            <span class="linkNumber">I. </span>
            <h2 id="topCategory" class="linkText bigHeading heroCategory"></h2>
          </div>
          <div class="linkItem textCenter">
            <span class="linkNumber">II. </span>
            <h2
              id="middleCategory"
              class="linkText bigHeading heroCategory"
            ></h2>
          </div>
          <div class="linkItem textCenter">
            <span class="linkNumber">III. </span>
            <h2
              id="bottomCategory"
              class="linkText bigHeading heroCategory"
            ></h2>
          </div>
        </div>
        <div class="buttonContainer mauto maxContainer">
          <a
            href="/pages/portfolio/overview.html"
            class="button primaryButton portfolio"
            >zum portfolio</a
          >
          <a href="/pages/team.html" class="button primaryButton team"
            >zum team</a
          >
          <a href="/pages/kontakt.html" class="button primaryButton talk"
            >let's talk</a
          >
        </div>
        <div class="sloganContainer fullWidth maxContainer mauto">
          <p class="subslogan medium textCenter">Nach allen Regeln der Kunst</p>
          <div class="verticalStripe textCenter"></div>
        </div>
      </div>
    </div>

    <!-- what we do section -->
    <section id="whatwedo" class="maxContainer mt100 mlrauto">
      <img src="assets/ideen-bg.svg" alt="" class="sectionBacklayer" />
      <div class="imageContainer">
        <img src="./assets/projects/theschooloflife/titelbild.png" alt="" />
      </div>
      <div class="contentContainer mt3">
        <div class="sectionHeading">
          <h2 class="heading">
            wir helfen dir
          </h2>
          <p class="subheading">deine Ideen in die Welt zu kommunizieren</p>
        </div>
        <p class="readText">
          Guter Eindruck ist kein Zufall - Wir haben Bock etwas zu schaffen,
          dass die Werte & Identität unserer Kunden wiederspiegelt und ihnen ein
          sicheres Gefühl gibt ihre Idee nach Außen zu kommunizieren.
        </p>
        <a
          href="/pages/portfolio/overview.html"
          class="button primaryButton mt2"
          >zum Portfolio</a
        >
      </div>
    </section>

    <!-- testimonials -->
    <section id="testimonials" class="maxContainer mtsection fullWidth">
      <img src="assets/menschen-bg.svg" alt="" class="sectionBacklayer" />
      <div class="contentContainer mt3">
        <div class="sectionHeading">
          <h2 class="heading">
            und anderen
          </h2>
          <p class="subheading">uns interessiert, was Andere von uns denken</p>
        </div>
        <div class="testimonialContainer">
          <div class="testimonialItem">
            <img
              class="avatar"
              src="https://source.unsplash.com/w1N1WmLDyHU/150x150"
              alt=""
            />
            <div class="personDetails textCenter mt1">
              <p class="name">Rubin Ritter</p>
              <p class="title">CEO - Zalando</p>
            </div>
            <p class="readText quote mt1 textCenter">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus velit alias perspiciatis? Optio laboriosam alias rem
              quasi consequatur quo quisquam, dignissimos delectus nam nemo,
              mollitia porro iusto blanditii
            </p>
            <a
              class="mt2 textCenter secondaryLink"
              href="./pages/portfolio/ucs/showcase.html"
              ><span>Projekt ansehen</span></a
            >
          </div>
          <div class="testimonialItem">
            <div
              class="avatar"
              style="    background: url(./pages/portfolio/ucs/assets/avatar.png) center center no-repeat; background-size: cover;"
            ></div>

            <div class="personDetails textCenter mt1">
              <p class="name">Leonie Langkabel</p>
              <p class="title">Vorstand - UCS</p>
            </div>
            <p class="readText quote mt1 textCenter">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus velit alias perspiciatis? Optio laboriosam alias rem
              quasi consequatur quo quisquam, dignissimos delectus nam nemo,
              mollitia porro iusto blanditiis molestiae inventore!
            </p>
            <a
              class="mt2 textCenter secondaryLink"
              href="./pages/portfolio/ucs/showcase.html"
              ><span>Projekt ansehen</span></a
            >
          </div>
        </div>
      </div>
    </section>

    <!-- teamsection -->
    <section id="team" class="maxContainer mtsection">
      <div class="innerContentContainer">
        <img src="./assets/freunde-bg.svg" alt="" />
        <div class="contentContainer">
          <h6 class="preHeading">Legarti</h6>
          <h4 class="heading">Ein Team aus Freunden</h4>
          <p class="mt1 readText whiteText">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor. clita kasd
            gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor.
          </p>
          <a href="/pages/team.html" class="mt2 teamLink whiteText"
            >mehr zum team</a
          >
        </div>
      </div>
    </section>

    <!-- Socialbanner -->
    <section class="socialBanner mtsection evenPaddingSection">
      <div class="innerContentContainer maxContainer fullWidth">
        <h2 class="socialbannerHeading bold textCenter">
          Bleib immer auf dem Laufenden
        </h2>
        <p class="subheading textCenter mt1">
          Besuche uns in den sozialen Medien und schaue Dir an woran wir
          arbeiten
        </p>
        <div class="socialIconContainer mt3">
          <a class="socialItem"><i class="fab fa-instagram"></i></a>
          <a class="socialItem"><i class="fab fa-facebook-square"></i></a>
          <a class="socialItem"><i class="fab fa-linkedin"></i></a>
        </div>
        <a href="/pages/kontakt.html" class="button primaryButton mt3"
          >let's talk</a
        >
      </div>
    </section>

    <!-- Footer -->
    <footer class="no-margin">
      <div class="innerContentContainer maxContainer fullWidth">
        <div class="informationContainer">
          <h2 class="heading heavy">Ready To Talk?</h2>
          <p class="subheading medium">Wir freuen uns auf Deine Nachricht</p>
          <div class="departmentContainer mt5">
            <div class="departmentItem">
              <p class="title medium">Design/Entwicklung</p>
              <p class="email">ms@legarti.de</p>
            </div>
            <div class="departmentItem mt3">
              <p class="title medium">Markenberatung/Videocontent</p>
              <p class="email">rt@legarti.de</p>
            </div>
          </div>
          <a href="/pages/kontakt.html" class="button primaryButton mt5"
            >Kontakt</a
          >
        </div>
        <div class="logoContainer">
          <img src="./assets/logoWhite.svg" alt="" />
        </div>
        <div class="notesContainer mt5">
          <div class="socialItemContainer">
            <a class="socialItem whiteText"><i class="fab fa-instagram"></i></a>
            <a class="socialItem whiteText"
              ><i class="fab fa-facebook-square"></i
            ></a>
            <a class="socialItem whiteText"><i class="fab fa-linkedin"></i></a>
          </div>
          <p class="medium mt2">
            Made with <i class="far fa-grin-beam"></i> and
            <i class="fas fa-heart"></i> in Germany.
          </p>
        </div>
      </div>
      <div class="rightsContainer">
        <a class="whiteText" href="">Datenschutzerkl&auml;rung</a>
        <a class="whiteText" href="">Impressum</a>
      </div>
    </footer>

    <script
      src="https://code.jquery.com/jquery-3.4.1.min.js"
      integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
      crossorigin="anonymous"
    ></script>
    <script src="./scripts/navigation.js"></script>
    <script src="/scripts/heroAnimation.js"></script>
  </body>
</html>
