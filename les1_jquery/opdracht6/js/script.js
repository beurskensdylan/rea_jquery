$(document).ready(function() {
   $('.tabs > .section1').on('click', function() {
      $('.section.section1').slideDown(1000);
      $('.section.section2').slideUp(1000);
      $('.section.section3').slideUp(1000);
      $('.section.section4').slideUp(1000);
   });   
   $('.tabs > .section2').on('click', function() {
      $('.section.section1').slideUp(1000);
      $('.section.section2').slideDown(1000);
      $('.section.section3').slideUp(1000);
      $('.section.section4').slideUp(1000);
   });    
   $('.tabs > .section3').on('click', function() {
      $('.section.section1').slideUp(1000);
      $('.section.section2').slideUp(1000);
      $('.section.section3').slideDown(1000);
      $('.section.section4').slideUp(1000);
   });    
   $('.tabs > .section4').on('click', function() {
      $('.section.section1').slideUp(1000);
      $('.section.section2').slideUp(1000);
      $('.section.section3').slideUp(1000);
      $('.section.section4').slideDown(1000);
   });    
})