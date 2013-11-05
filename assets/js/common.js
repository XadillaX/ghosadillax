var backgroundId = 0;

function random(max) {
    return Math.floor(Math.random() * (max + 1));
}

$(function() {
    // background
    backgroundId = random(backcount - 1);
    $.backstretch("/assets/background/" + backgroundId + ".jpg");

    // first and last article of each page
    $(".post:first").addClass("first-post");
    //$(".post:last").addClass("last-post");

    console.log($("pre code:last"));
    var current_code = 0;
    var count_code = $("pre code").length;
    $("pre code").each(function() {
        current_code++;
        var parent = $(this).parent();
        var self = $(this);

        console.log($(this));

        self.addClass("language-" + self.attr("class"));
        parent.addClass("prettyprint");

        if(current_code === count_code) {
            prettyPrint();
        }
    });

    if($("article h1").text() === "< 关于 />") {
        $("ul.navbar-nav li").removeClass("active");
        $("#nav-about").addClass("active");
    }
});
