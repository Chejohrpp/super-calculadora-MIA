function registrar(){
    console.log('registrando datos')
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    axios.post('http://localhost/api/auth/register', {
        email: email.value,
        password: password.value
      })
      .then((response) => {
        console.log(response);
        const resultado= document.getElementById('resultado');
        let success = response.data.success;
        if (success == 1) {
            resultado.innerHTML = 'Su registro fue exitoso';
        }else if (success == -1) {
            resultado.innerHTML = 'Ocurrio un problema de conexion, vuelva a intentarlo';
        }else{
            resultado.innerHTML = 'Este correo ya esta siendo utilizado';
        }        
        resultado.innerHTML += '<br>';
      }, (error) => {
        console.log(error);
      });
}