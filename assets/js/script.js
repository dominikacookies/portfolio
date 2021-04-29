const devProjectsArray = [
  {
  name: "Event Jam",
  image: "./assets/images/my-photo.jpeg",
  description: "Event Jam was a group project",
  repoUrl: `https://github.com/iwanagahime/event-jam`,
  deployedUrl: `https://iwanagahime.github.io/event-jam/`,
  },
  {
    name: "Project 2",
    image: "./assets/images/my-photo.jpeg",
    description: "Event Jam was a group project",
    repoUrl: `https://github.com/iwanagahime/event-jam`,
    deployedUrl: `https://iwanagahime.github.io/event-jam/`,
    }
  ];

const buildDevProjectCard = (item) => {
  $("#selected-work-container").append(
    `<div class="col-md-6">
      <img class="portfolio-image" src=${item.image} alt="image of ${item.name}">
      <h3>${item.name}</h3>
      <button class="portfolio__button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
      data-name="${item.name}" data-image="${item.name}" data-description="${item.description}" data-repoUrl="${item.repoUrl}" data-deployedUrl="${item.deployedUrl}"> 
        Find out more 
      </button>
    </div>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel">Offcanvas right</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
      <h1>${item.name}</h1>
      <h2>In a nutshell</h2>
      <p>${item.description}</p>
      <button> View Deployed App </button>
      <button> View on Github </button>
      </div>
    </div>`
  )
}

const renderDevProjects = () => {
  $("#selected-work-container").empty()
  devProjectsArray.forEach(buildDevProjectCard)
  // $("#selected-work-container").append(devProjects)
  console.log(devProjectsArray[0].name)
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