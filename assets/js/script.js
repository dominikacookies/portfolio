const devProjectsArray = [
  {
  name: "Event Jam",
  image: "./assets/images/devprojects/eventJamScreen.png",
  description: "Event Jam is an online application which allows users to search for events and COIVD-19 information in any city in the UK by retrieving information from the Government's COVID-19 Dashboard and Ticketmaster APIs. The application visually displays the number of COVID-19 cases identfied in a given area using the chart.js framework, allows users to book tickets for an event by redirecting them to the relevant Ticketmaster page as well as to save the event to their favourites using the persistent memory of local storage.   ",
  repoUrl: `https://github.com/iwanagahime/event-jam`,
  deployedUrl: `https://iwanagahime.github.io/event-jam/`,
  modalName: "event-jam",
  },
  {
    name: "Weather Wizard",
    image: "./assets/images/devprojects/weatherApp.png",
    description: "Weather Wizard is an online application which allows the user to check the current and forecasted weather in a city of their choice. It saves the user's most recent searches using the persistent memory of local storage to create a sleek and effortless user experience. The application retrieves weather information using the Open Weather API and colour codes the UV index to inform the user whether the conditions are favourable, moderate or severe.",
    repoUrl: `https://github.com/dominikacookies/weather_forecast_app`,
    deployedUrl: `https://dominikacookies.github.io/weather_forecast_app/`,
    modalName: "weather-wizard",
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
    `<div class="col-md-6">
      <img class="portfolio-image" src=${item.image} alt="image of ${item.name}">
      <h3>${item.name}</h3>
      <button class="portfolio__button" type="button" data-bs-toggle="offcanvas" data-bs-target="#${item.modalName}" aria-controls="offcanvasRight${item.name}"
      data-name="${item.name}" data-image="${item.name}" data-description="${item.description}" data-repoUrl="${item.repoUrl}" data-deployedUrl="${item.deployedUrl}"> 
        Find out more 
      </button>
    </div>
    <div class="offcanvas offcanvas-end offcanvas-background-override" tabindex="-1" id="${item.modalName}" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
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

$("#cv-button").click(function() {
  window.open("./assets/cv/DP_CV.pdf", "_blank")
});

$("#github-button").click(function() {
  window.open("https://github.com/dominikacookies", "_blank")
});

$("#dev-projects-button").click(renderDevProjects)
$("#design-projects-button").click(renderDesignProjects)