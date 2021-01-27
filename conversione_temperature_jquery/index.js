  function to_fahreneit() {
    // lettura dati iniziali
    var temp = $('#temp').val();

    // elaborazione dati
    temp = temp * 1.8 + 32;

    // visualizzazione dati finali
    $('#risultato').html(temp + '° Fahreneit');
  }

  function to_celsius() {
    // lettura dati iniziali
    var temp = $('#temp').val();

    // elaborazione dati
    temp = (temp -32) / 1.8;

    // visualizzazione dati finali
    $('#risultato').html(temp + '° Celsius');
  }
