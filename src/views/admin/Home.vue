<template>
    <div>
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
        <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="mr-2 d-none d-lg-inline text-gray-600 small">{{ usuario.name }}</span>
                    <img class="img-profile rounded-circle" src="http://laravel-register-app.test/img/user-profile-404.png" alt="User">
        
        </a>
        <!-- Dropdown - User Information -->
        <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
           <a class="dropdown-item" href="http://laravel-register-app.test/user/edit/1">
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
           <a class="dropdown-item" href="http://laravel-register-app.test/logout" onclick="event.preventDefault();
              document.getElementById('logout-form').submit();">
           Logout
           </a>
           <form id="logout-form" action="http://laravel-register-app.test/logout" method="POST" style="display: none;">
              <input type="hidden" name="_token" value="ErNDzF27LELCkW6VognuPVPg1N2g8Ut2Yv2YdNTU">           </form>
        </div>
     </li>
  </ul>
</nav>
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
    }
  }

};
</script>