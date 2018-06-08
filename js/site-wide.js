
$(window).scroll(function() {
    console.log($(".navbar").offset().top);
    if ($(".navbar").offset().top > 75) {
        $(".navbar").addClass("scrolled");
        // $(".navbar-header").addClass("hide");
        console.log("add page-scrolled");
    } else {
        $(".navbar").removeClass("scrolled");
        // $(".navbar-header").removeClass("hide");
        console.log("remove scrolled");
    }
});

