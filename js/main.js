$(document).ready(function(){


// tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* if in tab mode */
    $("ul.tabs li").click(function() {
    
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();    
    
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
    
    });
  /* if in drawer mode */
  $(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
    
    $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
    
    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
  
  
  /* Extra class "tab_last" 
     to add border to right side
     of last tab */
  $('ul.tabs li').last().addClass("tab_last");


  $(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.programm_w_content').not($next).slideUp().parent().removeClass('open');
    };
  } 

  var accordion = new Accordion($('#accordion'), false);
});


$('.one_sl').slick({
        infinite: true,
        swipe: true,
        dots: true,
        autoplay: true,
    	autoplaySpeed: 5000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1750,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 1030,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 773,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
          {
          breakpoint: 661,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },

          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        }
      ]
  });

	$('.six_sl').slick({
        infinite: true,
        swipe: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1201,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1030,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 773,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
          {
          breakpoint: 661,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },

          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
  });


	$('.teacher_w_sl').slick({
        infinite: true,
        swipe: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1201,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1030,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 773,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
          {
          breakpoint: 661,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },

          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
  });




jQuery(function($) {
  //play video btn
  $(".position-relative video").removeAttr("controls"); //hide controls by default
  //on clicking play button
  $(".video-section").each(function() {
    $(".play-btn").click(function() {
      var video = $(this)
        .closest(".position-relative")
        .find("video")
        .get(0);
      video.play();
      video.controls = true;
      $(this).css("visibility", "hidden");
      return false;
    });

    //when video is paused
    $(this)
      .find("video")
      .click(function() {
        var video = $(this).get(0);
        video.pause();
        video.controls = false;
        $(this)
          .siblings(".play-btn")
          .css("visibility", "visible");
        return false;
      });

    //when video has ended
    $(this)
      .find("video")
      .on("ended", function() {
        $(this).get(0).controls = false;
        $(this)
          .siblings(".play-btn")
          .css("visibility", "visible");
        $(this)
          .get(0)
          .load();
      });
  });
 });


});


const burger = document.querySelector('.burger');
const navbar = document.querySelector('.mt-mobile');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    body.classList.toggle('body-open');
    burger.classList.toggle('burger-open');
    
});



let triggersModal = document.querySelectorAll(".js-show-modal");
let modals = document.querySelectorAll(".js-modal");

function closeModal() {
  modals.forEach(modal => {
    if (modal.classList.contains("is-open")) {
      modal.classList.remove("is-open");
      body.classList.remove("is-open");
    }
  });
}


modals.forEach(modal => {
  modal.addEventListener("click", function (event) {
    const isOutside = !event.target.closest(".modal__inner");
    const isCloseButton = event.target.matches(".js-close-modal");
    if (isCloseButton || isOutside) {
      closeModal();
    }
  });
});

triggersModal.forEach((button) =>
button.addEventListener("click", function (e) {
  e.preventDefault();
  let modalID = this.dataset.modal;
  console.log(modalID);
  modals.forEach(function (modal) {
    if (modal.dataset.modal == modalID) {
      modal.classList.add("is-open");
      body.classList.add("is-open");
    }
  });
}));



'use strict';



class Dropdown {
  constructor(element, options) {
    this.element = element;
    this.toggler = element.querySelector('.js-dropdown-toggler');
    this.title = element.querySelector('.js-dropdown-title');
    this.icon = element.querySelector('.js-dropdown-icon');
    this.choices = element.querySelectorAll('.js-dropdown-choice');
    
    this.classActive = options.cssElementActive || 'js-dropdown-active';
    this.classExpanded = options.cssElementExpanded || 'js-dropdown-expanded';
    
    this.modes = Array.prototype.map.call(this.choices, choice => choice.dataset['mode']);
    
    if (!this.element || !this.toggler || !this.title || !this.icon || !this.choices.length) {
      throw new Error('Something is missing! Check the layout!');
    }
    
    this.init();
  }
  
  init() {
    this.toggler.addEventListener('click', this.toggleExpanded.bind(this));
    Array.prototype.forEach.call(this.choices, choice => {
      choice.addEventListener('click', this.choose.bind(this));
    });
  }
  
  toggleExpanded() {
    if (!this.element.classList.contains(this.classExpanded) || !this.element.classList.contains('js-dropdown-expanded')) {
      this.setExpanded();
    } else {
      this.unsetExpanded();
    }
  }
  
  setExpanded() {
    this.element.classList.add(this.classExpanded, 'js-dropdown-expanded');
  }
  
  unsetExpanded() {
    this.element.classList.remove(this.classExpanded, 'js-dropdown-expanded');
  }
  
  choose(event) {
    console.log(event);
    const mode = event.target.dataset['mode'];
    const title = event.target.innerHTML;
    
    this.activate();
    this.setTitle(title);
    this.colorize(mode);
    this.setIcon(mode);
    this.unsetExpanded();
  }
  
  activate() {
    this.element.classList.add(this.classActive, 'js-dropdown-active');
  }
  
  setTitle(title) {
    this.title.innerHTML = title;
  }
  
  colorize(mode) {
    Array.prototype.forEach.call(this.modes, item => { this.toggler.classList.remove(`dropdown__header_${item}`); });
    this.toggler.classList.add(`dropdown__header_${mode}`);
  }
  
  setIcon(mode) {
    Array.prototype.forEach.call(this.modes, item => { this.icon.classList.remove(`fa-${item}`); });
    this.icon.classList.add(`fa-${mode}`);
  }
}

function initDropdown(options) {
  const dropdown = [];
  Array.prototype.forEach.call(document.querySelectorAll('.js-dropdown'), (item) => {
    dropdown.push(new Dropdown(item, options));
  });
}

initDropdown({ 
  cssElementActive: 'is-active',
  cssElementExpanded: 'is-expanded',
});


document.getElementById('myInput').addEventListener('input', function() {
  var clearIcon = this.nextElementSibling;
  clearIcon.style.visibility = this.value ? 'visible' : 'hidden';
});