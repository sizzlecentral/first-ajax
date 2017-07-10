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
});
