const devProjectsArray = [
  {
  name: "Event Jam",
  image: "./assets/images/devprojects/event-jam.png",
  description: "Event Jam is an online application which allows users to search for events and COIVD-19 information in any city in the UK by retrieving information from the Government's COVID-19 Dashboard and Ticketmaster APIs. The application visually displays the number of COVID-19 cases identfied in a given area using the chart.js framework, allows users to book tickets for an event by redirecting them to the relevant Ticketmaster page as well as to save the event to their favourites using the persistent memory of local storage.   ",
  repoUrl: `https://github.com/iwanagahime/event-jam`,
  deployedUrl: `https://iwanagahime.github.io/event-jam/`,
  modalName: "event-jam",
  },
  {
    name: "Vegan Pals",
    image: "./assets/images/devprojects/vegan-pals.png",
    description: "Vegan pals is an online website, designed to help individuals with food intolerances discover vegan dishes that suit their dietry requirements. Additionally, the application allows users to save their favourite recipes and arrange to cook them with other users that hold the same intolerances by connecting them together.",
    repoUrl: `https://github.com/dominikacookies/vegan-pals-2.0`,
    deployedUrl: `https://vegan-pals-2.herokuapp.com/`,
    modalName: "vegan-pals",
  },
  {
    name: "Weather Wizard",
    image: "./assets/images/devprojects/weather-app.png",
    description: "Weather Wizard is an online application which allows the user to check the current and forecasted weather in a city of their choice. It saves the user's most recent searches using the persistent memory of local storage to create a sleek and effortless user experience. The application retrieves weather information using the Open Weather API and colour codes the UV index to inform the user whether the conditions are favourable, moderate or severe.",
    repoUrl: `https://github.com/dominikacookies/weather_forecast_app`,
    deployedUrl: `https://dominikacookies.github.io/weather_forecast_app/`,
    modalName: "weather-wizard",
    },
  {
    name: "Tech Blog",
    image: "./assets/images/devprojects/tech-blog.png",
    description: "Vegan pals is an online website, designed to help individuals with food intolerances discover vegan dishes that suit their dietry requirements. Additionally, the application allows users to save their favourite recipes and arrange to cook them with other users that hold the same intolerances by connecting them together.",
    repoUrl: `https://github.com/dominikacookies/tech-blog`,
    deployedUrl: `https://fathomless-plains-35453.herokuapp.com/`,
    modalName: "tech-blog",
  },
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
    <div class="card project-type-card">
      <img src=${item.image} class="card-img-top">
      <div class="card-body">
        <h2 class="card-title pb-3">${item.name}</h2>
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
  window.open("./assets/cv/CV_CG_DP.pdf", "_blank")
});

$("#github-button").click(function() {
  window.open("https://github.com/dominikacookies", "_blank")
});

$("#dev-projects-card").click(renderDevProjects)
$("#design-projects-card").click(renderDesignProjects)