const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const welcomeOverlay = document.getElementById('overlay-welcome')
const feedbackOverlay = document.getElementById('overlay-feedback')
const cookiesOverlay = document.getElementById('overlay-cookies')
// var feedback = $(".feedback");  
var cookiesMenu = $("#cookiesMenu")
if (Cookies.get("ve-arup-digital-essentials") !== 'true') {
    cookiesMenu.show();
    cookiesOverlay.classList.add('active')
  } else {
    cookiesMenu.hide();
    if(Cookies.get("ve-arup-digital-essentials-welcome") !== 'true')
    {
        openModal(modal);
    }
    cookiesOverlay.classList.remove('active')
  }

  if (Cookies.get("ve-arup-digital-performance")) {
    $('input[name=performance]').prop('checked', Cookies.get("ve-arup-digital-performance") === 'true');
    window['ga-disable-UA-167289944-1'] = Cookies.get("ve-arup-digital-performance") === 'true';
}

  $('input[name=performance]').change(function(){
    if($(this).is(':checked')) {
        window['ga-disable-UA-167289944-1'] = true;
        Cookies.set("ve-arup-digital-performance", 'true', {expires: 31});
    } else 
    {
        window['ga-disable-UA-167289944-1'] = false;
        Cookies.set("ve-arup-digital-performance", 'false', {expires: 31});
    }
  });
  
  $('a[name=acceptAll]').click(function(){
    $('input[name=performance]').prop('checked', true);
    window['ga-disable-UA-167289944-1'] = false;
    Cookies.set("ve-arup-digital-essentials", 'true', {expires: 31});
    Cookies.set("ve-arup-digital-performance", 'true', {expires: 31});
    cookiesMenu.animate({width: 'toggle'}, 500);
    if(Cookies.get("ve-arup-digital-essentials-welcome") !== 'true')
    {
        openModal(modal);
    }
    cookiesOverlay.classList.remove('active');
  });

  var buttonCookies = $(".btnCookiesMenu");    
  buttonCookies.on("click", function () { 
    cookiesMenu.animate({width: 'toggle'}, 500);
    if (cookiesOverlay.classList.contains('active')) {
        cookiesOverlay.classList.remove('active');
        if(Cookies.get("ve-arup-digital-essentials-welcome") !== 'true')
        {
            openModal(modal);
        }
    } else 
    {
        cookiesOverlay.classList.add('active');
    }
  });


  /*Popup*/

  for (let i = 0; i < openModalButtons.length; i++) {

    openModalButtons[i].addEventListener('click', function() {
      const modal = document.querySelector(this.getAttribute('data-modal-target'));
      openModal(modal); 
    })
  }

  welcomeOverlay.addEventListener('click', function() {

    const modals = document.querySelectorAll('.modal.active');
    for (let i = 0; i < modals.length; i++) {
      closeModal(modals[i]);
    }
  })

for (let i = 0; i < closeModalButtons.length; i++) {
    closeModalButtons[i].addEventListener('click', function() {
      const modal = document.querySelector(this.getAttribute('data-close-button'));
      closeModal(modal);
    })
  }

//   function receiveMessage(event) {
//     $.fancybox.close();
//   }

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  welcomeOverlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  welcomeOverlay.classList.remove('active')
  Cookies.set("ve-arup-digital-essentials-welcome", 'true', {expires: 31});
}

// test open/close feedback popup
function openModalBye(feedback) {
  if (feedback == null) return
  feedback.classList.add('active')
  feedbackOverlay.classList.add('active')
}

function closeModalBye(feedback) {
  if (feedback == null) return
  feedback.classList.remove('active')
  feedbackOverlay.classList.remove('active')
}

window.addEventListener('keydown', function(e) {
  var keyDownEvent = e || window.e,
  keycode = (keyDownEvent.which) ? keyDownEvent.which : keyDownEvent.keyCode;
  //ENTER = 13
    I = 73,
    F = 70,
    C = 67,
    ESC = 27,
    SPACE = 32,
    DOWN = 40,
    TAB = 9;
    
    switch (keycode) {

      case I:
        if(modal.classList.contains('active')){
          closeModal(modal)
        }
        else{
          openModal(modal)
        }
          
        break;
      // case F:
      //   if(!$.fancybox.getInstance()){
      //     $.fancybox.open({
      //       src  : 'https://ovearup.onlinesurveys.ac.uk/arup-virtual-engage',
      //       type : 'iframe',
      //       fullScreen: false,
      //   })
      // };
      //   break;
      case C:
        if (cookiesOverlay.classList.contains('active')){
          cookiesOverlay.classList.remove('active');
          cookiesMenu.animate({width: 'toggle'}, 500);
        }
        else{
          cookiesMenu.animate({width: 'toggle'}, 500);
          cookiesOverlay.classList.add('active');
        }
        break;
        
      case ESC:
        if (cookiesOverlay.classList.contains('active')){
          cookiesOverlay.classList.remove('active');
          cookiesMenu.animate({width: 'toggle'}, 500);
        }
        if(modal.classList.contains('active')){
          closeModal(modal)
        }
        if($.fancybox.getInstance()){
          $.fancybox.close();
        }
        break;
    
          
      default:
          return true;
      }
  e.preventDefault();
});
