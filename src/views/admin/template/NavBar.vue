<template>
  <!-- Topbar -->

  <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
    <!-- Sidebar Toggle (Topbar) -->
    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
      <i class="fa fa-bars"></i>
    </button>
    <!-- Topbar Navbar -->
    <ul class="navbar-nav ml-auto">
      <div class="topbar-divider d-none d-sm-block"></div>
      <!-- Nav Item - User Information -->
      <li class="nav-item dropdown no-arrow">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="userDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="mr-2 d-none d-lg-inline text-gray-600 small">{{ usuario.name }}</span>
          <img class="img-profile rounded-circle" src="../../../assets/fox-head.png" alt="User">
        </a>
        <!-- Dropdown - User Information -->
        <div
          class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
          aria-labelledby="userDropdown"
        >
          <a class="dropdown-item" href="#">
            <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
            Profile
          </a>
          <a class="dropdown-item" href="#">
            <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
            Settings
          </a>
          <a class="dropdown-item" href="#">
            <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
            Activity Log
          </a>
          <div class="dropdown-divider"></div>
          <a
            class="dropdown-item"
            href="#"
            onclick="event.preventDefault();"
            @click="logout()"
          >Logout</a>
        </div>
      </li>
    </ul>
    <vue-element-loading
      text="Até Breve"
      spinner="line-wave"
      color="#fff"
      size="64"
      :active="isActive"
      :is-full-screen="true"
      background-color="rgba(23,77,95, .9)"
    />
  </nav>

  <!-- End of Topbar -->
</template>
<script>
import VueElementLoading from "vue-element-loading";

export default {
  name: "navbar",
  components: { VueElementLoading },
  data() {
    return {
      usuario: false,
      isActive: false
    };
  },
  created() {
    let usuarioAuth = sessionStorage.getItem("usuario");
    if (usuarioAuth) {
      this.usuario = JSON.parse(usuarioAuth);
    } else {
      this.$router.push("/login");
    }
  },
  methods: {
    logout() {
      this.isActive = true;
      sessionStorage.clear();
      setTimeout(() => {
        this.isActive = false;
        this.usuario = false;
        this.$router.push("/login");
      }, 2000);
    }
  }
};
</script>