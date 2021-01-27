function velocita_media() {
  // lettura dati iniziali
  var min = $('#min').val();
  var sec = $('#sec').val();
  var metri = $('#metri').val();

  // elaborazione dati
  sec += min*60;
  vms = metri / sec
  vkmh = vms * 3600 / 1000;

  // visualizzazione dei dati finali
  $('#vms').html(vms);
  $('#vkmh').html(vkmh);
}
