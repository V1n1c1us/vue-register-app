<template>
  <div>
    <v-layout>
    <v-flex xs12 sm4 offset-sm3>
      <v-card>
        <v-card-title primary-title>
          <div>
    <v-text-field
      v-model="usuario.email"
      label="Email"
      required
    ></v-text-field>

    <v-text-field
      v-model="usuario.password"
      type="password"
      label="Password"
      required
    ></v-text-field>

    <v-btn
      color="success"
      @click="login()"
    >
      Login
    </v-btn>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
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
      const url_api = "http://register.test/api/login";
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

</style>
