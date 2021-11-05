
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

function showHistory(){
  console.log('Pidiendo historial');
  const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InNlcmdpb3JvaGVycEBnbWFpbC5jb20iLCJpYXQiOjE2MzYwNzY4MjcsImV4cCI6MTYzNjA3NzMyN30.-M3e0ARYE_nH8vuLAzvw9x5GOaTSMTpMNuiQhNbAFpI';
  axios.get('http://localhost/api/historial', {
      Headers:{
        Authorization:token
      }
    }
  )
  .then((response) => {
    console.log(response.data);
    const resultado= document.getElementById('historico');
    resultado.innerHTML = `historial <br>: ${response.data.historial}`;
  }, (error) => {
    console.log(error);
  });

}