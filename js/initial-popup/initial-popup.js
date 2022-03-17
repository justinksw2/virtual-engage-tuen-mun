// Justin

init();

function init() {

    $('.welcome2Left').on('click', function () {
        $('.welcome2').removeClass('active')
    });


    $('.welcome2Right').on('click', function () {
        $('.welcome2').removeClass('active');

        $('.welcome').addClass('active');
    });

}
