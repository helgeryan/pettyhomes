const template = document.createElement('template');

template.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <img src="src/images/tiktok.jpeg" width="30px" height="30px">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-item nav-link active" href="index.html">Home<span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="about.html">About Us</a>
                <a class="nav-item nav-link" href="services.html">Services</a>
                <a class="nav-item nav-link" href="faqs.html">FAQs</a>
                <a class="nav-item nav-link" href="contact.html">Contact</a>
            </div>
        </div>
    </nav>
`;

document.body.appendChild(template.content);