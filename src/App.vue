<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
      <div class="container">
        <button
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          class="navbar-toggler"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item" v-if="!usuario">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item" v-if="usuario">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
            <li class="nav-item" v-if="!usuario">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item" v-if="usuario">
              <a @click="logout()" class="nav-link">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container-fluid">
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      usuario: false
    }
  },
  created() {
    let usuarioAuth = sessionStorage.getItem('usuario');
    if (usuarioAuth) {
      this.usuario = JSON.parse(usuarioAuth);
    }
  },
  methods: {
    logout() {
      sessionStorage.clear();
      this.usuario = false
      this.$router.push('/')
    }
  }

};
</script>

<style>

body {
  color: #fff;
  font-family: "Nunito", sans-serif;
  font-weight: 200;
  height: 100vh;
  margin: 0;
  background: #387e94;
  background: linear-gradient(15deg, #13547a 0, #80d0c7 100%);
}
</style>
