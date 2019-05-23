<template>
  <div id="page-top">
              
    <!-- Page Wrapper -->
    <div id="wrapper">
      <!-- Sidebar -->
      <SideBar/>
      <!-- End of Sidebar -->

      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">
        <!-- Main Content -->
        <div id="content">
          <NavBar/>
          <!--@include('layouts.dashboard.navbar')-->

          <main class="py-4">
            <!-- @yield('content') -->
          </main>
        </div>
        <!-- End of Content Wrapper -->
      </div>
      <!-- End of Page Wrapper -->
    </div>
  </div>
</template>
<script>
import SideBar from "./template/SideBar";
import NavBar from "./template/NavBar";


export default {
  components: { SideBar, NavBar,  },
  data() {
    return {
        isActive: true
    };
  }
};
</script>
<style>
</style>

