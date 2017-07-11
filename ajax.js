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

  var buttonCount = document.getElementById('ajax-count');
  buttonCount.addEventListener('click', function() {

    var sectionCount = document.getElementById('step7');

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      data: {},
      dataType: 'text'
    }).done(function(responseData) {
      console.log(responseData);
      sectionCount.append(responseData);
    });
  });

  var buttonTime = document.getElementById('ajax-time');
  buttonTime.addEventListener('click', function() {

    var sectionTime = document.getElementById('step8');

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      data: {
        timezone: 'America/Mexico_City'
      },
      dataType: 'text'
    }).done(function(responseData) {
      console.log(responseData);
      sectionTime.append(responseData);
    });
  });

  var buttonCar = document.getElementById('ajax-car');
  buttonCar.addEventListener('click', function() {

    var sectionCar = document.getElementById('step9');

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/a_car',
      method: 'GET',
      data: {},
      dataType: 'html'
    }).done(function(responseData) {
      console.log(responseData);
      var carList = document.createElement('ul');
      carList.innerHTML = responseData;
      sectionCar.append(carList);
    });
  });

});
