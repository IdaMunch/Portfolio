$(document).ready(function () {
    $("a.mobile-btn").click(function () {
        var _ = $("nav");
        if (_.hasClass("m-active")) {
            _.removeClass("m-active");
            _.slideUp();
        } else {
            _.addClass("m-active");
            _.slideDown();
        }
    })
})
