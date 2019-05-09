<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header text-center">
            <img src="http://laravel-register-app.test/img/fox-head.png" alt="Fox">
          </div>
          <div class="card-body">
            <div class="form-group row">
              <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail</label>
              <div class="col-md-6">
                <input
                  id="email"
                  type="email"
                  name="email"
                  required="required"
                  autocomplete="email"
                  autofocus="autofocus"
                  class="form-control"
                  v-model="usuario.email"
                >
              </div>
            </div>
            <div class="form-group row">
              <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
              <div class="col-md-6">
                <input
                  id="password"
                  type="password"
                  name="password"
                  required="required"
                  class="form-control"
                  v-model="usuario.password"
                >
              </div>
            </div>
            <div class="form-group row">
              <div class="col-md-6 offset-md-4">
                <div class="form-check">
                  <input type="checkbox" name="remember" id="remember" class="form-check-input">
                  <label for="remember" class="form-check-label">Remember Me</label>
                </div>
              </div>
            </div>
            <div class="form-group row mb-0">
              <div class="col-md-8 offset-md-4">
                <button @click="login()" class="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "login-component",
  data() {
    return {
      usuario: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      const url_api = "http://laravel-register-app.test/api/login";
      axios
        .post(url_api, {
          email: this.usuario.email,
          password: this.usuario.password
        })
        .then(response => {
            console.log(response);
            if (response.data.token) {

                sessionStorage.setItem('usuario', JSON.stringify(response.data))
                this.$router.push('/admin')

                console.log("Login com sucesso")
            } else if (response.data.status == false) {
                //login não existe
                console.log('Login não existe')
                alert("Login Inválido")
            } else {
                //erro validação
                let erros = "";
                for (let erro of Object.values(response.data)) {
                    erros += erro + " ";
                }
                alert(erros)
                console.log("erro validação")
            }
        })
        .catch(e => {
          console.log(e)
          alert('Tente novamente mais tarde')
        })
    }
  }
};
</script>

<style>
.card {
  background-color: rgba(0, 0, 0, 0.03);
  color: #fff;
  border: none;
}
.card-header {
  border: none;
  background-color: transparent;
}
.card-header img {
  width: 15%;
}
.form-control {
  color: #fff;
  background-color: transparent;
}
</style>
