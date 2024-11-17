document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.nav-link');
    var navbarCollapse = document.getElementById('navbarNav');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        });
    });

    // Toggle button functionality
    var navbarToggler = document.querySelector('.navbar-toggler');
    navbarToggler.addEventListener('click', function () {
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        } else {
            navbarCollapse.classList.add('show');
        }
    });
});
