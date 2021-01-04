navlinks = $(".nav-link");
navlinks.click(function (event) {
    navlinks = [...$(".nav-link")];
    navlinks.forEach((link) => $(link).removeClass("active"));
    $(event.target).addClass("active");
});

navbrand = $(".navbar-brand");
navbrand.click(function () {
    navlinks.forEach((link) => $(link).removeClass("active"));
    $(navlinks[0]).addClass("active");
});
