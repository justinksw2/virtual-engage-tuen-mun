console.log("dddd")

var cookiesMenu = $("#cookiesMenu");
const cookiesOverlay = document.getElementById('overlay-cookies');
if (!Cookies.get("ve-kincardine-essentials")) {
    cookiesMenu.show();
    cookiesOverlay.classList.add('active');
} else {
    cookiesMenu.hide();
    cookiesOverlay.classList.remove('active');
}

if (Cookies.get("ve-kincardine-performance")) {
    $('input[name=performance]').prop('checked', Cookies.get("ve-kincardine-performance") === 'true');
    window['ga-disable-UA-167289944-3'] = Cookies.get("ve-kincardine-performance") === 'true';
}

var button = $(".btnCookiesMenu");    
button.on("click", function () {
    console.log("dddd")

    cookiesMenu.animate({width: 'toggle'}, 500);
    if (cookiesOverlay.classList.contains('active')) {
        cookiesOverlay.classList.remove('active');
    } else {
        cookiesOverlay.classList.add('active');
    }
    Cookies.set("ve-kincardine-essentials", true, {expires: 31});
});

$('input[name=performance]').change(function(){
    if($(this).is(':checked')) {
        window['ga-disable-UA-167289944-3'] = true;
        Cookies.set("ve-kincardine-performance", 'true', {expires: 31});
    } else {
        window['ga-disable-UA-167289944-3'] = false;
        Cookies.set("ve-kincardine-performance", 'false', {expires: 31});
    }
});

$('a[name=acceptAll]').click(function(){
    $('input[name=performance]').prop('checked', true);
    window['ga-disable-UA-167289944-3'] = false;
    Cookies.set("ve-kincardine-essentials", 'true', {expires: 31});
    Cookies.set("ve-kincardine-performance", 'true', {expires: 31});
    cookiesMenu.animate({width: 'toggle'}, 500);
    cookiesOverlay.classList.remove('active');
});
