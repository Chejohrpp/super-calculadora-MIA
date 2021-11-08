function ingresar(){
    console.log('Iniciando sesion...')
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    axios.post('http://localhost/api/auth/login', {
        email: email.value,
        password: password.value
      })
      .then((response) => {
        console.log(response);
        const resultado= document.getElementById('resultado');
        let token = response.data.token;
        let mensaje = response.data.mensaje;
        if (mensaje !== undefined) {
            resultado.innerHTML = mensaje;
        }
        console.log(token);
        console.log(mensaje);
        window.location.replace("http://localhost?token="+token);
      }, (error) => {
        // console.log(error);
        const resultado= document.getElementById('resultado');
        resultado.innerHTML = "Usuario o contraseña incorrectos";
      });
}