function refreshSectionsHeight() {
    $(".section").css("min-height", $(window).height() - $(".top-line").height() + "px");
}

$(document).ready(refreshSectionsHeight);
$(window).resize(refreshSectionsHeight);