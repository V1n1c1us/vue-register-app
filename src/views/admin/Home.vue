<template>
<div>
  asd
</div>
</template>
<script>
//import Template from "../../components/Template";
export default {
  components: {
    //Template
  },
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