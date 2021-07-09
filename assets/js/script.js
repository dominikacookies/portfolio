const devProjectsArray = [
  {
    name: "Vegan Pals",
    shortDescription: "Vegan recipes and new pals finder.",
    image: "./assets/images/devprojects/vegan-pals.png",
    description: "Vegan pals supports users converting to veganism by presenting them with vegan recipes that meet their dietry requirements and allowing them to connect with other users that have the same intolerances. </br> Test account login: </br> Username: misha@lovevegan.com  </br> Password: MyPassword",
    features: "RESTful API which accommodates all CRUD operations</br> Custom authentication middleware </br> Relational user profiles </br> 3rd party API </br> Pagination </br> Custom handlebars helpers",
    repoUrl: `https://github.com/dominikacookies/vegan-pals-2.0`,
    deployedUrl: `https://vegan-pals-2.herokuapp.com/`,
    modalName: "vegan-pals",
  },
  {
  name: "Event Jam",
  shortDescription: "UK city events and COVID-19 info.",
  image: "./assets/images/devprojects/event-jam.png",
  description: "Event Jam allows users to search for events in any city in the UK and visually displays relevant COVID-19 data as a graph. Users are also able to favourite events which are distinguished when new search results render.",
  features: "Pagination </br> 3rd party APIs </br> Chart js",
  repoUrl: `https://github.com/iwanagahime/event-jam`,
  deployedUrl: `https://iwanagahime.github.io/event-jam/`,
  modalName: "event-jam",
  },
  {
    name: "Tech Blog",
    shortDescription: "Tech blogging site.",
    image: "./assets/images/devprojects/tech-blog.png",
    description: "Tech blog is exactly what it says on the tin, a blogging site for all things tech. As a logged in user you're able to not only read blogs but also create update and delete your own. The same can be done with comments.",
    features: "RESTful API which accommodates all CRUD operations </br> Bespoke user authentication middleware </br> Bcrypt for hashing and validating password",
    repoUrl: `https://github.com/dominikacookies/tech-blog`,
    deployedUrl: `https://fathomless-plains-35453.herokuapp.com/`,
    modalName: "tech-blog",
  },
  {
    name: "Weather Wizard",
    shortDescription: "Worldwide weather dashboard.",
    image: "./assets/images/devprojects/weather-app.png",
    description: "Weather Wizard allows the user to check the current and forecasted weather in a city of their choice. It saves the user's most recent searches and colour codes the UV index to inform the user whether the conditions are favourable, moderate or severe.",
    features: "3rd party API </br> Local storage </br> Responsive interface",
    repoUrl: `https://github.com/dominikacookies/weather_forecast_app`,
    deployedUrl: `https://dominikacookies.github.io/weather_forecast_app/`,
    modalName: "weather-wizard",
    }
  ];

const designProjectsArray = [
  {
    name: "Ecommerce Home Page Design",
    client: "fictional stationary retailer",
    image: "./assets/images/designprojects/stil-design.jpg",
  },
  {
    name: "Agency Home Page Design",
    client: "fictional web design agency",
    image: "./assets/images/designprojects/HEI.jpg",
  },
]

const goToApp = (event) => {
  const deployedAppUrl = $(event.currentTarget).attr("data-deployedUrl")
  window.open(deployedAppUrl, "_blank")
}

const goToRepo = (event) => {
  const githubRepoUrl = $(event.currentTarget).attr("data-repoUrl")
  window.open(githubRepoUrl, "_blank")
}

const buildDevProjectCard = (item) => {
  $("#selected-work-container").append(
    `
    <div class="card project-type-card dev-project-card">
      <img src=${item.image} class="card-img-top">
      <div class="card-body">
        <h2 class="card-title pb-3">${item.name}</h2>
        <p class="information">${item.shortDescription}</p>
        <button class="button--primary" data-bs-toggle="offcanvas" data-bs-target="#${item.modalName}" aria-controls="offcanvasRight${item.name}">View now </button>
      </div>
    </div>
    <div class="offcanvas offcanvas-end offcanvas-background-override" tabindex="-1" id="${item.modalName}" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <button type="btn" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
      <h1>${item.name}</h1>
      <h2>In a nutshell</h2>
      <p class="information">${item.description}</p>
      <h2>Key features </br> & Technologies Used</h2>
      <p class="information">${item.features}</p>
      <h2 class="mt-2">Check it out</h2>
      <button data-deployedUrl=${item.deployedUrl} class="portfolio--application__button deployed-button">Deployed App</button>
      <button data-repoUrl=${item.repoUrl} class="portfolio--application__button repo-button">Github Repo</button>
      </div>
    </div>`
  )
}

const displayDesignProject = (item) => {
  $("#selected-work-container").append(
    `<div class="col-md-6">
      <img class="portfolio-image" src=${item.image} alt="image of ${item.name}">
      <h3>${item.name}</h3>
      <h4> Designed for a ${item.client}</h4>
    </div>`)
  }

const renderDevProjects = (event) => {
  $(event.currentTarget).addClass("button--secondary")
  $("#selected-work-container").empty()
  devProjectsArray.forEach(buildDevProjectCard)
  $(".deployed-button").click(goToApp)
  $(".repo-button").click(goToRepo)
}

const renderDesignProjects = (event) => {
  $("#selected-work-container").empty()
  $(event.currentTarget).addClass("button--secondary")
  designProjectsArray.forEach(displayDesignProject)
}

$("#linkedin-button").click(function() {
  window.open("https://www.linkedin.com/in/dominika-pietrzak-183755137/", "_blank")
});

$("#cv-button").click(function() {
  window.open("./assets/cv/DP_CV_.pdf", "_blank")
});

$("#github-button").click(function() {
  window.open("https://github.com/dominikacookies", "_blank")
});

$("#dev-projects-card").click(renderDevProjects)
$("#design-projects-card").click(renderDesignProjects)