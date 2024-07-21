document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Onclick events for buttons
    document.querySelectorAll(".download-CV").forEach(button => {
        button.addEventListener("click", () => {
            location.href = "Resumme.pdf";
        });
    });

    document.querySelectorAll(".res").forEach(button => {
        button.addEventListener("click", () => {
            location.href = "#Resume";
        });
    });
    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("click", () => {
            location.href = "#Projects";
        });
    });

    // Scroll sensitivity (optional customization)
    const scrollSensitivity = 150; // Customize the sensitivity value as needed
    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        const elements = document.querySelectorAll(".scroll-sensitive");

        elements.forEach(element => {
            if (scrollPosition > element.offsetTop - window.innerHeight + scrollSensitivity) {
                element.classList.add("active");
            } else {
                element.classList.remove("active");
            }
        });
    });
});

/*==================================================== Scroll reveal =================================================== */
ScrollReveal({
    distance: '80px',
    duration: 2000, 
    delay: 50,
  });
  ScrollReveal().reveal('.About','.project' ,{origin :'top'});
  ScrollReveal().reveal('.resume-content', {origin :'bottom'});
  ScrollReveal().reveal('.Skills-content', {origin :'left'});
  ScrollReveal().reveal('.contact', {origin :'right'});

/*==================================================== Email Sending Function =================================================== */
document.addEventListener("DOMContentLoaded", () => {
    // Initialize EmailJS with the public key
    emailjs.init('ycJN0zmSp8gk-d1vH'); // Replace with your EmailJS public key

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Onclick events for buttons
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", () => {
            alert(`You clicked on ${button.textContent}`);
        });
    });

    // Scroll sensitivity (optional customization)
    const scrollSensitivity = 50; // Customize the sensitivity value as needed
    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        const elements = document.querySelectorAll(".scroll-sensitive");

        elements.forEach(element => {
            if (scrollPosition > element.offsetTop - window.innerHeight + scrollSensitivity) {
                element.classList.add("active");
            } else {
                element.classList.remove("active");
            }
        });
    });

    // Form submission handling
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Form validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !email || !subject || !message) {
            alert('Please fill in all the fields.');
            return;
        }

        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Send email using EmailJS
        emailjs.sendForm('service_mwxjond', 'template_2bqlhca', this)
            .then((response) => {
                alert('Email sent successfully!', response.status, response.text);
                form.reset(); // Clear the form inputs
            }, (error) => {
                alert('Failed to send email. Please try again later.', error);
            });
    });
});


        /*================================  TOGGLE Icon  NAVBAR   =================================*/
        let menuIcon = document.querySelector('#menu-icon');
        let navbar = document.querySelector('.navbar');

        menuIcon.onclick = () =>{
          menuIcon.classList.toggle('fa-x');
          navbar.classList.toggle('active');
        }
        /*================================= Sticky NavBar ==============================================*/
        window.onscroll= () =>{
            sections.forEach(sec => {
              let top = window.scrollY;
              let offset = sec.offsetTop - 150;
              let height = sec.offsetHeight;
              let id = sec.getAttribute('id');
  
              if(top >= offset && top < offset + height){
                navLinks.forEach.apply(links => {
                  links.classList.remove('active');
                  document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
              };
            });
  
            /*================================= Sticky NavBar ==============================================*/
            let header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 100);
  
            /*================================== Remove Toggle Icon And NavBar ================================================ */
            menuIcon.classList.remove('fa-x');
            navbar.classList.remove('active');
          };
