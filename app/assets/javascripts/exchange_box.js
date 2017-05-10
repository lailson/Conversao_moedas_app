$(document).ready(function change_quantity() {
  return $('form').submit(function() {
    if ($('form').attr('action') === '/exchange') {
      $.ajax('/exchange', {
        type: 'POST',
        dataType: 'json',
        data: {
          currency: $("#currency").val(),
          currency_destination: $("#currency_destination").val(),
          quantity: $("#quantity").val()
        },
        error: function(jqXHR, textStatus, errorThrown) {
          return alert(textStatus);
        },
        success: function(data, text, jqXHR) {
          return $('#result').val(data.value);
        }
      });
      return false;
    }
  });
});
