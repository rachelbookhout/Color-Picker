$('.colors').click(function() {

  // Find out what color was clicked
  var color_that_was_clicked = $(this).css('background-color');

  // Set the canvas background to be that color...
  $('#canvas, .textures').css('background-color',color_that_was_clicked);

  //$('.textures').css('background-color',color_that_was_clicked);


});

$('.textures').click(function() {

  var texture_that_was_clicked = $(this).css('background-image');

  $('#canvas').css('background-image',texture_that_was_clicked);

});

$('input[name="message"]').click(function(){
  // What was clicked?
    var message_that_was_clicked = $(this).val();
  //put the message on the card
  $('#message-output').html(message_that_was_clicked);
});

$('#recipient').keyup(function() {
var dear_message = $(this).val();
  $('#recipient-output').html(dear_message + "!");

});
