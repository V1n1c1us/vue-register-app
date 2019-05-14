<template>
  <v-app>
    <TopToolbar/>
      <v-content>
        <v-container fluid fill-height>
          <v-layout
            justify-center
            align-center
          >
            <v-flex text-xs-center>
              <router-view></router-view>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import TopToolbar from './components/TopToolbar'
export default {
  name: 'App',
  components: {
    HelloWorld,
    TopToolbar
  },
  data () {
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
}
</script>
