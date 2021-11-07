
function sendForm(n1,n2,op){
    console.log('Ha enviado el formulario')
    console.log(n1.value + ' ' + op.value + ' ' + n2.value)
    
    const operando1 = document.getElementById('numero1')
    const operando2 = document.getElementById('numero2')
    axios.post('http://localhost/api/operation', {
        op1: operando1.value,
        op2: operando2.value,
        op: op.value
      })
      .then((response) => {
        console.log(response);
        const resultado= document.getElementById('resultado');
        resultado.innerHTML = `Resultado: ${response.data.resultado}`;
      }, (error) => {
        console.log(error);
      });
}
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let token = urlParams.get('token');
let text = '';
function showHistory(){
  text = '';
  console.log('Pidiendo historial');
  if (token == null) {
    const resultado= document.getElementById('historico');
    resultado.innerHTML = `Inicia sesion para ver el historial <br>`;
    return;
  }
  //token='///TOOKENTOENSLSSLFSFJ';
  axios.get('http://localhost/api/historial', {
    headers:{
        authorization:token
      }
    }
  )
  .then((response) => {
    //console.log(response.data);
    const resultado= document.getElementById('historico');
    let datos = response.data.historial;
    datos.forEach(showData)
    resultado.innerHTML = `Historial: <br> ${text}`;
  }, (error) => {
    console.log(error);
  });

}

function showData(value){
  text += `<label> ${value} </label> <br>`;
}