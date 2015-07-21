// this will run the js after the page loads
$(document).ready(function() {

//smooth scrolling animation
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//Sticky navigation dropdown menu
var dropdown = $(".dropdown");
    dropdownFixed = "dropdownFixed";
    header = $('header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > header ) {
    dropdown.addClass(dropdownFixed);
  } else {
    dropdown.removeClass(dropdownFixed);
  }
});

// Vertically center Bootstrap 3 modals so they aren't always stuck at the top 
$(function() {
    function reposition() {
 
        var modal = $(this),
            dialog = modal.find('.modal-dialog');
 
        modal.css('display', 'block');
        
        // Dividing by two centers the modal exactly, but dividing by three 
        // or four works better for larger screens.
        dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
 
    }
 
    // Reposition when a modal is shown
    $('.modal').on('show.bs.modal', reposition);
 
    // Reposition when the window is resized
    $(window).on('resize', function() {
        $('.modal:visible').each(reposition);
    });
 
});


//determines if something is scrolled into view
function isScrolledIntoView(elem){
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height() - 20; //the 20 is the amount pixels from the bottom
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom < docViewBottom) && (elemTop > docViewTop));
}

// draws circle graphs if scrolled into view
$('.circle').each( function() {
    var $this = $(this);
    var isGraphViewed=false;
    $(document).ready(function() {
        if(isScrolledIntoView($this) && isGraphViewed==false){$this.circliful();isGraphViewed=true;}
    });
    $(window).scroll(function() {
        if(isScrolledIntoView($this) && isGraphViewed==false){$this.circliful();isGraphViewed=true;}
    });
});




//run after page loads
});