const devProjectsArray = [
  {
  name: "Event Jam",
  image: "./assets/images/eventJamScreen.png",
  description: "Event Jam was a group project",
  repoUrl: `https://github.com/iwanagahime/event-jam`,
  deployedUrl: `https://iwanagahime.github.io/event-jam/`,
  modalName: "event-jam",
  },
  {
    name: "Weather Wizard",
    image: "./assets/images/weatherApp.png",
    description: "Event Jam was a group project",
    repoUrl: `https://github.com/iwanagahime/event-jam`,
    deployedUrl: `https://dominikacookies.github.io/weather_forecast_app/`,
    modalName: "weather-wizard",
    },
  ];

const goToApp = () => {
  console.log("hello")
}

const goToRepo = () => {
  console.log("repo")
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
    <div class="offcanvas offcanvas-end" tabindex="-1" id="${item.modalName}" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel">Offcanvas right</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
      <h1>${item.name}</h1>
      <h2>In a nutshell</h2>
      <p class="information">${item.description}</p>
      <button class="portfolio__button deployed-button"> Deployed App </button>
      <button class="portfolio__button repo-button"> Github Repo </button>
      </div>
    </div>`
  )
}

const renderDevProjects = () => {
  $("#selected-work-container").empty()
  devProjectsArray.forEach(buildDevProjectCard)
  $(".deployed-button").click(goToApp)
  $(".repo-button").click(goToRepo)
}

const renderDesignProjects = () => {
  console.log("hey")
}

$("#cv-button").click(function() {
  window.open("./assets/cv/DP_CV.pdf", "_blank")
});

$("#github-button").click(function() {
  window.open("https://github.com/dominikacookies", "_blank")
});

$("#dev-projects-button").click(renderDevProjects)
$("#design-projects-button").click(renderDesignProjects)