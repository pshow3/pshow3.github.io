let id = 1;

function boxTab1Show() {
    id = 1
    cleanAll()
    $(".box-tab1").animate({
        opacity: 1
    })
    $("#tab-element").css({
        backgroundColor: 'rgba(255, 255, 255, 0.1)'
    })

    window.setTimeout(function () {
        if (id === 1) {
            $(".box-tab1-cn").animate({
                opacity: 1
            })
        }
    }, 1000);
}

function boxTab2Show() {
    id = 2
    cleanAll()
    $("#tab-animation").css({
        backgroundColor: 'rgba(255, 255, 255, 0.1)'
    })
    $(".box-tab2").animate({
        opacity: 1
    })

    window.setTimeout(function () {
        if (id === 2) {
            $(".box-tab2-cn").animate({
                opacity: 1
            })
        }
    }, 1000);
}

function boxTab3Show() {
    id = 3
    cleanAll()
    $("#tab-media").css({
        backgroundColor: 'rgba(255, 255, 255, 0.1)'
    })
    $(".box-tab3").animate({
        opacity: 1
    })
    $(".box-tab3-music").animate({
        opacity: 1
    })

    window.setTimeout(function () {
        if (id === 3) {
            $(".box-tab3-cn").animate({
                opacity: 1
            })
        }
    }, 1000);
}

function boxTab4Show() {
    id = 4
    cleanAll()
    $("#tab-more").css({
        backgroundColor: 'rgba(255, 255, 255, 0.1)'
    })
    $(".box-tab4-cn").animate({
        opacity: 1
    })
}

function cleanAll() {
    $(".box-tab1").css({
        opacity: 0
    })
    $(".box-tab1-cn").css({
        opacity: 0
    })
    $(".box-tab2").css({
        opacity: 0
    })
    $(".box-tab2-cn").css({
        opacity: 0
    })
    $(".box-tab3").css({
        opacity: 0
    })
    $(".box-tab3-cn").css({
        opacity: 0
    })
    $(".box-tab3-music").css({
        opacity: 0
    })
    $(".box-tab4-cn").css({
        opacity: 0
    })
    $(".tab").css({
        backgroundColor: 'rgba(0, 0, 0, 0)'
    })
}

function goWhy() {
    $("html,body").scrollTop($('#why-tab').offset().top);
}

function goLog() {
    $("html,body").scrollTop($('#log-tab').offset().top);
}