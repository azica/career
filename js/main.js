var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();
   
   // Fixed header
  function myFunction() {
      window.onscroll = function() {myFunction()};
      var header = document.querySelector('.header');
      var sticky = header.offsetTop;
      if (window.pageYOffset > sticky) {
          header.classList.add("header-sticky");
      } else {
          header.classList.remove("header-sticky");
      }
      }
  myFunction();
  
  // Toggle menu
  $('.menu__icon').click(function(){
      $('.menu__list').toggleClass('menu__list-open');
      $(this).toggleClass('menu__icon-close');
  })
  var swiper = new Swiper(".brands__slider", {
    spaceBetween: 0,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 4,
      },
      1050: {
        slidesPerView: 6,
      },
    }
  });
  
  
  
  $('.gallery__img').click( function() {
  
    var id = $(this).data('id');
    $('.video-modal[data-id="modal' + id + '"]').fadeIn(2000);
   let bb =   $('.video-modal[data-id="modal' + id + '"]').children();
   bb[0].play();
  })
  
  $('.close__icon').click( function() {
    var id = $('.gallery__img').data('id');
    $('.video-modal').fadeOut();
    var vid = $("#video01, #video02, #video03");
    vid.each(function (k, v) {
      var mediaVideo = this;
      v.pause();
   });
  
  })
  
  $('.apply-click').click(function(){
    $('.vacancy__modal').addClass('vacancy__modal-show');
    })
  
  $('.form-close').click(function(){
    $('.vacancy__modal').removeClass('vacancy__modal-show');
    })
  
  
  const form = document.querySelector('#vacancy-form');
  form.addEventListener('submit', formSend);
  
  async function formSend(e) {
      e.preventDefault();
      let error = formValidate(form);
  
      let formData = new FormatData(form);
      let errorText = creatElement('div');
  
      let errors = errorText.innerHTML = errorText.innerHTML = 'Error message is here';
  
      if (error === 0) {
          form.classList.add('_sending');
          let response = await fetch('sendmail.php', {
              method: 'POST',
              body: formData
          });
          if (response.ok) {
  
              let result = await response.json();
              alert(result.message);
              form.reset();
              form.classList.remove('_sending');
          }else {
              alert('False');
              form.classList.remove('_sending');
          }
      } else {
          alert('Fill the form');
      }
  }
  
  function formValidate(form) {
     
      let error = 0;
      let formReq =  document.querySelectorAll('._req');
  
      for (let i = 0; i < formReq.length; i++) {
          const input  = formReq[i];
          formRemoveError(input);
  
          if(input.classList.contains('_email')) {
              if (emailTest(input)) {
                  formAddError(input);
                  formReq.appendChild('error')
                  error++;
              }
          } else  {
              if ( input.value === '') {
                  formAddError(input);
                  error++;
              }
          }
      }
      return error;
  }
  
  function formAddError(input) {
      input.classList.add('._req');
  }
  function formRemoveError(input) {
      input.classList.remove('_error');
  }
  function emailTest(input) {
      return !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input.value);
  }
  
  