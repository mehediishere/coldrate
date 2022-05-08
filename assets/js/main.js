/* Table Of Content */
/* 1. Navbar */
/* ------ x ------ */

/* ============ dummy ============ */
/* ============ dummy .end// ============ */


/* ============ navbar ============ */

    $(window).scroll(function() {
        var $height = $(window).scrollTop();
        if($height > 100) {
            $('.top-header').css("position", "absolute");
        } else {
            $('.top-header').css("position", "relative");
        }
    });

/* ============ navbar .end// ============ */