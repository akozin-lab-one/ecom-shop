<template>
  <nav class="navbar navbar-expand-lg navbar-divght bg-light sticky-top">
  <div class="container-fluid d-flex justify-content-evenly">
    <router-link class="navbar-brand fw-bold" :to="'/'">MyTech</router-link>
    <div class="d-flex">
      <router-link :to="'/'" class="text-dark me-4">
        Home
      </router-link>
      <router-link :to="'/about'" class="text-dark me-4">
        About
      </router-link>
      <router-link :to="'/contact'" class="text-dark">
        Conatct
      </router-link>
    </div>

    <div>
        <router-link class="text-decoration-none text-dark" :to="'/login'"><i class="fa-solid fa-arrow-right-to-bracket"></i> Login </router-link>
    </div>
  </div>
</nav>
</template>

<script>
export default{
data(){
  return{

  }
}
}
</script>

<style scoped>
</style>
