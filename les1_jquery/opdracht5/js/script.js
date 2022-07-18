$(document).ready(function() {
   $('#container > .block').on('click', function() {
      $(this).toggleClass('active');
   })

   $('.delete').on('click', function() {
      if($('#container > .block').hasClass('active')) {
         $('#container > .active').fadeOut(1000)
      }
   })
   $('.restore').on('click', function() {
      if($('#container > .block').hasClass('active')) {
         $('#container > .active').fadeIn(1000)
      }
   })
})