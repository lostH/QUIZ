
function pasarVariables(pagina, conteo) {
 
 alert(conteo);
// obtener valor de la pegunta 1
  var valor = document.getElementById('correcto1').checked;  
  if (valor) {
  		conteo++;
  }
// obtener valor de la pegunta 2

	valor = document.getElementById('correcto2').checked;
  if (valor) {
  		conteo++;
  }
 // obtener valor de la pegunta 3
  valor = document.getElementById('correcto3').checked;
  if (valor) {
  		conteo++;
  }
  // obtener valor de la pegunta 4
  valor = document.getElementById('correcto4').checked;
  if (valor) {
  		conteo++;
  }
  // obtener valor de la pegunta 5
  valor = document.getElementById('correcto5').checked;
  if (valor) {
  		conteo++;
  }

alert(conteo);
  pagina +='?var1='+conteo;




  location.href=pagina;
}





