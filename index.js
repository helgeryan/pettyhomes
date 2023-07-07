

class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <img src="src/images/tiktok.jpeg" width="30px" height="30px">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-item nav-link home-nav" href="index.html">Home<span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link about-nav" href="about.html">About</a>
                <a class="nav-item nav-link services-nav" href="services.html">Services</a>
                <a class="nav-item nav-link faqs-nav" href="faqs.html">FAQs</a>
                <a class="nav-item nav-link contact-nav" href="contact.html">Contact</a>
            </div>
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
                            <li><a href="services.html">Services</a></li>
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