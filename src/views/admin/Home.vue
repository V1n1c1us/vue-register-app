<template>
<el-container>
  <el-aside width="200px">
    <Aside/>
  </el-aside>
  <el-container>
    <el-header>
      <Header/>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</el-container>
</template>
<script>
import Aside from './Aside'
import Header from './Header'
export default {
  components: {
    Aside,
    Header
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