function convertirFarenheit (){
  var farenheit = document.getElementById('farenheit').value;
  var celsius = (farenheit - 32) * 5 / 9;
  document.getElementById('celsius').value = celsius;
}

function convertirCelsius (){
  var celsius = document.getElementById('celsius').value;
  var farenheit = celsius * 9 / 5 + 32;
  document.getElementById('farenheit').value = farenheit;
}
