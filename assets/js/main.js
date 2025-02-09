;(function($) { 
    $(document).ready(function() { 
      $(document).on('click', '.header-area .show-menu', function() { 
        $(this).toggleClass('active'); 
        $(".header-area .navbar").toggleClass('active'); 
      }); 
  
      AOS.init({ 
        duration: 1500, 
        once: true, 
      });
    }); 
  })(jQuery);
  
  var div = document.createElement("div"); 
  div.id = "preloader"; 
  div.className = "preloader"; 
  div.innerHTML = `
    <div class="black_wall"></div>
    <div id="wifi-loader">
      <svg class="circle-outer" viewBox="0 0 86 86">
        <circle class="back" cx="43" cy="43" r="40" />
        <circle class="front" cx="43" cy="43" r="40" />
        <circle class="new" cx="43" cy="43" r="40" />
      </svg>
      <svg class="circle-middle" viewBox="0 0 60 60">
        <circle class="back" cx="30" cy="30" r="27" />
        <circle class="front" cx="30" cy="30" r="27" />
      </svg>
      <svg class="circle-inner" viewBox="0 0 34 34">
        <circle class="back" cx="17" cy="17" r="14" />
        <circle class="front" cx="17" cy="17" r="14" />
      </svg>
      <div class="text" data-text="Loading"></div>
    </div>
  `; 
  document.body.insertBefore(div, document.body.firstChild);
  
  window.onload = function() { 
    document.getElementById("preloader").classList.add("off"); 
  };
  