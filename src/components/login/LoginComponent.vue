<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar dark color="primary">
          <v-toolbar-title>Login form</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              prepend-icon="mail"
              name="email"
              label="E-mail"
              type="text"
              v-model="usuario.email"
            ></v-text-field>
            <v-text-field
              id="password"
              prepend-icon="lock"
              name="password"
              label="Password"
              type="password"
              v-model="usuario.password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="login()">Login</v-btn>
        </v-card-actions>

        <v-snackbar
          v-model="snackbar"
          :color="color"
          :multi-line="mode === 'multi-line'"
          :timeout="timeout"
          :vertical="mode === 'vertical'"
          :right="x === 'right'"
          :top="y === 'top'"
        >
          {{ text }}
          <v-btn dark flat @click="snackbar = false">Close</v-btn>
        </v-snackbar>
      </v-card>
    </v-flex>
  </v-layout>
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
      },
      snackbar: false,
      color: "#09f",
      mode: "",
      x: 'right',
      y: 'top',
      timeout: 3000,
      text: "Tente novamente mais tarde.."
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
            sessionStorage.setItem("usuario", JSON.stringify(response.data));
            this.$router.push("/admin");

            console.log("Login com sucesso");
          } else if (response.data.status == false) {
            //login não existe
            console.log("Login não existe");
            alert("Login Inválido");
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
          this.snackbar = true;
        });
    }
  }
};
</script>

<style>
</style>
