const devProjects = 
`<div class="col-md-6">
  <img class="portfolio-image" src="./assets/images/my-photo.jpeg" alt="image of Dominika Pietrzak">
  <h3> NAME OF PROJECT </h3>
  <button class="portfolio__button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> Find out more </button>
</div>
<div class="col-md-6">
  <img class="portfolio-image" src="./assets/images/my-photo.jpeg" alt="image of Dominika Pietrzak">
  <h3> NAME OF PROJECT </h3>
  <button class="portfolio__button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> Find out more </button>
</div>
</section>`

const renderDevProjects = () => {
  $("#selected-work-container").empty()
  $("#selected-work-container").append(devProjects)
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