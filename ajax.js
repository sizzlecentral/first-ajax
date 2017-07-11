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

    var sectionPing = document.getElementById('step3456');

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      data: {},
      dataType: 'text'
    }).done(function(responseData) {
      console.log(responseData);
      sectionPing.append(responseData);
    }).fail(function() {
      var failMessage = "Sorry, I will try harder next time";
      console.log(failMessage);
      sectionPing.append(failMessage);
    }).always(function() {
      var always = "Hey, the request finished!";
      console.log(always);
      sectionPing.append(always);
    });
  });






});
