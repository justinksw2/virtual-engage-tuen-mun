init();
changePage(0)


function init() {
    const presentationLeft = document.getElementById('presentationLeft');
    const presentationRight = document.getElementById('presentationRight');

    let index = 0;



    $('#presentationLeft').on("click", function () {
        console.log('presentationLeft')
        if(index >= 1){
            index = index - 1;
            console.log(index)

            changePage(index);
            toggleSound(index);
        }

    });


    $('#presentationRight').on("click", function () {
        console.log('presentationRight')
        console.log(index)

        if(index < 1 ){
            index = index + 1;

            changePage(index);
            toggleSound(index);
        }


    });
    $('#closeBtn').on("click", function () {
        $('#video').get(0).pause();

    });
}

function changePage(index) {
    let presentationDocument = document.getElementsByClassName('presentation-text');
    for(let i = 0; i < presentationDocument.length;i++){
        let className = 'content' + index;
        if($.inArray(className, presentationDocument[i].classList) != -1){
            document.getElementById('content' + index).style.display = 'block'
        }else{
            document.getElementById('content' + i).style.display = 'none'
        }
    }
}

function toggleSound(index) {
    console.log($('#video').get(0).paused)
    if ($('#video').get(0).paused && index == 1) {
        $('#video').get(0).play();
    }else if(index == 0){
        $('#video').get(0).pause();
    }
}
