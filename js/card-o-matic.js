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


$('input[name="message"]').click(function() {

  // # Step 1) What message was clicked?
  var message_that_was_clicked = $(this).val();

  // # Step 2) Put the message in the card
  $('#message-output').html(message_that_was_clicked);

});

$('#recipient').keyup(function() {

  var dear_message = $(this).val();

  var message_length = dear_message.length;

  var chars_left = 14 - message_length;

  $('#recipient-error').html('You have ' + chars_left + ' characters left');

  // Message is too long
  if(message_length < 10) {
    $('#recipient-error').css('color','black');
  }
  else if(message_length < 14) {
    $('#recipient-error').css('color','orange');
  }
  else if(message_length == 14) {
    $('#recipient-error').css('color','red');
  }

  $('#recipient-output').html(dear_message);

});


$('.stickers').click(function() {

  //var sticker_image_path = $(this).attr('src');
  //var new_sticker = '<img src="' + sticker_image_path + '">';

  var new_sticker = $(this).clone();

  new_sticker.addClass('stickers_on_card');

  $('#canvas').append(new_sticker);

  $(new_sticker).draggable({cursor:'move', containment: '#canvas'});



});

$('#refresh-btn').click(function() {

  $('#canvas').css('background-image','none');
  $('#canvas').css('background-color','white');

  $('#message-output').empty();
  $('#recipient-output').empty();

  //$('.stickers_on_card').css('display','none');
  $('.stickers_on_card').remove();


});


/*-------------------------------------------------------------------------------------------------
Sticker search with Ajax!
https://developers.google.com/image-search/v1/jsondevguide#using_json
http://api.jquery.com/jQuery.getJSON/
-------------------------------------------------------------------------------------------------*/
$('#sticker-search-btn').click(function() {

  // First, clear out the results div in case we've already done a search
  // FYI- The results div is where the new stickers go...so if we've done this search before, it wouldn't be empty
  $('#sticker-search-results').empty();

  // What search term did the user enter?
  var search_term = $('#sticker-search').val();

  // This is the URL for Google Image Search that we'll make the Ajax call to
  var google_url = 'http://ajax.googleapis.com/ajax/services/search/images?v=1.0&imgsz=medium&q=' + search_term + '&callback=?';

  // getJSON is a Ajax method provided to us by jQuery
  // It's going to make a call to the url we built above, and let us work with the results that Google sends back
  // Everthing in the function below is what will occur when getJSON is done and sends us the results back from Google
  $.getJSON(google_url, function(data){

    // This line will basically parse the data we get back from Google into a nice array we can work with
      var images = data.responseData.results;

    // Only attempt to do the following if we had images...I.e there was more than 0 images
      if(images.length > 0){

      // .each() is a jQuery method that lets us loop through a set of data.
      // So here our data set is images
      // Essentially we're unpacking our images we got back from Google
          $.each(images, function(key, image) {

            // Create a new image element
            var new_image_element = "<img class='stickers circular' src='" + image.url + "'>";

            // Now put the new image in our results div
              $('#sticker-search-results').prepend(new_image_element);

          });
      }
  });
});
