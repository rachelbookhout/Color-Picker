$('.colors').click(function() {

  // Find out what color was clicked
  var color_that_was_clicked = $(this).css('background-color');

  // Set the canvas background to be that color...
  $('#canvas').css('background-color',color_that_was_clicked);

});

$('.textures').click(function() {
  var texture_clicked = $(this).css('background-image');
  $('#canvas').css('background-image',texture_clicked);
});
