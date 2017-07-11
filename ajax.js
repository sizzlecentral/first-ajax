document.addEventListener("DOMContentLoaded", function() {

  var button = document.getElementById('run-ajax');
  button.addEventListener('click', function() {

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      data: {},
      dataType: 'text'
    });
  });

  var buttonPing = document.getElementById('ping-pong');
  buttonPing.addEventListener('click', function() {

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      data: {},
      dataType: 'text'
    }).done(function(responseData) {
      console.log(responseData);
      var sectionPing = document.getElementById('step3456');
      sectionPing.append(responseData);
    });
  });






});
