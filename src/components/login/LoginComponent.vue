<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <vue-element-loading
          text="Bem-vindo"
          spinner="line-wave"
          color="#fff"
          size="64"
          :active="isActive"
          :is-full-screen="true"
          background-color="rgba(23,77,95, .9)"
        />
        <div class="card">
          <div class="card-header text-center">
            <img src="../../assets/fox-head.png" alt="" srcset="">
          </div>
          <div class="card-body">
            <div class="form-group row">
              <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail</label>

              <div class="col-md-6">
                <input
                  id="email"
                  type="email"
                  class="form-control"
                  name="email"
                  v-model="usuario.email"
                  value="email"
                  required
                  autocomplete="email"
                  autofocus
                >
              </div>
            </div>

            <div class="form-group row">
              <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

              <div class="col-md-6">
                <input
                  id="password"
                  type="password"
                  class="form-control"
                  name="password"
                  v-model="usuario.password"
                  required
                  autocomplete="current-password"
                >
              </div>
            </div>

            <div class="form-group row mb-0">
              <div class="col-md-8 offset-md-4">
                <button type="submit" class="btn btn-login" @click="login()" active>Login</button>
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
import VueElementLoading from "vue-element-loading";

export default {
  name: "logincomponent",
  components: {
    VueElementLoading
  },
  data() {
    return {
      usuario: {
        email: "",
        password: ""
      },
      isActive: false
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
            this.isActive = true;
            setTimeout(() => {
              this.$router.push("/admin");
            }, 2000);
            sessionStorage.setItem("usuario", JSON.stringify(response.data));

            console.log("Login com sucesso");
          } else if (response.data.status == false) {
            //login não existe
            console.log("Login não existe");
            this.$notify({
              title: "Warning",
              message: "This is a warning message",
              type: "warning"
            });
          } else {
            //erro validação
            let erros = "";
            for (let erro of Object.values(response.data)) {
              erros += erro + " ";
            }
            alert(erros);
            console.log("erro validação");
          }
        })
        .catch(e => {
          console.log(e);
          this.$notify({
            title: "Ops!!",
            message: "Servidor fora do ar",
            type: "info"
          });
        });
    }
  }
};
</script>

<style>
.card {
    margin-top: 20%;
    background-color: rgba(0, 0, 0, .03) !important;
    color: #fff;
    border: none !important;
}
.card-header {
    border: none !important;
    background-color: transparent !important;
}
.btn-login {
    background-color: transparent !important;
    border-color: #ced4da !important;
    color: #fff !important;
}
.btn-login:hover {
    background-color: #f17252 !important;
    border-color: #f17252 !important;
    color: #fff !important;
}
</style>
