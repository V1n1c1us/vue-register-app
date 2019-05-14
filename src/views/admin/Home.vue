<template>
<div>
  asdas
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
      this.$router.push('/about')
    }
  }

};
</script>