
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




/* cadVariables = location.search.substring(1,location.search.length);
arrVariables = cadVariables.split("&");
for (i=0; i<arrVariables.length; i++) {
  arrVariableActual = arrVariables[i].split("=");
  if (isNaN(parseFloat(arrVariableActual[1])))
    eval(arrVariableActual[0]+"='"+unescape(arrVariableActual[1])+"';");
  else
    eval(arrVariableActual[0]+"="+arrVariableActual[1]+";");
} */

