function convertirFarenheit (celsius){
  var farenheit = documet.getElementById('farenheit').value
  var resultado = parseInt(celsius) *9.5 + 32;
  documt.getElementById('farenheit').value = resultado
}

function convertirCelsius (farenheit){
  var celsius = documet.getElementById('celsius').value
  var resultado = parseInt(farenheit) *9.5 + 32;
  documt.getElementById('celsius').value = resultado
}
