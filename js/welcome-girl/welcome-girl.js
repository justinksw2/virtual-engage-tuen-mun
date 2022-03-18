init();
// changePage(0)


function init() {
    let indexLan = 0;
    if (sessionStorage.getItem('MTRLANGUAGE')) {
        indexLan = sessionStorage.getItem('MTRLANGUAGE').substring(7)
    }

    const page1 = document.getElementsByClassName('welcomePage1')[indexLan];
    const page2 = document.getElementsByClassName('welcomePage2')[indexLan];
    //    const page3 = document.getElementsByClassName('welcomePage3')[indexLan];

    let index = 0;

    $('.welcomeLeft').on('click', function () {
        $('.welcome').removeClass('active')
    });

    $('.welcomeRight').on('click', function () {
        page2.style.display = 'block';
        page1.style.display = 'none';
    });


    $('.welcomeStart').on("click", function () {
        setTimeout(function () {
            page1.style.display = 'none';
            page2.style.display = 'block';
        }, 2000)

    });
    $('.welcome-close').on("click", function () {
        page1.style.display = 'block';
        page2.style.display = 'none';
        // page3.style.display = 'none';
        $('.welcome').removeClass('active');
    });



    // $('#welcome-close').on("click", function () {
    //     $('#welcome-video').get(0).pause();
    //
    // });
}

function changePage(index) {
    let welcomeDocument = document.getElementsByClassName('welcome-text');
    for (let i = 0; i < welcomeDocument.length; i++) {
        let className = 'welcome' + index;
        if ($.inArray(className, welcomeDocument[i].classList) != -1) {
            document.getElementById('welcome' + index).style.display = 'block'
        } else {
            document.getElementById('welcome' + i).style.display = 'none'
        }
    }
}

function toggleSound(index) {
    console.log($('#video').get(0).paused)
    if ($('#video').get(0).paused && index == 1) {
        $('#video').get(0).play();
    } else if (index == 0) {
        $('#video').get(0).pause();
    }
}
