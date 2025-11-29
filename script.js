
$(document).ready(function () {
    $("body").css("display", "none");
    $("body").fadeIn(500);
});


/* ===== navigasi ===== */
$("nav a").on("click", function (e) {
    
    if (this.hash !== "") {
        e.preventDefault();
        var target = this.hash;

        $("html, body").animate(
            { scrollTop: $(target).offset().top - 80 },
            600
        );
    }
});

$(document).ready(function(){


/* ==== pendidik ==== */
    $(".pendidik-card").hover(
        function(){
            $(this).css({
                transform: "translateY(-5px)",
                transition: "0.2s"
            });
        },
        function(){
            $(this).css({
                transform: "translateY(0)"
            });
        }
    );

});

/* ===== efek ====*/
$(".stat-card, .fasilitas-card, .agenda-card").hover(
    function () {
        $(this).css({
            transform: "scale(1.03)",
            transition: ".2s",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
        });
    },
    function () {
        $(this).css({
            transform: "scale(1)",
            boxShadow: "none"
        });
    }
);

/* ==== menu ====*/
$(function () {
    const current = window.location.pathname.split("/").pop();

    $("nav a").each(function () {
        if ($(this).attr("href") === current) {
            $(this).addClass("active-menu");
        }
    });
});