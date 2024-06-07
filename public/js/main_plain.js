document.addEventListener('DOMContentLoaded', function () {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            var spinnerElement = document.getElementById('spinner');
            if (spinnerElement) {
                spinnerElement.classList.remove('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    window.addEventListener('scroll', function () {
        var navbar = document.querySelector('.navbar');
        if (window.scrollY > 45) {
            navbar.classList.add('sticky-top', 'shadow-sm');
        } else {
            navbar.classList.remove('sticky-top', 'shadow-sm');
        }
    });


    // Back to top button
    window.addEventListener('scroll', function () {
        var backToTopButton = document.querySelector('.back-to-top');
        if (window.scrollY > 100) {
            backToTopButton.style.display = 'block';
            backToTopButton.classList.add('fadeIn', 'slow');
        } else {
            backToTopButton.style.display = 'none';
            backToTopButton.classList.remove('fadeIn', 'slow');
        }
    });

    document.querySelector('.back-to-top').addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    // Skills
    var skillElements = document.querySelectorAll('.skill');
    skillElements.forEach(function (skill) {
        new Waypoint({
            element: skill,
            handler: function () {
                var progressBars = skill.querySelectorAll('.progress .progress-bar');
                progressBars.forEach(function (bar) {
                    bar.style.width = bar.getAttribute('aria-valuenow') + '%';
                });
            },
            offset: '80%'
        });
    });


    // Facts counter
    var counterElements = document.querySelectorAll('[data-toggle="counter-up"]');
    counterElements.forEach(function (counter) {
        new CounterUp(counter, {
            delay: 10,
            time: 2000
        });
    });


    // Testimonials carousel
    var testimonialCarousel = document.querySelector(".testimonial-carousel");
    if (testimonialCarousel) {
        $(testimonialCarousel).owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            margin: 25,
            dots: false,
            loop: true,
            nav: true,
            navText: [
                '<i class="bi bi-chevron-left"></i>',
                '<i class="bi bi-chevron-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                992: {
                    items: 2
                }
            }
        });
    }


    // Portfolio isotope and filter
    var portfolioContainer = document.querySelector('.portfolio-container');
    if (portfolioContainer) {
        var portfolioIsotope = new Isotope(portfolioContainer, {
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });

        var portfolioFilters = document.querySelectorAll('#portfolio-flters li');
        portfolioFilters.forEach(function (filter) {
            filter.addEventListener('click', function () {
                document.querySelector('#portfolio-flters li.active').classList.remove('active');
                this.classList.add('active');
                portfolioIsotope.arrange({
                    filter: this.getAttribute('data-filter')
                });
            });
        });
    }
});

