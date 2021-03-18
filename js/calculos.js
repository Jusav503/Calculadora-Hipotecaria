var btn = document.querySelector("#btn");

btn.onclick = () =>{

  let downpayment;
  
  //Obteniendo el radio button seleccionado por el usuario
  const validarRadio = () => {
    var s = "no";

    for(let i = 0; i < document.formulario_registro.opcion.length; i++){
      if(document.formulario_registro.opcion[i].checked){
        downpayment = parseFloat(document.formulario_registro.opcion[i].value);
        s = "si"
      }
    }

    if(s == "no"){
      alert("Debes introducir un pago inicial.");
      downpayment = none;
    }
    
  }

  validarRadio();{
    let deuda = parseFloat(document.querySelector("input[name=credito]").value);
    let anos = parseInt(document.querySelector("input[name=anos]").value);
    let interes = parseFloat(document.querySelector("input[name=interes]").value);
    const resultado = document.getElementById("resultado");
    //Calcular el Down Payment
    const funcdownpayment = () => {
      downpayment = downpayment * deuda / 100;
      deuda = deuda - downpayment;
    }
    funcdownpayment();
    // hacemos los calculos...
    interes = (interes / 100) / 12;
    const m = (deuda * interes * (Math.pow((1 + interes),(anos * 12)))) / ((Math.pow((1 + interes),(anos * 12))) - 1);
    capitalInicial = deuda + downpayment;

    resultado.innerHTML='<h4>Capital Inicial: '+capitalInicial.toLocaleString("es-ES", {minimumFractionDigits: 2, maximumFractionDigits:2})+ " €</h4>" + "<br><h4>Pago inicial: "+downpayment.toLocaleString("es-ES", {minimumFractionDigits: 2, maximumFractionDigits:2})+ " €</h4>" + "<br><h4>Cuota a pagar mensualmente: "+m.toLocaleString("es-ES", {minimumFractionDigits: 2, maximumFractionDigits:2})+" €</h4><br></div>" + '<div class="d-grid gap-2">' + '<button class="btn btn-primary" type="button">Quiero esta hipoteca </button>'
    '</div>';
  }

}
