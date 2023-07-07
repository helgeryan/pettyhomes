

class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
          `
    }
  }
  
  //Footer
  
  class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
        `
    <div class="footer">
        <div class="container">		
            <div class="row text-center">						
                <div class="col-lg-12 col-sm-12 col-xs-12">
                    <div class="footer_menu">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="services.html">Service</a></li>
                            <li><a href="faqs.html">FAQs</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>						
                    <div class="footer_copyright">
                        <p>© 2023 Petty Homes. All Rights Reserved.</p>
                    </div>	
                    <div class="footer_profile">
                        <ul>
                            <li><a href="https://www.tiktok.com/@luke_pettersenrealtor"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="https://twitter.com/LPett47"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="https://www.instagram.com/pettyhomes/"><i class="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>						
                </div>						
            </div>			
        </div>
    </div>
  
        `
      
    }
  }
  
  customElements.define('main-header', Header);
  customElements.define('main-footer', Footer);