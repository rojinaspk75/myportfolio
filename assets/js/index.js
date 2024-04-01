  // Data for your portfolio items
  const portfolioItems = [
    { src: "assets/imgs/folio-1.jpg", category: "Photoshop" },
    { src: "assets/imgs/folio-2.jpg", category: "Logo Design" },
    { src: "assets/imgs/folio-3.jpg", category: "Photoshop" },
    { src: "assets/imgs/folio-4.jpg", category: "Logo Design" },
    { src: "assets/imgs/folio-5.jpg", category: "Photoshop" },
    { src: "assets/imgs/folio-6.jpg", category: "Graphic Design" },
    { src: "assets/imgs/folio-.jpg", category: "Illustration" },
    { src: "assets/imgs/folio-.jpg", category: "Web Design" },
    { src: "assets/imgs/folio-.jpg", category: "UI/UX Design" }
  ];

  // Function to generate HTML for portfolio items
  function generatePortfolioItems(items) {
    const portfolioRow = document.getElementById("portfolio-row");
    items.forEach(item => {
      const html = `
        <div class="col-sm-4">
          <div class="img-wrapper">
            <img src="${item.src}" alt="" />
            <div class="overlay">
              <div class="overlay-infos">
                <h5>${item.category}</h5>
                <a href="javascript:void(0)"><i class="ti-zoom-in"></i></a>
                <a href="javascript:void(0)"><i class="ti-link"></i></a>
              </div>
            </div>
          </div>
        </div>`;
      portfolioRow.insertAdjacentHTML("beforeend", html);
    });
  }

  // Call the function to generate portfolio items
  generatePortfolioItems(portfolioItems);







 