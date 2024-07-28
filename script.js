function loadNavbar() {
    const navbar = document.getElementById('navbar');
    navbar.innerHTML = `
        <header>
            <div >
      <div class="navvv">
        <nav class="navbar navbar-light bg-warning" data-bs-theme="dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <img src="img/logos/amazon.png" alt="Logo" width="120" height="34"  class="d-inline-block align-text-top">
              </a>
              <ul class="nav justify-content-center">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Sell</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Mobiles</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Todays Deals</a>
                  </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Electronics</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Amazon Pay</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="login.html">SIGN IN</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="register.html">SIGN UP</a>
                  </li>
              </ul>
              <nav class="navbar bg-body-primary">
                <div class="container-fluid">
                  <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-basic" type="submit">Search</button>
                  </form>
                </div>
              </nav>
              <div>
               <a class="nav-link" href="register.html"><ion-icon name="notifications-outline" class="icon"></ion-icon></a>
              </div>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Trending
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Best Sellers</a></li>
                        <li><a class="dropdown-item" href="#">New Releases</a></li>
                        <li><a class="dropdown-item" href="#">Movers and Shakers</a></li>
                      </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Digital Content and Devices
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Echo & Alexa</a></li>
                      <li><a class="dropdown-item" href="#">Fire TV</a></li>
                      <li><a class="dropdown-item" href="#">Kindle E-Readers & eBooks</a></li>
                      <li><a class="dropdown-item" href="#">Audible Audiobooks</a></li>
                      <li><a class="dropdown-item" href="#">Amazon Prime Video</a></li>
                      <li><a class="dropdown-item" href="#">Amazon Prime Music</a></li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Programs and Features
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Gift Cards and Mobile Recharges</a></li>
                      <li><a class="dropdown-item" href="#">Flight Tickets</a></li>
                      <li><a class="dropdown-item" href="#">Clearence Store</a></li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                       Help & Settings
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Your Account</a></li>
                      <li><a class="dropdown-item" href="#">Customer Services</a></li>
                      <li><a class="dropdown-item" href="login.html">Sign in</a></li>
                    </ul>
                  </li>
                </ul>
               
              </div>
            </div>
          </nav>
        </div>
    </div>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"/>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        </header>
    `;
}

function openPage(pageUrl) {
    loadNavbar();
    const content = document.querySelector('.content');
    
    // Fetch the content of the clicked page
    fetch(pageUrl)
        .then(response => response.text())
        .then(html => {
            // Extract the content of the fetched page
            const startBody = html.indexOf('<body>') + 6;
            const endBody = html.indexOf('</body>');
            const pageContent = html.substring(startBody, endBody);
            
            // Update the content of the current page
            content.innerHTML = pageContent;

            // Execute scripts in the fetched page (if any)
            const scripts = Array.from(content.getElementsByTagName('script'));
            scripts.forEach(script => {
                const newScript = document.createElement('script');
                newScript.type = 'text/javascript';
                newScript.text = script.text;
                content.appendChild(newScript);
            });
        })
        .catch(error => console.error('Error loading page:', error));
}

// Load the initial navbar
loadNavbar();
