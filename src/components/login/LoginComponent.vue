<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>Card name</span>
      <el-button style="float: right; padding: 3px 0" type="text">Operation button</el-button>
    </div>
    <div class="text item">
      <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
        <el-form-item label="Name">
          <el-input name="email" v-model="usuario.email"></el-input>
        </el-form-item>
        <el-form-item label="Activity zone">
          <el-input name="password" v-model="usuario.password"></el-input>
        </el-form-item>
        <el-button type="primary" @click="login()">Login</el-button>
      </el-form>
    </div>
  </el-card>
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
      fullscreenLoading: false
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
            const loading = this.$loading({
              lock: true,
              text: "Loading",
              spinner: "el-icon-loading",
              background: "rgba(0, 0, 0, 0.7)"
            });
            setTimeout(() => {
              loading.close();
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
.box-card {
  width: 450px;
  margin: auto;
}
</style>
