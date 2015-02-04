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

  var message_length = dear_message.length;

  var chars_left = 14 - message_length;

  $('#recipient-error').html('You have ' + chars_left + ' characters left');

  // Message is too long
  if(message_length >= 14) {
    //$('#recipient-error').html('Max characters met.');
    $('#recipient-error').css('color','red');
  }
  // Message is *not* too long
  else {
    $('#recipient-error').css('color','black')
  }

  $('#recipient-output').html(dear_message + "!");
});

$('.stickers').click(function() {

  var sticker_image_path = $(this).attr('src');
  //console.log(sticker_image_path);

  var new_sticker = '<img src="' + sticker_image_path + '">';
  console.log(new_sticker);

  // <img src="smilie.jpg">

  $('#canvas').append(new_sticker);

});

